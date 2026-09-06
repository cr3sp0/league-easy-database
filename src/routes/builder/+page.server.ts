import { error, type Action, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getChampionsBasicInfo } from '$lib/server/championsManager';
import { getBuilds } from '$lib/server/buildManager';
import { moreBuilds } from '$lib/server/genericActions';

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

export const load: PageServerLoad = async ({ locals, url }) => {
  try {
    const champions = await getChampionsBasicInfo();
    const randomIndices = getRandomIndices(champions);
    let buildName = url.searchParams.get("build-title") 
    if(buildName === null) {
      buildName = ""
    }

    const builds = await getBuilds({buildTitle: buildName})

    if(!locals.user) {
      return {
        profile: undefined,
        role: "User",
        champions: champions,
        randomIndices: randomIndices,
        communityBuilds: builds
      }
    }

    return {
      profile: locals.user.username,
      role: locals.user.isAdmin
        ? "Admin" : "User",
      champions: champions,
      randomIndices: randomIndices,
      communityBuilds: builds
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
  },

  moreBuilds
} satisfies Actions;