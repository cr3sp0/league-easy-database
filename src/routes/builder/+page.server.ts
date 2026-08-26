import { error, type Action, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getChampionsBasicInfo } from '$lib/server/championsManager';

function getRandomIndices(champions: { nome: string; Icona: string;}[]) {

    const randomIndices: number[] = [];
    const count = Math.min(4, champions.length);
    
    while (randomIndices.length < count) {
        const randomIndex = Math.floor(Math.random() * champions.length);
        
        if (!randomIndices.includes(randomIndex)) {
            randomIndices.push(randomIndex);
        }
    }

    return randomIndices;
}

export const load: PageServerLoad = async ({ cookies }) => {
  try {
    const champions = await getChampionsBasicInfo();
    const randomIndices = getRandomIndices(champions);
  
    return {
      profile: cookies.get('ledb_session'),
      champions,
      randomIndices
    };
  } catch (errore: any) {
    console.log("ERRORE:", errore.message);
    return errore(500, "Champion fetch failed");
  }
};

export const actions = {
  filterByName: async ({ request }) => {
    
    const formData = await request.formData();
    
    const searchedName = formData.get('championName')?.toString().toLowerCase() || '';

    const champions = await getChampionsBasicInfo();

    if (searchedName.length <= 0) {
      console.log("entrato qua");
     return {
      success: true,
      indices: getRandomIndices(champions)
     } 
    }

    let indices: number[] = [];

    for (let i = 0; i < champions.length; i++) {
      if (champions[i].nome.toLowerCase().startsWith(searchedName)) {
        indices.push(i);
      }
    }
    
    return {
      success: true,
      indices: indices
    };
  }
} satisfies Actions;