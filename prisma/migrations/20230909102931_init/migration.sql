/*
  Warnings:

  - A unique constraint covering the columns `[replicate_model_id]` on the table `CustomAiModel` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CustomAiModel_replicate_model_id_key" ON "CustomAiModel"("replicate_model_id");
