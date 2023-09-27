import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import { getUserFromSession } from "@/lib/utils";
import { prisma } from "@/prisma/client";

const GALLERY_HITS_PER_PAGE = 25;

export async function GET(request: Request) {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get("page")) || 1;

    const session = await getServerSession(authOptions);
    const user = await getUserFromSession(session);
    if (!user)
        return NextResponse.json(
            { message: "Unauthorized", details: "You are not authorized to perform this operation..." },
            { status: 401 }
        );

    const data = await prisma.generatedImage.findMany({
        where: { user_id: user.id },
        select: {
            url: true,
            image_prompt: {
                select: {
                    prompt: true,
                    negative_prompt: true,
                    width: true,
                    height: true,
                    seed: true,
                    generated_images: { select: { url: true } },
                },
            },
            custom_ai_model: { select: { model_nickname: true } },
        },
        take: GALLERY_HITS_PER_PAGE,
        skip: (page - 1) * GALLERY_HITS_PER_PAGE,
    });

    const totalPages = Math.ceil(
        (await prisma.generatedImage.count({ where: { user_id: user.id } })) / GALLERY_HITS_PER_PAGE
    );

    const generatedImages = data.map((image) => ({
        image: image.url,
        prompt: image.image_prompt.prompt,
        negativePrompt: image.image_prompt.negative_prompt,
        width: image.image_prompt.width,
        height: image.image_prompt.height,
        seed: String(image.image_prompt.seed),
        modelName: image.custom_ai_model.model_nickname,
        relatedImages: image.image_prompt.generated_images.map((url) => url.url),
    }));

    return NextResponse.json({
        totalPages,
        generatedImages,
    });
}
