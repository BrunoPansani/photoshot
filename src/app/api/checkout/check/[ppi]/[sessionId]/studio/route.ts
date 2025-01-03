import db from "@/core/db";
import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";
import { sendGAEvent } from '@next/third-parties/google' 

export async function GET(
  req: Request,
  { params }: { params: { ppi: string; sessionId: string } }
) {
  const sessionId = params.sessionId;
  const ppi = params.ppi;

  const session = await stripe.checkout.sessions.retrieve(sessionId);

  if (
    session.payment_status === "paid" &&
    session.metadata?.projectId === ppi
  ) {
    await db.project.update({
      where: { id: ppi },
      data: { stripePaymentId: session.id },
    });

    sendGAEvent('event', 'conversion', { send_to: 'AW-1037086655/p--ACKb_6eADEL_fwu4D', transaction_id: session.id})

    return NextResponse.json(
      {
        success: true,
      },
      { status: 200 }
    );
  }

  return NextResponse.json(
    {
      success: false,
    },
    { status: 400 }
  );
}
