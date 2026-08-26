import { error, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ params, cookies }) => {
    // params.champInfo

    return {
        profile: cookies.get('ledb_session'),
        champName: params.championInfo
    };
}