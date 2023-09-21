-- CreateEnum
CREATE TYPE "Visibility" AS ENUM ('private', 'public');

-- AlterTable
ALTER TABLE "CustomAiModel" ADD COLUMN     "visibility" "Visibility" NOT NULL DEFAULT 'private',
ALTER COLUMN "input_images_url" DROP NOT NULL,
ALTER COLUMN "user_id" DROP NOT NULL;

-- CreateTable
CREATE TABLE "ImagePrompt" (
    "id" TEXT NOT NULL,
    "prompt" TEXT NOT NULL,
    "negative_prompt" TEXT NOT NULL DEFAULT '',
    "width" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "number_of_outputs" INTEGER NOT NULL DEFAULT 1,
    "seed" BIGINT NOT NULL,
    "replicate_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "custom_ai_model_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "ImagePrompt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GeneratedImage" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "image_prompt_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GeneratedImage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ImagePrompt_replicate_id_key" ON "ImagePrompt"("replicate_id");

-- AddForeignKey
ALTER TABLE "ImagePrompt" ADD CONSTRAINT "ImagePrompt_custom_ai_model_id_fkey" FOREIGN KEY ("custom_ai_model_id") REFERENCES "CustomAiModel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImagePrompt" ADD CONSTRAINT "ImagePrompt_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GeneratedImage" ADD CONSTRAINT "GeneratedImage_image_prompt_id_fkey" FOREIGN KEY ("image_prompt_id") REFERENCES "ImagePrompt"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GeneratedImage" ADD CONSTRAINT "GeneratedImage_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
