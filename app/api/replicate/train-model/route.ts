import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import { getUserFromSession } from "@/lib/utils";
import Replicate from "replicate";
import { prisma } from "@/prisma/client";

const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN!,
});

const destination = "far1din/pixelerateai";

export async function POST(request: Request) {
    const { zipUrl, modelName } = await request.json();
    if (!zipUrl || !modelName)
        return NextResponse.json(
            { message: "Bad request", details: "Failed getting images or modelname..." },
            { status: 400 }
        );

    const session = await getServerSession(authOptions);
    const user = await getUserFromSession(session);
    if (!user)
        return NextResponse.json(
            { message: "Unauthorized", details: "You are not authorized to perform this operation..." },
            { status: 401 }
        );

    const credits = user.credit - 50;
    if (credits < 0)
        return NextResponse.json(
            { message: "Failed", details: "You don't have enough credits to perform this task..." },
            { status: 400 }
        );

    await prisma.user.update({
        where: { id: user.id },
        data: { credit: credits },
    });

    // replicate
    const training = await replicate.trainings.create(
        "stability-ai",
        "sdxl",
        "1bfb924045802467cf8869d96b231a12e6aa994abfe37e337c63a4e49a8c6c41",
        {
            destination: destination,
            input: {
                input_images: zipUrl,
            },
            webhook: process.env.REPLICATE_TRAIN_WEBHOOK_URL,
        }
    );

    // save to our database
    const model = await prisma.customAiModel
        .create({
            data: {
                replicate_model_id: training.id,
                replicate_model_version: training.version,
                replicate_destination: destination,

                input_images_url: zipUrl,
                model_nickname: modelName,

                user_id: user.id,
            },
        })
        .catch((err) => null);

    if (!model)
        return NextResponse.json(
            { message: "Internal Server Error", details: "Failed writing to the database..." },
            { status: 500 }
        );

    return NextResponse.json({ status: "success" });
}
