/*
  Warnings:

  - The primary key for the `Banned_Account` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Id` on the `Banned_Account` table. All the data in the column will be lost.
  - The primary key for the `Configurazione` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Account` on the `Configurazione` table. All the data in the column will be lost.
  - You are about to drop the column `ID` on the `Configurazione` table. All the data in the column will be lost.
  - The primary key for the `Inventario` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `IdInventario` on the `Inventario` table. All the data in the column will be lost.
  - The primary key for the `Partita` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Id` on the `Partita` table. All the data in the column will be lost.
  - Added the required column `IdAccount` to the `Configurazione` table without a default value. This is not possible if the table is not empty.
  - Added the required column `TitoloConf` to the `Configurazione` table without a default value. This is not possible if the table is not empty.
  - Added the required column `IdAccount` to the `Inventario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `IdConfigurazione` to the `Inventario` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Configurazione" DROP CONSTRAINT "Configurazione_Account_fkey";

-- DropForeignKey
ALTER TABLE "Inventario" DROP CONSTRAINT "Inventario_IdInventario_fkey";

-- DropForeignKey
ALTER TABLE "Partita" DROP CONSTRAINT "Partita_AccountId_fkey";

-- DropForeignKey
ALTER TABLE "Partita" DROP CONSTRAINT "Partita_ConfigurazioneId_fkey";

-- DropIndex
DROP INDEX "Banned_Account_AccountId_key";

-- AlterTable
ALTER TABLE "Banned_Account" DROP CONSTRAINT "Banned_Account_pkey",
DROP COLUMN "Id",
ADD CONSTRAINT "Banned_Account_pkey" PRIMARY KEY ("AccountId");

-- AlterTable
ALTER TABLE "Configurazione" DROP CONSTRAINT "Configurazione_pkey",
DROP COLUMN "Account",
DROP COLUMN "ID",
ADD COLUMN     "IdAccount" INTEGER NOT NULL,
ADD COLUMN     "TitoloConf" TEXT NOT NULL,
ADD CONSTRAINT "Configurazione_pkey" PRIMARY KEY ("TitoloConf", "IdAccount");

-- AlterTable
ALTER TABLE "Inventario" DROP CONSTRAINT "Inventario_pkey",
DROP COLUMN "IdInventario",
ADD COLUMN     "IdAccount" INTEGER NOT NULL,
ADD COLUMN     "IdConfigurazione" TEXT NOT NULL,
ADD CONSTRAINT "Inventario_pkey" PRIMARY KEY ("IdConfigurazione", "NomeOggetto");

-- AlterTable
ALTER TABLE "Partita" DROP CONSTRAINT "Partita_pkey",
DROP COLUMN "Id",
ALTER COLUMN "ConfigurazioneId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Partita_pkey" PRIMARY KEY ("AccountId", "Data");

-- AddForeignKey
ALTER TABLE "Configurazione" ADD CONSTRAINT "Configurazione_IdAccount_fkey" FOREIGN KEY ("IdAccount") REFERENCES "Account"("AccountId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventario" ADD CONSTRAINT "Inventario_IdConfigurazione_IdAccount_fkey" FOREIGN KEY ("IdConfigurazione", "IdAccount") REFERENCES "Configurazione"("TitoloConf", "IdAccount") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Partita" ADD CONSTRAINT "Partita_ConfigurazioneId_AccountId_fkey" FOREIGN KEY ("ConfigurazioneId", "AccountId") REFERENCES "Configurazione"("TitoloConf", "IdAccount") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Partita" ADD CONSTRAINT "Partita_AccountId_fkey" FOREIGN KEY ("AccountId") REFERENCES "Account"("AccountId") ON DELETE CASCADE ON UPDATE CASCADE;
