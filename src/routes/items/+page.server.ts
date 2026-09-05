import { getItems, type itemStatFilter } from '$lib/server/itemManager';
import type { IUser } from '$lib/types';
import { error, fail, type Action, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, locals, url }) => {
  
    let profile : IUser | undefined = undefined
    let role = "User"

    try {
        if(locals.user) {
            profile = locals.user
            role = locals.user.isAdmin
                ? "Admin" : "User"
        }

        
        const filterParam = url.searchParams.get("filter")
        const name = url.searchParams.get("search")
        const costsLess = url.searchParams.get("costsMore")
        const costsMore = url.searchParams.get("costsLess")
        
        const filter : itemStatFilter = filterParam ? JSON.parse(filterParam) : undefined
        
        const items = await getItems({
            name: name 
                ? name : undefined,
            costsLess: costsLess 
                ? parseInt(costsLess) : undefined,
            costsMore: costsMore 
                ? parseInt(costsMore) : undefined,
            containsStat: filter
        })
        
        return {
            profile: profile,
            role: role,
            items: items
        };
    } catch (err : any) {
        console.error(err)

        return error(500, "Loading Error")
    }
};