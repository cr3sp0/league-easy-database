<script lang="ts">
    import { enhance } from "$app/forms";
    import Navbar from "$lib/components/navbar.svelte";
    import Search from "$lib/components/search.svelte";
    import { popup } from "$lib/components/store/popup.svelte";
    import { slide } from "svelte/transition";

    let { data } = $props();

    const profile = $derived(data.profile)
    const reports = $derived(data.reports)

    let expandedId = $state<number | null>(null);
    const toggleExpand = (id: number) => {
        expandedId = expandedId === id ? null : id;
    };
</script>

<div class="container">
    <div class="reports-content">
        <Navbar profile={profile.username} role={data.role} />

        <div class="header">
            <div class="title">Reports List</div>
        </div>

        <Search />
        <div class="body">
            <div class="report-list">
                {#each reports as listItem, currIndex}
                <!-- svelte-ignore a11y_click_events_have_key_events -->
                <!-- svelte-ignore a11y_no_static_element_interactions -->
                <div
                class="list-item"
                class:expanded={expandedId === currIndex}
                onclick={() => toggleExpand(currIndex)}
                >
                    <div class="list-item-header">
                        <div class="reason">{listItem.reason}</div>
                        <div class="filler"></div>
                        <div class="list-item-info">
                            <div>to: 
                                <a href="/account/{listItem.target}" class="account-info">
                                    {listItem.target}
                                </a>
                            </div>
                            <div>from: 
                                <a href="/account/{listItem.author}" class="account-info">
                                    {listItem.author}
                                </a>
                            </div>
                        </div>
                    </div>

                    {#if (expandedId === currIndex)}
                    <div class="list-item-expanded" transition:slide={{duration : 300}}>
                        <div class="description">{listItem.description}</div>
                        <div class="filler"></div>
                        <form
                        method="get"
                        action="/account/ban"
                        >
                            <input name="target" type="hidden" value={listItem.target} />
                            <input name="reason" type="hidden" value={listItem.reason} />

                            <button class="btn" type="submit" value="banAccount">Ban</button>
                        </form>
                        <form
                        method="post"
                        action="?/deleteReport"
                        use:enhance={() => async({result}) => {
                            if(result.type === "success") {
                                popup.color = "green"
                                popup.text = "Report successfully Deleted"
                            } else if (result.type === "error") {
                                popup.color = "red"
                                popup.text = "Unkown Error"
                            }
                        }}
                        >
                            <input name="date" type="hidden" value={listItem.date} />

                            <button class="btn" type="submit">Ignore</button>
                        </form>
                    </div>
                    {/if}
                </div>
                {/each}
            </div>
        </div>

        <div class="footer">
            Always check that the Report is reasonable before banning someone.
        </div>
    </div>
</div>

<style>
    .reports-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 50px;

        width: 100%;
        height: 100%;
        box-sizing: border-box;

        padding: 20px clamp(20px, 6vw, 80px);

        border: solid var(--white-20) 1px;
    }

    .header {
        display: flex;
        flex-direction: row;
        font-family: var(--font-passion);
        font-size: var(--text-lg);
    }

    .body {
        width: 80%;
        padding: 20px clamp(20px, 6vw, 80px);
    }

    .report-list {
        display: flex;
        flex-direction: column;
        overflow-y: auto;


        gap: clamp(10px, 1vh, 20px);
    }

    .list-item {
        display: flex;
        flex-direction: column;

        border: 1px var(--white-20) solid;
        
        background-color: var(--black-20);
        color: white;
        font-size: var(--text-md);
        font-family: var(--font-mono);
        
        padding: clamp(10px, 2vh, 50px);
        cursor: pointer;
    }
    .list-item:hover {
        background-color: #2a2323;
        border-color: #4a3f3f;
    }
    .list-item.expanded {
        cursor: default;
        gap: clamp(10px, 1vh, 25px);
    }
    .list-item.expanded:hover {
        background-color: var(--black-20);
        border: 1px var(--white-20) solid;
    }

    .list-item-header {
        display: flex;
        flex-direction: row;
    }

    .list-item-info {
        display: flex;
        flex-direction: column;
    }

    .account-info:hover {
        text-decoration: underline;
    }

    .reason {
        font-weight: 800;
        text-decoration: underline;
    }

    .list-item-expanded {
        gap: 15px;
        padding: 15px 25px;

        display: flex;
        flex-direction: row;

        align-items: center;
    }

    .description {
        hyphens: auto;
        word-break: break-all;
        overflow-wrap: break-word;

        font-size: var(--text-sm);
    }

    .btn {
        height: fit-content;
        padding: 1.5vh 2vw;

        background-color: var(--black-20);
        border: 1px var(--white-20) solid;
        
        color: white;
        
        font-family: var(--font-mono);
        font-size: var(--text-md);
        cursor: pointer;
    }
    .btn:hover, .btn:focus {
        background-color: #2a2323;
        border-color: #4a3f3f;
        text-decoration: underline;
    }

    .footer {
        font-family: var(--font-mono);
        font-size: var(--text-sm);
    }
</style>