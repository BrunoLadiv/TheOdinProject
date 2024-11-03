/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Map` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Map_slug_key" ON "Map"("slug");
