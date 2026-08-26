import prisma from '$lib/server/prisma';

let championsCache: any[] | null = null;

async function getFullChampionsCache() {
  if (championsCache) {
    return championsCache; 
  }

  //SELECT * FROM campione
  championsCache = await prisma.campione.findMany();
  
  return championsCache;
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

//Empty Cache
export function invalidateChampionsCache() {
  championsCache = null;
}