import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN!,
});

export async function GET(request: Request) {
    const url = new URL(request.url);
    const segments = url.pathname.split("/");
    const predictionId = segments[segments.length - 1];

    const prediction = await replicate.predictions.get(predictionId).catch((err) => null);

    if (prediction === null) {
        return NextResponse.json({ message: "Failed", defails: "Predictions with the following ID does not exist..." });
    }

    return NextResponse.json({ prediction });
}
