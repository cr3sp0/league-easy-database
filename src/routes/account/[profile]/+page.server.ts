import { error, fail, type Action, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from "./$types";
import { getBuilds } from '$lib/server/buildManager';
import { createReport, deleteSession, getAccount } from '$lib/server/accountManager';

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

		throw error(err)
	}
}

const moreBuilds : Action = async ({ request, params }) => {
	
	try {
		if (!params.profile) {
			throw { message: "Missing the profile" }
		}

		let limit = (await request.formData()).get("limit")?.toString()

		if (!limit) {
			throw { message: "Invalid Request" }
		}

		return {
			success: true,
			builds: await getBuilds({
					username: params.profile,
					limit: parseInt(limit)
				})
		}
	} catch (err : any) {
		console.error(err.message)
		
		throw error(err)
	}
}

const sendReport : Action = async ({ request, params, cookies, locals }) => {

	try {
		
		const formData = await request.formData()
		const target = params.profile
		const author = locals.user
		
		const reason = formData.get("reason")?.toString()
		const description = formData.get("description")?.valueOf() as string
		
		if(!author) {
			throw { message: "You must be logged-in to Report someone" }
		}
		
		if(!target || !reason) {
			throw { message: "Missing values of the Report" }
		}
		if(target === author.username){
			throw { message: "You cannot Report your own account" }
		}

		let bannedAccount

		if(bannedAccount) { //TODO: Check actual banned accounts.
			return fail(400, {msg: "This Account has already been Banned"})
		}
		
		const report = await createReport(reason, {
			target: target,
			author: author.username,
			description: description
		})
		
		//TODO: send the report to the db
		
		return {
			success: true,
			msg: "Successfully sent a Report for " + target
		}
	} catch (err : any) {
		console.error(err.message)

		throw error(err)
	}
}

export const actions : Actions = { logout, moreBuilds, sendReport }
