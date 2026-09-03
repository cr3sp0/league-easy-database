// hooks.server.ts

import { getActiveSession } from '$lib/server/accountManager';
import { redirect, type Handle } from '@sveltejs/kit'; 

export const handle: Handle = async ({ event, resolve }) => {

    const sessionID = event.cookies.get('ledb_session')
    if(sessionID) {
        let dbSession = await getActiveSession({ sessionID: parseInt(sessionID) })

        if(dbSession && dbSession.user) {
            event.locals.user = {
                userID: dbSession.session.user_id,
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
        event.locals.user
        && event.url.pathname === "/login"
    ) {
        throw redirect(303, "/account/" + event.locals.user.username)
    }

    if(
        event.locals.user
        && !event.locals.user.isAdmin
        && event.url.pathname.startsWith("/admin/")
    ) {
        throw redirect(303, "/")
    }

    return await resolve(event)
}