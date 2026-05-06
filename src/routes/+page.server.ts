// src/routes/+page.server.ts
import prisma from '$lib/server/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const users = await prisma.user.findMany();
  
  return {
    users
  };
};