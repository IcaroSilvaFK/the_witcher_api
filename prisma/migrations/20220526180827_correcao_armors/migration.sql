/*
  Warnings:

  - You are about to drop the column `filename` on the `monsters` table. All the data in the column will be lost.
  - You are about to drop the column `format` on the `monsters` table. All the data in the column will be lost.
  - You are about to drop the column `height` on the `monsters` table. All the data in the column will be lost.
  - You are about to drop the column `width` on the `monsters` table. All the data in the column will be lost.
  - Added the required column `filename` to the `armors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `format` to the `armors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `height` to the `armors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `width` to the `armors` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "armors" ADD COLUMN     "filename" TEXT NOT NULL,
ADD COLUMN     "format" TEXT NOT NULL,
ADD COLUMN     "height" INTEGER NOT NULL,
ADD COLUMN     "width" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "monsters" DROP COLUMN "filename",
DROP COLUMN "format",
DROP COLUMN "height",
DROP COLUMN "width";
