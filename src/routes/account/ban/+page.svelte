<script lang="ts">
    import Navbar from '$lib/components/navbar.svelte';
    import { ReportReason } from '$lib/types.js';

    let { data } = $props();

    const target = () => data.target
    let reason : string = $state("")

    // svelte-ignore state_referenced_locally
    if(data.reason) {
        reason = data.reason
    }
</script>

<div class="container">
    <div class="content">
        <Navbar profile={data.profile}/>

        <div class="body">
            <form
            class="form"
            method="post"
            action="?/banAccount"
            >
                <div class="form-info">
                    <div>Ban the Account:</div>
                    <div class="target">{target()}</div>
                </div>
                <input name="target" type="hidden" value={target()} />
                <input name="reason" type="hidden" bind:value={reason} />
                <select class="drop-menu" bind:value={reason}>
                    <option value="" selected disabled hidden>Select</option>
                    <option value="Repeated Reports">Repeated Reports</option>
                    {#each ReportReason as reason}
                    <option value={reason}>{reason}</option>
                    {/each}
                </select>
                <textarea name="description" class="description" placeholder="Details..."></textarea>
                <button class="btn" type="submit">Ban</button>    
            </form>
        </div>
        
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

    .form {
        display: flex;
        flex-direction: column;
        align-items: center;

        padding: clamp(5rem, 2vh, 25rem);
        gap: clamp(25px, 1vh, 80px);
    }

    .form-info {
        display: flex;
        flex-direction: row;

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
        min-height: 50%;

        background-color: transparent;
        color: white;
        border: 2px solid var(--white-20);

        font-size: var(--text-md);
        font-family: var(--font-mono);
    }

    .btn {
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