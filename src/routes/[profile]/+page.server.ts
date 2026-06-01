import { error, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ params }) => {
    if (params.profile != "akali") {
        redirect(307, "./login")
    } 

    return {
        name: params.profile
    };
}