/*
  Warnings:

  - Added the required column `custom_ai_model_id` to the `GeneratedImage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "GeneratedImage" ADD COLUMN     "custom_ai_model_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "GeneratedImage" ADD CONSTRAINT "GeneratedImage_custom_ai_model_id_fkey" FOREIGN KEY ("custom_ai_model_id") REFERENCES "CustomAiModel"("id") ON DELETE CASCADE ON UPDATE CASCADE;
