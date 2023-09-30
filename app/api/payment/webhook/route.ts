import { PLANS } from "@/lib/defaults";
import { prisma } from "@/prisma/client";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2023-08-16",
});

export async function POST(request: Request) {
    const body = await request.text();
    const signature = request.headers.get("Stripe-Signature");

    const event = stripe.webhooks.constructEvent(body, signature!, process.env.STRIPE_WEBHOOK_SECRET!);

    const checkoutSession = event.data.object as Stripe.Checkout.Session;

    if (event.type === "checkout.session.completed" && checkoutSession.mode === "payment") {
        // One time payment
        const userId = checkoutSession.metadata?.user_id;
        const user = await prisma.user.findUnique({ where: { id: userId }, select: { id: true, credit: true } });
        if (!user)
            return NextResponse.json(
                { message: "Invalid data", details: "Could not find the user..." },
                { status: 400 }
            );

        await prisma.payment.create({
            data: {
                amount_paid: checkoutSession.amount_total || 0,
                credit_received: PLANS.payment.credits,
                plan_name: PLANS.payment.name,
                stripe_session_id: checkoutSession.id,
                paid_at: new Date(checkoutSession.created * 1000),
                user_id: user.id,
            },
        });

        await prisma.user.update({ where: { id: user.id }, data: { credit: user.credit + PLANS.payment.credits } });
    }

    if (event.type === "checkout.session.completed" && checkoutSession.mode === "subscription") {
        // Subscription has been created
        const userId = checkoutSession.metadata?.user_id;
        const user = await prisma.user.findUnique({ where: { id: userId }, select: { id: true, credit: true } });
        if (!user)
            return NextResponse.json(
                { message: "Invalid data", details: "Could not find the user..." },
                { status: 400 }
            );

        const subscription = await stripe.subscriptions.retrieve(checkoutSession.subscription as string);

        const sub = await prisma.subscription.create({
            data: {
                user_id: user.id,
                stripe_subscription_id: subscription.id,
                stripe_customer_id: subscription.customer as string,
                stripe_price_id: subscription.items.data[0].price.id,
                stripe_current_period_end: new Date(subscription.current_period_end * 1000),
            },
        });

        await prisma.payment.create({
            data: {
                amount_paid: checkoutSession.amount_total || 0,
                credit_received: PLANS.subscription.credits,
                plan_name: PLANS.subscription.name,
                stripe_session_id: checkoutSession.id,
                paid_at: new Date(checkoutSession.created * 1000),
                user_id: user.id,
            },
        });

        await prisma.user.update({
            where: { id: user.id },
            data: { credit: user.credit + PLANS.subscription.credits },
        });
    }

    const invoiceSession = event.data.object as Stripe.Invoice;

    if (event.type === "invoice.payment_succeeded" && invoiceSession.billing_reason != "subscription_create") {
        const subscription = await stripe.subscriptions.retrieve(checkoutSession.subscription as string);

        const userSubscription = await prisma.subscription.findUnique({
            where: { stripe_subscription_id: subscription.id },
            include: { user: { select: { credit: true } } },
        });
        if (!userSubscription)
            return NextResponse.json(
                { message: "Invalid data", details: "Could not find the subscription..." },
                { status: 400 }
            );

        await prisma.payment.create({
            data: {
                amount_paid: invoiceSession.amount_paid,
                credit_received: PLANS.subscription.credits,
                plan_name: PLANS.subscription.name,
                stripe_session_id: invoiceSession.id,
                paid_at: new Date(invoiceSession.created * 1000),
                user_id: userSubscription.user_id,
            },
        });

        await prisma.subscription.update({
            where: { stripe_subscription_id: subscription.id },
            data: {
                stripe_current_period_end: new Date(subscription.current_period_end * 1000),
            },
        });

        await prisma.user.update({
            where: { id: userSubscription.user_id },
            data: { credit: userSubscription.user.credit + PLANS.subscription.credits },
        });
    }

    return NextResponse.json({ message: "hello world" });
}
