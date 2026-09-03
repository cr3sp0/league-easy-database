import { getChampionAndCosmeticsByName, getChampionByName, getStats } from '$lib/server/championsManager';
import prisma from '$lib/server/prisma';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getPaths, getRunes } from '$lib/server/runeManager';
import type { Runa } from '$lib/server/prisma/client';

export const load: PageServerLoad = async ({params, locals}) => {
  const items = await prisma.oggetto.findMany();

  let champname = params.buildinfo.split("-")

  const champ = await getChampionByName(champname[0]);

  if (!champ) {
    throw error(404, 'Could not find the Champion');
  }

  const stats = await getStats(champ?.SetStatistiche);

  if (!stats) {
    throw error(404, 'Could not find stats');
  }

  const runes = await getRunes();

  if (!runes) {
    throw error(404, 'Could not find runes');
  }

  const path = await getPaths();

  if (!path) {
    throw error(404, 'Could not find paths');
  }
  
  if(!locals.user) {
    return {
      profile: undefined,
      role: "User",
      stats: stats,
      champ: champ,
      items: items,
      runes: runes,
      path: path
    }
  }

  return {
    profile: locals.user.username,
    role: locals.user.isAdmin ? "Admin" : "User",
    stats: stats,
    champ: champ,
    runes: runes,
    items: items,
    path: path
  };
};