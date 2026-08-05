import { fail, redirect, type Action, type Actions } from "@sveltejs/kit";
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
    
}

export const actions : Actions = { banAccount }