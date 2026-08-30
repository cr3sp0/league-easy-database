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
// Seed abilità campioni — descrizioni in inglese.
// Generato per: Akali, Aurora, Diana, Gwen, Irelia, Jhin, Kindred, Lillia, Mel, Nami, Orianna, Pantheon, Syndra, Zoe, Taliyah.

// Akali
await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Assassin's Mark"
    },
    update: {},
    create: {
        NomeAbilità: "Assassin's Mark",
        Descrizione: "Dealing spell damage to a champion creates a ring around them. Exiting the ring empowers Akali's next attack with bonus range and damage.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Akali_passive.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Five Point Strike"
    },
    update: {},
    create: {
        NomeAbilità: "Five Point Strike",
        Descrizione: "Akali throws five kunai that deal magic damage and slow enemies hit at the tip.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Akali_q.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Twilight Shroud"
    },
    update: {},
    create: {
        NomeAbilità: "Twilight Shroud",
        Descrizione: "Akali throws down a smoke bomb, gaining movement speed and energy. While inside the shroud she becomes invisible and can briefly extend its duration by attacking or using abilities.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Akali_w.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Shuriken Flip"
    },
    update: {},
    create: {
        NomeAbilità: "Shuriken Flip",
        Descrizione: "Akali flips backward and throws a shuriken that damages and marks the first enemy or smoke cloud hit. Recast to dash to the marked target and deal additional damage.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Akali_e.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Perfect Execution"
    },
    update: {},
    create: {
        NomeAbilità: "Perfect Execution",
        Descrizione: "Akali dashes through enemies, dealing magic damage. Recast to dash in a direction and deal additional damage based on the target's missing health.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Akali_r.jpg"
    }
});

// Aurora
await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Spirit Abjuration"
    },
    update: {},
    create: {
        NomeAbilità: "Spirit Abjuration",
        Descrizione: "Aurora's attacks and abilities apply stacks to enemies. At three stacks, the spirits are exorcised, dealing bonus magic damage and causing them to follow Aurora and heal her.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Aurora_passive.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Twofold Hex"
    },
    update: {},
    create: {
        NomeAbilità: "Twofold Hex",
        Descrizione: "Aurora fires a projectile that damages and marks enemies. Recast to pull the marks toward her, damaging enemies caught along the path.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Aurora_q.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Across the Veil"
    },
    update: {},
    create: {
        NomeAbilità: "Across the Veil",
        Descrizione: "Aurora leaps in a direction and becomes invisible, briefly gaining movement speed.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Aurora_w.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "The Weirding"
    },
    update: {},
    create: {
        NomeAbilità: "The Weirding",
        Descrizione: "Aurora releases a wave of spirit energy that damages and slows enemies while she leaps backward.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Aurora_e.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Between Worlds"
    },
    update: {},
    create: {
        NomeAbilità: "Between Worlds",
        Descrizione: "Aurora creates a spirit realm around her that damages and slows enemies. She can move through the realm's boundaries, teleporting between its sides.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Aurora_r.jpg"
    }
});

// Diana
await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Moonsilver Blade"
    },
    update: {},
    create: {
        NomeAbilità: "Moonsilver Blade",
        Descrizione: "Every third attack cleaves nearby enemies for additional magic damage. After casting an ability, Diana gains attack speed for her next three attacks.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Diana_passive.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Crescent Strike"
    },
    update: {},
    create: {
        NomeAbilità: "Crescent Strike",
        Descrizione: "Diana unleashes a bolt of lunar energy in an arc, dealing magic damage and applying Moonlight to enemies hit.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Diana_q.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Pale Cascade"
    },
    update: {},
    create: {
        NomeAbilità: "Pale Cascade",
        Descrizione: "Diana creates three orbiting spheres that explode on contact with enemies. She also gains a shield that is strengthened if all three spheres detonate.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Diana_w.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Lunar Rush"
    },
    update: {},
    create: {
        NomeAbilità: "Lunar Rush",
        Descrizione: "Diana dashes to an enemy and deals magic damage. The cooldown is refreshed when dashing to an enemy afflicted with Moonlight.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Diana_e.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Moonfall"
    },
    update: {},
    create: {
        NomeAbilità: "Moonfall",
        Descrizione: "Diana reveals and pulls nearby enemies toward her, slowing them. After a delay, she deals magic damage around herself, increased for each additional champion pulled.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Diana_r.jpg"
    }
});

// Gwen
await prisma.abilita.upsert({
    where: {
        NomeAbilità: "A Thousand Cuts"
    },
    update: {},
    create: {
        NomeAbilità: "A Thousand Cuts",
        Descrizione: "Gwen's attacks deal additional magic damage based on the target's health. Attacks against champions heal her for a portion of the damage.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Gwen_passive.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Snip Snip!"
    },
    update: {},
    create: {
        NomeAbilità: "Snip Snip!",
        Descrizione: "Gwen rapidly snips with her scissors, dealing magic damage. The final snip deals increased damage and all snips center on the middle of the scissors.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Gwen_q.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Hallowed Mist"
    },
    update: {},
    create: {
        NomeAbilità: "Hallowed Mist",
        Descrizione: "Gwen summons a mist that grants her Armor and Magic Resist. Enemies outside the mist cannot target her, while moving the mist causes it to follow her once.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Gwen_w.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Skip 'n Slash"
    },
    update: {},
    create: {
        NomeAbilità: "Skip 'n Slash",
        Descrizione: "Gwen dashes and empowers her attacks with increased range, attack speed and on-hit magic damage. Hitting an enemy reduces the cooldown of the dash.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Gwen_e.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Needlework"
    },
    update: {},
    create: {
        NomeAbilità: "Needlework",
        Descrizione: "Gwen throws a needle that slows and damages enemies. She can recast the ability twice, firing additional needles and increasing the number of needles with each cast.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Gwen_r.jpg"
    }
});

// Irelia
await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Ionian Fervor"
    },
    update: {},
    create: {
        NomeAbilità: "Ionian Fervor",
        Descrizione: "Hitting enemies with abilities grants stacks of attack speed. At maximum stacks, Irelia gains additional attack speed and her attacks deal bonus magic damage.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Irelia_passive.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Bladesurge"
    },
    update: {},
    create: {
        NomeAbilità: "Bladesurge",
        Descrizione: "Irelia dashes to a target, dealing physical damage and healing herself. The cooldown resets against marked targets, and killing the target also resets the cooldown.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Irelia_q.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Defiant Dance"
    },
    update: {},
    create: {
        NomeAbilità: "Defiant Dance",
        Descrizione: "Irelia charges a blade, reducing incoming physical damage, then releases it to deal physical damage based on the charge duration.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Irelia_w.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Flawless Duet"
    },
    update: {},
    create: {
        NomeAbilità: "Flawless Duet",
        Descrizione: "Irelia sends blades toward two locations. When the second blade arrives, they converge, damaging, stunning and marking enemies caught between them.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Irelia_e.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Vanguard's Edge"
    },
    update: {},
    create: {
        NomeAbilità: "Vanguard's Edge",
        Descrizione: "Irelia launches a blade that marks the first champion hit and forms a wall of blades around them. Enemies hit by the wall take damage and are slowed.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Irelia_r.jpg"
    }
});

// Jhin
await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Whisper"
    },
    update: {},
    create: {
        NomeAbilità: "Whisper",
        Descrizione: "Jhin's weapon, Whisper, is a powerful precision instrument designed to deal superior damage. It fires four shots and gains attack damage from critical strike chance and attack speed; the fourth shot always critically strikes and deals bonus damage.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Jhin_passive.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Dancing Grenade"
    },
    update: {},
    create: {
        NomeAbilità: "Dancing Grenade",
        Descrizione: "Jhin launches a cartridge at an enemy that deals physical damage before bouncing to another nearby target. Damage increases when previous targets die.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Jhin_q.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Deadly Flourish"
    },
    update: {},
    create: {
        NomeAbilità: "Deadly Flourish",
        Descrizione: "Jhin fires a long-range shot that damages the first enemy hit and passes through minions and non-champions with reduced damage. It roots champions that have been damaged by Jhin or his allies.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Jhin_w.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Captive Audience"
    },
    update: {},
    create: {
        NomeAbilità: "Captive Audience",
        Descrizione: "Jhin places an invisible lotus trap that blooms when triggered, slowing enemies and dealing magic damage. Jhin can store multiple traps.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Jhin_e.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Curtain Call"
    },
    update: {},
    create: {
        NomeAbilità: "Curtain Call",
        Descrizione: "Jhin channels and transforms Whisper into a long-range cannon. He can fire four shots that damage and slow enemies; the fourth shot critically strikes and deals increased damage based on missing health.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Jhin_r.jpg"
    }
});

// Kindred
await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Mark of the Kindred"
    },
    update: {},
    create: {
        NomeAbilità: "Mark of the Kindred",
        Descrizione: "Lamb marks an enemy champion for the hunt. Wolf marks jungle monsters. Marks increase the range and power of Kindred's abilities as they are collected.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Kindred_passive.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Dance of Arrows"
    },
    update: {},
    create: {
        NomeAbilità: "Dance of Arrows",
        Descrizione: "Kindred dashes and fires three arrows at nearby targets, dealing physical damage. While inside Wolf's Frenzy, the cooldown is greatly reduced.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Kindred_q.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Wolf's Frenzy"
    },
    update: {},
    create: {
        NomeAbilità: "Wolf's Frenzy",
        Descrizione: "Wolf separates from Lamb and attacks nearby enemies. Lamb's movement generates stacks that restore health when the frenzy begins.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Kindred_w.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Mounting Dread"
    },
    update: {},
    create: {
        NomeAbilità: "Mounting Dread",
        Descrizione: "Lamb slows an enemy and prepares a third attack. The third attack deals additional physical damage based on the target's missing health and can critically strike.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Kindred_e.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Lamb's Respite"
    },
    update: {},
    create: {
        NomeAbilità: "Lamb's Respite",
        Descrizione: "Kindred creates a zone beneath a champion that prevents all units inside from falling below a minimum health threshold. When the effect ends, units are healed.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Kindred_r.jpg"
    }
});

// Lillia
await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Dream-Laden Bough"
    },
    update: {},
    create: {
        NomeAbilità: "Dream-Laden Bough",
        Descrizione: "Lillia's abilities apply a Dream Dust effect that deals a percentage of the target's maximum health as magic damage over time.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Lillia_passive.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Watch Out! Eep!"
    },
    update: {},
    create: {
        NomeAbilità: "Watch Out! Eep!",
        Descrizione: "Lillia swings her branch in a circle, dealing magic damage to nearby enemies and true damage to enemies hit by the outer edge. She gains movement speed when hitting enemies.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Lillia_q.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Swirlseed"
    },
    update: {},
    create: {
        NomeAbilità: "Swirlseed",
        Descrizione: "Lillia throws a seed that rolls until it hits an enemy or terrain. It deals magic damage and slows enemies in an area.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Lillia_w.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Blooming Blows"
    },
    update: {},
    create: {
        NomeAbilità: "Blooming Blows",
        Descrizione: "Lillia charges and swings her branch, dealing magic damage in an area. The center deals increased true damage.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Lillia_e.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Lilting Lullaby"
    },
    update: {},
    create: {
        NomeAbilità: "Lilting Lullaby",
        Descrizione: "Lillia causes enemies affected by Dream Dust to become Drowsy and then Asleep. Sleeping enemies take increased damage from Lillia's next damaging hit.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Lillia_r.jpg"
    }
});

// Mel
await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Sovereign's Domination"
    },
    update: {},
    create: {
        NomeAbilità: "Sovereign's Domination",
        Descrizione: "Mel's abilities and attacks apply stacks of Overwhelming. At three stacks, her next attack or ability against an enemy deals bonus damage. Mel's attacks can also execute enemies below a threshold.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Mel_passive.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Radiant Volley"
    },
    update: {},
    create: {
        NomeAbilità: "Radiant Volley",
        Descrizione: "Mel fires a volley of projectiles in a chosen direction, damaging enemies hit.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Mel_q.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Reflection"
    },
    update: {},
    create: {
        NomeAbilità: "Reflection",
        Descrizione: "Mel creates a zone around herself that briefly reflects incoming projectiles back toward their source and grants her defensive benefits.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Mel_w.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Solar Snare"
    },
    update: {},
    create: {
        NomeAbilità: "Solar Snare",
        Descrizione: "Mel launches a radiant projectile that roots the first enemy hit and damages nearby enemies.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Mel_e.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Golden Eclipse"
    },
    update: {},
    create: {
        NomeAbilità: "Golden Eclipse",
        Descrizione: "Mel detonates the marks created by her abilities on all marked enemy champions, dealing magic damage based on their accumulated marks.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Mel_r.jpg"
    }
});

// Nami
await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Surging Tides"
    },
    update: {},
    create: {
        NomeAbilità: "Surging Tides",
        Descrizione: "Whenever Nami's abilities affect allied champions, they gain movement speed for a short duration.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Nami_passive.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Aqua Prison"
    },
    update: {},
    create: {
        NomeAbilità: "Aqua Prison",
        Descrizione: "Nami sends a bubble to a target area, dealing magic damage and knocking up enemies hit.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Nami_q.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Ebb and Flow"
    },
    update: {},
    create: {
        NomeAbilità: "Ebb and Flow",
        Descrizione: "Nami releases a stream of water that bounces between allies and enemies, healing allies and damaging enemies. Each bounce reduces the effect.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Nami_w.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Tidecaller's Blessing"
    },
    update: {},
    create: {
        NomeAbilità: "Tidecaller's Blessing",
        Descrizione: "Nami empowers an allied champion's attacks, causing them to deal bonus magic damage and slow their targets for a short duration.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Nami_e.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Tidal Wave"
    },
    update: {},
    create: {
        NomeAbilità: "Tidal Wave",
        Descrizione: "Nami summons a massive wave that travels forward, knocking up and slowing enemies while granting allied champions affected by the wave increased movement speed.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Nami_r.jpg"
    }
});

// Orianna
await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Clockwork Windup"
    },
    update: {},
    create: {
        NomeAbilità: "Clockwork Windup",
        Descrizione: "Orianna's attacks deal additional magic damage and gain increased damage against the same target with consecutive attacks.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Orianna_passive.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Command: Attack"
    },
    update: {},
    create: {
        NomeAbilità: "Command: Attack",
        Descrizione: "Orianna commands the Ball to travel to a target location, dealing magic damage to enemies along its path and remaining at the destination.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Orianna_q.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Command: Dissonance"
    },
    update: {},
    create: {
        NomeAbilità: "Command: Dissonance",
        Descrizione: "Orianna commands the Ball to release a pulse of energy, dealing magic damage and leaving a field that slows enemies and speeds allies.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Orianna_w.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Command: Protect"
    },
    update: {},
    create: {
        NomeAbilità: "Command: Protect",
        Descrizione: "Orianna commands the Ball to attach to an allied champion, granting them a shield and bonus armor and magic resistance. The Ball also damages enemies it passes through.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Orianna_e.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Command: Shockwave"
    },
    update: {},
    create: {
        NomeAbilità: "Command: Shockwave",
        Descrizione: "Orianna commands the Ball to unleash a shockwave that pulls nearby enemies toward it and deals magic damage.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Orianna_r.jpg"
    }
});

// Pantheon
await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Mortal Will"
    },
    update: {},
    create: {
        NomeAbilità: "Mortal Will",
        Descrizione: "Pantheon gains a stack when attacking or casting an ability. At five stacks, his next basic ability is empowered with an additional effect.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Pantheon_passive.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Comet Spear"
    },
    update: {},
    create: {
        NomeAbilità: "Comet Spear",
        Descrizione: "Pantheon charges and throws his spear, or thrusts it forward. The ability deals physical damage and has increased damage against low-health enemies.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Pantheon_q.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Shield Vault"
    },
    update: {},
    create: {
        NomeAbilità: "Shield Vault",
        Descrizione: "Pantheon leaps toward an enemy, stunning them and dealing physical damage.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Pantheon_w.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Aegis Assault"
    },
    update: {},
    create: {
        NomeAbilità: "Aegis Assault",
        Descrizione: "Pantheon raises his shield, becoming immune to damage from the front while striking repeatedly. Releasing the ability ends the assault with a final empowered strike.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Pantheon_e.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Grand Starfall"
    },
    update: {},
    create: {
        NomeAbilità: "Grand Starfall",
        Descrizione: "Pantheon leaps into the air and crashes down at a target location, damaging enemies along the path and at the landing point.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Pantheon_r.jpg"
    }
});

// Syndra
await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Transcendence"
    },
    update: {},
    create: {
        NomeAbilità: "Transcendence",
        Descrizione: "Syndra collects Splinters of Wrath by damaging enemies and interacting with her abilities. At thresholds, her abilities gain additional effects and power.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Syndra_passive.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Dark Sphere"
    },
    update: {},
    create: {
        NomeAbilità: "Dark Sphere",
        Descrizione: "Syndra conjures a dark sphere that deals magic damage and remains on the ground briefly, serving as a source for her other abilities.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Syndra_q.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Force of Will"
    },
    update: {},
    create: {
        NomeAbilità: "Force of Will",
        Descrizione: "Syndra grabs a nearby dark sphere or enemy and throws it to a target location, dealing magic damage and slowing enemies hit.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Syndra_w.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Scatter the Weak"
    },
    update: {},
    create: {
        NomeAbilità: "Scatter the Weak",
        Descrizione: "Syndra knocks back enemies and dark spheres in a direction. Enemies hit by the spheres are stunned.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Syndra_e.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Unleashed Power"
    },
    update: {},
    create: {
        NomeAbilità: "Unleashed Power",
        Descrizione: "Syndra unleashes all available dark spheres at a target enemy champion, dealing heavy magic damage.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Syndra_r.jpg"
    }
});

// Zoe
await prisma.abilita.upsert({
    where: {
        NomeAbilità: "More Sparkles!"
    },
    update: {},
    create: {
        NomeAbilità: "More Sparkles!",
        Descrizione: "Zoe's next basic attack after casting an ability deals bonus magic damage.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Zoe_passive.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Paddle Star!"
    },
    update: {},
    create: {
        NomeAbilità: "Paddle Star!",
        Descrizione: "Zoe fires a star that deals magic damage and can be redirected in flight. The damage increases with the distance traveled.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Zoe_q.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Spell Thief"
    },
    update: {},
    create: {
        NomeAbilità: "Spell Thief",
        Descrizione: "Zoe can pick up enemy summoner spells and active item spells as Spell Shards. Casting one grants her additional movement speed and summons three attacks against a nearby enemy.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Zoe_w.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Sleepy Trouble Bubble"
    },
    update: {},
    create: {
        NomeAbilità: "Sleepy Trouble Bubble",
        Descrizione: "Zoe fires a bubble that puts the first enemy hit to sleep after a delay and deals additional damage when the target wakes. The bubble can travel farther through walls.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Zoe_e.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Portal Jump"
    },
    update: {},
    create: {
        NomeAbilità: "Portal Jump",
        Descrizione: "Zoe teleports briefly to a nearby location, gaining vision there, then returns to her original position.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Zoe_r.jpg"
    }
});

// Taliyah
await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Rock Surfing"
    },
    update: {},
    create: {
        NomeAbilità: "Rock Surfing",
        Descrizione: "Taliyah gains movement speed while near terrain. Recently worked ground reduces the effectiveness of her next Threaded Volley.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Taliyah_passive.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Threaded Volley"
    },
    update: {},
    create: {
        NomeAbilità: "Threaded Volley",
        Descrizione: "Taliyah throws a series of stones in a direction while moving freely. Casting on worked ground consumes it to throw a single larger stone.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Taliyah_q.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Seismic Shove"
    },
    update: {},
    create: {
        NomeAbilità: "Seismic Shove",
        Descrizione: "Taliyah causes an area of ground to erupt, knocking enemies toward a chosen direction.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Taliyah_w.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Unraveled Earth"
    },
    update: {},
    create: {
        NomeAbilità: "Unraveled Earth",
        Descrizione: "Taliyah scatters explosive rocks across an area. Enemies that dash or are displaced through the area take damage and trigger additional effects.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Taliyah_e.jpg"
    }
});

await prisma.abilita.upsert({
    where: {
        NomeAbilità: "Weaver's Wall"
    },
    update: {},
    create: {
        NomeAbilità: "Weaver's Wall",
        Descrizione: "Taliyah summons a massive wall of stone that travels in a chosen direction. Recast or taking damage causes her to leave the wall.",
        Immagine: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/ability/Taliyah_r.jpg"
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