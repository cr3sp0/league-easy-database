export function _getBuildsFromAuthor(author : String, limit: number) : Build[] {
    console.log("!!!")
	//TODO: Random values need to be removed once the queries are ready to be used.
	let runes: Rune[] = [{Name: "tyu", Grade: 1}];
	let items: Item[] = [{Name: "asd", Cost: 3000}]
	let champ: Champion = {Name: "Akali"}
	let build1: Build = {Name: "FantoBuild", Author: author, Champion: champ, Runes: runes, Items: items}

	let builds : Build[] = [];
	
	for (let index = 0; index < limit; index++) {
		builds = builds.concat(build1);
	}
	return builds;
}

export function _getBuildsForChampion(champion: Champion, limit: number) : Build[] {
    return [];
}