import { error, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ params, cookies }) => {
    // TODO: Remove stupid filter once the query are ready.
    if (params.championInfo != "akali") {
        error(404, params.championInfo + " not found")
    } 

    return {
        profile: cookies.get('ledb_session'),
        champName: params.championInfo
    };
}