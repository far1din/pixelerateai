import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import { getUserEmailFromSession } from "@/lib/utils";
import { prisma } from "@/prisma/client";
import { CustomAiModel } from "@prisma/client";

type ModelProps = ({
    _count: {
        generated_images: number;
    };
} & CustomAiModel)[];

const reformatModels = (models: ModelProps) => {
    return models.map((model) => ({
        id: model.id,
        name: model.model_nickname,
        status: model.status,
        version: model.status === "created" ? model.replicate_model_version : null,
        imagesTaken: model._count.generated_images,
        coverImage: model.cover_image,
        createdAt: model.created_at,
    }));
};

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
        include: { subscriptions: { select: { stripe_current_period_end: true }, orderBy: { created_at: "desc" } } },
    });
    if (!user)
        return NextResponse.json(
            { message: "Unauthorized", details: "You are not authorized to perform this operation..." },
            { status: 401 }
        );

    const models = await prisma.customAiModel.findMany({
        where: { OR: [{ user_id: user.id }, { visibility: "public" }] },
        orderBy: { created_at: "desc" },
        include: { _count: { select: { generated_images: true } } },
    });

    const defaultAiModels = reformatModels(models.filter((model) => model.user_id === null));
    const customAiModels = reformatModels(models.filter((model) => model.user_id === user.id));
    const credits = user.credit;
    const isSubscribed = user.subscriptions[0]?.stripe_current_period_end > new Date();

    return NextResponse.json({ defaultAiModels, customAiModels, credits, isSubscribed });
}
