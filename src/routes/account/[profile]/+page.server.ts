import { error, type Action, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from "./$types";
import prisma from '$lib/server/prisma';
import type { Build, Champion, Item, Rune, RuneConfiguration, Report } from '$lib/types';

//dummy values
	let primary: Rune[] = [
		{path: {id: "domination", name:"Domination", color:"red"}, name: "llll", level: "keystone"},
		{path: {id: "domination", name:"Domination", color:"red"}, name: "llll", level: 1},
		{path: {id: "domination", name:"Domination", color:"red"}, name: "llll", level: 2},
		{path: {id: "domination", name:"Domination", color:"red"}, name: "llll", level: 3}
	]
	let secondary: Rune[] = [
		{path: {id: "precision", name:"Domination", color:"green"}, name: "ppp", level: 1},
		{path: {id: "precision", name:"Domination", color:"green"}, name: "ppp", level: 3}
	]
	let shards: Rune[] = [
		{path: {id: "shard", name:"Shard", color:"rgb(255, 255, 255, 0.2)"}, name: "hh", level: 1},
		{path: {id: "shard", name:"Shard", color:"rgb(255, 255, 255, 0.2)"}, name: "hh", level: 2},
		{path: {id: "shard", name:"Shard", color:"rgb(255, 255, 255, 0.2)"}, name: "hh", level: 3}
	]

	let runes: RuneConfiguration = {primary: primary, secondary: secondary, shards: shards}
	let items: Item[] = [{name: "asd", cost: 3000}]
	let champ: Champion = {name: "Akali", title:"someone"}
//dummy values

export const load: PageServerLoad = ({ params, cookies }) => {

	let profile = params.profile

	if(!profile) {
		error(400, "Profile is missing")
	}

	// query: https://www.youtube.com/watch?v=E9J2VXd-bzE
	let build1: Build = {name: "FantoBuild", author: profile, champion: champ, runes: runes, items: items, winrate: 0.65}

	let builds : Build[] = [];

	limit = 5
	for (let index = 0; index < limit; index++) {
		builds = builds.concat(build1);
	}

	return {
		profile: profile,
		id: params.profile + "#EUW",
		user: { isUser: profile === cookies.get('ledb_session'), userProfile: cookies.get('ledb_session') }, //TODO: check cookie === session
		baseBuilds: builds
	}
}

const logout : Action = ({ cookies }) => {
  cookies.delete('ledb_session', {path: "/"});

  //TODO: Delete session from the DB.

  return {success: true}
}

let limit : number;
const moreBuilds : Action = ({params}) => {
	let profile = params.profile

	if(!profile) {
		error(400, "Profile is missing")
	}

	let build1: Build = {name: "FantoBuild", author: profile, champion: champ, runes: runes, items: items, winrate: 0.65}
	let builds : Build[] = []

	limit += 3
	for (let index = builds.length; index < limit; index++) {
		builds = builds.concat(build1);
	}

	return {
		success: true,
		builds: builds
	}
}

export const actions : Actions = {logout, moreBuilds}

export const _sendReport : Function = (report: Report, author?: String) => {
	//Get author from the current session.
}
