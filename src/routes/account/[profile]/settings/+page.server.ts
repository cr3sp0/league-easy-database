import { error, fail, redirect, type Action, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "../$types";
import prisma from "$lib/server/prisma";
import { goto } from "$app/navigation";
import { popup } from "$lib/components/store/popup.svelte";

export const load : PageServerLoad = async ({ params, cookies, locals, url }) => {
    try {
        let profile = locals.user
        const path = url.href.split(url.origin).reduce((a, b) => a + b)

        if ("/account/" + profile.username + "/settings" !== path) {
            throw { message: "Only the owner of this Account has access to this page" }
        }

        //SELECT icona FROM Campioni
        let images = await prisma.campione.findMany({
            select: {
                Icona: true
            }
        })

        // TODO: Add explicit query sql
        let accountInfo = await prisma.account.findFirst({
            select: {
                AccountId: true,
                Nome: true,
                RiotID: true,
                Immagine: true,
            },
            where: {
                AccountId: profile.userID
            }
        })

        if(!accountInfo) {
            throw { message: "Account Missing." }
        }
        
        //images.map(i => i.Icona).forEach(i => console.log(i))

        return {
            profile: profile,
            profileRole: profile.isAdmin
                ? "Admin" : "User",
            imageList: images.map(i => i.Icona)
        }

    } catch(error : any) {
        console.error("Error: ", error.message)

        popup.color = "red"
        popup.text = "" + error.message
        
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

        console.log(newUsername)
        if (await prisma.account.findUnique({where: { Nome: newUsername }})) {
            throw { message: "This Username has already been taken" }
        }
        
        //TODO: Add explicit query sql
        const update = await prisma.account.update({
            data: {
                Immagine: newPfp,
                Nome: newUsername,
                RiotID: newID,
                Descrizione: newDescription
            },
            where: {
                AccountId: locals.user.userID
            }
        })
        console.log(update.Nome)
        
        if(!update) {
            throw { message: "Connection Error" }
        }
        
        return {
            success: true,
            msg: "Your Profile has been edited successfully."
        }
    } catch(error : any) {
        console.error("Error: ", error.message)

        popup.color = "red"
        popup.text = "" + error.message

        return fail(400, { msg: error.message })
    }

    return {
        success: false
    }
}

export const actions : Actions = { sendEdit }