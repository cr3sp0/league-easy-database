import type { Build, Rune, Item, Champion, Report } from "$lib/types";

export function _getBuildsFromAuthor(author : string, limit: number) : Build[] {

	//TODO: Random values need to be removed once the queries are ready to be used.
	let runes: Rune[] = [{name: "tyu", path: "precision", primary: true}];
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