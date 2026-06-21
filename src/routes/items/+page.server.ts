import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({params, cookies}) => {
  
  return {
    profile: cookies.get('ledb_session')
  };
};