import { type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getChampionsBasicInfo } from '$lib/server/championsManager';

export const load: PageServerLoad = async ({params, cookies, locals}) => {
  const champions = await getChampionsBasicInfo();
  
  if(!locals.user) {
    return {
      profile: undefined,
      role: "User",
      champions: champions
    }
  }

  return {
    profile: locals.user.username,
    role: locals.user.isAdmin
      ? "Admin" : "User",
    champions: champions
  };
};

export const actions = {
  filterByName: async ({ request }) => {
    
    const formData = await request.formData();
    
    const searchedName = formData.get('search')?.toString().toLowerCase() || '';

    const champions = await getChampionsBasicInfo();

    const filteredChampions = champions.filter(champ => champ.nome.toLowerCase().startsWith(searchedName));
    
    return {
      success: true,
      champions: filteredChampions
    };
  }
} satisfies Actions;