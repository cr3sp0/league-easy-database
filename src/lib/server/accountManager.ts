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
    const sessione = await prisma.sessione.upsert({
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
        user: sessione.user,
        session: sessione
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
                // TODO: add ban check { lt: new Date(Date.now()) }
            ]
        },
        include: {
            ReportRicev: {
                include: {
                    Banned: true
                }
            }
        }
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
                sessione: {
                    create: {
                        guid_id: username,
                        date_created: new Date(Date.now()),
                        date_expired: new Date(Date.now() + TimeLimit_h_m_s_ms)
                    }
                }
            },
            include: {
                sessione: true
            }
        })

        if(createAccount.sessione === null) {
            createAccount.sessione = (await createSession(createAccount.AccountId, createAccount.Nome)).session
        }
        
        return {
            user: createAccount,
            session: createAccount.sessione 
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
        throw { message: err.message }
    }
}
export async function getReport() {
    
}
export async function createReport() {
    
}
export async function deleteReport() {
    
}
export async function banAccount() {
    
}