import prisma from "./prisma";
import { Risultato, type Account, type Campione, type Configurazione, type Inventario, type Pagina_Runa, type Partita, type Runa } from "./prisma/browser";

// Unisce i valori delle tabelle in modo da ricostruire una singola Build
export interface completeBuild {
  author: Account
  build: Configurazione
  items?: Inventario[]
  champion: Campione
  results: Partita[]
}

export async function getBuilds({
  username = undefined,
  buildTitle = undefined,
  userID = undefined,
  champion = undefined,
  championID = undefined,
  limit = 5
} : {
  username? : string,
  userID? : number,
  champion? : string,
  championID? : string,
  buildTitle? : number,
  limit? : number
}) : Promise<completeBuild[]> {

  // TODO: add explicit query sql
  //TODO: fix select to return only the valueable info of the Build
  const builds = await prisma.configurazione.findMany({
    include: {
      champ: true,
      Inc1: true,
      Inc2: true,
      Pag_Runa: true,
      Inv: true,
      User: true,
      Partite: true
    },
    where: {
      AND: [
        {
          ID: buildTitle
        },
        {
          User: {
            Nome: username,
            AccountId: userID
          }
        },
        {
          champ: {
            nome: champion,
            ID: championID
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
      author: b.User,
      build: b,
      items: b.Inv,
      champion: b.champ,
      results: b.Partite
    })
  })

  return output;
}

export async function getUniqueBuild({
  buildTitle = undefined,
  userID = undefined
} : {
  buildTitle? : string,
  userID? : number
}) : Promise<completeBuild> {

  if((!buildTitle || !userID)) {
    throw { message: "Invalid input" }
  }

  // TODO: add explicit query sql
  //TODO: fix select to return only the valueable info of the Build
  const build = await prisma.configurazione.findUnique({
    include: {
      champ: true,
      Inc1: true,
      Inc2: true,
      Pag_Runa: true,
      Inv: true,
      User: true,
      Partite: true
    },
    where: {
      TitoloConf_IdAccount: {
        TitoloConf: buildTitle,
        IdAccount: userID
      }
    }
  })

  if(!build) {
    throw { message: "Build Missing" }
  }

  return {
    author: build.User,
    build: build,
    champion: build.champ,
    items: build.Inv,
    results: build.Partite
  };
}

export async function createBuild(
  {
    buildTitle,
    userID,
    championID = undefined,
    runesID = undefined,
    inc1 = undefined,
    inc2 = undefined,
    matches = []
  } : {
    buildTitle: string,
    userID: number,
    championID?: string,
    runesID?: number,
    inc1?: string,
    inc2?: string,
    matches: Partita[]
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

  let creation = await prisma.configurazione.create({
    data: {
      TitoloConf: buildTitle,
      IdAccount: userID,
      IdCampione: championID,
      Runa: runesID,
      Incantesimo1: inc1,
      Incantesimo2: inc2,
      Partite: {
        createMany: {
          data: matches
        }
      }
    },
    include: {
      User: true,
      champ: true,
      Partite: true,
      Inv: true
    }
  })

  return creation ? {
    author: creation.User,
    build: creation,
    champion: creation.champ,
    items: creation.Inv,
    results: creation.Partite
  } : undefined
}

export async function updateBuild(
  {
    buildTitle,
    userID,
    championID = undefined,
    runesID = undefined,
    inc1 = undefined,
    inc2 = undefined,
    newTitle = undefined
  } : {
    buildTitle: string,
    userID: number,
    championID?: string,
    runesID?: number,
    inc1?: string,
    inc2?: string,
    newTitle?: string
  }
) : Promise<completeBuild | undefined> {

  if(newTitle && await prisma.configurazione.findUnique({
    where: {
      TitoloConf_IdAccount: {
        TitoloConf: newTitle,
        IdAccount: userID
      }
    }
  })) {
    throw { message: buildTitle + " already exists" }
  }

  const build = await prisma.configurazione.update({
    where: {
      TitoloConf_IdAccount: {
        TitoloConf: buildTitle,
        IdAccount: userID
      }
    },
    data: {
      IdCampione: championID,
      Runa: runesID,
      Incantesimo1: inc1,
      Incantesimo2: inc2
    },
    include: {
      User: true,
      champ: true,
      Partite: true,
      Inv: true
    }
  })

  return build ? {
    author: build.User,
    build: build,
    champion: build.champ,
    items: build.Inv,
    results: build.Partite
  } : undefined
}