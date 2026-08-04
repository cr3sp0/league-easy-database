<script lang="ts">
    import { enhance } from "$app/forms";
    import type { Report } from "$lib/types";
    import { slide } from "svelte/transition";
    import { popup } from "./store/popup.svelte";

    let { visible = $bindable(), target, list } 
    : { visible : Boolean, target : string, list : Report[] } = $props();

    let expandedId = $state<number | null>(null);

    const toggleExpand = (id: number) => {
        expandedId = expandedId === id ? null : id;
    };
</script>

{#if visible}
    <div class="reportList-background">
        <button
            class="backdrop"
            onclick={() => {visible = false; expandedId = null}}
            aria-label="Close form"
        ></button>
        <div class="reportList-popup">
            <div class="container">
                <form
                method="get"
                class="form"
                action="/account/ban"
                >
                    <div class="header">
                        <div>Report List</div>
                        <div class="filler"></div>
                        <div class="close-button">
                            <!-- svelte-ignore a11y_consider_explicit_label -->
                            <button class="close-icon" onclick={() => {visible = false; expandedId = null}}>
                                <svg viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.732244 0.732225C-0.244081 1.70855 -0.244081 3.29145 0.732244 4.26777L9.69509 13.2306L0.732244 22.1936C-0.244081 23.1698 -0.244081 24.7528 0.732244 25.7291C1.70854 26.7053 3.29147 26.7053 4.26777 25.7291L13.2306 16.7661L22.1936 25.7291C23.1698 26.7053 24.7528 26.7053 25.7291 25.7291C26.7053 24.7528 26.7053 23.1698 25.7291 22.1936L16.7661 13.2306L25.7291 4.2678C26.7053 3.2915 26.7053 1.70858 25.7291 0.732275C24.7526 -0.24405 23.1698 -0.24405 22.1936 0.732275L13.2306 9.69508L4.26777 0.732225C3.29147 -0.244075 1.70854 -0.244075 0.732244 0.732225Z" fill="white"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="reportList-content">
                    {#each list as listItem, currIndex}
                        <!-- svelte-ignore a11y_click_events_have_key_events -->
                        <!-- svelte-ignore a11y_no_static_element_interactions -->
                        <div
                        class="list-item"
                        class:expanded={expandedId === currIndex}
                        onclick={() => toggleExpand(currIndex)}
                        >
                            <div class="list-item-info">
                                <div class="reason">{listItem.reason}</div>
                                <div class="filler"></div>
                                <div>from: {listItem.author}</div>
                            </div>
                            {#if (expandedId === currIndex)}
                                <div transition:slide={{duration : 300}}>
                                    <div class="description">{listItem.description}</div>
                                    <div class="filler"></div>
                                    <input name="target" type="hidden" value={target} />
                                    <input name="reason" type="hidden" value={listItem.reason} />
                                    <div style="height: 100%; align-items: center;">
                                        <button class="btn" type="submit">ban</button>
                                    </div>
                                </div>
                            {/if}
                        </div>
                    {/each}
                    </div>
                    <div class="footer">footer</div>
                </form>
            </div>
        </div>
    </div>
{/if}

<style>
    .reportList-background {
        position: fixed;
        top: 0;
        left: 0;
        
        display: flex;
        width: 100vw;
        height: 100vh;
        align-items: center;
        justify-content: center;

        z-index: 50;

        backdrop-filter: blur(5px) grayscale(80%);
    }

    .reportList-popup{
        width: 60%;
        height: 80%;
        z-index: 100;
        box-shadow: 5px 5px 10px var(--black-20);
    }

    .form {
        display: flex;
        flex-direction: column;
        height: 75vh;

        gap: clamp(20px, 2vh, 80px);
    }

    .header {
        display: flex;
        flex-direction: row;
        font-family: var(--font-passion);
        font-size: var(--text-lg);
    }

    .close-button {
        display: flex;
        align-items: center;
    }
    
    .close-icon {
        padding-block: 0px;
        padding-inline: 0px;
        height: 20px;
        width: 20px;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
    .close-icon svg {
        height: 90%;
    }

    .reportList-content {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        max-height: 80%;
        overflow-y: auto;

        gap: clamp(10px, 1vh, 20px);

        padding: 20px clamp(20px, 6vw, 80px);
        border: 1px var(--white-20) solid;
    }

    .list-item {
        display: flex;
        flex-direction: column;

        background-color: var(--black-20);
        border: 1px var(--white-20) solid;

        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

        padding: clamp(10px, 2vh, 50px);
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
    .list-item div {
        display: flex;
        flex-direction: row;

        background-color: transparent;
        color: white;

        font-size: var(--text-sm);
        font-family: var(--font-mono);
    }

    .list-item-info {
        display: flex;
        flex-direction: row;
        gap: 10px;
        align-items: center;
    }

    .reason {
        font-weight: 800;
        text-decoration: underline;
    }

    .description {
        hyphens: auto;
        word-break: break-all;
    }

    .btn {
        height: fit-content;
        padding: 1vh 1vw;

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