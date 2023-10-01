import Stripe from "stripe";
import { getUserEmailFromSession } from "@/lib/utils";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import { prisma } from "@/prisma/client";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2023-08-16",
});

export async function POST(request: Request) {
    const referer = request.headers.get("referer") as string;
    const url = new URL(referer);

    const originUrl = url.origin + url.pathname;

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
        include: {
            subscriptions: {
                where: { status: "active" },
                orderBy: { created_at: "desc" },
                select: {
                    stripe_subscription_id: true,
                    stripe_customer_id: true,
                },
            },
        },
    });
    if (!user)
        return NextResponse.json(
            { message: "Unauthorized", details: "You are not authorized to perform this operation..." },
            { status: 401 }
        );

    if (user.subscriptions.length === 0)
        return NextResponse.json({ message: "Failed", details: "No subscriptions found..." }, { status: 400 });

    // Create stripe checkout session
    const stripeSession = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "setup",
        customer: user.subscriptions[0].stripe_customer_id,
        setup_intent_data: {
            metadata: {
                customer_id: user.subscriptions[0].stripe_customer_id,
                subscription_id: user.subscriptions[0].stripe_subscription_id,
            },
        },
        success_url: `${originUrl}/?success-message=Your payment method was updated successfully.`,
        cancel_url: `${originUrl}`,
    });

    return NextResponse.json({ sessionId: stripeSession.id });
}
