import prisma from "./prisma";
import type { Account, Sessione } from "./prisma/client";

export interface completeUser {
    user: Account
    session: Sessione
}

const TimeLimit_h = 5
const TimeLimit_h_m = TimeLimit_h * 60
const TimeLimit_h_m_s = TimeLimit_h_m * 60
const TimeLimit_h_m_s_ms = TimeLimit_h_m_s * 1000

export async function createSession(
    userID : number,
    guid : string
) : Promise<completeUser> {
    //TODO: write explicit sql query
    const Sessione = await prisma.sessione.upsert({
        where: {
            guid_id: guid
        },
        update: {
            date_created: new Date(Date.now()),
            date_expired: new Date(Date.now() + TimeLimit_h_m_s_ms)
        },
        create: {
            guid_id: guid,
            user_id: userID,
            date_created: new Date(Date.now()),
            date_expired: new Date(Date.now() + TimeLimit_h_m_s_ms)
        },
        include: {
            user:  true
        }
    })
    
    return {
        user: Sessione.user,
        session: Sessione
    }
}
export async function getActiveSession({
    sessionID = undefined,
    guid_id = undefined
} : {
    sessionID? : number
    guid_id? : string
})
: Promise<completeUser | undefined> {
    //TODO: write explicit sql query
    let session = await prisma.sessione.findUnique({
        where: {
            Id: sessionID,
            guid_id: guid_id,
            NOT: [
                { date_expired: { lt: new Date(Date.now()) } }
            ]

        },
        include: {
            user: true
        },
    })
    
    if(session === null) {
        return undefined
    }
    
    return {
        user: session.user,
        session: session
    }
}
export async function deleteSession(currentSession : number) {
    return await prisma.sessione.delete({
        where: {
            Id: currentSession
        }
    })
}
export async function getAccount(username : string) {
    //TODO: write explicit sql query
    return await prisma.account.findUnique({ 
        where: {
            Nome: username,
            NOT: [
                {
                    Banned: {
                        Expiration_Date: {
                            gt: new Date(Date.now())
                        }
                    }
                }
            ]
        },
    })
}
export async function createAccount(
    username : string,
    password : string
) : Promise<completeUser> {
    
    try {
        //TODO: write explicit sql query
        const createAccount = await prisma.account.create({
            data: {
                Nome: username,
                Password: password,
                Descrizione: "Hi! I'm new here.",
                IsAdmin: false,
                Immagine: undefined,
                Sessione: {
                    create: {
                        guid_id: username,
                        date_created: new Date(Date.now()),
                        date_expired: new Date(Date.now() + TimeLimit_h_m_s_ms)
                    }
                }
            },
            include: {
                Sessione: true
            }
        })

        if(createAccount.Sessione === null) {
            createAccount.Sessione = (await createSession(createAccount.AccountId, createAccount.Nome)).session
        }
        
        return {
            user: createAccount,
            session: createAccount.Sessione 
        }
    } catch ( error : any ) {
        throw { message: username + " alredy exists" }
    }
}
export async function updateAccount(userID : number,
{
    newPfp = undefined,
    newUsername = undefined,
    newID = undefined,
    newDescription = undefined
} : {
    newPfp? : string
    newUsername? : string
    newID? : string
    newDescription? : string
}) {

    try {
        await prisma.account.update({
            data: {
                Immagine: newPfp,
                Nome: newUsername,
                RiotID: newID,
                Descrizione: newDescription
            },
            where: {
                AccountId: userID
            }
        })
    } catch (err : any) {
        throw { message: "Something went wrong." }
    }
}
export async function createReport(
    reason : string,
    {
        targetID = undefined,
        target = undefined,
        authorID = undefined,
        author = undefined,
        description = undefined 
    } : {
        targetID? : number,
        target? : string,
        authorID? : number,
        author? : string,
        description? : string 
    }
) {

    if(
        !(target || targetID)
        && !(author || authorID)
    ) {
        throw { message: "Target and Author are required" }
    }

    try {
        return await prisma.report.create({
            data: {
                Target: {
                    connect: {
                        Nome: target,
                        AccountId: targetID
                    }
                },
                Author: {
                    connect: {
                        Nome: author,
                        AccountId: authorID
                    }
                },
                Motivazione: reason,
                Data_Creazione: new Date(Date.now()),
                Descrizione: description
            },
            include: {
                Target: true,
                Author: true
            }
        })
    } catch (err : any) {
        console. log(err)

        throw {message : "Something went Wrong"}
    }
}
export async function getReport({
    target = undefined,
    targetID = undefined,
    author = undefined,
    authorID = undefined,
    motivation = undefined,
    beforeDate = undefined,
    afterDate = undefined
} : {
    target? : string
    targetID? : number
    author? : string
    authorID? : number
    motivation? : string
    beforeDate? : Date
    afterDate? : Date
}) {

    return await prisma.report.findMany({
        where: {
            Target: {
                Nome: target,
                AccountId: targetID,
                Banned: {
                    is: null
                }
            },
            Author: {
                Nome: author,
                AccountId: authorID
            },
            Motivazione: {
                equals: motivation
            },
            AND: [
                {
                    Data_Creazione: {
                        gte: beforeDate
                    }
                },
                {
                    Data_Creazione: {
                        lte: afterDate
                    }
                }
            ],
        },
        include: {
            Author: true,
            Target: {
                include: {
                    Banned: true
                }
            }
        }
    })
}
export async function deleteReport(
    targetID : number,
    authorID : number
) {
    return await prisma.report.delete({
        where: {
            IdTarget_IdAutore: {
                IdTarget: targetID,
                IdAutore: authorID
            }
        }
    })
}
export async function banAccount(
    {
        accountID = undefined,
        username = undefined
    } : {
        accountID? : number
        username? : string
    },
    expiration_Date : Date,
    reason : string,
    description? : string
) {

    if(
        !accountID
        && !username
    ) {
        throw { message: "Impossible to define the account" }
    }
    
    try{
        const ban = await prisma.banned_Account.upsert({
            create: {
                Account: {
                    connect: {
                        AccountId: accountID,
                        Nome: username
                    }
                },
                Expiration_Date: expiration_Date,
                Motivazione: reason,
                Descrizione: description,
            },
            where: {
                AccountId: accountID
            },
            update: {
                Expiration_Date: expiration_Date,
                Motivazione: reason,
                Descrizione: description,
            },
            include: {
                Account: {
                    include: {
                        Sessione: true
                    }
                }
            }
        })
        
        if (
            ban &&
            ban.Account.Sessione
        ) {
            await deleteSession(ban.Account.Sessione.Id)
        }
        
        return ban
    } catch (err: any) {
        throw { message: "Something went wrong" }
    }
}