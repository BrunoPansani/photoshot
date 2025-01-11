import db from "@/core/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../../auth/[...nextauth]/route";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return NextResponse.json({}, { status: 401 });
  }

  const { id } = await params;

  const url = new URL(req.url);
  const take = url.searchParams.get("take");
  const skip = url.searchParams.get("skip");

  const project = await db.project.findFirstOrThrow({
    where: {
      id: id,
      userId: session.userId,
      modelStatus: "succeeded",
    },
    include: {
      _count: {
        select: { shots: true },
      },
      shots: {
        orderBy: { createdAt: "desc" },
        take: Number(take) || 10,
        skip: Number(skip) || 0,
      },
    },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json({
    shots: project.shots,
    shotsCount: project._count.shots,
  });
}
