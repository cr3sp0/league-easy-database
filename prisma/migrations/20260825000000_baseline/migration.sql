-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateEnum
CREATE TYPE "Tipo_Abilita" AS ENUM ('Passiva', 'Abilità1', 'Abilità2', 'Abilità3', 'Abilità4');

-- CreateEnum
CREATE TYPE "Risultato" AS ENUM ('Vittoria', 'Sconfitta', 'Remake');

-- CreateTable
CREATE TABLE "Campione" (
    "ID" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "Icona" TEXT NOT NULL,
    "Titolo" TEXT NOT NULL,
    "Descrizione" TEXT NOT NULL,
    "Ruolo" TEXT NOT NULL,
    "Vita" INTEGER NOT NULL,
    "Mana" INTEGER NOT NULL,
    "Attacco" DECIMAL(65,30) NOT NULL,
    "AttaccoMagico" INTEGER NOT NULL DEFAULT 0,
    "Velocità_di_movimento" INTEGER NOT NULL,
    "Armatura" DECIMAL(65,30) NOT NULL,
    "Resistenza_magica" DECIMAL(65,30) NOT NULL,
    "Velocità_di_attacco" DECIMAL(65,30) NOT NULL,
    "Gittata" INTEGER NOT NULL,

    CONSTRAINT "Campione_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Cosmetico" (
    "Nome" TEXT NOT NULL,
    "IdCampione" TEXT NOT NULL,
    "Immagine" TEXT NOT NULL,

    CONSTRAINT "Cosmetico_pkey" PRIMARY KEY ("IdCampione","Nome")
);

-- CreateTable
CREATE TABLE "Ruolo" (
    "Nome" TEXT NOT NULL,
    "Descrizione" TEXT NOT NULL,

    CONSTRAINT "Ruolo_pkey" PRIMARY KEY ("Nome")
);

-- CreateTable
CREATE TABLE "Razza" (
    "Nome" TEXT NOT NULL,
    "Descrizione" TEXT NOT NULL,

    CONSTRAINT "Razza_pkey" PRIMARY KEY ("Nome")
);

-- CreateTable
CREATE TABLE "Campione_Razza" (
    "IdCampione" TEXT NOT NULL,
    "NomeRazza" TEXT NOT NULL,

    CONSTRAINT "Campione_Razza_pkey" PRIMARY KEY ("IdCampione","NomeRazza")
);

-- CreateTable
CREATE TABLE "Posizione" (
    "Nome" TEXT NOT NULL,

    CONSTRAINT "Posizione_pkey" PRIMARY KEY ("Nome")
);

-- CreateTable
CREATE TABLE "Campione_Posizione" (
    "IdCampione" TEXT NOT NULL,
    "NomePosizione" TEXT NOT NULL,

    CONSTRAINT "Campione_Posizione_pkey" PRIMARY KEY ("IdCampione","NomePosizione")
);

-- CreateTable
CREATE TABLE "Regione" (
    "Nome" TEXT NOT NULL,
    "Descrizione" TEXT NOT NULL,

    CONSTRAINT "Regione_pkey" PRIMARY KEY ("Nome")
);

-- CreateTable
CREATE TABLE "Campione_Regione" (
    "IdCampione" TEXT NOT NULL,
    "NomeRegione" TEXT NOT NULL,

    CONSTRAINT "Campione_Regione_pkey" PRIMARY KEY ("IdCampione","NomeRegione")
);

-- CreateTable
CREATE TABLE "Incantesimo" (
    "Nome" TEXT NOT NULL,
    "Descrizione" TEXT NOT NULL,
    "Ricarica" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Incantesimo_pkey" PRIMARY KEY ("Nome")
);

-- CreateTable
CREATE TABLE "Configurazione" (
    "ID" SERIAL NOT NULL,
    "IdCampione" TEXT NOT NULL,
    "Incantesimo1" TEXT NOT NULL,
    "Incantesimo2" TEXT NOT NULL,
    "Account" INTEGER NOT NULL,
    "Runa" INTEGER NOT NULL,

    CONSTRAINT "Configurazione_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Oggetto" (
    "Nome" TEXT NOT NULL,
    "Costo" INTEGER NOT NULL,
    "Descrizione" TEXT NOT NULL,
    "Immagine" TEXT NOT NULL,

    CONSTRAINT "Oggetto_pkey" PRIMARY KEY ("Nome")
);

-- CreateTable
CREATE TABLE "Inventario" (
    "IdInventario" INTEGER NOT NULL,
    "NomeOggetto" TEXT NOT NULL,

    CONSTRAINT "Inventario_pkey" PRIMARY KEY ("IdInventario","NomeOggetto")
);

-- CreateTable
CREATE TABLE "Account" (
    "Nome" TEXT NOT NULL,
    "AccountId" SERIAL NOT NULL,
    "Password" TEXT NOT NULL,
    "Descrizione" TEXT NOT NULL,
    "Immagine" TEXT NOT NULL,
    "RiotID" VARCHAR(50),
    "IsAdmin" BOOLEAN NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("AccountId")
);

-- CreateTable
CREATE TABLE "Sessione" (
    "Id" INTEGER NOT NULL,
    "guid_id" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_expired" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Sessione_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Kit" (
    "IdKit" SERIAL NOT NULL,
    "IdCampione" TEXT NOT NULL,

    CONSTRAINT "Kit_pkey" PRIMARY KEY ("IdKit")
);

-- CreateTable
CREATE TABLE "Abilita" (
    "Id" INTEGER NOT NULL,
    "NomeAbilità" TEXT NOT NULL,
    "Descrizione" TEXT NOT NULL,

    CONSTRAINT "Abilita_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Kit_Abilita" (
    "IdKit" INTEGER NOT NULL,
    "IdAbilita" INTEGER NOT NULL,
    "Tipo" "Tipo_Abilita" NOT NULL,

    CONSTRAINT "Kit_Abilita_pkey" PRIMARY KEY ("IdKit","Tipo")
);

-- CreateTable
CREATE TABLE "Pagina_Runa" (
    "Id" INTEGER NOT NULL,
    "RunaPrimaria" INTEGER NOT NULL,
    "RunaSecondaria" INTEGER NOT NULL,
    "Frammenti" INTEGER NOT NULL,

    CONSTRAINT "Pagina_Runa_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Sezione_Runa" (
    "Id" INTEGER NOT NULL,
    "Pietrachiave" TEXT NOT NULL,
    "RigaSuperiore" TEXT NOT NULL,
    "RigaCentrale" TEXT NOT NULL,
    "RigaInferiore" TEXT NOT NULL,

    CONSTRAINT "Sezione_Runa_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Runa" (
    "Nome" TEXT NOT NULL,
    "Descrizione" TEXT NOT NULL,
    "CamminoId" INTEGER NOT NULL,
    "Grado" INTEGER NOT NULL,
    "Immagine" TEXT NOT NULL,
    "Deprecata" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Runa_pkey" PRIMARY KEY ("Nome")
);

-- CreateTable
CREATE TABLE "Tipologia_runa" (
    "Id" INTEGER NOT NULL,
    "Nome" TEXT NOT NULL,

    CONSTRAINT "Tipologia_runa_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Partita" (
    "Id" SERIAL NOT NULL,
    "ConfigurazioneId" INTEGER NOT NULL,
    "Data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Risultato" "Risultato" NOT NULL,
    "AccountId" INTEGER NOT NULL,

    CONSTRAINT "Partita_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Modifica" (
    "Soggetto_modifica" TEXT NOT NULL,
    "Id_Statistica" INTEGER NOT NULL,
    "Nuovo_Valore" DECIMAL(65,30) NOT NULL,
    "Versione" TEXT NOT NULL,

    CONSTRAINT "Modifica_pkey" PRIMARY KEY ("Soggetto_modifica","Id_Statistica","Versione")
);

-- CreateTable
CREATE TABLE "Storico" (
    "Versione" TEXT NOT NULL,
    "Data" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Storico_pkey" PRIMARY KEY ("Versione")
);

-- CreateTable
CREATE TABLE "Statistica" (
    "Id" INTEGER NOT NULL,
    "Nome" TEXT NOT NULL,
    "Livello" INTEGER NOT NULL,

    CONSTRAINT "Statistica_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Campione_nome_key" ON "Campione"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Campione_Icona_key" ON "Campione"("Icona");

-- CreateIndex
CREATE UNIQUE INDEX "Campione_Titolo_key" ON "Campione"("Titolo");

-- CreateIndex
CREATE UNIQUE INDEX "Cosmetico_Nome_key" ON "Cosmetico"("Nome");

-- CreateIndex
CREATE UNIQUE INDEX "Account_Nome_key" ON "Account"("Nome");

-- CreateIndex
CREATE UNIQUE INDEX "Account_RiotID_key" ON "Account"("RiotID");

-- CreateIndex
CREATE UNIQUE INDEX "Sessione_guid_id_key" ON "Sessione"("guid_id");

-- CreateIndex
CREATE INDEX "Kit_IdCampione_idx" ON "Kit"("IdCampione");

-- CreateIndex
CREATE UNIQUE INDEX "Abilita_NomeAbilità_key" ON "Abilita"("NomeAbilità");

-- CreateIndex
CREATE UNIQUE INDEX "Kit_Abilita_IdAbilita_key" ON "Kit_Abilita"("IdAbilita");

-- AddForeignKey
ALTER TABLE "Campione" ADD CONSTRAINT "Campione_Ruolo_fkey" FOREIGN KEY ("Ruolo") REFERENCES "Ruolo"("Nome") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cosmetico" ADD CONSTRAINT "Cosmetico_IdCampione_fkey" FOREIGN KEY ("IdCampione") REFERENCES "Campione"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Campione_Razza" ADD CONSTRAINT "Campione_Razza_IdCampione_fkey" FOREIGN KEY ("IdCampione") REFERENCES "Campione"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Campione_Razza" ADD CONSTRAINT "Campione_Razza_NomeRazza_fkey" FOREIGN KEY ("NomeRazza") REFERENCES "Razza"("Nome") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Campione_Posizione" ADD CONSTRAINT "Campione_Posizione_IdCampione_fkey" FOREIGN KEY ("IdCampione") REFERENCES "Campione"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Campione_Posizione" ADD CONSTRAINT "Campione_Posizione_NomePosizione_fkey" FOREIGN KEY ("NomePosizione") REFERENCES "Posizione"("Nome") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Campione_Regione" ADD CONSTRAINT "Campione_Regione_IdCampione_fkey" FOREIGN KEY ("IdCampione") REFERENCES "Campione"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Campione_Regione" ADD CONSTRAINT "Campione_Regione_NomeRegione_fkey" FOREIGN KEY ("NomeRegione") REFERENCES "Regione"("Nome") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Configurazione" ADD CONSTRAINT "Configurazione_IdCampione_fkey" FOREIGN KEY ("IdCampione") REFERENCES "Campione"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Configurazione" ADD CONSTRAINT "Configurazione_Incantesimo1_fkey" FOREIGN KEY ("Incantesimo1") REFERENCES "Incantesimo"("Nome") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Configurazione" ADD CONSTRAINT "Configurazione_Incantesimo2_fkey" FOREIGN KEY ("Incantesimo2") REFERENCES "Incantesimo"("Nome") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Configurazione" ADD CONSTRAINT "Configurazione_Account_fkey" FOREIGN KEY ("Account") REFERENCES "Account"("AccountId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Configurazione" ADD CONSTRAINT "Configurazione_Runa_fkey" FOREIGN KEY ("Runa") REFERENCES "Pagina_Runa"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventario" ADD CONSTRAINT "Inventario_IdInventario_fkey" FOREIGN KEY ("IdInventario") REFERENCES "Configurazione"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventario" ADD CONSTRAINT "Inventario_NomeOggetto_fkey" FOREIGN KEY ("NomeOggetto") REFERENCES "Oggetto"("Nome") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sessione" ADD CONSTRAINT "Sessione_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Account"("AccountId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Kit" ADD CONSTRAINT "Kit_IdCampione_fkey" FOREIGN KEY ("IdCampione") REFERENCES "Campione"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Kit_Abilita" ADD CONSTRAINT "Kit_Abilita_IdKit_fkey" FOREIGN KEY ("IdKit") REFERENCES "Kit"("IdKit") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Kit_Abilita" ADD CONSTRAINT "Kit_Abilita_IdAbilita_fkey" FOREIGN KEY ("IdAbilita") REFERENCES "Abilita"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pagina_Runa" ADD CONSTRAINT "Pagina_Runa_RunaPrimaria_fkey" FOREIGN KEY ("RunaPrimaria") REFERENCES "Sezione_Runa"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pagina_Runa" ADD CONSTRAINT "Pagina_Runa_RunaSecondaria_fkey" FOREIGN KEY ("RunaSecondaria") REFERENCES "Sezione_Runa"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pagina_Runa" ADD CONSTRAINT "Pagina_Runa_Frammenti_fkey" FOREIGN KEY ("Frammenti") REFERENCES "Sezione_Runa"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sezione_Runa" ADD CONSTRAINT "Sezione_Runa_Pietrachiave_fkey" FOREIGN KEY ("Pietrachiave") REFERENCES "Runa"("Nome") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sezione_Runa" ADD CONSTRAINT "Sezione_Runa_RigaSuperiore_fkey" FOREIGN KEY ("RigaSuperiore") REFERENCES "Runa"("Nome") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sezione_Runa" ADD CONSTRAINT "Sezione_Runa_RigaCentrale_fkey" FOREIGN KEY ("RigaCentrale") REFERENCES "Runa"("Nome") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sezione_Runa" ADD CONSTRAINT "Sezione_Runa_RigaInferiore_fkey" FOREIGN KEY ("RigaInferiore") REFERENCES "Runa"("Nome") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Runa" ADD CONSTRAINT "Runa_CamminoId_fkey" FOREIGN KEY ("CamminoId") REFERENCES "Tipologia_runa"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Partita" ADD CONSTRAINT "Partita_AccountId_fkey" FOREIGN KEY ("AccountId") REFERENCES "Account"("AccountId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Partita" ADD CONSTRAINT "Partita_ConfigurazioneId_fkey" FOREIGN KEY ("ConfigurazioneId") REFERENCES "Configurazione"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Modifica" ADD CONSTRAINT "Modifica_Versione_fkey" FOREIGN KEY ("Versione") REFERENCES "Storico"("Versione") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Modifica" ADD CONSTRAINT "Modifica_Id_Statistica_fkey" FOREIGN KEY ("Id_Statistica") REFERENCES "Statistica"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

