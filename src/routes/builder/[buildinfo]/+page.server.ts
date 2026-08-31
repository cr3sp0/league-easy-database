import { getChampionAndCosmeticsByName, getChampionByName } from '$lib/server/championsManager';
import prisma from '$lib/server/prisma';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({params, locals}) => {
  const items = await prisma.oggetto.findMany();

  let champname = params.buildinfo.split("-")

  const champ = await getChampionByName(champname[0]);

  if (!champ) {
    throw error(404, 'Campione non trovato'); 
  }
  
  if(!locals.user) {
    return {
      profile: undefined,
      role: "User",
      champ: champ,
      items: items
    }
  }

  return {
    profile: locals.user.username,
    role: locals.user.isAdmin ? "Admin" : "User",
    title: params.buildinfo,
    champ: champ,
    items: items
  };
};