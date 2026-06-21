import { error, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ params, cookies }) => {

	//TODO: getUserByID() from the DB.
	return {
		profile: cookies.get('ledb_session'),
		id: params.profile + "#EUW"
	}
}