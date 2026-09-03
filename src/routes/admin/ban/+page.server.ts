import { error, fail, redirect, type Action, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "../../account/$types";
import { banAccount as banAccountDB } from "$lib/server/accountManager";

export const load : PageServerLoad = async ({ locals, url }) => {

    let target = url.searchParams.get("target")
    let reason = url.searchParams.get("reason")

    let profile = locals.user 
      ? locals.user.username : undefined
    let role = locals.user 
      ? locals.user.isAdmin : undefined

    if(!profile || !role) {
        return error(400, { message: "You shouldn't have access to this section." })
    }

    if (!target) {
        return error(400, { message: "Missing a Target." });
    }

    return {
        profile: profile,
        role: role ? "Admin" : "User",
        target: target,
        reason: reason ? reason : undefined
    }
}

const banAccount : Action = async ({ request }) => {
    
    let formData = await request.formData()
    
    try {
        let target = formData.get("target")?.toString()
        let reason = formData.get("reason")?.toString()
        let duration = formData.get("duration")?.valueOf() as number
        let description = formData.get("description")?.toString()

        if(!target || !reason || !duration) {
            throw { message: "Missing required values" }
        }

        if(reason === "Other" && !description) {
            throw { message: "The 'Description' field is mandatory when using the reason 'Other'" }
        }

        const ban = await banAccountDB(
            {username: target},
            new Date(Date.now() + (duration * 60 * 60 * 1000)),
            reason,
            description
        )

        return {
            success: true,
            msg: ban.Account.Nome + " has been successfully Banned"
        }
    } catch (err : any) {
        console.log(err.message)

        return fail(400, { msg: err.message })
    }

}

export const actions : Actions = { banAccount }