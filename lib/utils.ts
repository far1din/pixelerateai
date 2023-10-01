import { prisma } from "@/prisma/client";
import axios from "axios";
import { type ClassValue, clsx } from "clsx";
import { Session } from "next-auth";
import { twMerge } from "tailwind-merge";

import { loadStripe } from "@stripe/stripe-js";
import { ToasterToast } from "@/components/ui/use-toast";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const headers = { headers: { "Content-type": "application/json" } };

export const getUserFromSession = async (session: Session | null) => {
    if (!session) return null;

    const email = session.user?.email;
    if (!email) return null;

    const user = await prisma.user.findUnique({ where: { email: email } });
    if (!user) return null;

    return user;
};

export const getUserEmailFromSession = (session: Session | null) => {
    if (!session) return null;

    const email = session.user?.email;
    if (!email) return null;

    return email;
};

export type PlanTypeProps = "subscription" | "payment";

export const redirectToStripeCheckout = (planType: PlanTypeProps, toast: ToastProps) => {
    axios
        .post("/api/payment/create-checkout-session", { planType }, headers)
        .then(async ({ data }) => {
            const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
            await stripe?.redirectToCheckout({ sessionId: data.sessionId });
        })
        .catch((err) => showErrorToast(toast, err));
};

type ToastProps = ({ ...props }: Omit<ToasterToast, "id">) => {
    id: string;
    dismiss: () => void;
    update: (props: ToasterToast) => void;
};

export const showErrorToast = (toast: ToastProps, err: any) => {
    const title = err.response.data?.message || "Error";
    const description = err.response.data?.details || "Something went wrong...";

    return toast({
        variant: "destructive",
        title: title,
        description: description,
        // action: <ToastAction altText="Try again">Try again</ToastAction>,
    });
};
