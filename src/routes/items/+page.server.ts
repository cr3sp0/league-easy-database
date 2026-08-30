import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({params, locals}) => {
  
  return {
    profile: locals.user 
      ? locals.user.username : undefined,
    role: locals.user.isAdmin
      ? "Admin" : "User",
  };
};