import { error, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { getChampionAndCosmeticsByName, getChampionByName } from "$lib/server/championsManager";

export const load: PageServerLoad = async ({ params, cookies, locals }) => {
    const champion = await getChampionAndCosmeticsByName(params.championInfo);

    return {
        profile: locals.user.username,
        champion: champion
    };
}