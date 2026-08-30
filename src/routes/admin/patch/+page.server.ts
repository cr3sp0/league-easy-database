import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from '../../$types';

export const load: PageServerLoad = async ({locals}) => {

  if(!locals.user || !locals.user.isAdmin) {
    throw redirect(303, "/")
  }

  return {
    profile: locals.user 
      ? locals.user.username : undefined,
    role: locals.user.isAdmin
      ? "Admin" : "User"
  };
};