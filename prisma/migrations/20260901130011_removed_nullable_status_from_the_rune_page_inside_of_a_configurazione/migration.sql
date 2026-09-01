/*
  Warnings:

  - Made the column `Runa` on table `Configurazione` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Configurazione" DROP CONSTRAINT "Configurazione_Runa_fkey";

-- AlterTable
ALTER TABLE "Configurazione" ALTER COLUMN "Runa" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Configurazione" ADD CONSTRAINT "Configurazione_Runa_fkey" FOREIGN KEY ("Runa") REFERENCES "Pagina_Runa"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
