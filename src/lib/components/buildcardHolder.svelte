<script lang="ts">
    import type { completeBuild } from "$lib/server/buildManager";
    import type { Configurazione } from "$lib/server/prisma/client";
    import type { Build } from "$lib/types";
    import Buildcard from "./buildcard.svelte";

    // OK. BISOGNA inizializzare i tipi personalizzati con i valori letti, perché altrimenti 
    // diventa ingestibile la situazione in questo tipo di componenti.
    let { personalBuilds = [], comunityBuilds = [], isEditable = false } 
    : { personalBuilds?: completeBuild[], comunityBuilds?: completeBuild[], isEditable?: boolean } = $props();

</script>

<div class="build-container">
    {#if personalBuilds.length > 0}
    <div class="build-content">
        <span>Your Builds</span>
        {#each personalBuilds as build}
        <Buildcard
          Build={build}
          isEditable={isEditable}
        />
        {/each}
    </div>
    {/if}
    {#if comunityBuilds.length > 0}
    <div class="build-content">
        <span>Other's Builds</span>
        {#each comunityBuilds as build}
        <Buildcard Build={build} />
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