/*
  Warnings:

  - The `status` column on the `CustomAiModel` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('created', 'generating', 'failed');

-- AlterTable
ALTER TABLE "CustomAiModel" DROP COLUMN "status",
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'generating';

-- AlterTable
ALTER TABLE "ImagePrompt" ADD COLUMN     "error" TEXT,
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'generating';

-- DropEnum
DROP TYPE "CustomAiModelStatus";
