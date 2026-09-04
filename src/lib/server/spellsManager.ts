import prisma from "./prisma";
import type { Incantesimo } from "./prisma/client";

let spellCache: Incantesimo[] | null = null;

async function getSpellsCache() {
  if (spellCache) {
    return spellCache; 
  }

  // SELECT * FROM runa 
  spellCache = await prisma.incantesimo.findMany({});
  
  return spellCache;
}

export async function getSpells() {
    const spells = await getSpellsCache();
    
    return spells;
}