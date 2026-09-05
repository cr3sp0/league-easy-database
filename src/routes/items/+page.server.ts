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
        const costFloor = url.searchParams.get("costFloor")
        const costCeil = url.searchParams.get("costCeil")

        const filter : itemStatFilter = filterParam ? JSON.parse(filterParam) : undefined

        const items = await getItems({
            name: name 
                ? name : undefined,
            costFloor: costFloor 
                ? parseInt(costFloor) : undefined,
            costCeil: costCeil 
                ? parseInt(costCeil) : undefined,
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