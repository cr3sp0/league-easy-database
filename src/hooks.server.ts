// on EVERY request do:

import type { IUser } from '$lib/types';
import { redirect } from '@sveltejs/kit';

export async function handle({event, resolve}) {

    // check that the user already logged in.
    const sessionGUID = event.cookies.get('ledb_session')
    if(sessionGUID) {
        //check in the DB.
        const sql = "";
        const resp = ""; //await PostgreSQL().query(sql, [sessionGUID])

        if(true) { //check 'resp' rows
            event.locals.user = {
                userID: 1,
                userName: "kk",
                riotID: "kk#g"
            }
        }
    }

    if((event.url.pathname.startsWith("/account")) && !event.locals.user) {
        throw redirect(303, '/login')
    }

    return await resolve(event)
}