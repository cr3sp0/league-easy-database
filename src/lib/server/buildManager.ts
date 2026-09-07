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
import type { completeRune } from "./runeManager";

// Unisce i valori delle tabelle in modo da ricostruire una singola Build
export interface completeBuild {
  author: Account
  build: Configurazione
  champion: Campione
  items: CompleteItem[]
  runes: completeRune
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
        runes: {
          PietraChiave: b.Pag_Runa.Principale.Keystone,
          Primaria: [
            b.Pag_Runa.Principale.First,
            b.Pag_Runa.Principale.Middle,
            b.Pag_Runa.Principale.Lower
          ],
          Secondaria: [
            b.Pag_Runa.Secondaria.First,
            b.Pag_Runa.Secondaria.Middle,
            b.Pag_Runa.Secondaria.Lower
          ],
          Frammenti: [
            b.Pag_Runa.Shards.First,
            b.Pag_Runa.Shards.Middle,
            b.Pag_Runa.Shards.Lower
          ]
        },
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
      User: { connect: { AccountId: userID } },
      champ: { connect: { ID: championID } },
      Pag_Runa: { create: runes },
      Inc1: { connect: { Nome: inc1.Nome } },
      Inc2: { connect: { Nome: inc2.Nome } },
      Inv: { create: items.filter(item => item !== null)
                      .map(item => ({ Oggetto: { connect: { Nome: item.Nome } } })) },
      Partite: { createMany: { data: matches } }
    },
    include: {
      User: true,
      champ: true,
        Pag_Runa: { include: {
            Principale: { include: {
                Keystone: { include: { Camm: true } },
                Middle: { include: { Camm: true } },
                Lower: { include: { Camm: true } },
                First: { include: { Camm: true } }
              } },
            Secondaria: { include: {
                Middle: { include: { Camm: true } },
                Lower: { include: { Camm: true } },
                First: { include: { Camm: true } }
              } },
            Shards: { include: {
                Middle: { include: { Camm: true } },
                Lower: { include: { Camm: true } },
                First: { include: { Camm: true } }
              } },
          } },
      Inc1: true,
      Inc2: true,
      Inv: { include: {
          Oggetto: { include: {
              Stats: true
            } }
        } },
      Partite: true
    }
  })

  return {
    author: creation.User,
    build: creation,
    champion: creation.champ,
    runes: {
      PietraChiave: creation.Pag_Runa.Principale.Keystone,
      Primaria: [
        creation.Pag_Runa.Principale.First,
        creation.Pag_Runa.Principale.Middle,
        creation.Pag_Runa.Principale.Lower
      ],
      Secondaria: [
        creation.Pag_Runa.Secondaria.First,
        creation.Pag_Runa.Secondaria.Middle,
        creation.Pag_Runa.Secondaria.Lower
      ],
      Frammenti: [
        creation.Pag_Runa.Shards.First,
        creation.Pag_Runa.Shards.Middle,
        creation.Pag_Runa.Shards.Lower
      ]
    },
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
  originalTitle: string,
  userID: number,
  newTitle: string,
  championID: string,
  runes: { RunaPrimaria: number; RunaSecondaria: number; Frammenti: number },
  inc1: Incantesimo,
  inc2: Incantesimo,
  items: Oggetto[],
  { matches = [] }: { matches: any[] }
): Promise<completeBuild | undefined> {

  if (originalTitle !== newTitle) {
    const existingName = await prisma.configurazione.findUnique({
      where: {
        TitoloConf_IdAccount: {
          TitoloConf: newTitle,
          IdAccount: userID
        }
      }
    });
    if (existingName) {
      throw { message: "Hai già una build con il titolo " + newTitle };
    }
  }

  const build = await prisma.configurazione.update({
    where: {
      TitoloConf_IdAccount: {
        TitoloConf: originalTitle,
        IdAccount: userID
      }
    },
    data: {
      TitoloConf: newTitle,
      champ: { connect: { ID: championID } },
      
      Pag_Runa: {
        update: {
          RunaPrimaria: runes.RunaPrimaria,
          RunaSecondaria: runes.RunaSecondaria,
          Frammenti: runes.Frammenti
        }
      },
      
      Inc1: { connect: { Nome: inc1.Nome } },
      Inc2: { connect: { Nome: inc2.Nome } },
      
      Inv: {
        deleteMany: {}, 
        create: items
          .filter(item => item !== null)
          .map(item => ({
            Oggetto: { connect: { Nome: item.Nome } }
          }))
      },
      Partite: {
        deleteMany: {}, 
        createMany: {
          data: matches
        }
      }
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
          }
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
    }
  });

  return build ? {
    author: build.User,
    build: build,
    champion: build.champ,
    runes: {
      PietraChiave: build.Pag_Runa.Principale.Keystone,
      Primaria: [
        build.Pag_Runa.Principale.First,
        build.Pag_Runa.Principale.Middle,
        build.Pag_Runa.Principale.Lower
      ],
      Secondaria: [
        build.Pag_Runa.Secondaria.First,
        build.Pag_Runa.Secondaria.Middle,
        build.Pag_Runa.Secondaria.Lower
      ],
      Frammenti: [
        build.Pag_Runa.Shards.First,
        build.Pag_Runa.Shards.Middle,
        build.Pag_Runa.Shards.Lower
      ]
    },
    spells: [build.Inc1, build.Inc2],
    items: build.Inv.map(o => {
      return {
        item: o.Oggetto,
        stats: o.Oggetto.Stats
      }
    }),
    results: build.Partite
  } : undefined;
}

