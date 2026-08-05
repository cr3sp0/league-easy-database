<script lang="ts">
    import Navbar from '$lib/components/navbar.svelte';
    import BuildcardHolder from '$lib/components/buildcardHolder.svelte';
    import Search from '$lib/components/search.svelte';
    import CreateReport from '$lib/components/createReport.svelte';
    import type { Build } from '$lib/types.js';
    import { enhance } from '$app/forms';
    
    let { data } = $props();

    let isMenuOpen = $state(false);
    let isReportOpen = $state(false);

    // svelte-ignore state_referenced_locally
    let personalBuilds : Build[] = $state(data.baseBuilds);
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="container">
    <div class="profile-content">
        <Navbar profile={data.user.userProfile} role={data.user.userRole}/>

        <div class="profile-header">
            <div class="pfp">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.zerochan.net%2FSunseed.Genius.Loci.full.4130923.png&f=1&nofb=1&ipt=9ed228c879069b4ee1700ca8ae57ca1fde3e808dd8ac0e43f0a997b1c09c8faf" alt="pfp"/>
            </div>

            <div class="header-info">
                <div class="profile-role">{data.profileRole}</div>
                    <div class="profile-title">
                        <div>{data.profile}</div>
                        <div class="id">{data.id}</div>
                    </div>  
            </div>
            <div class="options" class:open={isMenuOpen}>
                <!-- svelte-ignore a11y_consider_explicit_label -->
                <button class="btn-option" onclick={() => isMenuOpen = !isMenuOpen}>
                    <svg viewBox="0 0 50 197" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.000193455 174.649V169.259C0.119052 168.823 0.317149 168.427 0.396388 167.991C2.13965 156.657 11.5691 147.701 22.6227 146.948C34.984 146.076 45.4436 153.13 48.8508 164.622C49.2866 166.128 49.6036 167.714 49.9998 169.259V174.649C49.8809 175.006 49.6828 175.322 49.6432 175.719C47.9396 186.181 40.4119 194.147 30.1108 196.406C29.3184 196.564 28.526 196.802 27.7336 197H22.3454C21.9888 196.881 21.6322 196.683 21.2757 196.643C10.9746 194.979 3.13014 187.647 0.752768 177.462C0.515051 176.472 0.23791 175.56 0.000193455 174.649ZM50 22.3115L49.9998 27.7016C49.8809 28.1375 49.6828 28.5338 49.6432 28.9697C47.8603 40.3832 38.3913 49.2999 27.2186 50.0133C14.8969 50.8059 4.477 43.6725 1.10934 32.1401C0.673527 30.6736 0.356575 29.1679 0 27.7014V22.3117C0.118858 21.955 0.316956 21.638 0.396195 21.2813C2.29793 10.9775 8.28047 4.24041 18.2646 1.03038C19.572 0.59445 20.9587 0.35667 22.3058 0H27.694C28.0506 0.11889 28.4072 0.31704 28.7638 0.35667C39.1044 2.06076 46.9095 9.35268 49.2866 19.5376C49.5246 20.4887 49.7623 21.4002 50 22.3115ZM49.9998 95.7857V101.175C49.8809 101.611 49.6828 102.008 49.6036 102.444C47.8207 113.817 37.9951 122.972 26.9016 123.447C14.4215 124.002 3.84309 116.473 0.871628 104.861C0.554672 103.632 0.277336 102.404 0 101.175V95.7857C0.118858 95.3498 0.316956 94.9535 0.396195 94.5176C2.13945 83.1438 12.0047 73.989 23.0982 73.474C35.5783 72.8796 46.1567 80.4489 49.1282 92.0605C49.4451 93.3287 49.7225 94.5572 49.9998 95.7857Z" fill="white"/>
                    </svg>
                </button>

                {#if isMenuOpen}
                    <div class="options-content">
                        <div>
                            <button class="option-content-btn" onclick={() => {isMenuOpen = false; isReportOpen = true}}>Report</button>
                        </div>
                        {#if data.user.userRole === "Admin"}
                            <div>
                                <form
                                method="get"
                                action="/account/reports"
                                >
                                    <input name="target" type="hidden" value={data.profile} />
                                    <button type="submit" class="option-content-btn">Report List</button>
                                </form>
                            </div>
                            <div>
                                <form 
                                method="get"
                                action="/account/ban"
                                >
                                    <input name="target" type="hidden" value={data.profile} />
                                    <button type="submit" class="option-content-btn">Block Account</button>
                                </form>
                            </div>
                        {/if}
                    </div>
                {/if}
                <CreateReport bind:visible={isReportOpen} target={data.profile} />
            </div>
        </div>
        <br />
        <div class="builds-content">
            <Search />
            <div class="builds-grid">
                <BuildcardHolder personalBuilds={personalBuilds} />
            </div>

            <form
            class="btn-more"
            method="post"
            action="?/moreBuilds"
            use:enhance = {() => async ({result}) => {
                if(result.type === 'success' && result.data?.builds){
                    personalBuilds = (result.data as {builds : Build[]}).builds
                }
            }}
            >
                <input name="limit" type="hidden" value={personalBuilds.length + 3}/>
                <button class="btn-more" type="submit">More...</button>
            </form>
        </div>
    </div>
</div>
{#if isMenuOpen}
  <button
    class="backdrop"
    onclick={() => (isMenuOpen = false)}
    aria-label="Close menu"
  ></button>
{/if}

<style>
    :root{
        --options-size: 25px;
    }

    .pfp{
        width: 150px;
        height: 150px;
    }
    .pfp img {
        width: 100%;
        height: 100%;
        object-fit:scale-down;
    }

    .id{
        font-size: var(--text-xlm);
        font-family: var(--font-mono);
        opacity: 40%;
    }

    .profile-content{
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

    .profile-header{
        display: flex;
        flex-direction: row;
        height: 150px;
        gap: clamp(5px, 1vw, 20px);
        width: 75%;
    }

    .header-info{
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        border-bottom: 2px solid var(--white-20);
    }

    .profile-title{
        display: flex;
        flex-direction: row;
        align-items: end;
        gap: 20px;
        flex-grow: 1;
        font-family: var(--font-passion);
        font-size: var(--text-lg);
    }

    .profile-role{
        font-size: var(--text-lm);
        font-family: var(--font-passion);
        color: var(--white-20);
    }

    .builds-content{
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 75%;
    }

    .builds-grid{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 15px;
    }

    .btn-more {
        background: transparent;
        border: none;
        outline: none;
        font-family: var(--font-mono);
        color: inherit;
        display: flex;
        flex-grow: 1;
        cursor: pointer;
        justify-content: center;
    }
    .btn-more:hover {
        text-decoration: underline;
    }
    .btn-more:focus-visible {
        text-decoration: underline;
    }

    .options{
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .options.open {
        z-index: 50;
    }

    .btn-option {
        height: var(--options-size);
        width: var(--options-size);
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
    .btn-option svg {
        height: 90%;
    }

    .options-content {
        position: absolute;
        right: var(--options-size);
        background-color: var(--background);
        min-width: fit-content;
        z-index: 1;
    }
    .options-content div{
        display: block;
        justify-content: center;

        color: white;
        font-family: var(--font-mono);
        
        background-color: var(--black-20);
        border: 1px var(--white-20) solid;
    }
    
    .option-content-btn {
        color: inherit;
        font-family: inherit;
        font-size: inherit;
        
        background-color: transparent;
        border: transparent;
        
        padding: 12px 16px;
        height: 100%;
        width: 100%;
    }
    .option-content-btn:hover {
        text-decoration: underline;
        background-color: #2a2323;
        border-color: #4a3f3f;
        cursor: pointer;
    }
    .option-content-btn:focus-visible {
        text-decoration: underline;
        background-color: #2a2323;
        border-color: #4a3f3f;
    }

</style>