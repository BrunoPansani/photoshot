import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import openai from "@/core/clients/openai";
import { replicate } from "@/core/clients/replicate";
import db from "@/core/db";
import { replacePromptToken } from "@/core/utils/predictions";
import { prompts } from "@/core/utils/prompts";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const maxDuration = 15;

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const { prompt, seed, image } = body;

  const projectId = params.id;
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return NextResponse.json({}, { status: 401 });
  }

  const project = await db.project.findFirstOrThrow({
    where: { id: projectId, userId: session.userId },
  });

  if (project.credits < 1) {
    return NextResponse.json({ message: "No credit" }, { status: 400 });
  }

  const instruction = `
  User Prompt: ${prompt}

  Extra Guidance:
  ${prompts.slice(0, 5).map(
    (style) => `${style.label}: ${style.prompt}`
  )}`;

  // const chatCompletion = await openai.chat.completions.create({
  //   messages: [{ role: "user", content: instruction }],
  //   model: "gpt-4o-mini",
  //   temperature: 0.5,
  //   max_tokens: 1000,
  // });

  const chatCompletion = await openai.chat.completions.create({
    messages: [
      { 
        role: "system", 
        content: `${process.env.OPENAI_API_SEED_PROMPT}` 
      },
      {
        role: "user",
        content: instruction // This is where the user's input prompt will go
      }
    ],
    model: "gpt-4o-mini",
    temperature: 0.5,
    max_tokens: 2000,
  });

  let refinedPrompt = chatCompletion.choices?.[0]?.message?.content?.trim();

  const prediction = await replicate.predictions.create({
    model: `${process.env.REPLICATE_USERNAME}/${project.id}`,
    version: project.modelVersionId!,
    input: {
      prompt: `${replacePromptToken(
        `${refinedPrompt}
        
        The subject of this image must be ${project.instanceName} and not another subject/person.`,
        project
      )}`,
      // go_fast: true,
      format: "png",
      lora_scale: 1,
      megapixels: "1",
      num_outputs: 1,
      aspect_ratio: "1:1",
      output_format: "png",
      guidance_scale: 3,
      output_quality: 100,
      prompt_strength: 0.8,
      extra_lora_scale: 1,
      num_inference_steps: 28,
      negative_prompt:
        process.env.REPLICATE_NEGATIVE_PROMPT ||
        "cropped face, cover face, cover visage, mutated hands",
      ...(image && { image }),
      ...(seed && { seed }),
    },
  });

  const shot = await db.shot.create({
    data: {
      prompt,
      replicateId: prediction.id,
      status: "starting",
      projectId: project.id,
    },
  });

  await db.project.update({
    where: { id: project.id },
    data: {
      credits: project.credits - 1,
    },
  });

  return NextResponse.json({ shot });
}
