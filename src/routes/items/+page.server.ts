import { getItems } from '$lib/server/itemManager';
import type { IUser } from '$lib/types';
import { error, fail, type Action, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({params, locals}) => {
  
    let profile : IUser | undefined = undefined
    let role = "User"

    try {
        if(locals.user) {
            profile = locals.user
            role = locals.user.isAdmin
                ? "Admin" : "User"
        }

        const items = await getItems({})
        
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

const sendFilter : Action = async ({ request }) => {

    try {

        const formData = await request.formData()

        const name = formData.get("search")?.toString()

        console.log(name)

        const filteredItems = await getItems({

        })

    } catch (err : any) {
        console.log(err)

        return fail(400, { msg: "Something went wrong. Try again later" })
    }

}

export const actions : Actions = await ({ sendFilter })