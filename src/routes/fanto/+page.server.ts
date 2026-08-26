import { type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getChampionsBasicInfo } from '$lib/server/championsManager';
import prisma from '$lib/server/prisma';

export const load: PageServerLoad = async ({params, cookies, locals}) => {
  const items = await prisma.oggetto.findMany();
  
  return {
    profile: locals.user.username,
    oggetto: items
  };
};