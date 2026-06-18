<script lang="ts">
    import Navbar from '$lib/components/navbar.svelte';
    import BuildcardHolder from '$lib/components/buildcardHolder.svelte';
    import Search from '$lib/components/search.svelte';
    import { _getBuildsForChampion, _getBuildsFromAuthor } from './+page';
    
    let { data } = $props();
    const username = () => data.name;

    let isMenuOpen = $state(false);

    let buildsLimit : number = 5;
    let personalBuilds : Build[] = $state(_getBuildsFromAuthor(username(), buildsLimit));

    function incrementBuildLimit() {
        buildsLimit += 3;

        personalBuilds = _getBuildsFromAuthor(username(), buildsLimit)
    }

</script>

<div class="container">
    <div class="profile-content">
        <Navbar user={username()}/>

        <div class="profile-header">
            <div class="pfp">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.zerochan.net%2FSunseed.Genius.Loci.full.4130923.png&f=1&nofb=1&ipt=9ed228c879069b4ee1700ca8ae57ca1fde3e808dd8ac0e43f0a997b1c09c8faf" alt="pfp"/>
            </div>

            <div class="header-info">
                <div class="profile-title">
                    <div class="title">{data.name}</div>
                    <div class="id">{data.id}</div>
                </div>
                
                <div class="filler"></div>
                
                <div class="options">
                    <div class="btn-option-container">
                        <button class="btn-option-content" onclick={() => isMenuOpen = !isMenuOpen}>dfg</button>
                    </div>
                    {#if isMenuOpen}
                        <div id="optionsBtn" class="options-content">
                            <a href="/">Report</a>
                        </div>
                    {/if}
                </div>
            </div>
        </div>
        <br />
        <div class="builds-content">
            <Search />
            <div class="builds-grid">
                <BuildcardHolder personalBuilds={personalBuilds} />
            </div>
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <button class="btn-more" onclick={() => incrementBuildLimit()}>More...</button>
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
        font-size: var(--text-lm);
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

        border: 1px var(--white-20) solid;
    }
    
    .profile-header{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 15px;
        width: 75%;
    }

    .header-info{
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-grow: 1;
    }

    .profile-title{
        display: flex;
        flex-direction: row;
        align-items: end;
        gap: 20px;
        flex-grow: 1;
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
        display: inline-block;
    }
    
    .options-content {
        position: absolute;
        right: 0px;
        background-color: #261a1a;
        min-width: fit-content;
        z-index: 1;
    }

    .options-content a {
        display: block;
        color: white;
        padding: 12px 16px;
        font-family: var(--font-mono);
        display: block;
        background-color: var(--black-20);
    }

    .options-content a:hover, .options-content a:focus {
        text-decoration: underline;
    }

</style>