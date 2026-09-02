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
        event.url.pathname === "/login"
        && event.locals.user
    ) {
        throw redirect(303, "/account/" + event.locals.user.username)
    }
    
    return await resolve(event)
}