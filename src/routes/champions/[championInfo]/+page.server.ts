import { error, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { getChampionAndCosmeticsByName, getChampionByName } from "$lib/server/championsManager";

export const load: PageServerLoad = async ({ params, cookies, locals }) => {
    const champion = await getChampionAndCosmeticsByName(params.championInfo);

    if(!locals.user) {
        return {
            profile: undefined,
            role: "User",
            champion: champion
        }
    }
    return {
        profile: locals.user.username,
        role: locals.user.isAdmin
            ? "Admin" : "User",
        champion: champion
    };
}