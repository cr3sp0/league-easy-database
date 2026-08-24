import { error, fail, type Action, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from "./$types";
import prisma from '$lib/server/prisma';
import type { Build, Champion, Item, Rune, RuneConfiguration, Report, ReportReason, IUser } from '$lib/types';

//dummy values
  	let primary: Rune[] = [
		{path: {id: "domination", name:"Domination", color:"red"}, name: "llll", level: "keystone", image: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/champions/gwen/Gwen_p.jpg"},
		{path: {id: "domination", name:"Domination", color:"red"}, name: "llll", level: 1, image: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/champions/gwen/Gwen_p.jpg"},
		{path: {id: "domination", name:"Domination", color:"red"}, name: "llll", level: 2, image: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/champions/gwen/Gwen_p.jpg"},
		{path: {id: "domination", name:"Domination", color:"red"}, name: "llll", level: 3, image: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/champions/gwen/Gwen_p.jpg"}
	]
	let secondary: Rune[] = [
		{path: {id: "precision", name:"Domination", color:"green"}, name: "ppp", level: 1, image: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/champions/gwen/Gwen_p.jpg"},
		{path: {id: "precision", name:"Domination", color:"green"}, name: "ppp", level: 3, image: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/champions/gwen/Gwen_p.jpg"}
	]
	let shards: Rune[] = [
		{path: {id: "shard", name:"Shard", color:"rgb(255, 255, 255, 0.2)"}, name: "hh", level: 1, image: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/champions/gwen/Gwen_p.jpg"},
		{path: {id: "shard", name:"Shard", color:"rgb(255, 255, 255, 0.2)"}, name: "hh", level: 2, image: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/champions/gwen/Gwen_p.jpg"},
		{path: {id: "shard", name:"Shard", color:"rgb(255, 255, 255, 0.2)"}, name: "hh", level: 3, image: "https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/champions/gwen/Gwen_p.jpg"}
	]

	let runes: RuneConfiguration = {primary: primary, secondary: secondary, shards: shards}
	let items: Item[] = [{name: "asd", description: "lorem ipsum", image:"https://y2gjsxxeqdmvlbby.public.blob.vercel-storage.com/champions/gragas/Gragas_p.jpg", cost: 3000}]
	let champ: Champion = {name: "Akali", title:"someone"}
//dummy values

export const load: PageServerLoad = ({ params, cookies }) => {

	const profile = params.profile

	if(!profile) {
		error(400, "Profile is missing")
	}

	let account : IUser = {
		userID: 0,
		username: profile,
		riotID: profile + "#EUW",
		role: profile === "Fanto" ? "Admin" : "User"
	}

	// query: https://www.youtube.com/watch?v=E9J2VXd-bzE
	let build1: Build = {name: "FantoBuild", author: profile, champion: champ, runes: runes, items: items, kills: 25, deaths: 10, assists: 50, wins:65, losses: 2}

	let builds : Build[] = [];

	const startingLimit = 5
	for (let index = 0; index < startingLimit; index++) {
		builds = builds.concat(build1);
	}

	const user = cookies.get('ledb_session')
	const userRole = user === "Fanto" ? "Admin" : "User" //TODO: put actual role, this allows every user to access admin level actions

	return {
		profile: account.username,
		id: account.riotID,
		profileRole: account.role,
		user: {
			userProfile: user,
			userRole: userRole
		},
		baseBuilds: builds
	}
}

const logout : Action = ({ cookies }) => {
  cookies.delete('ledb_session', {path: "/"});

  //TODO: Delete session from the DB.

  return {success: true}
}

const moreBuilds : Action = async ({ request, params }) => {

	let profile = params.profile
	if(!profile) {
		error(400, "Profile is missing")
	}

	let build1: Build = {name: "FantoBuild", author: profile, champion: champ, runes: runes, items: items, kills: 25, deaths: 10, assists: 50, wins: 65, losses: 5}
	let builds : Build[] = []//TODO: get actual builds

	let limit : number = (await request.formData()).get("limit")?.valueOf() as number

	for (let index = builds.length; index < limit; index++) {
		builds = builds.concat(build1);
	}

	return {
		success: true,
		builds: builds
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
