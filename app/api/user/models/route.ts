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
        include: { custom_ai_model: { orderBy: { created_at: "desc" } } },
    });

    const customAiModels =
        user?.custom_ai_model.map((model) => ({
            name: model.model_nickname,
            staus: model.status,
            version: model.status === "created" ? model.status : null,
            coverImage: model.cover_image,
            createdAt: model.created_at,
        })) || [];

    return NextResponse.json({ customAiModels });
}
