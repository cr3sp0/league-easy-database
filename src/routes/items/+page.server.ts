import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({params, locals}) => {
  
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