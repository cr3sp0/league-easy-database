-- AlterTable
CREATE SEQUENCE pagina_runa_id_seq;
ALTER TABLE "Pagina_Runa" ALTER COLUMN "Id" SET DEFAULT nextval('pagina_runa_id_seq');
ALTER SEQUENCE pagina_runa_id_seq OWNED BY "Pagina_Runa"."Id";

-- AlterTable
CREATE SEQUENCE sezione_runa_id_seq;
ALTER TABLE "Sezione_Runa" ALTER COLUMN "Id" SET DEFAULT nextval('sezione_runa_id_seq');
ALTER SEQUENCE sezione_runa_id_seq OWNED BY "Sezione_Runa"."Id";
