// src/routes/+page.server.ts
import prisma from '$lib/server/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
  if(!locals.user) {
    return {
      profile: undefined,
      role: "User"
    }
  }

  return {
    profile: locals.user.username,
    role: locals.user.isAdmin
      ? "Admin" : "User",
  };
};