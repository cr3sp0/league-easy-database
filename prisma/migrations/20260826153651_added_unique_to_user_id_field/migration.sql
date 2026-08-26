/*
  Warnings:

  - A unique constraint covering the columns `[user_id]` on the table `Sessione` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Sessione_user_id_key" ON "Sessione"("user_id");
