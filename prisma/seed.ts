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
// Seed di aggiornamento immagini abilità.
// Corregge la directory da /ability/ a /abilities/.

await prisma.abilita.update({
    where: {
        NomeAbilità: "Assassin's Mark"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Akali_passive.jpg"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Five Point Strike"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Akali_q.jpg"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Twilight Shroud"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Akali_w.jpg"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Shuriken Flip"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Akali_e.jpg"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Perfect Execution"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Akali_r.jpg"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Spirit Abjuration"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Aurora_passive.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Twofold Hex"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Aurora_q.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Across the Veil"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Aurora_w.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "The Weirding"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Aurora_e.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Between Worlds"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Aurora_r.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Moonsilver Blade"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Diana_passive.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Crescent Strike"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Diana_q.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Pale Cascade"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Diana_w.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Lunar Rush"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Diana_e.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Moonfall"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Diana_r.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "A Thousand Cuts"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Gwen_passive.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Snip Snip!"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Gwen_q.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Hallowed Mist"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Gwen_w.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Skip 'n Slash"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Gwen_e.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Needlework"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Gwen_r.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Ionian Fervor"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Irelia_passive.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Bladesurge"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Irelia_q.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Defiant Dance"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Irelia_w.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Flawless Duet"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Irelia_e.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Vanguard's Edge"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Irelia_r.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Whisper"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Jhin_passive.jpg"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Dancing Grenade"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Jhin_q.jpg"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Deadly Flourish"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Jhin_w.jpg"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Captive Audience"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Jhin_e.jpg"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Curtain Call"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Jhin_r.jpg"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Mark of the Kindred"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Kindred_passive.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Dance of Arrows"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Kindred_q.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Wolf's Frenzy"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Kindred_w.jpg"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Mounting Dread"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Kindred_e.jpg"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Lamb's Respite"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Kindred_r.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Dream-Laden Bough"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Lillia_passive.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Watch Out! Eep!"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Lillia_q.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Swirlseed"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Lillia_w.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Blooming Blows"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Lillia_e.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Lilting Lullaby"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Lillia_r.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Sovereign's Domination"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Mel_passive.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Radiant Volley"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Mel_q.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Reflection"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Mel_w.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Solar Snare"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Mel_e.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Golden Eclipse"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Mel_r.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Surging Tides"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Nami_passive.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Aqua Prison"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Nami_q.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Ebb and Flow"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Nami_w.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Tidecaller's Blessing"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Nami_e.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Tidal Wave"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Nami_r.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Clockwork Windup"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Orianna_passive.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Command: Attack"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Orianna_q.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Command: Dissonance"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Orianna_w.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Command: Protect"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Orianna_e.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Command: Shockwave"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Orianna_r.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Mortal Will"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Pantheon_passive.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Comet Spear"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Pantheon_q.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Shield Vault"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Pantheon_w.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Aegis Assault"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Pantheon_e.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Grand Starfall"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Pantheon_r.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Transcendence"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Syndra_passive.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Dark Sphere"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Syndra_q.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Force of Will"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Syndra_w.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Scatter the Weak"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Syndra_e.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Unleashed Power"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Syndra_r.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "More Sparkles!"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Zoe_passive.jpg"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Paddle Star!"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Zoe_q.jpg"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Spell Thief"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Zoe_w.jpg"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Sleepy Trouble Bubble"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Zoe_e.jpg"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Portal Jump"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Zoe_r.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Rock Surfing"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Taliyah_passive.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Threaded Volley"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Taliyah_q.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Seismic Shove"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Taliyah_w.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Unraveled Earth"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Taliyah_e.png"
    }
});

await prisma.abilita.update({
    where: {
        NomeAbilità: "Weaver's Wall"
    },
    data: {
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/abilities/Taliyah_r.png"
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