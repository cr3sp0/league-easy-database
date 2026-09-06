-- AlterEnum
ALTER TYPE "Statistica" ADD VALUE 'RigenerazioneVitaPerLivello';

-- AlterTable
ALTER TABLE "SetBase" ADD COLUMN     "RigenerazioneVitaPerLivello" DOUBLE PRECISION NOT NULL DEFAULT 0;
