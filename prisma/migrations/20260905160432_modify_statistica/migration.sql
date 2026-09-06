/*
  Warnings:

  - The primary key for the `Modifica` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `Statistica` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Statistic" AS ENUM ('Vita', 'VitaPerLivello', 'Mana', 'ManaPerLivello', 'Velocità_di_movimento', 'Armatura', 'ArmaturaPerLivello', 'ResistenzaMagica', 'ResistenzaMagicaPerLivello', 'Gittata', 'RigenerazioneVita', 'RigenerazioneMana', 'RigenerazioneManaPerLivello', 'Critico', 'CriticoPerLivello', 'Attacco', 'AttaccoPerLivello', 'VelocitàDiAttacco', 'VelocitàDiAttaccoPerLivello');

-- DropForeignKey
ALTER TABLE "Modifica" DROP CONSTRAINT "Modifica_Id_Statistica_fkey";

-- AlterTable
ALTER TABLE "Modifica" DROP CONSTRAINT "Modifica_pkey",
ALTER COLUMN "Id_Statistica" SET DATA TYPE TEXT,
ADD CONSTRAINT "Modifica_pkey" PRIMARY KEY ("Soggetto_modifica", "Id_Statistica", "Versione");

-- DropTable
DROP TABLE "Statistica";
