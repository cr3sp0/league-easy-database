import prisma from "./prisma";
import type { Account, Campione, Configurazione } from "./prisma/browser";

// Unisce i valori delle tabelle in modo da ricostruire una singola Build
export interface completeBuild {
    build: Configurazione
    champion: Campione
    author: Account
}

export async function getBuilds({username = "", champion = "", limit = 5}) : Promise<completeBuild[]> {

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