import { uploadImagesToAWS } from "@/app/api/aws/helper";
import { prisma } from "@/prisma/client";
import { NextResponse } from "next/server";
import { Prediction } from "replicate";

export async function POST(request: Request) {
    const { id, status, output, error }: Prediction = await request.json();

    if (status === "succeeded") {
        const prompt = await prisma.imagePrompt.findUnique({
            where: { replicate_id: id },
        });
        if (!prompt) return NextResponse.json({ message: "Failed" });

        const { urls } = await uploadImagesToAWS(output, prompt.user_id, "user-generated-images");

        let promises: any = [];
        urls.map(async (imageUrl) => {
            promises.push(
                prisma.generatedImage.create({
                    data: {
                        url: imageUrl,
                        custom_ai_model_id: prompt.custom_ai_model_id,
                        image_prompt_id: prompt.id,
                        user_id: prompt.user_id,
                    },
                })
            );
        });

        await Promise.all(promises);

        await prisma.imagePrompt.update({ where: { id: prompt.id }, data: { status: "created" } });
    }

    if (status === "failed" || status === "canceled") {
        const prompt = await prisma.imagePrompt.findUnique({
            where: { replicate_id: id },
            include: { user: { select: { credit: true } } },
        });
        if (!prompt || prompt.status != "generating") return NextResponse.json({ message: "Failed" });

        await prisma.user.update({
            where: { id: prompt.user_id },
            data: { credit: prompt.user.credit + prompt.number_of_outputs },
        });

        await prisma.imagePrompt.update({ where: { id: prompt.id }, data: { status: "failed", error: error } });
    }

    return NextResponse.json({ message: "succdfadess" });
}
