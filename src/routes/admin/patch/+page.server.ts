import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from '../../$types';
import { getItems } from '$lib/server/itemManager';
import { getChampionsBasicInfo } from '$lib/server/championsManager';
import { getRunes } from '$lib/server/runeManager';

export const load: PageServerLoad = async ({locals}) => {

  if(!locals.user || !locals.user.isAdmin) {
    throw redirect(303, "/")
  }

  let items
  let champions
  let runes

  try {
    
    items = await getItems({})
    champions = await getChampionsBasicInfo()
    runes = await getRunes()

  } catch (err: any) {
    console.log(err.message)

    return error(500, "Loading error")
  }

  return {
    profile: locals.user 
      ? locals.user.username : undefined,
    role: locals.user.isAdmin
      ? "Admin" : "User",
    items: items,
    champions: champions,
    runes: runes
  };
};