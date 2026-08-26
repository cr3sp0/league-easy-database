-- DropForeignKey
ALTER TABLE "Configurazione" DROP CONSTRAINT "Configurazione_Runa_fkey";

-- AlterTable
ALTER TABLE "Configurazione" ALTER COLUMN "Runa" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Configurazione" ADD CONSTRAINT "Configurazione_Runa_fkey" FOREIGN KEY ("Runa") REFERENCES "Pagina_Runa"("Id") ON DELETE SET NULL ON UPDATE CASCADE;
