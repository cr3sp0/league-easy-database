import type { PageServerLoad } from './$types';
import { getChampionsBasicInfo } from '$lib/server/championsManager';

export const load: PageServerLoad = async ({params, cookies}) => {
  const champions = await getChampionsBasicInfo();

  return {
    profile: cookies.get('ledb_session'),
    champions: champions
  };
};