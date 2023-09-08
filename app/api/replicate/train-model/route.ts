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

    // todo: add stripe payment

    // replicate
    const training = await replicate.trainings.create(
        "stability-ai",
        "sdxl",
        "d830ba5dabf8090ec0db6c10fc862c6eb1c929e1a194a5411852d25fd954ac82",
        {
            destination: destination,
            input: {
                input_images: zipUrl,
            },
        }
    );

    console.log(training);
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
