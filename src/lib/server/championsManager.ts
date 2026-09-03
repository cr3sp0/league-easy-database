import prisma from '$lib/server/prisma';
import type { Campione, Prisma } from './prisma/client';
import { CosmeticoScalarFieldEnum } from './prisma/internal/prismaNamespace';

let championsCache: Campione[] | null = null;

type CampioniConCosmetici = Prisma.CampioneGetPayload<{
  include: { Cosmetico: true }
}>;

let champAndCosmeticsCache: CampioniConCosmetici[] | null = null; 

async function getFullChampionsAndCosmeticsCache() {
  if (champAndCosmeticsCache) {
    return champAndCosmeticsCache; 
  }

  // SELECT * FROM campione JOIN cosmetico ON IdCampione ORDER BY cosmetico.Immagine
  champAndCosmeticsCache = await prisma.campione.findMany({
    include: {
      Cosmetico: {
        orderBy: {
          Immagine: 'asc'
        }
      },
    },
  });
  
  return champAndCosmeticsCache;
}

async function getFullChampionsCache() {
  if (championsCache) {
    return championsCache; 
  }

  const allChampionsAndCosmetics = await getFullChampionsAndCosmeticsCache();
  
  championsCache = allChampionsAndCosmetics.map((champ) => {
    const { Cosmetico, ...nakedChamp } = champ;
    
    return nakedChamp;
  });
  
  return championsCache;
}

export async function getChampionsBasicInfo() {
  const allChampions = await getFullChampionsCache();
  
  return allChampions.map(champ => ({
    nome: champ.nome,
    Icona: champ.Icona
  }));
}

export async function getChampionByName(name: string) {
  const allChampions = await getFullChampionsCache();
  return allChampions.find(champ => champ.nome.toLowerCase() === name.toLowerCase());
}

export async function getChampionAndCosmeticsByName(name: string) {
  const allChampionsAndCosmetics = await getFullChampionsAndCosmeticsCache();
  return allChampionsAndCosmetics.find(champ => champ.nome.toLowerCase() === name.toLowerCase());
}

export async function getStats(champID : number) {
  const champStats = await prisma.setBase.findFirst({
    where: {
      IdStatistiche: champID
    }
  })

  return champStats
}

// Empty Cache
export function invalidateChampionsCache() {
  championsCache = null;
  champAndCosmeticsCache = null;
}