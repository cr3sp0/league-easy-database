/*
  Warnings:

  - You are about to drop the column `Armatura` on the `Campione` table. All the data in the column will be lost.
  - You are about to drop the column `Attacco` on the `Campione` table. All the data in the column will be lost.
  - You are about to drop the column `AttaccoMagico` on the `Campione` table. All the data in the column will be lost.
  - You are about to drop the column `Gittata` on the `Campione` table. All the data in the column will be lost.
  - You are about to drop the column `Mana` on the `Campione` table. All the data in the column will be lost.
  - You are about to drop the column `Resistenza_magica` on the `Campione` table. All the data in the column will be lost.
  - You are about to drop the column `Velocità_di_attacco` on the `Campione` table. All the data in the column will be lost.
  - You are about to drop the column `Velocità_di_movimento` on the `Campione` table. All the data in the column will be lost.
  - You are about to drop the column `Vita` on the `Campione` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Campione" DROP COLUMN "Armatura",
DROP COLUMN "Attacco",
DROP COLUMN "AttaccoMagico",
DROP COLUMN "Gittata",
DROP COLUMN "Mana",
DROP COLUMN "Resistenza_magica",
DROP COLUMN "Velocità_di_attacco",
DROP COLUMN "Velocità_di_movimento",
DROP COLUMN "Vita";

-- AddForeignKey
ALTER TABLE "Campione" ADD CONSTRAINT "Campione_SetStatistiche_fkey" FOREIGN KEY ("SetStatistiche") REFERENCES "SetBase"("IdStatistiche") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Oggetto" ADD CONSTRAINT "Oggetto_SetStatistiche_fkey" FOREIGN KEY ("SetStatistiche") REFERENCES "SetBase"("IdStatistiche") ON DELETE RESTRICT ON UPDATE CASCADE;
