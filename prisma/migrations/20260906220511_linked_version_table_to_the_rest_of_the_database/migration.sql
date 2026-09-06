-- AddForeignKey
ALTER TABLE "Modifica" ADD CONSTRAINT "Modifica_Soggetto_modifica_fkey" FOREIGN KEY ("Soggetto_modifica") REFERENCES "SetBase"("IdStatistiche") ON DELETE RESTRICT ON UPDATE CASCADE;
