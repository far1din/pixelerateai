import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import { getUserEmailFromSession } from "@/lib/utils";
import { prisma } from "@/prisma/client";

export async function GET(request: Request) {
    const session = await getServerSession(authOptions);
    const email = getUserEmailFromSession(session);
    if (!email)
        return NextResponse.json(
            { message: "Unauthorized", details: "You are not authorized to perform this operation..." },
            { status: 401 }
        );

    const user = await prisma.user.findUnique({
        where: { email: email },

        select: {
            payments: {
                select: {
                    plan_name: true,
                    credit_received: true,
                    amount_paid: true,
                    paid_at: true,
                },
                orderBy: { created_at: "desc" },
            },
        },
    });
    if (!user)
        return NextResponse.json(
            { message: "Unauthorized", details: "You are not authorized to perform this operation..." },
            { status: 401 }
        );

    const invoices = user.payments.map((invoice) => ({
        status: "PAID",
        planName: invoice.plan_name,
        creditReceived: invoice.credit_received,
        amount: Math.round(invoice.amount_paid / 100),
        paidAt: invoice.paid_at,
    }));

    return NextResponse.json({ invoices });
}
