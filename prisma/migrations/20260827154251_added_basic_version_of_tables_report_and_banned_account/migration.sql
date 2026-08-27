-- AlterTable
ALTER TABLE "Account" ALTER COLUMN "Immagine" SET DEFAULT 'https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/items/Poro-Snax_item_HD.png';

-- CreateTable
CREATE TABLE "Report" (
    "Id" SERIAL NOT NULL,
    "TargetId" INTEGER NOT NULL,
    "AuthorId" INTEGER NOT NULL,
    "Motivazione" TEXT NOT NULL,
    "Descrizione" TEXT,
    "BanId" INTEGER NOT NULL,

    CONSTRAINT "Report_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Banned_Account" (
    "Id" SERIAL NOT NULL,
    "AccountId" INTEGER NOT NULL,
    "Motivazione" TEXT NOT NULL,
    "Descrizione" TEXT,
    "ReportOrigineId" INTEGER NOT NULL,

    CONSTRAINT "Banned_Account_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Banned_Account_AccountId_key" ON "Banned_Account"("AccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Banned_Account_ReportOrigineId_key" ON "Banned_Account"("ReportOrigineId");

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_TargetId_fkey" FOREIGN KEY ("TargetId") REFERENCES "Account"("AccountId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_AuthorId_fkey" FOREIGN KEY ("AuthorId") REFERENCES "Account"("AccountId") ON DELETE RESTRICT ON UPDATE CASCADE;
