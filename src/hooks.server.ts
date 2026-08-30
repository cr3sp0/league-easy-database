// hooks.server.ts

import prisma from '$lib/server/prisma';
import { redirect, type Handle } from '@sveltejs/kit'; 

export const handle: Handle = async ({ event, resolve }) => {

    const sessionGUID = event.cookies.get('ledb_session')
    if(sessionGUID) {
        let dbSession = await prisma.sessione.findFirst({
            where: {
                AND: [
                    { Id: parseInt(sessionGUID) },
                    { date_expired: { gt: new Date(Date.now()) } }
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
        !event.locals.user
        && (event.url.pathname.startsWith("/account") 
            || event.url.pathname.includes("/builder/")) 
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