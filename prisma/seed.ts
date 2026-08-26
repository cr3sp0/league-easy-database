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
await prisma.runa.upsert({
  where: { Nome: "Attacco sostenuto" },
  update: {},
  create: {
    Nome: "Attacco sostenuto",
    CamminoId: 1,
    Descrizione: "Colpire un campione nemico con 3 attacchi base consecutivi infligge danni adattivi bonus e aumenta i danni inflitti finché resti in combattimento.",
    Grado: 0,
    Immagine: ""
  },
});

await prisma.runa.upsert({
  where: { Nome: "Piede lesto" },
  update: {},
  create: {
    Nome: "Piede lesto",
    CamminoId: 1,
    Descrizione: "Attaccare e muoversi genera cariche di Energia. A 100 cariche, il tuo prossimo attacco è Energizzato, ti cura e ti conferisce velocità di movimento.",
    Grado: 0,
    Immagine: ""
  },
});

await prisma.runa.upsert({
  where: { Nome: "Conquistatore" },
  update: {},
  create: {
    Nome: "Conquistatore",
    CamminoId: 1,
    Descrizione: "Gli attacchi base e le abilità che infliggono danni a un campione nemico forniscono cariche di Forza adattiva. Al massimo delle cariche, ottieni ulteriore Forza adattiva e curi una parte dei danni inflitti ai campioni.",
    Grado: 0,
    Immagine: ""
  },
});

await prisma.runa.upsert({
  where: { Nome: "Assorbi vita" },
  update: {},
  create: {
    Nome: "Assorbi vita",
    CamminoId: 1,
    Descrizione: "Uccidere un bersaglio ripristina salute.",
    Grado: 1,
    Immagine: ""
  },
});

await prisma.runa.upsert({
  where: { Nome: "Trionfo" },
  update: {},
  create: {
    Nome: "Trionfo",
    CamminoId: 1,
    Descrizione: "Le eliminazioni ripristinano una parte della salute mancante e forniscono oro aggiuntivo.",
    Grado: 1,
    Immagine: ""
  },
});

await prisma.runa.upsert({
  where: { Nome: "Presenza di spirito" },
  update: {},
  create: {
    Nome: "Presenza di spirito",
    CamminoId: 1,
    Descrizione: "Infliggere danni a un campione nemico ripristina una parte del mana o dell'energia. Le eliminazioni ripristinano una parte del mana o dell'energia massimi.",
    Grado: 1,
    Immagine: ""
  },
});

await prisma.runa.upsert({
  where: { Nome: "Leggenda: Alacrità" },
  update: {},
  create: {
    Nome: "Leggenda: Alacrità",
    CamminoId: 1,
    Descrizione: "Ottieni velocità d'attacco per ogni carica di Leggenda. Ottieni progressi verso le cariche di Leggenda tramite eliminazioni di campioni, mostri epici, mostri grandi e minion.",
    Grado: 2,
    Immagine: ""
  },
});

await prisma.runa.upsert({
  where: { Nome: "Leggenda: Tenacia" },
  update: {},
  create: {
    Nome: "Leggenda: Tenacia",
    CamminoId: 1,
    Descrizione: "Ottieni tenacia per ogni carica di Leggenda. Ottieni progressi verso le cariche di Leggenda tramite eliminazioni di campioni, mostri epici, mostri grandi e minion.",
    Grado: 2,
    Immagine: ""
  },
});

await prisma.runa.upsert({
  where: { Nome: "Leggenda: Stirpe" },
  update: {},
  create: {
    Nome: "Leggenda: Stirpe",
    CamminoId: 1,
    Descrizione: "Ottieni rubavita per ogni carica di Leggenda. Ottieni progressi verso le cariche di Leggenda tramite eliminazioni di campioni, mostri epici, mostri grandi e minion.",
    Grado: 2,
    Immagine: ""
  },
});

await prisma.runa.upsert({
  where: { Nome: "Leggenda: Velocità" },
  update: {},
  create: {
    Nome: "Leggenda: Velocità",
    CamminoId: 1,
    Descrizione: "Ottieni velocità abilità di base per ogni carica di Leggenda. Ottieni progressi verso le cariche di Leggenda tramite eliminazioni di campioni, mostri epici, mostri grandi e minion.",
    Grado: 2,
    Immagine: ""
  },
});

await prisma.runa.upsert({
  where: { Nome: "Colpo di grazia" },
  update: {},
  create: {
    Nome: "Colpo di grazia",
    CamminoId: 1,
    Descrizione: "Infliggi danni aumentati ai campioni che hanno meno del 40% della salute massima.",
    Grado: 3,
    Immagine: ""
  },
});

await prisma.runa.upsert({
  where: { Nome: "Taglio profondo" },
  update: {},
  create: {
    Nome: "Taglio profondo",
    CamminoId: 1,
    Descrizione: "Infliggi danni aumentati ai campioni che hanno più del 60% della salute massima.",
    Grado: 3,
    Immagine: ""
  },
});

await prisma.runa.upsert({
  where: { Nome: "Ultima resistenza" },
  update: {},
  create: {
    Nome: "Ultima resistenza",
    CamminoId: 1,
    Descrizione: "Infliggi danni aumentati ai campioni mentre sei sotto il 60% della salute. Il bonus è massimo quando sei al 30% della salute.",
    Grado: 3,
    Immagine: ""
  },
});
await prisma.runa.upsert({
  where: { Nome: "Tempo letale" },
  update: {},
  create: {
    Nome: "Tempo letale",
    CamminoId: 1,
    Descrizione: "Attaccare un campione nemico conferisce accumuli di velocità d'attacco. Al massimo degli accumuli, i tuoi attacchi infliggono danni bonus sul colpo.",
    Grado: 0,
    Immagine: ""
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