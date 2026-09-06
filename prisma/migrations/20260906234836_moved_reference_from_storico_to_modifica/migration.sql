-- DropForeignKey
ALTER TABLE "Modifica" DROP CONSTRAINT "Modifica_Versione_fkey";

-- AddForeignKey
ALTER TABLE "Modifica" ADD CONSTRAINT "Modifica_Versione_fkey" FOREIGN KEY ("Versione") REFERENCES "Versione"("Versione") ON DELETE RESTRICT ON UPDATE CASCADE;
