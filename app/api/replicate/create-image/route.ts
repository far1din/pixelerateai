import { DEFAULT_DIMENSIONS, DefaultDimensionsProps } from "@/lib/defaults";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import { getUserFromSession } from "@/lib/utils";
import { prisma } from "@/prisma/client";
import Replicate from "replicate";

const validateInputs = (
    prompt: string,
    negativePrompt: string,
    width: DefaultDimensionsProps,
    height: DefaultDimensionsProps,
    numberOfOutputs: number,
    modelVersion: string,
    modelId: string
) => {
    if (typeof prompt != "string" || prompt.length < 1) return null;
    if (typeof negativePrompt != "string") return null;
    if (!DEFAULT_DIMENSIONS.includes(width)) return null;
    if (!DEFAULT_DIMENSIONS.includes(height)) return null;
    if (![1, 2, 3, 4].includes(numberOfOutputs)) return null;
    if (typeof modelVersion != "string") return null;
    if (typeof modelId != "string") return null;

    return "ok";
};

const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN!,
});

export async function POST(request: Request) {
    const { prompt, negativePrompt, width, height, numberOfOutputs, modelVersion, modelId } = await request.json();
    // validations
    const validation = validateInputs(prompt, negativePrompt, width, height, numberOfOutputs, modelVersion, modelId);
    if (validation === null)
        return NextResponse.json(
            { message: "Validation failed", details: "Failed validating the inputs..." },
            { status: 400 }
        );

    // validate user
    const session = await getServerSession(authOptions);
    const user = await getUserFromSession(session);
    if (!user)
        return NextResponse.json(
            { message: "Unauthorized", details: "You are not authorized to perform this operation..." },
            { status: 401 }
        );

    // check credit
    if (user.credit - numberOfOutputs < 0) {
        return NextResponse.json(
            { message: "Not enough credit", details: "You don't have enough credit to proceed..." },
            { status: 400 }
        );
    }
    await prisma.user.update({ where: { id: user.id }, data: { credit: user.credit - numberOfOutputs } });

    // create prediction with replicate
    const version = modelVersion.split(":")[1];
    const seed = Math.floor(Math.random() * Math.pow(2, 32));

    const prediction = await replicate.predictions
        .create({
            version,
            input: {
                prompt,
                negative_prompt: negativePrompt,
                width,
                height,
                num_outputs: numberOfOutputs,
                seed,
            },
            webhook: process.env.REPLICATE_CREATE_IMAGE_WEBHOOK_URL,
            webhook_events_filter: ["completed"],
        })
        .catch((err) => null);
    if (!prediction) {
        return NextResponse.json({ message: "Failed", details: "Failed creating an image..." }, { status: 400 });
    }

    // write to our database
    await prisma.imagePrompt.create({
        data: {
            prompt,
            negative_prompt: negativePrompt,
            width,
            height,
            number_of_outputs: numberOfOutputs,
            seed,
            replicate_id: prediction.id,
            custom_ai_model_id: modelId,
            user_id: user.id,
        },
    });

    return NextResponse.json({ predictionId: prediction.id });
}
