/*
  Warnings:

  - Added the required column `filename` to the `monsters` table without a default value. This is not possible if the table is not empty.
  - Added the required column `format` to the `monsters` table without a default value. This is not possible if the table is not empty.
  - Added the required column `height` to the `monsters` table without a default value. This is not possible if the table is not empty.
  - Added the required column `width` to the `monsters` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "monsters" ADD COLUMN     "filename" TEXT NOT NULL,
ADD COLUMN     "format" TEXT NOT NULL,
ADD COLUMN     "height" INTEGER NOT NULL,
ADD COLUMN     "width" INTEGER NOT NULL;
