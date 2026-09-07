/*
  Warnings:

  - You are about to drop the `Kit` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Kit_Abilita` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Configurazione" DROP CONSTRAINT "Configurazione_Runa_fkey";

-- DropForeignKey
ALTER TABLE "Kit" DROP CONSTRAINT "Kit_IdCampione_fkey";

-- DropForeignKey
ALTER TABLE "Kit_Abilita" DROP CONSTRAINT "Kit_Abilita_IdAbilita_fkey";

-- DropForeignKey
ALTER TABLE "Kit_Abilita" DROP CONSTRAINT "Kit_Abilita_IdKit_fkey";

-- AlterTable
ALTER TABLE "Abilita" ADD COLUMN     "IdCampione" TEXT NOT NULL DEFAULT 'akali',
ADD COLUMN     "Tipo" "Tipo_Abilita" NOT NULL DEFAULT 'Abilità1';

-- DropTable
DROP TABLE "Kit";

-- DropTable
DROP TABLE "Kit_Abilita";

-- AddForeignKey
ALTER TABLE "Configurazione" ADD CONSTRAINT "Configurazione_Runa_fkey" FOREIGN KEY ("Runa") REFERENCES "Pagina_Runa"("Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Abilita" ADD CONSTRAINT "Abilita_IdCampione_fkey" FOREIGN KEY ("IdCampione") REFERENCES "Campione"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;
