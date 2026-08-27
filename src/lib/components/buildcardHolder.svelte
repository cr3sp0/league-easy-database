<script lang="ts">
    import type { Build } from "$lib/types";
    import Buildcard from "./buildcard.svelte";

    let { personalBuilds = [], comunityBuilds = [], isEditable = false } : { personalBuilds?: Build[], comunityBuilds?: Build[], isEditable?: boolean } = $props();

</script>

<div class="build-container">
    {#if personalBuilds.length > 0}
    <div class="build-content">
        <span>Your Builds</span>
        {#each personalBuilds as build}
        <Buildcard
          name={build.name}
          author={build.author}
          champion={build.champion}
          runes={build.runes}
          items={build.items}
          wins={build.wins}
          losses={build.losses}
          kills={build.kills}
          deaths={build.deaths}
          assists={build.assists}
          isEditable={isEditable}
        />
        {/each}
    </div>
    {/if}
    {#if comunityBuilds.length > 0}
    <div class="build-content">
        <span>Other's Builds</span>
        {#each comunityBuilds as build}
        <Buildcard
          name={build.name}
          author={build.author}
          champion={build.champion}
          runes={build.runes}
          items={build.items}
          wins={build.wins}
          losses={build.losses}
          kills={build.kills}
          deaths={build.deaths}
          assists={build.assists}
        />
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