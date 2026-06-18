import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./[profile]/$types";

export const load: PageServerLoad = () => {
    redirect(302, "/login");
}