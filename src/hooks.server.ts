// on EVERY request do:

import prisma from '$lib/server/prisma';
import { redirect } from '@sveltejs/kit';

export async function handle({event, resolve}) {

    const sessionGUID = event.cookies.get('ledb_session') //gets the username
    if(sessionGUID) {
        // SELECT * FROM sessione 
        // JOIN account ON sessione.user_id = account.AccountID
        // WHERE guid_id = $1
        // AND date_expired < $2
        let dbSession = await prisma.sessione.findFirst({
            where: {
                AND: [
                    { guid_id: sessionGUID },
                    { date_expired: { lt: new Date(Date.now()) } }
                ]
            },
            include: {
                user: true
            }
        })

        if(dbSession && dbSession.user) {
            event.locals.user = {
                userID: dbSession.user_id,
                username: dbSession.user.Nome,
                pfp: dbSession.user.Immagine,
                isAdmin: dbSession.user.IsAdmin,
                riotID: dbSession.user.RiotID === null 
                    ? undefined : dbSession.user.RiotID 
            }
        }
    }
    
    if(
        (event.url.pathname.startsWith("/account") 
            || event.url.pathname === "/builder/newbuild") 
        && !event.locals.user
    ) {
        throw redirect(303, '/login')
    }

    if(
        event.url.pathname === "/login"
        && event.locals.user
    ) {
        throw redirect(303, "/account/" + event.locals.user.username)
    }
    
    return await resolve(event)
}