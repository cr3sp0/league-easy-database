/*
  Warnings:

  - You are about to drop the column `BanId` on the `Report` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Partita" ADD COLUMN     "Assist" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "Morti" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "Uccisioni" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Report" DROP COLUMN "BanId";

-- AddForeignKey
ALTER TABLE "Banned_Account" ADD CONSTRAINT "Banned_Account_ReportOrigineId_fkey" FOREIGN KEY ("ReportOrigineId") REFERENCES "Report"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
