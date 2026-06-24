import type { Action, Actions } from '@sveltejs/kit';
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ params, cookies }) => {

	//TODO: getUserByID() from the DB.
	return {
		profile: cookies.get('ledb_session'),
		id: params.profile + "#EUW"
	}
}

const logout : Action = ({ cookies }) => {
  cookies.delete('ledb_session', {path: "/"});

  //TODO: Delete session from the DB.

  return {success: true}
}

export const actions : Actions = {logout}