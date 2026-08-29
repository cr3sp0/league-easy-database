import { build } from "$service-worker";
import prisma from "./prisma";
import type { Account, Campione, Configurazione, Pagina_Runa, Runa } from "./prisma/browser";

// Unisce i valori delle tabelle in modo da ricostruire una singola Build
export interface completeBuild {
  build: Configurazione
  champion: Campione
  author: Account
}

export async function getBuilds({username = "", champion = "", limit = 5}) 
: Promise<completeBuild[]> {

  // TODO: add explicit query sql
  //TODO: fix select to return only the valueable info of the Build
  const builds = await prisma.configurazione.findMany({
    include: {
      champ: true,
      Inc1: true,
      Inc2: true,
      Pag_Runa: true,
      Inv: true,
      User: true
    },
    where: {
      AND: [
        {
          User: {
            Nome: username.length === 0 
                ? undefined : username
          }
        },
        {
          champ: {
            nome: champion.length === 0
                ? undefined : champion
          }
        }
      ]
    },
    take: limit
  })

  if(!builds) {
    throw { message: "This user doesn't own any Build" }
  }

  let output : completeBuild[] = []

  builds.forEach(b => {
    output.push({
      build: b,
      champion: b.champ,
      author: b.User
    })
  })

  return output;
}

export async function createBuild({
    userID = undefined,
    championID = undefined,
    runesID = undefined,
    inc1 = undefined,
    inc2 = undefined,
    wins = undefined,
    losses = undefined
  } : {
    userID?: number,
    championID?: string,
    runesID?: number,
    inc1?: string,
    inc2?: string,
    wins?: number,
    losses?: number
  }
) : Promise<completeBuild | undefined> {
  
  if(
    !userID 
    || !championID 
    || !runesID
    || !inc1
    || !inc2
  ) {
    throw { message: "Invalid input" }
  }
  // TODO: add query to confirm the related values already exist

  const creation = await prisma.configurazione.create({
    data: {
      Account: userID,
      IdCampione: championID,
      Runa: runesID,
      Incantesimo1: inc1,
      Incantesimo2: inc2 
    },
    include: {
      User: true,
      champ: true
    }
  })

  return build ? {
    build: creation,
    champion: creation.champ,
    author: creation.User
  } : undefined
}

export async function updateBuild(
  buildID : number, {
    championID = undefined,
    runesID = undefined,
    inc1 = undefined,
    inc2 = undefined,
    wins = undefined,
    losses = undefined
  } : {
    championID?: string,
    runesID?: number,
    inc1?: string,
    inc2?: string,
    wins?: number,
    losses?: number
  }
) : Promise<completeBuild | undefined> {

  const build = await prisma.configurazione.update({
    where: {
      ID: buildID
    },
    data: {
      IdCampione: championID,
      Runa: runesID,
      Incantesimo1: inc1,
      Incantesimo2: inc2 
    },
    include: {
      User: true,
      champ: true
    }
  })

  return build ? {
    build: build,
    champion: build.champ,
    author: build.User
  } : undefined
}