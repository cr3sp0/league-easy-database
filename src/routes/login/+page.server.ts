import type { IUser, ISession } from "$lib/types";
import { fail, type Action, type Actions } from "@sveltejs/kit";

const login : Action = async ({request, cookies}) => {
	const data = await request.formData();

	const username = data.get('user')
	const password = data.get('password')

	if(
		typeof username !== 'string' ||
		typeof password !== 'string' ||
		!username ||
		!password
	) {
		return fail(400, "Provide a valid User and/or Password.");
	}

	//TODO: Check database info, use a "users" and a "session" table.
	const sql = "";
	const resp = null; //await PostgreSQL().query(sql, [username, password]);

	if (false) { // resp.rowCount === 0
		return fail(400, "User or Password incorrect.")
	}

	const user : IUser | null = null; // {...resp.row[0]}

	const sessionSQL = ""; // TODO: query to insert user and expiration date
	const sessionResp = null; //await PostgreSQL().query(sql, [user.id]);

	let session : ISession = {guid: username}; //= {...sessionResp.row[0]}
	cookies.set(
		'ledb_session',
		session.guid,
		{
			path: "/",
			maxAge: 60 * 60 //1 hour
		}
	)

	return {
		success: true,
		user: username
	}
}

export const actions : Actions = {login}