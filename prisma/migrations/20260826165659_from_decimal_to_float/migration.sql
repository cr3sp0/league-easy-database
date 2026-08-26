/*
  Warnings:

  - You are about to alter the column `Attacco` on the `Campione` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.

*/
-- AlterTable
ALTER TABLE "Campione" ALTER COLUMN "Attacco" SET DATA TYPE DOUBLE PRECISION;
