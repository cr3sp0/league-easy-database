import { error, fail, redirect, type Action, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "../../account/$types";

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

    let target = formData.get("target")
    let reason = formData.get("reason")
    let duration = formData.get("duration")?.valueOf() as number
    let description = formData.get("description")

    if(!target || !reason || !duration) {
        return fail(400)
    }

    if(reason === "Other" && !description) {
        return fail(400, {msg: "The 'Description' field is mandatory when using the reason 'Other'"})
    }

    //TODO: Add to the banned table

    return {
        success: true,
        msg: target + " has been successfully Banned"
    }
}

export const actions : Actions = { banAccount }