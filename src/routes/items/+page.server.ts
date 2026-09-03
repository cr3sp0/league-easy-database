import { getItems } from '$lib/server/itemManager';
import type { IUser } from '$lib/types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({params, locals}) => {
  
    let profile : IUser | undefined = undefined
    let role = "User"

    if(locals.user) {
        profile = locals.user
        role = locals.user.isAdmin
            ? "Admin" : "User"
    }

    console.log("!!!!")
    const items = await getItems({})
    console.log(items[2].item.Nome)

    return {
        profile: profile,
        role: role,
        items: items
    };
};