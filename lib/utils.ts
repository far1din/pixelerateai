import { prisma } from "@/prisma/client";
import { type ClassValue, clsx } from "clsx";
import { Session } from "next-auth";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const getUserFromSession = async (session: Session | null) => {
    if (!session) return null;

    const email = session.user?.email;
    if (!email) return null;

    const user = await prisma.user.findUnique({ where: { email: email } });
    if (!user) return null;

    return user;
};
