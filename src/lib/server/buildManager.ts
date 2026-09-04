import type { CompleteItem } from "./itemManager";
import prisma from "./prisma";
import { 
  type Account,
  type Campione,
  type Configurazione,
  type Incantesimo,
  type Inventario,
  type Oggetto,
  type Pagina_Runa,
  type Partita,
  type Runa 
} from "./prisma/browser";

// Unisce i valori delle tabelle in modo da ricostruire una singola Build
export interface completeBuild {
  author: Account
  build: Configurazione
  champion: Campione
  items: CompleteItem[]
  runes: Pagina_Runa
  spells: [Incantesimo, Incantesimo]
  results: Partita[]
}

export async function getBuilds({
  buildTitle = undefined,
  username = undefined,
  userID = undefined,
  champion = undefined,
  championID = undefined,
  items = undefined,
  spells = undefined,
  limit = 5
} : {
  buildTitle? : string 
  username? : string
  userID? : number
  champion? : string
  championID? : string
  items? : Oggetto[]
  spells? : Incantesimo[]
  limit? : number
}) : Promise<completeBuild[]> {

  try{

    // TODO: add explicit query sql
    //TODO: fix select to return only the valueable info of the Build
    const builds = await prisma.configurazione.findMany({
      include: {
        champ: true,
        Inc1: true,
        Inc2: true,
        Pag_Runa: {
          include: {
            Principale: {
              include: {
                Keystone: { include: { Camm: true } },
                Middle: { include: { Camm: true } },
                Lower: { include: { Camm: true } },
                First: { include: { Camm: true } }
              }
            },
            Secondaria: {
              include: {
                Keystone: { include: { Camm: true } },
                Middle: { include: { Camm: true } },
                Lower: { include: { Camm: true } },
                First: { include: { Camm: true } }
              }
            },
            Shards: {
              include: {
                Keystone: { include: { Camm: true } },
                Middle: { include: { Camm: true } },
                Lower: { include: { Camm: true } },
                First: { include: { Camm: true } }
              }
            },
          }
        },
        Inv: {
          include: {
            Oggetto: {
              include: {
                Stats: true
              }
            }
          }
        },
        User: true,
        Partite: true
      },
      where: {
        AND: [
          {
            TitoloConf: {
              contains: buildTitle,
              mode: 'insensitive'
            }
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
          },
          {
            Inv: {
              every: {
                Oggetto: {
                  OR: items
                }
              }
            }
          },
          {
            Inc1: {
              OR: spells
            },
            Inc2: {
              OR: spells
            }
          }
        ]
      },
      take: limit
    })

    return builds.map(b => {
      return {
        author: b.User,
        build: b,
        champion: b.champ,
        runes: b.Pag_Runa,
        items: b.Inv.map(o => {
          return {
            item: o.Oggetto,
            stats: o.Oggetto.Stats
          }
        }),
        spells: [b.Inc1, b.Inc2],
        results: b.Partite
      }
    });
    
  } catch (err : any) {
    console.log(err)

    throw { message: "Something went wrong" }
  }
}

export async function createBuild(
  buildTitle: string,
  userID: number,
  championID: string,
  runes: { RunaPrimaria: number; RunaSecondaria: number; Frammenti: number },
  inc1: Incantesimo,
  inc2: Incantesimo,
  items: Oggetto[],
  {
    matches = []
  } : {
    matches: Partita[]
  }
) : Promise<completeBuild> {

  const creation = await prisma.configurazione.create({
    data: {
      TitoloConf: buildTitle,
      User: {
        connect: {
          AccountId: userID
        }
      },
      champ: {
        connect: {
          ID: championID
        }
      },
      Pag_Runa: {
        create: runes
      },
      Inc1: {
        connect: {
          Nome: inc1.Nome
        }
      },
      Inc2: {
        connect: {
          Nome: inc2.Nome
        }
      },
      Inv: {
        create: items
          .filter(item => item !== null)
          .map(item => ({
            Oggetto: { connect: { Nome: item.Nome } }
          }))
      },
      Partite: {
        createMany: {
          data: matches
        }
      }
    },
    include: {
      User: true,
      champ: true,
      Pag_Runa: true,
      Inc1: true,
      Inc2: true,
      Inv: {
        include: {
          Oggetto: {
            include: {
              Stats: true
            }
          }
        }
      },
      Partite: true
    }
  })

  return {
    author: creation.User,
    build: creation,
    champion: creation.champ,
    runes: creation.Pag_Runa,
    spells: [creation.Inc1, creation.Inc2],
    items: creation.Inv.map(o => {
      return {
        item: o.Oggetto,
        stats: o.Oggetto.Stats
      }
    }),
    results: creation.Partite
  }
}

export async function updateBuild(
  buildTitle: string,
  userID: number,
  {
    championID = undefined,
    runesID = undefined,
    inc1 = undefined,
    inc2 = undefined,
    newTitle = undefined
  } : {
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
      champ: true,
      Inc1: true,
      Inc2: true,
      Pag_Runa: {
        include: {
          Principale: {
            include: {
              Keystone: { include: { Camm: true } },
              Middle: { include: { Camm: true } },
              Lower: { include: { Camm: true } },
              First: { include: { Camm: true } }
            }
          },
          Secondaria: {
            include: {
              Keystone: { include: { Camm: true } },
              Middle: { include: { Camm: true } },
              Lower: { include: { Camm: true } },
              First: { include: { Camm: true } }
            }
          },
          Shards: {
            include: {
              Keystone: { include: { Camm: true } },
              Middle: { include: { Camm: true } },
              Lower: { include: { Camm: true } },
              First: { include: { Camm: true } }
            }
          },
        }
      },
      Inv: {
        include: {
          Oggetto: {
            include: {
              Stats: true
            }
          }
        }
      },
      User: true,
      Partite: true
    },
  })

  return build ? {
    author: build.User,
    build: build,
    champion: build.champ,
    runes: build.Pag_Runa,
    spells: [build.Inc1, build.Inc2],
    items: build.Inv.map(o => {
      return {
        item: o.Oggetto,
        stats: o.Oggetto.Stats
      }
    }),
    results: build.Partite
  } : undefined
}