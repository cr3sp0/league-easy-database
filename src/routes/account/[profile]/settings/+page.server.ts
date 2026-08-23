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
        "3", "4", "5"]    //TODO: get all images
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
        return fail(400, {msg: "Unkown Error"})
    }

    let usernameCheck
    //TODO: check the usernames in the db
    if(usernameCheck && usernameCheck === newUsername) {
        return fail(400, { msg: "This Username has already been taken" })
    }


}

export const actions : Actions = { sendEdit }