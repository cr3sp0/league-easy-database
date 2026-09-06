-- AlterTable
ALTER TABLE "Oggetto" ALTER COLUMN "SetStatistiche" DROP DEFAULT;

-- CreateTable
CREATE TABLE "Versione" (
    "Versione" TEXT NOT NULL,
    "Data" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Versione_pkey" PRIMARY KEY ("Versione")
);
