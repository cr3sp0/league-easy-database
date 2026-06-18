import { error, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ params }) => {

	//TODO: getUserByID() from the DB.
	return {
		name: params.profile,
		id: params.profile + "#EUW"
	}
}