import type { ServerLoad, Actions, Cookies } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

import { error, redirect } from "@sveltejs/kit";


/*export const load: ServerLoad = async ({ locals }) => {
    const { session } = locals;
    const user = await db.getUserFromId(session.data.userId);
    return { user };
};

export const actions: Actions = {
    login: async ({ request, locals }) => {
		const { session } = locals; // you can access `locals.session`

		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');
		const user = await db.getUser(email, password);

		await session.setData({ userId: user.id, name: user.name }); // set data to session
		await session.save(); // session saveand session create(session data is stored and set-cookie)

		return { success: true };
	}
}*/