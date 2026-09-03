/*
  Warnings:

  - Added the required column `Data_Creazione` to the `Report` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Report" ADD COLUMN     "Data_Creazione" TIMESTAMP(3) NOT NULL;
