import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import axios from "axios";
import { randomUUID } from "crypto";

const bucket = process.env.AWS_BUCKET_NAME!;
const region = process.env.AWS_REGION!;

const client = new S3Client({
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
    region: region,
});

export const uploadImagesToAWS = async (images: string[], uid: string, prefix: string) => {
    const promises = images.map(async (image) => {
        return axios.get(image, { responseType: "arraybuffer" }).then((res) => res.data);
    });
    const arraybuffers = await Promise.all(promises);

    const filenames = arraybuffers.map((_) => `${prefix}/${uid}/${randomUUID().toLowerCase()}.png`);

    arraybuffers.map(async (data, index) => {
        const uploadParams = {
            Bucket: bucket,
            Body: data,
            Key: filenames[index],
            ContentType: "image/png",
        };
        const command = new PutObjectCommand(uploadParams);
        await client.send(command);
    });

    const urls = filenames.map((filename) => `https://${bucket}.s3.${region}.amazonaws.com/${filename}`);

    return { urls };
};
