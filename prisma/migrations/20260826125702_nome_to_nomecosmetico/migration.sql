/*
  Warnings:

  - The primary key for the `Cosmetico` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Nome` on the `Cosmetico` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[NomeCosmetico]` on the table `Cosmetico` will be added. If there are existing duplicate values, this will fail.
  - Made the column `NomeCosmetico` on table `Cosmetico` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "Cosmetico_Nome_key";

-- AlterTable
ALTER TABLE "Cosmetico" DROP CONSTRAINT "Cosmetico_pkey",
DROP COLUMN "Nome",
ALTER COLUMN "NomeCosmetico" SET NOT NULL,
ADD CONSTRAINT "Cosmetico_pkey" PRIMARY KEY ("IdCampione", "NomeCosmetico");

-- CreateIndex
CREATE UNIQUE INDEX "Cosmetico_NomeCosmetico_key" ON "Cosmetico"("NomeCosmetico");
