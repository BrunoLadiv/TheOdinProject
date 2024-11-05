/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Character` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Character" ADD COLUMN     "img" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Character_name_key" ON "Character"("name");
