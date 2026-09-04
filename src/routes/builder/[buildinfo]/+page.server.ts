import { getChampionByName, getStats } from '$lib/server/championsManager';
import prisma from '$lib/server/prisma';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getPaths, getRunes } from '$lib/server/runeManager';
import { getSpells } from '$lib/server/spellsManager';
import { fail } from '@sveltejs/kit';
import type { Actions } from '../$types';
import { createBuild } from '$lib/server/buildManager';

export const load: PageServerLoad = async ({params, locals}) => {
  const items = await prisma.oggetto.findMany();

  let champname = params.buildinfo.split("-")

  const champ = await getChampionByName(champname[0]);

  if (!champ) {
    throw error(404, 'Could not find the Champion');
  }

  const stats = await getStats(champ?.SetStatistiche);

  if (!stats) {
    throw error(404, 'Could not find stats');
  }

  const runes = await getRunes();

  if (!runes) {
    throw error(404, 'Could not find runes');
  }

  const spells = await getSpells();

  if (!spells) {
    throw error(404, 'Could not find runes');
  }

  let path = await getPaths();

  if (!path) {
    throw error(404, 'Could not find paths');
  }

  const shards = path.filter((p) => p.Id === 0);

  path = path.filter((p) => p.Id != 0);
  
  if(!locals.user) {
    return {
      profile: undefined,
      role: "User",
      stats: stats,
      champ: champ,
      items: items,
      runes: runes,
      path: path,
      shards: shards,
      spells: spells
    }
  }

  return {
    profile: locals.user.username,
    role: locals.user.isAdmin ? "Admin" : "User",
    stats: stats,
    champ: champ,
    runes: runes,
    items: items,
    path: path,
    shards: shards,
    spells: spells
  };
};

export const actions = {
  saveBuild: async ({ request, locals }) => {
    const formData = await request.formData();
    const buildDataString = formData.get('buildData') as string;

    if (!buildDataString) return fail(400, { message: "Dati mancanti" });

    const buildData = JSON.parse(buildDataString);
    const userID = locals.user.userID;

    try {
      const primarie = buildData.runes.primaryRunes;
      const secondarie = buildData.runes.secondaryRunes;
      const getSec = (grado: number) => secondarie.find((r: any) => r && r.Grado === grado)?.Nome || "Nessuna";

      const sezPrimaria = await prisma.sezione_Runa.create({
        data: {
          Keystone: { connect: { Nome: primarie[0]?.Nome || "Nessuna" } },
          First: { connect: { Nome: primarie[1]?.Nome || "Nessuna" } },
          Middle: { connect: { Nome: primarie[2]?.Nome || "Nessuna" } },
          Lower: { connect: { Nome: primarie[3]?.Nome || "Nessuna" } },
        }
      });

      const sezSecondaria = await prisma.sezione_Runa.create({
        data: {
          Keystone: { connect: { Nome: "Nessuna" } }, 
          First: { connect: { Nome: getSec(1) } },
          Middle: { connect: { Nome: getSec(2) } },
          Lower: { connect: { Nome: getSec(3) } },
        }
      });

      const sezFrammenti = await prisma.sezione_Runa.create({
        data: {
          Keystone: { connect: { Nome: "Nessuna" } },
          First: { connect: { Nome: "Adaptive Force (Offense)" } },
          Middle: { connect: { Nome: "Adaptive Force (Offense)" } },
          Lower: { connect: { Nome: "Health" } },
        }
      });

      const paginaRunaObj = {
        RunaPrimaria: sezPrimaria.Id,
        RunaSecondaria: sezSecondaria.Id,
        Frammenti: sezFrammenti.Id
      };

      const formattedMatches = buildData.matches.map((match: any, index: number) => {
        const [k, d, a] = match.kda.split("/").map((num: string) => parseInt(num) || 0);
        
        const [day, month, year] = match.date.split("/");
        
        const matchDate = new Date(`${year}-${month}-${day}T00:00:00Z`);
        const uniqueTime = new Date(match.id || Date.now());
        matchDate.setUTCHours(uniqueTime.getUTCHours(), uniqueTime.getUTCMinutes(), uniqueTime.getUTCSeconds() + index, uniqueTime.getUTCMilliseconds());

        console.log(matchDate);

        return {
          Data: matchDate,
          Uccisioni: k,
          Morti: d,
          Assist: a,
          Risultato: match.result === "Vittoria" ? "Vittoria" : "Sconfitta" 
        };
      });

      await createBuild(
        buildData.title,
        userID,
        buildData.championID,
        paginaRunaObj, 
        buildData.spells[0],
        buildData.spells[1],
        buildData.items,
        { matches: formattedMatches }
      );

      return { success: true };
    } catch (error) {
      console.error("Errore salvataggio:", error);
      return fail(500, { message: "Errore durante il salvataggio" });
    }
  }
} satisfies Actions;