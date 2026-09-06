import { error, redirect, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { getChampionAndCosmeticsByName, getChampionByName } from "$lib/server/championsManager";
import { getBuilds } from "$lib/server/buildManager";
import { moreBuilds } from "$lib/server/genericActions";

export const load: PageServerLoad = async ({ params, cookies, locals }) => {
    const champion = await getChampionAndCosmeticsByName(params.championInfo);

    const communityBuilds = await getBuilds({champion: champion?.nome})

    if(!locals.user) {
        return {
            profile: undefined,
            role: "User",
            champion: champion,
            communityBuilds: communityBuilds,
            personalBuilds: []
        }
    }
    return {
        profile: locals.user.username,
        role: locals.user.isAdmin
            ? "Admin" : "User",
        champion: champion,
        communityBuilds: communityBuilds,
        personalBuilds: await getBuilds({
            champion: champion?.nome,
            userID: locals.user.userID
        })
    };
}

export const actions : Actions = await ({ moreBuilds })