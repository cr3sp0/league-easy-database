import { error, fail, redirect, type Action, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "../$types";

export const load : PageServerLoad = async ({ params, cookies, request, url }) => {

    let target = url.searchParams.get("target")
    let reason = url.searchParams.get("reason")

    let profile = cookies.get("ledb_session")

    let role = "Admin"
    if(!profile || role != "Admin") {
        return fail(400, "You shouldn't have access to this section.")
    }

    if (!target) {
        return fail(400, "Missing a Target.");
    }
    if (!reason) {
        return {
            profile: profile,
            target: target
        }
    }

    return {
        profile: profile,
        target: target,
        reason: reason
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