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

    return {
        name: params.profile,
        builds: [{champ, runes, items}, {champ, runes, items}]
    }
}