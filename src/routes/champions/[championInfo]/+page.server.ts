import { error, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ params }) => {
    if (params.championInfo != "akali") {
        error(404, params.championInfo + " not found")
    } 

    return {
        name: params.championInfo
    };
}