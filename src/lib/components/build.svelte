<script lang="ts">
    let { author, champion, runes, items }
    : { author: String, champion: Champion, runes: Rune[], items: Item[] } = $props();
    // TODO: More parameters are required for this component, add them once the dbms is ready.

    let compressed: boolean = $state(true);
</script>

<div class="build-container">
    <div class="build-content">
        <div class="icon">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F897966370%2Fit%2Ffoto%2Fpunto-interrogativo-3d-verde-punto-domanda-segno-di-domanda-che-chiede-icona-simbolo-con.jpg%3Fs%3D1024x1024%26w%3Dis%26k%3D20%26c%3DKRxJSaWSQ16aCPUhe5WE_I57O3guyFTRg-aF9kh4EgY%3D&f=1&nofb=1&ipt=958809844ade9106c9e1f293166ece9697b8ae46f4543e698e4192174edf7eec" alt="champion icon" />
        </div>
        <div class="build-info">
            <div class="name">{champion.Name}, FantoBuild</div>
            <div class="author">{author}</div>
        </div>
        <div class="filler"></div>
        <button onclick={()=>{compressed = !compressed}}>
            <img src="" alt="v"/>
        </button>
    </div>
    {#if compressed}
    <div class="build-content">
        {#each runes as rune}
            <div class="rune">{rune.Name}|{rune.Grade}</div>
        {/each}
    </div>
    <div class="build-content">
        {#each items as obj}
            <div class="object">{obj.Name}|{obj.Cost}</div>
        {/each}
    </div>
    {:else}
    <div class="build-content">
        
    </div>
    {/if}
</div>

<style>

    .build-container{
        display: flex;
        max-width:none;
        flex-direction: column;
        background-color: rgba(0,0,0, 0.25); 
        padding: 5%;
    }

    .build-content{
        display: flex;
        flex-direction: row;
        gap: 5%;
        align-items: center;
    }

    .icon{
        width: 50px;
        height: 50px;
    }
    .icon img {
        width: 100%;
        height: 100%;
    }
    .build-info{
        display: flex;
        flex-direction: column;
    }
    .author{
        opacity: 50%;
    }
</style>