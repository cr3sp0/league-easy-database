/*
  Warnings:

  - You are about to drop the column `ReportOrigineId` on the `Banned_Account` table. All the data in the column will be lost.
  - The primary key for the `Report` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `AuthorId` on the `Report` table. All the data in the column will be lost.
  - You are about to drop the column `Id` on the `Report` table. All the data in the column will be lost.
  - You are about to drop the column `TargetId` on the `Report` table. All the data in the column will be lost.
  - Added the required column `Expiration_Date` to the `Banned_Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `IdAutore` to the `Report` table without a default value. This is not possible if the table is not empty.
  - Added the required column `IdTarget` to the `Report` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Banned_Account" DROP CONSTRAINT "Banned_Account_ReportOrigineId_fkey";

-- DropForeignKey
ALTER TABLE "Report" DROP CONSTRAINT "Report_AuthorId_fkey";

-- DropForeignKey
ALTER TABLE "Report" DROP CONSTRAINT "Report_TargetId_fkey";

-- DropIndex
DROP INDEX "Banned_Account_ReportOrigineId_key";

-- AlterTable
ALTER TABLE "Banned_Account" DROP COLUMN "ReportOrigineId",
ADD COLUMN     "Expiration_Date" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Report" DROP CONSTRAINT "Report_pkey",
DROP COLUMN "AuthorId",
DROP COLUMN "Id",
DROP COLUMN "TargetId",
ADD COLUMN     "IdAutore" INTEGER NOT NULL,
ADD COLUMN     "IdTarget" INTEGER NOT NULL,
ADD CONSTRAINT "Report_pkey" PRIMARY KEY ("IdTarget", "IdAutore");

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_IdAutore_fkey" FOREIGN KEY ("IdAutore") REFERENCES "Account"("AccountId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_IdTarget_fkey" FOREIGN KEY ("IdTarget") REFERENCES "Account"("AccountId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Banned_Account" ADD CONSTRAINT "Banned_Account_AccountId_fkey" FOREIGN KEY ("AccountId") REFERENCES "Account"("AccountId") ON DELETE RESTRICT ON UPDATE CASCADE;
