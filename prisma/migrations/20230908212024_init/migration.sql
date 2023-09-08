-- CreateEnum
CREATE TYPE "CustomAiModelStatus" AS ENUM ('created', 'generating', 'failed');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "credit" INTEGER NOT NULL DEFAULT 5;

-- CreateTable
CREATE TABLE "CustomAiModel" (
    "id" TEXT NOT NULL,
    "replicate_model_id" TEXT NOT NULL,
    "replicate_model_version" TEXT NOT NULL,
    "replicate_destination" TEXT NOT NULL,
    "status" "CustomAiModelStatus" NOT NULL DEFAULT 'generating',
    "input_images_url" TEXT NOT NULL,
    "cover_image" TEXT,
    "model_nickname" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CustomAiModel_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CustomAiModel" ADD CONSTRAINT "CustomAiModel_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
