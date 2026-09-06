import { fail, type Action } from "@sveltejs/kit";
import { getBuilds } from "./buildManager";

export const moreBuilds : Action = async ({ request, locals }) => {
  
  try {
    let profileID : number | undefined = undefined
      
    const formData = await request.formData()
    let limit = formData.get("limit")?.toString()
    let originalLength = formData.get("originalLength")?.toString()

    if (formData.get("personal") && formData.get("personal")?.valueOf()) {
        profileID = locals.user ? locals.user.userID : undefined
    }

    if (!(limit && originalLength)) {
        console.log(limit)
        console.log(originalLength)
        throw { message: "Invalid Request" }
    }

    console.log(limit)
    
    const builds = await getBuilds({
        limit: parseInt(limit),
        userID: profileID
    })
    
    console.log(builds.length)

    if (builds.length === parseInt(originalLength)) {
      throw { message: "No more Builds available" }
    }

    return {
      success: true,
      builds: builds
    }
  } catch (err : any) {
    console.error(err.message)
    
    return fail(500, {msg: err.message})
  }
}