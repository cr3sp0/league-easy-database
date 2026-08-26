/*
  Warnings:

  - You are about to alter the column `Armatura` on the `Campione` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `Resistenza_magica` on the `Campione` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `Velocità_di_attacco` on the `Campione` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `Ricarica` on the `Incantesimo` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `Nuovo_Valore` on the `Modifica` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.

*/
-- AlterTable
ALTER TABLE "Campione" ALTER COLUMN "Armatura" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "Resistenza_magica" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "Velocità_di_attacco" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "Incantesimo" ALTER COLUMN "Ricarica" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "Modifica" ALTER COLUMN "Nuovo_Valore" SET DATA TYPE DOUBLE PRECISION;
