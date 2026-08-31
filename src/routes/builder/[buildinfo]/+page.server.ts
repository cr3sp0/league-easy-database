import { getChampionAndCosmeticsByName, getChampionByName } from '$lib/server/championsManager';
import prisma from '$lib/server/prisma';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({params, cookies}) => {
  const items = await prisma.oggetto.findMany();

  let champname = params.buildinfo.split("-")

  const champ = await getChampionByName(champname[0]);

  if (!champ) {
        throw error(404, 'Campione non trovato'); 
    }

  return {
    profile: cookies.get('ledb_session'),
    title: params.buildinfo,
    items: items,
    champ: champ
  };
};