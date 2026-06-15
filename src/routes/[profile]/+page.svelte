<script lang="ts">
    import Navbar from '$lib/components/navbar.svelte';
    import BuildcardHolder from '$lib/components/buildcardHolder.svelte';
    import Search from '$lib/components/search.svelte';

    let { data } = $props();
</script>

<div class="container">
    <div class="profile-content">
        <Navbar />
        <div class="profile-info">
            <div class="pfp">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.zerochan.net%2FSunseed.Genius.Loci.full.4130923.png&f=1&nofb=1&ipt=9ed228c879069b4ee1700ca8ae57ca1fde3e808dd8ac0e43f0a997b1c09c8faf" alt="pfp"/>
            </div>
            <div class="title">{data.name}</div>
        </div>
        <br />
        <div class="profile-content">
            <Search />
            <div class="builds-grid">
                <BuildcardHolder personalBuilds={data.builds} comunityBuilds={data.builds} />
            </div>
        </div>
    </div>
</div>

<style>
    .pfp{
        width: 150px;
        height: 150px;
        overflow: hidden;
    }

    .pfp img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .profile-info{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 15px;
    }

    .profile-content{
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding-left: 10%;
        padding-right: 10%;
    }

    .builds-grid{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 15px;
    }
</style>