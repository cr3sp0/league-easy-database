import type { Report } from "$lib/types";
import { error, fail, type Action, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "../$types";
import { popup } from "$lib/components/store/popup.svelte";

export const load : PageServerLoad = async ({ cookies, url }) => {
    let target = url.searchParams.get("target")
    let profile = cookies.get("ledb_session")
    let role = "Admin" //TODO: get role from the session cookie

    if (!profile || role != "Admin") {
        return fail(400, "You Cannot Access This Page.")
    }

    let reports : Report[]

    if (target) {

        //TODO: Filter query to get all reports sent to the target
        reports = [
            {date: new Date(Date.now()), target: profile, author: "Fanto", reason:"Other", description:"placeholder"},
            {date: new Date(Date.now()), target: profile, author: "Fanto", reason:"Other", description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.\n\nLorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."},
            {date: new Date(Date.now()), target: profile, author: "Fanto", reason:"Other", description:"placeholder"},
            {date: new Date(Date.now()), target: profile, author: "Creazy Dave", reason:"Other", description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.\n\nLorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."},
            {date: new Date(Date.now()), target: profile, author: "Creazy Dave", reason:"Other", description:"placeholder"},
            {date: new Date(Date.now()), target: profile, author: "Fanto", reason:"Other", description:"placeholder"},
            {date: new Date(Date.now()), target: profile, author: "Creazy Dave", reason:"Other", description:"placeholder"},
        ]
    } else {

        //TODO: get EVERY report sent, without filters
        reports = [
            {date: new Date(Date.now()), target: profile, author: "Fanto", reason:"Other", description:"placeholder"},
            {date: new Date(Date.now()), target: profile, author: "Fanto", reason:"Other", description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.\n\nLorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."},
            {date: new Date(Date.now()), target: "Fanto", author: "Creazy Dave", reason:"Other", description:"placeholder"},
            {date: new Date(Date.now()), target: "Fanto", author: "Creazy Dave", reason:"Other", description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.\n\nLorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."},            {date: new Date(Date.now()), target: "Creazy Dave", author: "Fanto", reason:"Other", description:"placeholder"},
            {date: new Date(Date.now()), target: "Creazy Dave", author: "Fanto", reason:"Other", description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.\n\nLorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."},
            {date: new Date(Date.now()), target: "Creazy Dave", author: "Fanto", reason:"Other", description:"placeholder"}
        ]
    }

    return {
        profile: profile,
        role: role,
        reports: reports
    }
}


const deleteReport : Action = async ({request}) => {

    let formData = await request.formData()

    let deleteID = formData.get("date") //TODO: delete from the db
/*
    if(true) {
        return error(400)
    }
*/
    return { success: true }
}

export const actions : Actions = { deleteReport }