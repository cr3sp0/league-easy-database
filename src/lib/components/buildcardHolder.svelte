<script lang="ts">
    import Buildcard from "./buildcard.svelte";

    let { personalBuilds = [], comunityBuilds = [] } : { personalBuilds?: Build[], comunityBuilds?: Build[] } = $props();

</script>

<div class="build-container">
    {#if personalBuilds.length > 0}
    <div class="build-content">
        <span>Your Builds</span>
        {#each personalBuilds as build}
        <Buildcard name={build.Name} author={build.Author} champion={build.Champion} runes={build.Runes} items={build.Items}/>
        {/each}
    </div>
    {/if}
    {#if comunityBuilds.length > 0}
    <div class="build-content">
        <span>Other's Builds</span>
        {#each comunityBuilds as build}
        <Buildcard name={build.Name} author={build.Author} champion={build.Champion} runes={build.Runes} items={build.Items}/>
        {/each}
    </div>
    {/if}
</div>

<style>
  .build-container {
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  .build-content {
    flex-grow: 1;
    padding: 20px 40px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .build-content span {
    font-size: var(--text-md);
    font-family: var(--font-mono);
  }

</style>