import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { authOptions } from "../../auth/[...nextauth]/route";
import { getUserEmailFromSession } from "@/lib/utils";
import { prisma } from "@/prisma/client";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2023-08-16",
});

export async function PUT(request: Request) {
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

    const subscription = await stripe.subscriptions
        .cancel(user.subscriptions[0].stripe_subscription_id)
        .catch((err) => null);
    if (!subscription)
        return NextResponse.json({ message: "Failed", details: "No subscriptions found..." }, { status: 404 });

    await prisma.subscription.update({
        where: { stripe_subscription_id: user.subscriptions[0].stripe_subscription_id },
        data: {
            status: "inactive",
        },
    });

    return NextResponse.json({ message: "subscription cancelled" });
}
