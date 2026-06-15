import { error, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ params }) => {
    if (params.profile != "xXakaliXx") {
        redirect(307, "./login")
    }
    //TODO: Random values need to be removed once the queries are ready to be used.
    let runes: Rune[] = [{Name: "tyu", Grade: 1}];
    let items: Item[] = [{Name: "asd", Cost: 3000}]
    let champ: Champion = {Name: "Akali"}
    let build1: Build = {Name: "FantoBuild", Author: params.profile, Champion: champ, Runes: runes, Items: items}
    
    return {
        name: params.profile,
        builds: [build1, build1, build1, build1]
    }
}