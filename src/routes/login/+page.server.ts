import { popup } from "$lib/components/store/popup.svelte";
import prisma from "$lib/server/prisma";
import type { ISession } from "$lib/types";
import { fail, type Action, type Actions } from "@sveltejs/kit";

const TimeLimit_h = 5
const TimeLimit_h_m = TimeLimit_h * 60
const TimeLimit_h_m_s = TimeLimit_h_m * 60
const TimeLimit_h_m_s_ms = TimeLimit_h_m_s * 1000

const login : Action = async ({ request, cookies }) => {
	const data = await request.formData()

	const username = data.get('user')
	const password = data.get('password')

	if(
		typeof username !== 'string' ||
		typeof password !== 'string' ||
		!username ||
		!password
	) {
		return fail(400, { msg: "Provide a valid User and/or Password." })
	}

	try{
		//SELECT * FROM Account 
		// WHERE Nome = username 
		// AND Password = password
		let user = await prisma.account.findFirst({ 
			where: {
				AND: [
					{ Nome: username },
					{ Password: password }
				]
			}
		})

		if (!user) { // resp.rowCount === 0
			throw { message: "User or Password incorrect." }
		}

		let sessione = await prisma.sessione.findFirst({
            where: {
                AND: [
                    { guid_id: username },
                    { date_expired: { lt: new Date(Date.now()) } }
                ]
            },
		})

		if (!sessione || !cookies.get("ledb_session")) {
			//TODO: write explicit sql query
			sessione = await prisma.sessione.upsert({
				where: {
					user_id: user.AccountId,
					guid_id: username
				},
				update: {
					date_created: new Date(Date.now()),
					date_expired: new Date(Date.now() + TimeLimit_h_m_s_ms)
				},
				create: {
					user_id: user.AccountId,
					guid_id: username,
					date_created: new Date(Date.now()),
					date_expired: new Date(Date.now() + TimeLimit_h_m_s_ms)
				}
			})

			if (!sessione) {
				throw { message: "Error during the registration of the Session" }
			}
		}

		cookies.set(
			'ledb_session',
			"" + sessione?.Id,
			{
				path: "/",
				maxAge: TimeLimit_h_m_s
			}
		)
		
		return {
			success: true,
			userLocation: "/account/" + user.Nome
		}
	} catch (error : any) {
		console.error("Error: ", error.message)

		popup.color = "red"
		popup.text = "" + error.message

		return fail(400, { msg: error.message })
	}
}

const signup : Action = async ({ request, cookies }) => {
	const data = await request.formData()

	const username = data.get('user')
	const password = data.get('password')
	const confirmPassword = data.get('confirmPassword')

	if(
		typeof username !== 'string' ||
		typeof password !== 'string' ||
		typeof confirmPassword !== 'string' ||
		!username ||
		!password ||
		!confirmPassword
	) {
		return fail(400, { msg: "Provide a valid User and/or Password." })
	}

	if(password.localeCompare(confirmPassword)) {
		return fail(400, { msg: "The Password doesn't match." })
	}
/*
	//TODO: Add info to the database, use a "users" and a "session" table.
	const sql = "";
	const resp = null; //await PostgreSQL().query(sql, [username, password]);

	const user : IUser = {
		userID: 0, //TODO: generate next id from the db
		username: username,
		role: username === "Fanto" ? "Admin" : "User" //TODO: check status inside the db
	};

	const sessionSQL = ""; // TODO: query to insert user and expiration date
	const sessionResp = null; //await PostgreSQL().query(sql, [user.id]);

	let session : ISession = { guid: username, role: "User" }; //= {...sessionResp.row[0]} TODO: get the user from the query response
	cookies.set(
		'ledb_session',
		session.guid,
		{
			path: "/",
			maxAge: 60 * 60 * 5 //5 hours
		}
	)
	cookies.set(
		'ledb_role',
		session.role,
		{
			path: "/",
			maxAge: 60 * 60 * 5 //5 hours
		}
	)*/

	return {
		success: true,
		user: username
	}
}

export const actions : Actions = {login, signup}