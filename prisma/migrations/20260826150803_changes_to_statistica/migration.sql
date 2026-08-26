/*
  Warnings:

  - You are about to drop the column `Livello` on the `Statistica` table. All the data in the column will be lost.

*/
-- AlterTable
CREATE SEQUENCE abilita_id_seq;
ALTER TABLE "Abilita" ALTER COLUMN "Id" SET DEFAULT nextval('abilita_id_seq');
ALTER SEQUENCE abilita_id_seq OWNED BY "Abilita"."Id";

-- AlterTable
CREATE SEQUENCE sessione_id_seq;
ALTER TABLE "Sessione" ALTER COLUMN "Id" SET DEFAULT nextval('sessione_id_seq');
ALTER SEQUENCE sessione_id_seq OWNED BY "Sessione"."Id";

-- AlterTable
ALTER TABLE "Statistica" DROP COLUMN "Livello";
