import { popup } from "$lib/components/store/popup.svelte";
import { hashPassword, verifyPassword } from "$lib/server/auth";
import prisma from "$lib/server/prisma";
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
		let user = await prisma.account.findUnique({ 
			where: {
				Nome: username
			}
		})

		if (!user) {
			throw { message: "Account missing" }
		}

		if (
			user
			&& !await verifyPassword(password, user?.Password)
		) {
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
				maxAge: TimeLimit_h_m_s,
				expires: new Date(Date.now() + TimeLimit_h_m_s)
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

const signup : Action = async ({ request, cookies, locals }) => {
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

	try {
		const hashedPassword = await hashPassword(password)

		//TODO: write explicit sql query
		let uniqueAccount = await prisma.account.findUnique({
			where: {
				Nome: username
			}
		})

		if (uniqueAccount) {
			throw { message: "This Account already exists" }
		}

		//TODO: write explicit sql query
		let createAccount = await prisma.account.create({
			data: {
				Nome: username,
				Password: hashedPassword, //TODO: hash it
				Descrizione: "",
				IsAdmin: false,
				Immagine: ""
			}
		})

		if (!createAccount) {
			throw { message: "Something went wrong" }
		}
		
		//TODO: write explicit sql query
		let session = await prisma.sessione.create({
			data: {
				guid_id: createAccount.Nome,
				user_id: createAccount.AccountId,
				date_created: new Date(Date.now()),
				date_expired: new Date(Date.now() + TimeLimit_h_m_s_ms)
			}
		})
		
		if (!session) {
			throw { message: "Something went wrong" }
		}

		cookies.set(
			'ledb_session',
			"" + session.Id,
			{
				path: "/",
				maxAge: TimeLimit_h_m_s,
				expires: new Date(Date.now() + TimeLimit_h_m_s)
			}
		)

		return {
			success: true,
			userLocation: "/account/" + createAccount.Nome
		}
	} catch (error: any) {
		return fail(400, { msg: error.message })
	}
}

export const actions : Actions = {login, signup}