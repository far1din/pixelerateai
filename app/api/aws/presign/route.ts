import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import { getUserFromSession } from "@/lib/utils";
import { randomUUID } from "crypto";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const bucket = process.env.AWS_BUCKET_NAME!;
const region = process.env.AWS_REGION!;

const client = new S3Client({
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
    region: region,
});

export async function GET(request: Request) {
    const session = await getServerSession(authOptions);
    const user = await getUserFromSession(session);
    if (!user)
        return NextResponse.json(
            { message: "Unauthorized", details: "You are not authorized to perform this operation..." },
            { status: 401 }
        );

    const key = `user-upload-zip/${user.id}/${randomUUID()}.zip`;

    const command = new PutObjectCommand({
        Bucket: bucket,
        Key: key,
    });

    const presignedUrl = await getSignedUrl(client, command, {
        expiresIn: 23,
    });

    const zipUrl = `https://${bucket}.s3.${region}.amazonaws.com/${key}`;

    return NextResponse.json({ presignedUrl, zipUrl });
}
