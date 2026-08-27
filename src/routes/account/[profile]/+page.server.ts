import { error, fail, type Action, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from "./$types";
import prisma from '$lib/server/prisma';
import type { Build, Champion, Item, Rune, RuneConfiguration, Report, ReportReason, IUser } from '$lib/types';
import { popup } from '$lib/components/store/popup.svelte';

export const load: PageServerLoad = async ({ params, locals, cookies }) => {

	try {		
		//TODO: write explicit sql query
		const profile = await prisma.account.findUnique({
			where: {
				AccountId: locals.user.userID
			},
			include: {
				Config: {
					where: {
						Account: locals.user.userID
					},
					take: 5
				}
			}
		})

		if (!profile) {
			throw { message: "Profile missing or banned" }
		}
		
			return {
				profile: profile.Nome,
				id: profile.RiotID,
				profileRole: profile.IsAdmin 
					? "Admin" : "User",
				user: {
					userProfile: locals.user.username,
					userRole: locals.user.isAdmin 
						? "Admin" : "User",
				},
				baseBuilds: profile.Config
			}
	} catch (error : any) {
		console.error(error.message)

		popup.color = "red"
		popup.text = error.message

		throw error(error)
	}
}

const logout : Action = async ({ cookies }) => {
	
	try {
		//TODO: Delete session from the DB.
		let currentSession = cookies.get("ledb_session")
		
		if (currentSession) {
			//TODO: write explicit sql query
			const session = await prisma.sessione.delete({
				where: {
					Id: parseInt(currentSession)
				}
			})

			if(!session) {
				throw { message: "Error when deleting the current session" }
			}
		}

		cookies.delete('ledb_session', {path: "/"});
		return {success: true}
	} catch (error : any) {
		console.error(error.message)

		popup.color = "red"
		popup.text = error.message
		
		throw error(error)
	}
}

const moreBuilds : Action = async ({ request, locals, params }) => {
	
	try {		
		let profile = locals.user
		if(!profile) {
			throw { message: "Profile is missing" }
		}

		let limit : number = (await request.formData()).get("limit")?.valueOf() as number

		// SELECT * FROM configurazione
		// JOIN Account ON Account.id = Configurazione.Account
		// TOP $1
		const builds = await prisma.configurazione.findMany({
			include: {
				User: true
			},
			where: {
				Account: profile.userID
			},
			take: limit
		})

		console.log(builds)
		return {
			success: true,
			builds: builds
		}
	} catch (error : any) {
		console.error(error.message)

		popup.color = "red"
		popup.text = error.message
		
		throw error(error)
	}
}

const sendReport : Action = async ({ request, params, cookies }) => {

	const formData = await request.formData()
	const target = params.profile
	const author = cookies.get("ledb_session")

	const reason = formData.get("reason")?.toString()
	const description = formData.get("description")?.valueOf() as string

	if(!author) {
		return error(400)
	}

	if(!target || !reason) {
		return fail(400, {msg: "Missing values of the Report"})
	}
	if(target === cookies.get("ledb_session")){
		return fail(400, {msg: "You cannot Report your own account"})
	}

	if(target === "Pippo") { //TODO: Check actual banned accounts.
		return fail(400, {msg: "This Account has already been Banned"})
	}

	const report : Report = {
		date: new Date(Date.now()),
		target: target,
		author: author,
		reason: reason,
		description: description
	}

	//TODO: send the report to the db

	return {
		success: true,
		msg: "Successfully sent a Report for " + target
	}
}

export const actions : Actions = { logout, moreBuilds, sendReport }
