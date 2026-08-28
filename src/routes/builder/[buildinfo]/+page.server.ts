import prisma from '$lib/server/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({params, cookies}) => {
  const items = await prisma.oggetto.findMany();

  return {
    profile: cookies.get('ledb_session'),
    champ: params.buildinfo,
    items: items
  };
};