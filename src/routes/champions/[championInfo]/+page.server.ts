import { error, redirect, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { getChampionAndCosmeticsByName, getChampionByName, getStats } from "$lib/server/championsManager";
import { getBuilds } from "$lib/server/buildManager";
import { moreBuilds } from "$lib/server/genericActions";

export const load: PageServerLoad = async ({ params, cookies, locals }) => {
    const champion = await getChampionAndCosmeticsByName(params.championInfo);

    if (!champion) {
    throw error(404, 'Could not find the Champion');
  }

    const stats = await getStats(champion.SetStatistiche);

    if (!stats) {
        throw error(404, 'Could not find Stats for the Champion');
    }

    const communityBuilds = await getBuilds({champion: champion?.nome})

    if(!locals.user) {
        return {
            profile: undefined,
            role: "User",
            champion: champion,
            communityBuilds: communityBuilds,
            personalBuilds: [],
            stats: stats
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
        }),
        stats: stats
    };
}

export const actions : Actions = await ({ moreBuilds })