import { error, fail, redirect, type Action, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "../../account/$types";
import { popup } from "$lib/components/store/popup.svelte";
import { getReport, deleteReport as deleteReportDB } from "$lib/server/accountManager";

export const load : PageServerLoad = async ({ locals, url }) => {
    let target = url.searchParams.get("target")
    let profile = locals.user

    try {
        if(!locals.user.isAdmin) {
            throw { message: "You're not an Admin >:[" }
        }

        return {
            profile: profile,
            role: "Admin",
            reports: await getReport({
                target: target === null ? undefined : target
            })
        }
    } catch (err : any) {
        throw error(404, {message: err.message})
    }
}

const deleteReport : Action = async ({ request }) => {

    let formData = await request.formData()

    try {
        if(formData === null) {
            throw { message : "The Report isn't linked properly" }
        }

        const targetID = parseInt("" + formData.get("target"))
        const authorID = parseInt("" + formData.get("author"))
        
        const report = deleteReportDB(targetID, authorID)

        return { success: true }
    } catch (err : any) {
        console.log(err.message)

        return fail(500, "Unable to Delete")
    }
}

export const actions : Actions = { deleteReport }