import { createAccount, createSession, getAccount, getActiveSession } from "$lib/server/accountManager";
import { hashPassword, verifyPassword } from "$lib/server/auth";
import { fail, type Action, type Actions } from "@sveltejs/kit";

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
		const user = await getAccount(username)

		if (!user) {
			throw { message: "Account missing or Banned" }
		}
		if (!await verifyPassword(password, user.Password)) {
			throw { message: "User or Password incorrect." }
		}

		let sessione = await getActiveSession({ guid_id: username })

		if (!sessione || !cookies.get("ledb_session")) {
			sessione = await createSession(user.AccountId, username)

			if (!sessione) {
				throw { message: "Error during the registration of the Session" }
			}
		}

		cookies.set(
			'ledb_session',
			"" + sessione.session.Id,
			{
				path: "/",
				expires: sessione.session.date_expired
			}
		)

		return {
			success: true,
			userLocation: "/account/" + user.Nome
		}
	} catch (error : any) {
		console.error("Error: ", error.message)
		
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
		
		const newAccount = await createAccount(username, hashedPassword)

		if (!newAccount) {
			throw { message: "Something went wrong" }
		}

		cookies.set(
			'ledb_session',
			"" + newAccount.session.Id,
			{
				path: "/",
				expires: newAccount.session.date_expired
			}
		)

		return {
			success: true,
			userLocation: "/account/" + newAccount.user.Nome
		}
	} catch ( error : any ) {
		console.error("Error: ", error.message)

		return fail(400, { msg: error.message })
	}
}

export const actions : Actions = {login, signup}