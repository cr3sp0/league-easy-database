import "dotenv/config";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/lib/server/prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;

const pool = new Pool({
  connectionString,
});

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
});

async function main() {
await prisma.campione.upsert({
  where: { nome: "Fanto" },
  update: {},
  create: {
    ID: "fantini giacomo",
    nome: "Fanto",
    Icona: "https://www.google.com/search?sca_esv=09364ea4b0795b77&udm=2&fbs=ABfTbFVyMZGZf1hfvX9uKjN_-G8c4u0nXx4bEIpwm1lnNH832VTJOOCxW_fyN-Q_ezyf8gLZhoVnym8adqD7lVa5VazpWFun_Hbf9lrDzcGOCzTXwLF8QrRYckTcchjYAyznaoWyVNutNj3vDs5z9k0_6hM1lzEV5TC-7hhOxbSchppD-z-9ZC8&q=fantini+giacomo&sa=X&ved=2ahUKEwiot7mSjryWAxXfif0HHUPxNTMQtKgLegQIFxAB&biw=1366&bih=633&dpr=1#sv=CAMSURoyKhBlLVptX2lrd1Jjbk5VZGRNMg5abV9pa3dSY25OVWRkTToOcklUdnA5dGNjZVRvbU0gBCoXCgFzEhBlLVptX2lrd1Jjbk5VZGRNGAEwARgHIKzwu80MSggQARgBIAEoAQ",
    Titolo: "Lo studente modello",
    Descrizione: "Fanto è uno sfegatato utilizzatore di linux che usa le sue conoscenze per abbattere i nemici che gli si parano davanti",
    Ruolo: "Combattente",
    Vita: 80085,
    Mana: 1,
    Attacco: 1234,
    Velocità_di_movimento: 20,
    Armatura: 4321,
    Resistenza_magica: 6,
    Velocità_di_attacco: 0.3333,
    Gittata: 3,
  },
});

    await prisma.campione.upsert({
  where: { nome: "Akali" },
  update: {},
  create: {
    ID: "akali",
    nome: "Akali",
    Icona: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/champions/akali/Akali_p.jpg",
    Titolo: "L'Assassina Furtiva",
    Descrizione: "Akali è un'assassina agile che combatte sfruttando la furtività.",
    Ruolo: "Assassino",
    Vita: 2623,
    Mana: 0,
    Attacco: 118.1,
    Velocità_di_movimento: 345,
    Armatura: 102.9,
    Resistenza_magica: 71.85,
    Velocità_di_attacco: 0.965,
    Gittata: 125,
  },
});

await prisma.campione.upsert({
  where: { nome: "Zoe" },
  update: {},
  create: {
    ID: "zoe",
    nome: "Zoe",
    Icona: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/champions/zoe/Zoe_p.jpg",
    Titolo: "La Portatrice del Crepuscolo",
    Descrizione: "Zoe è una creatura cosmica capace di manipolare la realtà.",
    Ruolo: "Mago",
    Vita: 2432,
    Mana: 850,
    Attacco: 114.1,
    Velocità_di_movimento: 340,
    Armatura: 100.9,
    Resistenza_magica: 52.1,
    Velocità_di_attacco: 0.924,
    Gittata: 550,
  },
});

await prisma.campione.upsert({
  where: { nome: "Lillia" },
  update: {},
  create: {
    ID: "lillia",
    nome: "Lillia",
    Icona: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/champions/lillia/Lillia_p.jpg",
    Titolo: "La timida fioritura",
    Descrizione: "Lillia è una timida driade che vaga nei sogni degli esseri viventi.",
    Ruolo: "Mago",
    Vita: 2390,
    Mana: 1260,
    Attacco: 113.7,
    Velocità_di_movimento: 330,
    Armatura: 98.5,
    Resistenza_magica: 58.35,
    Velocità_di_attacco: 0.912,
    Gittata: 325,
  },
});

await prisma.campione.upsert({
  where: { nome: "Taliyah" },
  update: {},
  create: {
    ID: "taliyah",
    nome: "Taliyah",
    Icona: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/champions/taliyah/Taliyah_p.jpg",
    Titolo: "La Tessitrice di Pietra",
    Descrizione: "Taliyah è una giovane maga capace di manipolare la pietra.",
    Ruolo: "Mago",
    Vita: 2318,
    Mana: 980,
    Attacco: 114.1,
    Velocità_di_movimento: 330,
    Armatura: 97.9,
    Resistenza_magica: 52.1,
    Velocità_di_attacco: 0.802,
    Gittata: 525,
  },
});

await prisma.campione.upsert({
  where: { nome: "Kindred" },
  update: {},
  create: {
    ID: "kindred",
    nome: "Kindred",
    Icona: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/champions/kindred/Kindred_p.jpg",
    Titolo: "Gli Eterni Cacciatori",
    Descrizione: "Kindred rappresenta le due essenze della morte.",
    Ruolo: "Tiratore",
    Vita: 2363,
    Mana: 895,
    Attacco: 120.25,
    Velocità_di_movimento: 325,
    Armatura: 108.9,
    Resistenza_magica: 52.1,
    Velocità_di_attacco: 0.997,
    Gittata: 500,
  },
});

await prisma.campione.upsert({
  where: { nome: "Nami" },
  update: {},
  create: {
    ID: "nami",
    nome: "Nami",
    Icona: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/champions/nami/Nami_p.jpg",
    Titolo: "La Mareamante",
    Descrizione: "Nami è una vastaya marina che controlla le acque e protegge il suo popolo.",
    Ruolo: "Supporto",
    Vita: 2056,
    Mana: 1096,
    Attacco: 106.7,
    Velocità_di_movimento: 335,
    Armatura: 117.4,
    Resistenza_magica: 52.1,
    Velocità_di_attacco: 0.93,
    Gittata: 550,
  },
});

await prisma.campione.upsert({
  where: { nome: "Aurora" },
  update: {},
  create: {
    ID: "aurora",
    nome: "Aurora",
    Icona: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/champions/aurora/Aurora_p.jpg",
    Titolo: "La Strega tra i Mondi",
    Descrizione: "Aurora è una maga capace di interagire con il mondo degli spiriti.",
    Ruolo: "Mago",
    Vita: 2477,
    Mana: 985,
    Attacco: 104,
    Velocità_di_movimento: 335,
    Armatura: 99.5,
    Resistenza_magica: 52.1,
    Velocità_di_attacco: 0.895,
    Gittata: 550,
  },
});

await prisma.campione.upsert({
  where: { nome: "Irelia" },
  update: {},
  create: {
    ID: "irelia",
    nome: "Irelia",
    Icona: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/champions/irelia/Irelia_p.jpg",
    Titolo: "La Danza delle Lame",
    Descrizione: "Irelia è una guerriera che combatte controllando lame fluttuanti.",
    Ruolo: "Combattente",
    Vita: 2585,
    Mana: 1200,
    Attacco: 124.5,
    Velocità_di_movimento: 335,
    Armatura: 115.9,
    Resistenza_magica: 64.85,
    Velocità_di_attacco: 0.935,
    Gittata: 200,
  },
});

await prisma.campione.upsert({
  where: { nome: "Gwen" },
  update: {},
  create: {
    ID: "gwen",
    nome: "Gwen",
    Icona: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/champions/gwen/Gwen_p.jpg",
    Titolo: "La Sacra Cucitrice",
    Descrizione: "Gwen è una bambola animata che combatte usando grandi forbici.",
    Ruolo: "Combattente",
    Vita: 2575,
    Mana: 1010,
    Attacco: 114,
    Velocità_di_movimento: 340,
    Armatura: 127.4,
    Resistenza_magica: 66.85,
    Velocità_di_attacco: 0.954,
    Gittata: 150,
  },
});

await prisma.campione.upsert({
  where: { nome: "Pantheon" },
  update: {},
  create: {
    ID: "pantheon",
    nome: "Pantheon",
    Icona: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/champions/pantheon/Pantheon_p.jpg",
    Titolo: "L'Inarrestabile",
    Descrizione: "Pantheon è un guerriero che combatte con lancia e scudo.",
    Ruolo: "Combattente",
    Vita: 2503,
    Mana: 844,
    Attacco: 120.1,
    Velocità_di_movimento: 345,
    Armatura: 124.15,
    Resistenza_magica: 62.85,
    Velocità_di_attacco: 0.988,
    Gittata: 175,
  },
});

await prisma.campione.upsert({
  where: { nome: "Orianna" },
  update: {},
  create: {
    ID: "orianna",
    nome: "Orianna",
    Icona: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/champions/orianna/Orianna_p.jpg",
    Titolo: "La Signora degli Ingranaggi",
    Descrizione: "Orianna è una creatura meccanica che combatte controllando una sfera magica.",
    Ruolo: "Mago",
    Vita: 2455,
    Mana: 843,
    Attacco: 88.2,
    Velocità_di_movimento: 325,
    Armatura: 91.4,
    Resistenza_magica: 48.1,
    Velocità_di_attacco: 1.05,
    Gittata: 525,
  },
});

await prisma.campione.upsert({
  where: { nome: "Mel" },
  update: {},
  create: {
    ID: "mel",
    nome: "Mel",
    Icona: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/champions/mel/Mel_p.jpg",
    Titolo: "Il Riflesso dell'Anima",
    Descrizione: "Mel è una potente maga dotata di capacità magiche straordinarie.",
    Ruolo: "Mago",
    Vita: 2358,
    Mana: 843,
    Attacco: 104,
    Velocità_di_movimento: 330,
    Armatura: 100.9,
    Resistenza_magica: 52.1,
    Velocità_di_attacco: 0.902,
    Gittata: 550,
  },
});

await prisma.campione.upsert({
  where: { nome: "Syndra" },
  update: {},
  create: {
    ID: "syndra",
    nome: "Syndra",
    Icona: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/champions/syndra/Syndra_p.jpg",
    Titolo: "La Sorgente Oscura",
    Descrizione: "Syndra è una maga dotata di un enorme pouvoir magique.",
    Ruolo: "Mago",
    Vita: 2331,
    Mana: 1160,
    Attacco: 103.3,
    Velocità_di_movimento: 330,
    Armatura: 103.2,
    Resistenza_magica: 52.1,
    Velocità_di_attacco: 0.871,
    Gittata: 550,
  },
});

await prisma.campione.upsert({
  where: { nome: "Diana" },
  update: {},
  create: {
    ID: "diana",
    nome: "Diana",
    Icona: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/champions/diana/Diana_p.jpg",
    Titolo: "Lo Scorno della Luna",
    Descrizione: "Diana è una guerriera lunare che combatte usando il potere della luna.",
    Ruolo: "Combattente",
    Vita: 2493,
    Mana: 800,
    Attacco: 108,
    Velocità_di_movimento: 345,
    Armatura: 104.1,
    Resistenza_magica: 66.85,
    Velocità_di_attacco: 0.861,
    Gittata: 150,
  },
});

await prisma.campione.upsert({
  where: { nome: "Jhin" },
  update: {},
  create: {
    ID: "jhin",
    nome: "Jhin",
    Icona: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/champions/jhin/Jhin_p.jpg",
    Titolo: "Il Virtuoso",
    Descrizione: "Jhin è un meticoloso criminale ossessionato dalla perfezione.",
    Ruolo: "Tiratore",
    Vita: 2474,
    Mana: 1150,
    Attacco: 133.8,
    Velocità_di_movimento: 330,
    Armatura: 103.9,
    Resistenza_magica: 52.1,
    Velocità_di_attacco: 0.944,
    Gittata: 550,
  },
});

}

main()
  .then(async () => {
    await prisma.$disconnect();
    await pool.end();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    await pool.end();
    process.exit(1);
  });