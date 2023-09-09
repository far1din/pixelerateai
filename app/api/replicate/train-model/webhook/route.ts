import { prisma } from "@/prisma/client";
import { NextResponse } from "next/server";
import { Prediction } from "replicate";

export async function POST(request: Request) {
    const { id, version, status, output }: Prediction = await request.json();

    if (status === "processing" || status === "starting") {
        return NextResponse.json({ message: "Training", details: "Your model is being trained..." });
    }

    if (status === "canceled" || status === "failed") {
        const updatedModel = await prisma.customAiModel.update({
            where: { replicate_model_id: id },
            data: { status: "failed" },
        });
        // todo: send email to user

        return NextResponse.json({ message: "Failed", details: "Failed training model..." });
    }

    if (status === "succeeded") {
        const updatedModel = await prisma.customAiModel.update({
            where: { replicate_model_id: id },
            data: { status: "created", replicate_model_version: output.version },
        });
        // todo: send email to user
    }

    return NextResponse.json({ message: "success" });
}
