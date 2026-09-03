import prisma from "./prisma";
import type { Runa } from "./prisma/client";

let runeCache: Runa[] | null = null;

async function getRunesCache() {
  if (runeCache) {
    return runeCache; 
  }

  // SELECT * FROM runa 
  runeCache = await prisma.runa.findMany({});
  
  return runeCache;
}

export async function getRunes() {
    const runes = await getRunesCache();

    return runes;
}

// SELECT * FROM tipologia_runa 
export async function getPaths() {
    return await prisma.tipologia_runa.findMany({})
}

export async function getRunesbyFilter(pathId: number, runeTier: number) {
    const runes = await getRunesCache();

    return runes.filter((rune) => rune.CamminoId === pathId && rune.Grado === runeTier);
}