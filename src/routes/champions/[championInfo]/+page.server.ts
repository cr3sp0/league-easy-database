import { error, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ params }) => {
    // TODO: Remove stupid filter once the query are ready.
    if (params.championInfo != "akali") {
        error(404, params.championInfo + " not found")
    } 

    return {
        name: params.championInfo
    };
}