/*
  Warnings:

  - The primary key for the `Modifica` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `Soggetto_modifica` on the `Modifica` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Modifica" DROP CONSTRAINT "Modifica_pkey",
DROP COLUMN "Soggetto_modifica",
ADD COLUMN     "Soggetto_modifica" INTEGER NOT NULL,
ADD CONSTRAINT "Modifica_pkey" PRIMARY KEY ("Soggetto_modifica", "Id_Statistica", "Versione");
