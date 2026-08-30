/*
  Warnings:

  - Added the required column `Immagine` to the `Abilita` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Abilita" ADD COLUMN     "Immagine" TEXT NOT NULL;
