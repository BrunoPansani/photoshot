import PromptDetailPage, {
  TPrompt,
} from "@/components/pages/prompts/PromptDetailPage";
import { prompts } from "@/core/utils/prompts";

export function generateStaticParams() {
  return prompts.map((prompt) => ({
    slug: prompt.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params?.slug as string;
  const prompt = prompts.find((prompt) => prompt.slug === slug)!;

  return {
    title: `Free prompt ${prompt.label} - Photowiz`,
    description:
      "Nosso prompt de IA gratuito abrange uma ampla gama de temas e tópicos para ajudar você a criar um avatar único. Use o tema com nosso Studio ou com seus modelos Stable Diffusion ou Dreambooth.",
  };
}

const PromptDetail = async ({ params }: { params: { slug: string } }) => {
  const slug = params?.slug as string;
  const promptIndex = prompts.findIndex((prompt) => prompt.slug === slug)!;
  const prompt = prompts[promptIndex];

  const morePrompts: TPrompt[] = [];

  for (let i = promptIndex + 1; i < promptIndex + 6; i++) {
    if (i > prompts.length - 1) {
      morePrompts.push(prompts[Math.abs(i - prompts.length)]);
    } else {
      morePrompts.push(prompts[i]);
    }
  }

  return <PromptDetailPage morePrompts={morePrompts} prompt={prompt} />;
};

export default PromptDetail;
