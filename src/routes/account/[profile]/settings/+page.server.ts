import { error, fail, redirect, type Action, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "../$types";

export const load : PageServerLoad = async ({ params, cookies, request, url }) => {

    let profile = cookies.get("ledb_session")

    const path = url.href.split(url.origin).reduce((a, b) => a + b)

    if ("/account/" + profile + "/settings" !== path) {
        error(404)
    }

    let imageList : string[] = [
        "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/champions/akali/Akali_p.jpg",
        "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/champions/aurora/Aurora_p.jpg",
        ]    //TODO: get all images
    const currentImage = imageList[1]

    return {
        profile: profile,
        currentImage: currentImage,
        imageList: imageList
    }
}

const sendEdit : Action = async({ request, params, cookies }) => {

    const formData = await request.formData()

    let newPfp = formData.get("newImage")?.toString()
    let newUsername = formData.get("newUsername")?.toString()
    let newID = formData.get("newID")?.toString()

    if(!newPfp || !newUsername) {
        return fail(400, { msg: "Unkown Error" })
    }

    if(newID && newID.indexOf('#') <= 0) {
        return fail(400, { msg: "Invalid RiotID" })
    }

    //TODO: update values inside the databse

    if(false) { //TODO: unsuccessful update
        return fail(400, { msg: "Connection Error" })
    }

    cookies.delete("ledb_session", { path: "/" })
    cookies.set(
		'ledb_session',
		newUsername,
		{
			path: "/",
			maxAge: 60 * 60 //1 hour
		}
	)

    return {
        success: true,
        msg: "Your Profile has been edited successfully."
    }
}

export const actions : Actions = { sendEdit }