-- AlterTable
ALTER TABLE "Campione" ADD COLUMN     "SetStatistiche" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Oggetto" ADD COLUMN     "SetStatistiche" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "SetBase" (
    "IdStatistiche" INTEGER NOT NULL,
    "Vita" INTEGER NOT NULL,
    "VitaPerLivello" INTEGER NOT NULL,
    "Mana" INTEGER NOT NULL,
    "ManaPerLivello" INTEGER NOT NULL,
    "Velocità_di_movimento" INTEGER NOT NULL,
    "Armatura" DOUBLE PRECISION NOT NULL,
    "ArmaturaPerLivello" DOUBLE PRECISION NOT NULL,
    "ResistenzaMagica" DOUBLE PRECISION NOT NULL,
    "ResistenzaMagicaPerLivello" DOUBLE PRECISION NOT NULL,
    "Gittata" INTEGER NOT NULL,
    "RigenerazioneVita" DOUBLE PRECISION NOT NULL,
    "RigenerazioneMana" DOUBLE PRECISION NOT NULL,
    "RigenerazioneManaPerLivello" DOUBLE PRECISION NOT NULL,
    "Critico" DOUBLE PRECISION NOT NULL,
    "CriticoPerLivello" DOUBLE PRECISION NOT NULL,
    "Attacco" DOUBLE PRECISION NOT NULL,
    "AttaccoPerLivello" DOUBLE PRECISION NOT NULL,
    "VelocitàDiAttacco" DOUBLE PRECISION NOT NULL,
    "VelocitàDiAttaccoPerLivello" DOUBLE PRECISION NOT NULL,
    "AttaccoMagico" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "SetBase_pkey" PRIMARY KEY ("IdStatistiche")
);