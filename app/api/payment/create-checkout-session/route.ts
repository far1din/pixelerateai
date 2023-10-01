import Stripe from "stripe";
import { PlanTypeProps, getUserEmailFromSession } from "@/lib/utils";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import { prisma } from "@/prisma/client";
import { PLANS } from "@/lib/defaults";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2023-08-16",
});

export async function POST(request: Request) {
    const referer = request.headers.get("referer") as string;
    const url = new URL(referer);

    const originUrl = url.origin + url.pathname;

    // Get plantype
    const { planType }: { planType: null | PlanTypeProps } = await request.json();
    if (!planType)
        return NextResponse.json(
            { message: "Invalid data", details: "Please provide a valid plan type..." },
            { status: 400 }
        );

    // Get and validate user
    const session = await getServerSession(authOptions);
    const email = getUserEmailFromSession(session);
    if (!email)
        return NextResponse.json(
            { message: "Unauthorized", details: "You are not authorized to perform this operation..." },
            { status: 401 }
        );

    const user = await prisma.user.findUnique({
        where: { email: email },
    });
    if (!user)
        return NextResponse.json(
            { message: "Unauthorized", details: "You are not authorized to perform this operation..." },
            { status: 401 }
        );

    // Create stripe checkout session
    const stripeSession = await stripe.checkout.sessions.create({
        mode: planType,
        line_items: [{ price: PLANS[planType].priceId, quantity: 1 }],
        success_url: `${originUrl}/?success-message=Payment was successfull. ${PLANS[planType].credits} credits was added to your account!`,
        cancel_url: `${originUrl}/?error-message=Payment was cancelled...`,
        metadata: {
            user_id: user.id,
        },
    });

    return NextResponse.json({ sessionId: stripeSession.id });
}
