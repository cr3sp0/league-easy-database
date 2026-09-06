import { type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getChampionByName, getChampionsBasicInfo } from '$lib/server/championsManager';

export const load: PageServerLoad = async ({params, cookies, locals, url}) => {
  const searchedName = url.searchParams.get('search')?.toString();
  console.log(searchedName)
  let champions = !searchedName ?
    await getChampionsBasicInfo() 
    : [await getChampionByName(searchedName)]

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