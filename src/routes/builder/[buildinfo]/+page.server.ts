import prisma from '$lib/server/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({params, locals}) => {
  const items = await prisma.oggetto.findMany();

  return {
    profile: locals.user 
      ? locals.user.username : undefined,
    role: locals.user.isAdmin
      ? "Admin" : "User",
    champ: params.buildinfo,
    items: items
  };
};