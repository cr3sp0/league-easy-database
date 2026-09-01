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

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 140
  },
  update: {},
  create: {
    IdStatistiche: 140,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 30,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 141
  },
  update: {},
  create: {
    IdStatistiche: 141,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 55,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 142
  },
  update: {},
  create: {
    IdStatistiche: 142,
    Vita: 350,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 75,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 143
  },
  update: {},
  create: {
    IdStatistiche: 143,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 20,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 144
  },
  update: {},
  create: {
    IdStatistiche: 144,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 45,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 145
  },
  update: {},
  create: {
    IdStatistiche: 145,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 40,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 80,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 146
  },
  update: {},
  create: {
    IdStatistiche: 146,
    Vita: 200,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 30,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 147
  },
  update: {},
  create: {
    IdStatistiche: 147,
    Vita: 300,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 70,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 148
  },
  update: {},
  create: {
    IdStatistiche: 148,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 40,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 25,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 149
  },
  update: {},
  create: {
    IdStatistiche: 149,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 25,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 25,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 150
  },
  update: {},
  create: {
    IdStatistiche: 150,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 40,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 60,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 151
  },
  update: {},
  create: {
    IdStatistiche: 151,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 50,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 105,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 152
  },
  update: {},
  create: {
    IdStatistiche: 152,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 45,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 153
  },
  update: {},
  create: {
    IdStatistiche: 153,
    Vita: 450,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 45,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 154
  },
  update: {},
  create: {
    IdStatistiche: 154,
    Vita: 350,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 75,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 155
  },
  update: {},
  create: {
    IdStatistiche: 155,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 45,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 156
  },
  update: {},
  create: {
    IdStatistiche: 156,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 65,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 157
  },
  update: {},
  create: {
    IdStatistiche: 157,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 45,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 158
  },
  update: {},
  create: {
    IdStatistiche: 158,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 45,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 40,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 159
  },
  update: {},
  create: {
    IdStatistiche: 159,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 45,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 30,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 160
  },
  update: {},
  create: {
    IdStatistiche: 160,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 45,
    Armatura: 35,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 161
  },
  update: {},
  create: {
    IdStatistiche: 161,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 45,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 162
  },
  update: {},
  create: {
    IdStatistiche: 162,
    Vita: 150,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 30,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 163
  },
  update: {},
  create: {
    IdStatistiche: 163,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 60,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 164
  },
  update: {},
  create: {
    IdStatistiche: 164,
    Vita: 500,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 40,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 165
  },
  update: {},
  create: {
    IdStatistiche: 165,
    Vita: 150,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 25,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 166
  },
  update: {},
  create: {
    IdStatistiche: 166,
    Vita: 200,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 30,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 30,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 167
  },
  update: {},
  create: {
    IdStatistiche: 167,
    Vita: 200,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 35,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 100,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 168
  },
  update: {},
  create: {
    IdStatistiche: 168,
    Vita: 250,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 100,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 169
  },
  update: {},
  create: {
    IdStatistiche: 169,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 150,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 55,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 170
  },
  update: {},
  create: {
    IdStatistiche: 170,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 150,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 65,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 171
  },
  update: {},
  create: {
    IdStatistiche: 171,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 150,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 45,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 172
  },
  update: {},
  create: {
    IdStatistiche: 172,
    Vita: 400,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 150,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 35,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 173
  },
  update: {},
  create: {
    IdStatistiche: 173,
    Vita: 250,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 150,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 35,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 174
  },
  update: {},
  create: {
    IdStatistiche: 174,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 150,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 50,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 175
  },
  update: {},
  create: {
    IdStatistiche: 175,
    Vita: 350,
    VitaPerLivello: 0,
    Mana: 500,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 45,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 176
  },
  update: {},
  create: {
    IdStatistiche: 176,
    Vita: 350,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 50,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 177
  },
  update: {},
  create: {
    IdStatistiche: 177,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 30,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 35,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 178
  },
  update: {},
  create: {
    IdStatistiche: 178,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 179
  },
  update: {},
  create: {
    IdStatistiche: 179,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 180
  },
  update: {},
  create: {
    IdStatistiche: 180,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 181
  },
  update: {},
  create: {
    IdStatistiche: 181,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 182
  },
  update: {},
  create: {
    IdStatistiche: 182,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 25,
    CriticoPerLivello: 0,
    Attacco: 50,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 183
  },
  update: {},
  create: {
    IdStatistiche: 183,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 184
  },
  update: {},
  create: {
    IdStatistiche: 184,
    Vita: 350,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 55,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 185
  },
  update: {},
  create: {
    IdStatistiche: 185,
    Vita: 600,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 40,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 186
  },
  update: {},
  create: {
    IdStatistiche: 186,
    Vita: 200,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 100,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 187
  },
  update: {},
  create: {
    IdStatistiche: 187,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 300,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 40,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 188
  },
  update: {},
  create: {
    IdStatistiche: 188,
    Vita: 300,
    VitaPerLivello: 0,
    Mana: 375,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 189
  },
  update: {},
  create: {
    IdStatistiche: 189,
    Vita: 250,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 50,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 190
  },
  update: {},
  create: {
    IdStatistiche: 190,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 191
  },
  update: {},
  create: {
    IdStatistiche: 191,
    Vita: 200,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 75,
    RigenerazioneMana: 75,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 192
  },
  update: {},
  create: {
    IdStatistiche: 192,
    Vita: 200,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 75,
    RigenerazioneMana: 75,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 193
  },
  update: {},
  create: {
    IdStatistiche: 193,
    Vita: 200,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 75,
    RigenerazioneMana: 75,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 194
  },
  update: {},
  create: {
    IdStatistiche: 194,
    Vita: 200,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 75,
    RigenerazioneMana: 75,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 195
  },
  update: {},
  create: {
    IdStatistiche: 195,
    Vita: 200,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 75,
    RigenerazioneMana: 75,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 196
  },
  update: {},
  create: {
    IdStatistiche: 196,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 25,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 197
  },
  update: {},
  create: {
    IdStatistiche: 197,
    Vita: 400,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 55,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 198
  },
  update: {},
  create: {
    IdStatistiche: 198,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 75,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 199
  },
  update: {},
  create: {
    IdStatistiche: 199,
    Vita: 350,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 70,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 200
  },
  update: {},
  create: {
    IdStatistiche: 200,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 25,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 201
  },
  update: {},
  create: {
    IdStatistiche: 201,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 25,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 40,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 202
  },
  update: {},
  create: {
    IdStatistiche: 202,
    Vita: 350,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 70,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 203
  },
  update: {},
  create: {
    IdStatistiche: 203,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 100,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 20,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 204
  },
  update: {},
  create: {
    IdStatistiche: 204,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 110,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 205
  },
  update: {},
  create: {
    IdStatistiche: 205,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 90,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 206
  },
  update: {},
  create: {
    IdStatistiche: 206,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 50,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 60,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 207
  },
  update: {},
  create: {
    IdStatistiche: 207,
    Vita: 450,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 45,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 208
  },
  update: {},
  create: {
    IdStatistiche: 208,
    Vita: 400,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 45,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 209
  },
  update: {},
  create: {
    IdStatistiche: 209,
    Vita: 500,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 20,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 210
  },
  update: {},
  create: {
    IdStatistiche: 210,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 211
  },
  update: {},
  create: {
    IdStatistiche: 211,
    Vita: 250,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 80,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 212
  },
  update: {},
  create: {
    IdStatistiche: 212,
    Vita: 250,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 60,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 213
  },
  update: {},
  create: {
    IdStatistiche: 213,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 50,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 214
  },
  update: {},
  create: {
    IdStatistiche: 214,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 215
  },
  update: {},
  create: {
    IdStatistiche: 215,
    Vita: 450,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 40,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 25,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 216
  },
  update: {},
  create: {
    IdStatistiche: 216,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 40,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 217
  },
  update: {},
  create: {
    IdStatistiche: 217,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 55,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 55,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 218
  },
  update: {},
  create: {
    IdStatistiche: 218,
    Vita: 150,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 35,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 219
  },
  update: {},
  create: {
    IdStatistiche: 219,
    Vita: 250,
    VitaPerLivello: 0,
    Mana: 600,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 65,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 220
  },
  update: {},
  create: {
    IdStatistiche: 220,
    Vita: 300,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 60,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 221
  },
  update: {},
  create: {
    IdStatistiche: 221,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 600,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 100,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 222
  },
  update: {},
  create: {
    IdStatistiche: 222,
    Vita: 150,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 223
  },
  update: {},
  create: {
    IdStatistiche: 223,
    Vita: 300,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 50,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 224
  },
  update: {},
  create: {
    IdStatistiche: 224,
    Vita: 400,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 40,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 100,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 225
  },
  update: {},
  create: {
    IdStatistiche: 225,
    Vita: 350,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 45,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 45,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 226
  },
  update: {},
  create: {
    IdStatistiche: 226,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 20,
    CriticoPerLivello: 0,
    Attacco: 15,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 227
  },
  update: {},
  create: {
    IdStatistiche: 227,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 228
  },
  update: {},
  create: {
    IdStatistiche: 228,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 25,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 25,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 60,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 229
  },
  update: {},
  create: {
    IdStatistiche: 229,
    Vita: 500,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 230
  },
  update: {},
  create: {
    IdStatistiche: 230,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 45,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 40,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 231
  },
  update: {},
  create: {
    IdStatistiche: 231,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 25,
    CriticoPerLivello: 0,
    Attacco: 55,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 232
  },
  update: {},
  create: {
    IdStatistiche: 232,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 25,
    CriticoPerLivello: 0,
    Attacco: 0,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 40,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 233
  },
  update: {},
  create: {
    IdStatistiche: 233,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 25,
    CriticoPerLivello: 0,
    Attacco: 50,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 234
  },
  update: {},
  create: {
    IdStatistiche: 234,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 15,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 235
  },
  update: {},
  create: {
    IdStatistiche: 235,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 60,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 236
  },
  update: {},
  create: {
    IdStatistiche: 236,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 45,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 237
  },
  update: {},
  create: {
    IdStatistiche: 237,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 55,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 238
  },
  update: {},
  create: {
    IdStatistiche: 238,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 55,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});

await prisma.setBase.upsert({
  where: {
    IdStatistiche: 239
  },
  update: {},
  create: {
    IdStatistiche: 239,
    Vita: 0,
    VitaPerLivello: 0,
    Mana: 0,
    ManaPerLivello: 0,
    Velocità_di_movimento: 0,
    Armatura: 0,
    ArmaturaPerLivello: 0,
    ResistenzaMagica: 0,
    ResistenzaMagicaPerLivello: 0,
    Gittata: 0,
    RigenerazioneVita: 0,
    RigenerazioneMana: 0,
    RigenerazioneManaPerLivello: 0,
    Critico: 0,
    CriticoPerLivello: 0,
    Attacco: 55,
    AttaccoPerLivello: 0,
    VelocitàDiAttacco: 0,
    VelocitàDiAttaccoPerLivello: 0,
    AttaccoMagico: 0,
  }
});
}

main().catch(console.error).finally(() => prisma.$disconnect());

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