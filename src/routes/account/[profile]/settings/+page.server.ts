import { error, fail, redirect, type Action, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "../$types";
import { getChampionsBasicInfo } from "$lib/server/championsManager";
import { getAccount, updateAccount } from "$lib/server/accountManager";

export const load : PageServerLoad = async ({ params, locals }) => {
    
    let images
    
    try {
        const user = locals.user
        if(user === undefined) {
            throw { message : "Access denied" }
        }
        if (user.username !== params.profile) {
            throw { message: "Only the owner of this Account has access to this page" }
        }

        images = await getChampionsBasicInfo()

        let accountInfo = getAccount(user.username)

        if(!accountInfo) {
            throw { message: "Account Missing." }
        }
        
        return {
            profile: user,
            profileRole: user.isAdmin
            ? "Admin" : "User",
            imageList: images.map(i => i.Icona)
        }
    } catch(error : any) {
        console.error("Error: ", error.message)

        return redirect(303, "/")
    }
}

const sendEdit : Action = async ({ request, params, cookies, locals }) => {
    try{
        const formData = await request.formData()
        
        let newPfp = formData.get("newImage")?.toString()
        let newUsername = formData.get("newUsername")?.toString()
        let newID = formData.get("newID")?.toString()
        let newDescription = formData.get("newDescription")?.toString()
        
        if(!newPfp || newPfp.length === 0) {
            throw { message: "Unkown Error" }
        }

        if(
            !newUsername 
            || newUsername.length === 0
        ) {
            throw { message: "Invalid Username" }
        }

        if(newID && newID.indexOf('#') <= 0) {
            throw { message: "Invalid RiotID" }
        }

        //TODO: Add explicit query sql
        const update = updateAccount(locals.user.userID, {
            newPfp: newPfp,
            newUsername: newUsername,
            newDescription: newDescription,
            newID: newID
        })
        
        if(!update) {
            throw { message: "Connection Error" }
        }
        
        return {
            success: true,
            msg: "Your Profile has been edited successfully."
        }
    } catch(error : any) {
        console.error("Error: ", error.message)

        return fail(400, { msg: error.message })
    }

    return {
        success: false
    }
}

export const actions : Actions = { sendEdit }