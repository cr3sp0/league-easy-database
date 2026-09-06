import { error, fail, type Action, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from "./$types";
import { getBuilds } from '$lib/server/buildManager';
import { createReport, deleteSession, getAccount } from '$lib/server/accountManager';
import { moreBuilds } from '$lib/server/genericActions';

export const load: PageServerLoad = async ({ params, locals }) => {

	try {
		const profile = await getAccount(params.profile)
		if (!profile) {
			throw { message: "Profile missing or banned" }
		}

		return {
			profile: profile,
			profileRole: profile.IsAdmin 
				? "Admin" : "User",
			user: {
				userProfile: locals.user,
				userRole: locals.user.isAdmin 
					? "Admin" : "User",
			},
			builds: await getBuilds({username: profile.Nome})
		}
	} catch (err : any) {
		console.error(err.message);

		throw error(404, { message: err.message });
	}
}

const logout : Action = async ({ cookies }) => {
	
	try {
		let currentSession = cookies.get("ledb_session")
		
		if (currentSession) {
			const session = deleteSession(parseInt(currentSession))

			if(!session) {
				throw { message: "Error when deleting the current session" }
			}
		}

		cookies.delete('ledb_session', {path: "/"});
		return {success: true}
	} catch (err : any) {
		console.error(err.message)

		return fail(500, {msg: err.message})
	}
}

const sendReport : Action = async ({ request, params, cookies, locals }) => {

	try {
		
		const formData = await request.formData()
		const target = params.profile
		const author = locals.user
		
		const reason = formData.get("reason")?.toString()
		const description = formData.get("description")?.toString()
		
		if(!author) {
			throw { message: "You must be logged-in to Report someone" }
		}
		
		if(!target || !reason) {
			throw { message: "Missing values of the Report" }
		}
		if(target === author.username){
			throw { message: "You cannot Report your own account" }
		}

		const report = await createReport(reason, {
			target: target,
			author: author.username,
			description: description
		})
		
		return {
			success: true,
			msg: "Successfully sent a Report for " + target
		}
	} catch (err : any) {
		console.error(err.message)

		return fail(500, { msg: err.message })
	}
}

export const actions : Actions = { logout, sendReport, moreBuilds }
