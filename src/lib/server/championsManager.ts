import prisma from '$lib/server/prisma';
import type { Campione, Prisma } from './prisma/client';
import { CosmeticoScalarFieldEnum } from './prisma/internal/prismaNamespace';

let championsCache: Campione[] | null = null;
type CampioniConCosmetici = Prisma.CampioneGetPayload<{
  include: { Cosmetico: true} }>;
let champAndCosmeticsCache: CampioniConCosmetici[] | null = null; 

async function getFullChampionsCache() {
  if (championsCache) {
    return championsCache; 
  }

  //SELECT * FROM campione
  championsCache = await prisma.campione.findMany();
  
  return championsCache;
}

async function getFullChampionsAndCosmeticsCache() {
  if (champAndCosmeticsCache) {
    return champAndCosmeticsCache; 
  }

  //SELECT * FROM campione JOIN cosmetico ON IdCampione ORDERBY cosmetico.Immagine
  champAndCosmeticsCache = await prisma.campione.findMany({
  include: {
    Cosmetico: {
      orderBy: {
        Immagine: 'asc'
      }
    }
  },
});
  
  return champAndCosmeticsCache;
}

export async function getChampionsBasicInfo() {
  const allChampions = await getFullChampionsCache();
  
  return allChampions.map(champ => ({
    nome: champ.nome,
    Icona: champ.Icona
  }));
}

export async function getChampionByName(nomeCercato: string) {
  const allChampions = await getFullChampionsCache();
  return allChampions.find(champ => champ.nome.toLowerCase() === nomeCercato.toLowerCase());
}

export async function getChampionAndCosmeticsByName(nomeCercato: string) {
  const allChampionsAndCosmetics = await getFullChampionsAndCosmeticsCache();
  return allChampionsAndCosmetics.find(champ => champ.nome.toLowerCase() === nomeCercato.toLowerCase());
}

//Empty Cache
export function invalidateChampionsCache() {
  championsCache = null;
  champAndCosmeticsCache = null;
}