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
    const originUrl = request.headers.get("referer");

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
        success_url: `${originUrl}/?success=true`,
        cancel_url: `${originUrl}/?cancel=true`,
        metadata: {
            user_id: user.id,
        },
    });

    return NextResponse.json({ sessionId: stripeSession.id });
}
