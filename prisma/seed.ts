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
    // AKALI

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "akali",
      Nome: "Stinger Akali"
    }
  },
  update: {},
  create: {
    IdCampione: "akali",
    Nome: "Stinger Akali",
    Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/champions/akali/Akali_1.jpg"
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "akali",
      Nome: "Infernal Akali"
    }
  },
  update: {},
  create: {
    IdCampione: "akali",
    Nome: "Infernal Akali",
    Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/champions/akali/Akali_2.jpg"
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "akali",
      Nome: "All-Star Akali"
    }
  },
  update: {},
  create: {
    IdCampione: "akali",
    Nome: "All-Star Akali",
    Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/champions/akali/Akali_3.jpg"
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "akali",
      Nome: "Nurse Akali"
    }
  },
  update: {},
  create: {
    IdCampione: "akali",
    Nome: "Nurse Akali",
    Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/champions/akali/Akali_4.jpg"
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "akali",
      Nome: "Blood Moon Akali"
    }
  },
  update: {},
  create: {
    IdCampione: "akali",
    Nome: "Blood Moon Akali",
    Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/champions/akali/Akali_5.jpg"
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "akali",
      Nome: "Silverfang Akali"
    }
  },
  update: {},
  create: {
    IdCampione: "akali",
    Nome: "Silverfang Akali",
    Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/champions/akali/Akali_6.jpg"
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "akali",
      Nome: "Headhunter Akali"
    }
  },
  update: {},
  create: {
    IdCampione: "akali",
    Nome: "Headhunter Akali",
    Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/champions/akali/Akali_7.jpg"
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "akali",
      Nome: "Sashimi Akali"
    }
  },
  update: {},
  create: {
    IdCampione: "akali",
    Nome: "Sashimi Akali",
    Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/champions/akali/Akali_8.jpg"
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "akali",
      Nome: "K/DA Akali"
    }
  },
  update: {},
  create: {
    IdCampione: "akali",
    Nome: "K/DA Akali",
    Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/champions/akali/Akali_9.jpg"
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "akali",
      Nome: "K/DA Akali Prestige Edition"
    }
  },
  update: {},
  create: {
    IdCampione: "akali",
    Nome: "K/DA Akali Prestige Edition",
    Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/champions/akali/Akali_10.jpg"
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "akali",
      Nome: "True Damage Akali"
    }
  },
  update: {},
  create: {
    IdCampione: "akali",
    Nome: "True Damage Akali",
    Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/champions/akali/Akali_11.jpg"
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "akali",
      Nome: "K/DA ALL OUT Akali"
    }
  },
  update: {},
  create: {
    IdCampione: "akali",
    Nome: "K/DA ALL OUT Akali",
    Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/champions/akali/Akali_12.jpg"
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "akali",
      Nome: "Crime City Nightmare Akali"
    }
  },
  update: {},
  create: {
    IdCampione: "akali",
    Nome: "Crime City Nightmare Akali",
    Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/champions/akali/Akali_13.jpg"
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "akali",
      Nome: "Star Guardian Akali"
    }
  },
  update: {},
  create: {
    IdCampione: "akali",
    Nome: "Star Guardian Akali",
    Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/champions/akali/Akali_15.jpg"
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "akali",
      Nome: "DRX Akali"
    }
  },
  update: {},
  create: {
    IdCampione: "akali",
    Nome: "DRX Akali",
    Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/champions/akali/Akali_16.jpg"
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "akali",
      Nome: "Coven Akali"
    }
  },
  update: {},
  create: {
    IdCampione: "akali",
    Nome: "Coven Akali",
    Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/champions/akali/Akali_17.jpg"
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "akali",
      Nome: "Prestige Coven Akali"
    }
  },
  update: {},
  create: {
    IdCampione: "akali",
    Nome: "Prestige Coven Akali",
    Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/champions/akali/Akali_18.jpg"
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "akali",
      Nome: "Empyrean Akali"
    }
  },
  update: {},
  create: {
    IdCampione: "akali",
    Nome: "Empyrean Akali",
    Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/champions/akali/Akali_19.jpg"
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "akali",
      Nome: "Spirit Blossom Akali"
    }
  },
  update: {},
  create: {
    IdCampione: "akali",
    Nome: "Spirit Blossom Akali",
    Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/champions/akali/Akali_20.jpg"
  }
});


// ZOE

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "zoe",
      Nome: "Arcanist Zoe"
    }
  },
  update: {},
  create: {
    IdCampione: "zoe",
    Nome: "Arcanist Zoe",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "zoe",
      Nome: "Prestige Arcanist Zoe"
    }
  },
  update: {},
  create: {
    IdCampione: "zoe",
    Nome: "Prestige Arcanist Zoe",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "zoe",
      Nome: "EDG Zoe"
    }
  },
  update: {},
  create: {
    IdCampione: "zoe",
    Nome: "EDG Zoe",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "zoe",
      Nome: "Winterblessed Zoe"
    }
  },
  update: {},
  create: {
    IdCampione: "zoe",
    Nome: "Winterblessed Zoe",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "zoe",
      Nome: "Dark Star Zoe"
    }
  },
  update: {},
  create: {
    IdCampione: "zoe",
    Nome: "Dark Star Zoe",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "zoe",
      Nome: "Prestige Eternal Aspect Zoe"
    }
  },
  update: {},
  create: {
    IdCampione: "zoe",
    Nome: "Prestige Eternal Aspect Zoe",
    Immagine: ""
  }
});


// LILLIA

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "lillia",
      Nome: "Faerie Court Lillia"
    }
  },
  update: {},
  create: {
    IdCampione: "lillia",
    Nome: "Faerie Court Lillia",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "lillia",
      Nome: "Bowling League Lillia"
    }
  },
  update: {},
  create: {
    IdCampione: "lillia",
    Nome: "Bowling League Lillia",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "lillia",
      Nome: "Petals of Spring Lillia"
    }
  },
  update: {},
  create: {
    IdCampione: "lillia",
    Nome: "Petals of Spring Lillia",
    Immagine: ""
  }
});


// TALIYAH

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "taliyah",
      Nome: "Crystalis Motus Taliyah"
    }
  },
  update: {},
  create: {
    IdCampione: "taliyah",
    Nome: "Crystalis Motus Taliyah",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "taliyah",
      Nome: "Durand's Legacy Taliyah"
    }
  },
  update: {},
  create: {
    IdCampione: "taliyah",
    Nome: "Durand's Legacy Taliyah",
    Immagine: ""
  }
});


// KINDRED

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "kindred",
      Nome: "Woof and Lamb Kindred"
    }
  },
  update: {},
  create: {
    IdCampione: "kindred",
    Nome: "Woof and Lamb Kindred",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "kindred",
      Nome: "DRX Kindred"
    }
  },
  update: {},
  create: {
    IdCampione: "kindred",
    Nome: "DRX Kindred",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "kindred",
      Nome: "Prestige Porcelain Kindred"
    }
  },
  update: {},
  create: {
    IdCampione: "kindred",
    Nome: "Prestige Porcelain Kindred",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "kindred",
      Nome: "Chosen of the Wolf Kindred"
    }
  },
  update: {},
  create: {
    IdCampione: "kindred",
    Nome: "Chosen of the Wolf Kindred",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "kindred",
      Nome: "Pandemonium Kindred"
    }
  },
  update: {},
  create: {
    IdCampione: "kindred",
    Nome: "Pandemonium Kindred",
    Immagine: ""
  }
});


// NAMI

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "nami",
      Nome: "SKT T1 Nami"
    }
  },
  update: {},
  create: {
    IdCampione: "nami",
    Nome: "SKT T1 Nami",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "nami",
      Nome: "Splendid Staff Nami"
    }
  },
  update: {},
  create: {
    IdCampione: "nami",
    Nome: "Splendid Staff Nami",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "nami",
      Nome: "Cosmic Destiny Nami"
    }
  },
  update: {},
  create: {
    IdCampione: "nami",
    Nome: "Cosmic Destiny Nami",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "nami",
      Nome: "Bewitching Nami"
    }
  },
  update: {},
  create: {
    IdCampione: "nami",
    Nome: "Bewitching Nami",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "nami",
      Nome: "Space Groove Nami"
    }
  },
  update: {},
  create: {
    IdCampione: "nami",
    Nome: "Space Groove Nami",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "nami",
      Nome: "Prestige Space Groove Nami"
    }
  },
  update: {},
  create: {
    IdCampione: "nami",
    Nome: "Prestige Space Groove Nami",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "nami",
      Nome: "Coven Nami"
    }
  },
  update: {},
  create: {
    IdCampione: "nami",
    Nome: "Coven Nami",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "nami",
      Nome: "Mythmaker Nami"
    }
  },
  update: {},
  create: {
    IdCampione: "nami",
    Nome: "Mythmaker Nami",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "nami",
      Nome: "Sunken Shadows Nami"
    }
  },
  update: {},
  create: {
    IdCampione: "nami",
    Nome: "Sunken Shadows Nami",
    Immagine: ""
  }
});


// AURORA

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "aurora",
      Nome: "Arcana Aurora"
    }
  },
  update: {},
  create: {
    IdCampione: "aurora",
    Nome: "Arcana Aurora",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "aurora",
      Nome: "Broken Covenant Aurora"
    }
  },
  update: {},
  create: {
    IdCampione: "aurora",
    Nome: "Broken Covenant Aurora",
    Immagine: ""
  }
});


// IRELIA

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "irelia",
      Nome: "Infiltrator Irelia"
    }
  },
  update: {},
  create: {
    IdCampione: "irelia",
    Nome: "Infiltrator Irelia",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "irelia",
      Nome: "iG Irelia"
    }
  },
  update: {},
  create: {
    IdCampione: "irelia",
    Nome: "iG Irelia",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "irelia",
      Nome: "Prestige PROJECT: Irelia"
    }
  },
  update: {},
  create: {
    IdCampione: "irelia",
    Nome: "Prestige PROJECT: Irelia",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "irelia",
      Nome: "High Noon Irelia"
    }
  },
  update: {},
  create: {
    IdCampione: "irelia",
    Nome: "High Noon Irelia",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "irelia",
      Nome: "Sentinel Irelia"
    }
  },
  update: {},
  create: {
    IdCampione: "irelia",
    Nome: "Sentinel Irelia",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "irelia",
      Nome: "Prestige PROJECT: Irelia (2022)"
    }
  },
  update: {},
  create: {
    IdCampione: "irelia",
    Nome: "Prestige PROJECT: Irelia (2022)",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "irelia",
      Nome: "Mythmaker Irelia"
    }
  },
  update: {},
  create: {
    IdCampione: "irelia",
    Nome: "Mythmaker Irelia",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "irelia",
      Nome: "Porcelain Irelia"
    }
  },
  update: {},
  create: {
    IdCampione: "irelia",
    Nome: "Porcelain Irelia",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "irelia",
      Nome: "Spirit Blossom Irelia"
    }
  },
  update: {},
  create: {
    IdCampione: "irelia",
    Nome: "Spirit Blossom Irelia",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "irelia",
      Nome: "Breadsticks Irelia"
    }
  },
  update: {},
  create: {
    IdCampione: "irelia",
    Nome: "Breadsticks Irelia",
    Immagine: ""
  }
});


// GWEN

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "gwen",
      Nome: "Battle Queen Gwen"
    }
  },
  update: {},
  create: {
    IdCampione: "gwen",
    Nome: "Battle Queen Gwen",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "gwen",
      Nome: "Rain Shepherd Gwen"
    }
  },
  update: {},
  create: {
    IdCampione: "gwen",
    Nome: "Rain Shepherd Gwen",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "gwen",
      Nome: "Faerie Court Gwen"
    }
  },
  update: {},
  create: {
    IdCampione: "gwen",
    Nome: "Faerie Court Gwen",
    Immagine: ""
  }
});
await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "akali",
      Nome: "Infernal Akali"
    }
  },
  update: {},
  create: {
    IdCampione: "akali",
    Nome: "Infernal Akali",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "akali",
      Nome: "Blood Moon Akali"
    }
  },
  update: {},
  create: {
    IdCampione: "akali",
    Nome: "Blood Moon Akali",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "akali",
      Nome: "K/DA Akali"
    }
  },
  update: {},
  create: {
    IdCampione: "akali",
    Nome: "K/DA Akali",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "akali",
      Nome: "PROJECT: Akali"
    }
  },
  update: {},
  create: {
    IdCampione: "akali",
    Nome: "PROJECT: Akali",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "zoe",
      Nome: "Cyber Pop Zoe"
    }
  },
  update: {},
  create: {
    IdCampione: "zoe",
    Nome: "Cyber Pop Zoe",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "zoe",
      Nome: "Pool Party Zoe"
    }
  },
  update: {},
  create: {
    IdCampione: "zoe",
    Nome: "Pool Party Zoe",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "zoe",
      Nome: "Star Guardian Zoe"
    }
  },
  update: {},
  create: {
    IdCampione: "zoe",
    Nome: "Star Guardian Zoe",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "lillia",
      Nome: "Nightbringer Lillia"
    }
  },
  update: {},
  create: {
    IdCampione: "lillia",
    Nome: "Nightbringer Lillia",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "lillia",
      Nome: "Spirit Blossom Lillia"
    }
  },
  update: {},
  create: {
    IdCampione: "lillia",
    Nome: "Spirit Blossom Lillia",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "lillia",
      Nome: "Shan Hai Scrolls Lillia"
    }
  },
  update: {},
  create: {
    IdCampione: "lillia",
    Nome: "Shan Hai Scrolls Lillia",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "taliyah",
      Nome: "Freljord Taliyah"
    }
  },
  update: {},
  create: {
    IdCampione: "taliyah",
    Nome: "Freljord Taliyah",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "taliyah",
      Nome: "SSG Taliyah"
    }
  },
  update: {},
  create: {
    IdCampione: "taliyah",
    Nome: "SSG Taliyah",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "taliyah",
      Nome: "Pool Party Taliyah"
    }
  },
  update: {},
  create: {
    IdCampione: "taliyah",
    Nome: "Pool Party Taliyah",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "taliyah",
      Nome: "Star Guardian Taliyah"
    }
  },
  update: {},
  create: {
    IdCampione: "taliyah",
    Nome: "Star Guardian Taliyah",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "kindred",
      Nome: "Shadowfire Kindred"
    }
  },
  update: {},
  create: {
    IdCampione: "kindred",
    Nome: "Shadowfire Kindred",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "kindred",
      Nome: "Super Galaxy Kindred"
    }
  },
  update: {},
  create: {
    IdCampione: "kindred",
    Nome: "Super Galaxy Kindred",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "kindred",
      Nome: "Spirit Blossom Kindred"
    }
  },
  update: {},
  create: {
    IdCampione: "kindred",
    Nome: "Spirit Blossom Kindred",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "kindred",
      Nome: "Porcelain Kindred"
    }
  },
  update: {},
  create: {
    IdCampione: "kindred",
    Nome: "Porcelain Kindred",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "nami",
      Nome: "Koi Nami"
    }
  },
  update: {},
  create: {
    IdCampione: "nami",
    Nome: "Koi Nami",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "nami",
      Nome: "River Spirit Nami"
    }
  },
  update: {},
  create: {
    IdCampione: "nami",
    Nome: "River Spirit Nami",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "nami",
      Nome: "Urf the Nami-tee"
    }
  },
  update: {},
  create: {
    IdCampione: "nami",
    Nome: "Urf the Nami-tee",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "nami",
      Nome: "Program Nami"
    }
  },
  update: {},
  create: {
    IdCampione: "nami",
    Nome: "Program Nami",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "nami",
      Nome: "Deep Sea Nami"
    }
  },
  update: {},
  create: {
    IdCampione: "nami",
    Nome: "Deep Sea Nami",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "aurora",
      Nome: "Battle Bunny Aurora"
    }
  },
  update: {},
  create: {
    IdCampione: "aurora",
    Nome: "Battle Bunny Aurora",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "aurora",
      Nome: "Bewitching Aurora"
    }
  },
  update: {},
  create: {
    IdCampione: "aurora",
    Nome: "Bewitching Aurora",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "irelia",
      Nome: "Nightblade Irelia"
    }
  },
  update: {},
  create: {
    IdCampione: "irelia",
    Nome: "Nightblade Irelia",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "irelia",
      Nome: "Aviator Irelia"
    }
  },
  update: {},
  create: {
    IdCampione: "irelia",
    Nome: "Aviator Irelia",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "irelia",
      Nome: "Frostblade Irelia"
    }
  },
  update: {},
  create: {
    IdCampione: "irelia",
    Nome: "Frostblade Irelia",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "irelia",
      Nome: "Order of the Lotus Irelia"
    }
  },
  update: {},
  create: {
    IdCampione: "irelia",
    Nome: "Order of the Lotus Irelia",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "irelia",
      Nome: "Divine Sword Irelia"
    }
  },
  update: {},
  create: {
    IdCampione: "irelia",
    Nome: "Divine Sword Irelia",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "irelia",
      Nome: "PROJECT: Irelia"
    }
  },
  update: {},
  create: {
    IdCampione: "irelia",
    Nome: "PROJECT: Irelia",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "gwen",
      Nome: "Space Groove Gwen"
    }
  },
  update: {},
  create: {
    IdCampione: "gwen",
    Nome: "Space Groove Gwen",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "gwen",
      Nome: "Café Cuties Gwen"
    }
  },
  update: {},
  create: {
    IdCampione: "gwen",
    Nome: "Café Cuties Gwen",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "gwen",
      Nome: "Soul Fighter Gwen"
    }
  },
  update: {},
  create: {
    IdCampione: "gwen",
    Nome: "Soul Fighter Gwen",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "pantheon",
      Nome: "Myrmidon Pantheon"
    }
  },
  update: {},
  create: {
    IdCampione: "pantheon",
    Nome: "Myrmidon Pantheon",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "pantheon",
      Nome: "Ruthless Pantheon"
    }
  },
  update: {},
  create: {
    IdCampione: "pantheon",
    Nome: "Ruthless Pantheon",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "pantheon",
      Nome: "Perseus Pantheon"
    }
  },
  update: {},
  create: {
    IdCampione: "pantheon",
    Nome: "Perseus Pantheon",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "pantheon",
      Nome: "Dragonslayer Pantheon"
    }
  },
  update: {},
  create: {
    IdCampione: "pantheon",
    Nome: "Dragonslayer Pantheon",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "pantheon",
      Nome: "Pulsefire Pantheon"
    }
  },
  update: {},
  create: {
    IdCampione: "pantheon",
    Nome: "Pulsefire Pantheon",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "pantheon",
      Nome: "Ruined Pantheon"
    }
  },
  update: {},
  create: {
    IdCampione: "pantheon",
    Nome: "Ruined Pantheon",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "orianna",
      Nome: "Sewn Chaos Orianna"
    }
  },
  update: {},
  create: {
    IdCampione: "orianna",
    Nome: "Sewn Chaos Orianna",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "orianna",
      Nome: "Bladecraft Orianna"
    }
  },
  update: {},
  create: {
    IdCampione: "orianna",
    Nome: "Bladecraft Orianna",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "orianna",
      Nome: "TPA Orianna"
    }
  },
  update: {},
  create: {
    IdCampione: "orianna",
    Nome: "TPA Orianna",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "orianna",
      Nome: "Winter Wonder Orianna"
    }
  },
  update: {},
  create: {
    IdCampione: "orianna",
    Nome: "Winter Wonder Orianna",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "orianna",
      Nome: "Heartseeker Orianna"
    }
  },
  update: {},
  create: {
    IdCampione: "orianna",
    Nome: "Heartseeker Orianna",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "orianna",
      Nome: "Pool Party Orianna"
    }
  },
  update: {},
  create: {
    IdCampione: "orianna",
    Nome: "Pool Party Orianna",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "mel",
      Nome: "Default Mel"
    }
  },
  update: {},
  create: {
    IdCampione: "mel",
    Nome: "Default Mel",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "syndra",
      Nome: "Justicar Syndra"
    }
  },
  update: {},
  create: {
    IdCampione: "syndra",
    Nome: "Justicar Syndra",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "syndra",
      Nome: "Atlantean Syndra"
    }
  },
  update: {},
  create: {
    IdCampione: "syndra",
    Nome: "Atlantean Syndra",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "syndra",
      Nome: "Queen of Diamonds Syndra"
    }
  },
  update: {},
  create: {
    IdCampione: "syndra",
    Nome: "Queen of Diamonds Syndra",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "syndra",
      Nome: "Snow Day Syndra"
    }
  },
  update: {},
  create: {
    IdCampione: "syndra",
    Nome: "Snow Day Syndra",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "syndra",
      Nome: "SKT T1 Syndra"
    }
  },
  update: {},
  create: {
    IdCampione: "syndra",
    Nome: "SKT T1 Syndra",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "syndra",
      Nome: "Star Guardian Syndra"
    }
  },
  update: {},
  create: {
    IdCampione: "syndra",
    Nome: "Star Guardian Syndra",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "diana",
      Nome: "Dark Valkyrie Diana"
    }
  },
  update: {},
  create: {
    IdCampione: "diana",
    Nome: "Dark Valkyrie Diana",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "diana",
      Nome: "Lunar Goddess Diana"
    }
  },
  update: {},
  create: {
    IdCampione: "diana",
    Nome: "Lunar Goddess Diana",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "diana",
      Nome: "Blood Moon Diana"
    }
  },
  update: {},
  create: {
    IdCampione: "diana",
    Nome: "Blood Moon Diana",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "diana",
      Nome: "Infernal Diana"
    }
  },
  update: {},
  create: {
    IdCampione: "diana",
    Nome: "Infernal Diana",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "diana",
      Nome: "Prestige Lunar Goddess Diana"
    }
  },
  update: {},
  create: {
    IdCampione: "diana",
    Nome: "Prestige Lunar Goddess Diana",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "jhin",
      Nome: "High Noon Jhin"
    }
  },
  update: {},
  create: {
    IdCampione: "jhin",
    Nome: "High Noon Jhin",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "jhin",
      Nome: "Blood Moon Jhin"
    }
  },
  update: {},
  create: {
    IdCampione: "jhin",
    Nome: "Blood Moon Jhin",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "jhin",
      Nome: "SKT T1 Jhin"
    }
  },
  update: {},
  create: {
    IdCampione: "jhin",
    Nome: "SKT T1 Jhin",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "jhin",
      Nome: "PROJECT: Jhin"
    }
  },
  update: {},
  create: {
    IdCampione: "jhin",
    Nome: "PROJECT: Jhin",
    Immagine: ""
  }
});

await prisma.cosmetico.upsert({
  where: {
    IdCampione_Nome: {
      IdCampione: "jhin",
      Nome: "Dark Cosmic Jhin"
    }
  },
  update: {},
  create: {
    IdCampione: "jhin",
    Nome: "Dark Cosmic Jhin",
    Immagine: ""
  }
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