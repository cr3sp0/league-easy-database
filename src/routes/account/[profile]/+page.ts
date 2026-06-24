import type { Build, Rune, Item, Champion, Report, RuneConfiguration } from "$lib/types";

export function _getBuildsFromAuthor(author : string, limit: number) : Build[] {

	//TODO: Random values need to be removed once the queries are ready to be used.
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
	let build1: Build = {name: "FantoBuild", author: author, champion: champ, runes: runes, items: items, winrate: 0.65}

	let builds : Build[] = [];
	
	for (let index = 0; index < limit; index++) {
		builds = builds.concat(build1);
	}
	return builds;
}

export function _getBuildsForChampion(champion: Champion, limit: number) : Build[] {
    return [];
}

export function _sendReport(report: Report, author?: String) {
	//Get author from the current session.
}