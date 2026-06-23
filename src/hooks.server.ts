// on EVERY request do:

import { redirect } from '@sveltejs/kit';

export async function handle({event, resolve}) {

    // check that the user already logged in.
    const sessionGUID = event.cookies.get('ledb_session') //gets the username
    if(sessionGUID) {
        //check in the DB.
        const sql = "";
        const resp = ""; //await PostgreSQL().query(sql, [sessionGUID])

        if(true) { // TODO: create local user based on the 'resp' rows from the DB
            event.locals.user = {
                userID: 1,
                username: "kk"
            }
        }

        //TODO: Check what else to do here.
    }

    if(
        (event.url.pathname.startsWith("/account") || event.url.pathname === "/builder/newbuild") 
        && !event.locals.user
    ) {
        throw redirect(303, '/login')
    }

    return await resolve(event)
}