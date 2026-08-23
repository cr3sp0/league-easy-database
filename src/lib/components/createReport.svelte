<script lang="ts">
    import { enhance } from "$app/forms";
    import { ReportReason } from "$lib/types";
    import { popup } from "./store/popup.svelte";

    let { visible = $bindable(), target } 
    : { visible : Boolean, target : string } = $props();

    let reasonOfReport : string = $state("");
    let description = $state<string|undefined>(undefined)
</script>

{#if visible}
    <div class="report-background">
        <button
            class="backdrop"
            onclick={() => (visible = false)}
            aria-label="Close form"
        ></button>
        <div class="report-popup">
            <div class="container">
                <form
                class="form"
                method="post"
                action="?/sendReport"
                use:enhance={() => async({result}) => {
                    if(result.type === "success" && result.data?.msg){
                        popup.color = 'green'
                        popup.text = "" + result.data.msg
                    } else if(result.type === "failure" && result.data?.msg){
                        popup.color = 'red'
                        popup.text = "" + result.data?.msg
                    } else {
                        popup.color = 'red'
                        popup.text = "Uknown Error: Please try again later"
                    }
                    visible = false
                }}
                >
                    <div class="header">
                        <div>Report this User?</div>
                        <div class="filler"></div>
                        <div class="close-button">
                            <!-- svelte-ignore a11y_consider_explicit_label -->
                            <button class="close-icon" onclick={() => visible = false}>
                                <svg viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.732244 0.732225C-0.244081 1.70855 -0.244081 3.29145 0.732244 4.26777L9.69509 13.2306L0.732244 22.1936C-0.244081 23.1698 -0.244081 24.7528 0.732244 25.7291C1.70854 26.7053 3.29147 26.7053 4.26777 25.7291L13.2306 16.7661L22.1936 25.7291C23.1698 26.7053 24.7528 26.7053 25.7291 25.7291C26.7053 24.7528 26.7053 23.1698 25.7291 22.1936L16.7661 13.2306L25.7291 4.2678C26.7053 3.2915 26.7053 1.70858 25.7291 0.732275C24.7526 -0.24405 23.1698 -0.24405 22.1936 0.732275L13.2306 9.69508L4.26777 0.732225C3.29147 -0.244075 1.70854 -0.244075 0.732244 0.732225Z" fill="white"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="report-content">
                        <div class="report-info">
                            <div class="text">Report</div>
                            <div class="text target">{target}</div>
                            <div class="text">for:</div>

                            <div class="filler"></div>

                            <div class="drop-menu">
                                <select name="reason" id="reason" bind:value={reasonOfReport}>
                                    <option value="" selected disabled hidden>Select</option>
                                    {#each ReportReason as option}
                                        <option value={option}>{option}</option>
                                    {/each}
                                </select>
                            </div>
                        </div>

                        <textarea name="description" class="description" placeholder="(Optional) Details..." bind:value={description}></textarea>

                        <button type="submit" class="btn">Report</button>
                    </div>
                    <div class="footer">Once sent the report, an Admin will review it and take actions accordingly.</div>
                </form>
            </div>
        </div>
    </div>
{/if}

<style>
    .report-background {
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

    .report-popup{
        width: 60%;
        min-width: fit-content;
        height: 80%;
        z-index: 100;
        box-shadow: 5px 5px 10px var(--black-20);
    }

    .form {
        display: flex;
        flex-direction: column;
        height: 75vh;
        min-width: fit-content;

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
        height: 20px;
        width: 20px;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
    .close-icon svg {
        height: 90%;
    }

    .report-content {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        gap: clamp(50px, 2vh, 300px);

        padding: 20px clamp(20px, 6vw, 80px);
        border: 1px var(--white-20) solid;
        align-items: center;
    }
    .report-info {
        display: flex;
        flex-direction: row;
        gap: 10px;
    }

    .target {
        font-weight: 800;
        text-decoration: underline;
    }

    .drop-menu {
        padding: 5px clamp(10px, 2vw, 50px);
        cursor: pointer;
    }

    .description {
        min-width: 70%;
        max-width: 90%;

        min-height: 25vh;

        overflow-y: auto;

        background-color: var(--black-20);
        color: white;
        border: 2px solid var(--white-20);

        font-size: var(--text-md);
        font-family: var(--font-mono);
    }

    .btn {
        height: fit-content;
        width: fit-content;
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