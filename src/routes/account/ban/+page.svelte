<script lang="ts">
    import { enhance } from '$app/forms';
    import Navbar from '$lib/components/navbar.svelte';
    import { popup } from '$lib/components/store/popup.svelte.js';
    import { BanDurations, ReportReason } from '$lib/types.js';

    let { data } = $props();

    const target = () => data.target
    let reason = $state()
    let duration = $state()

    // svelte-ignore state_referenced_locally
    if(data.reason) {
        reason = data.reason
    }
</script>

<div class="container">
    <div class="content">
        <Navbar profile={data.profile}/>

        <div class="title">Ban</div>
        
        <div class="header form-info">
            <div>Ban the Account:</div>
            <div class="filler"></div>
            <div class="target">{target()}</div>
        </div>

        <form
        class="form"
        method="post"
        action="?/banAccount"
        use:enhance={() => async({ result }) => {
            popup.text = ""
            if (result.type === "error") {
                popup.color = "red"
                popup.text = "Unknown Error"
            } else if (result.type === "failure") {
                popup.color = "red"
                popup.text = "" + result.data?.msg
            } else if (result.type === "success") {
                popup.color = "green"
                popup.text = "" + result.data?.msg
            }
        }}
        >
            <input name="target" type="hidden" value={target()} />

            <div class="form-info">
                <div>Reason:</div>
                <select name="reason" class="drop-menu" bind:value={reason}>
                    <option value={undefined} selected hidden>Select</option>
                    <option value="Repeated Reports">Repeated Reports</option>
                    {#each ReportReason as reason}
                    <option value={reason}>{reason}</option>
                    {/each}
                </select>
            </div>
            <div class="form-info">
                <div>Duration:</div>
                <select name="duration" class="drop-menu" bind:value={duration}>
                    <option value={undefined} selected hidden>Select</option>
                    {#each BanDurations as duration}
                        <option value={duration.hours}>{duration.label}</option>
                    {/each}
                </select>
            </div>

            <textarea name="description" class="description" placeholder="Details..."></textarea>
            <button class="btn" type="submit">Ban</button>    
        </form>
        
        <div class="footer">This user will no longer be able to access the account.</div>
    </div>
</div>

<style>
    .content{
        height: 100%;
        width: 100%;
        box-sizing: border-box;

        display: flex;
        flex-direction: column;
        gap: 50px;
        align-items: center;

        padding: 20px clamp(20px, 6vw, 80px);

        border: 1px solid var(--white-20);
    }

    .header {
        max-width: 20vw;
    }

    .form {
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 80%;

        padding: clamp(5rem, 2vh, 15rem);
        gap: clamp(25px, 1vh, 80px);
    }

    .form-info {
        display: flex;
        flex-direction: row;
        gap: 20px;

        color: white;
        font-family: var(--font-mono);
        font-size: var(--text-md);
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

        min-height: 20vh;

        overflow-y: auto;

        background-color: var(--black-20);
        color: white;
        border: 2px solid var(--white-20);

        font-size: var(--text-md);
        font-family: var(--font-mono);
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