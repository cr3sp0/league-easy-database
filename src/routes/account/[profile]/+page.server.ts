import { error, fail, type Action, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from "./$types";
import prisma from '$lib/server/prisma';
import type { Build, Champion, Item, Rune, RuneConfiguration, Report, ReportReason, IUser } from '$lib/types';
import { popup } from '$lib/components/store/popup.svelte';
import { equal } from 'node:assert';

export const load: PageServerLoad = async ({ params, locals, cookies }) => {

	try {		
		//TODO: Add filter removing banned accounts
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
				baseBuilds: profile.Config,
				pfp: profile.Immagine,
				user: {
					userProfile: locals.user.username,
					userRole: locals.user.isAdmin 
						? "Admin" : "User",
				}
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

		let limit = (await request.formData()).get("limit")?.toString()

		if (!limit) {
			throw { message: "Button not working" }
		}

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
			take: parseInt(limit)
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
		
		const bannedAccount = await prisma.account.findFirst({
			
		})

		if(bannedAccount) { //TODO: Check actual banned accounts.
			return fail(400, {msg: "This Account has already been Banned"})
		}
		
		const report : Report = {
			date: new Date(Date.now()),
			target: target,
			author: author.username,
			reason: reason,
			description: description
		}
		
		//TODO: send the report to the db
		
		return {
			success: true,
			msg: "Successfully sent a Report for " + target
		}
	} catch (error : any) {
		console.error(error.message)

		popup.color = "red"
		popup.text = error.message
		
		throw error(error)
	}
}

export const actions : Actions = { logout, moreBuilds, sendReport }
