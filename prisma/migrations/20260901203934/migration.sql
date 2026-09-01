-- AlterTable
CREATE SEQUENCE setbase_idstatistiche_seq;
ALTER TABLE "SetBase" ALTER COLUMN "IdStatistiche" SET DEFAULT nextval('setbase_idstatistiche_seq');
ALTER SEQUENCE setbase_idstatistiche_seq OWNED BY "SetBase"."IdStatistiche";
