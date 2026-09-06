<script lang="ts">
    import { enhance } from "$app/forms";
    import type { completeBuild } from "$lib/server/buildManager";
    import type { Configurazione } from "$lib/server/prisma/client";
    import Buildcard from "./buildcard.svelte";
    import { popup } from "./store/popup.svelte";

    // OK. BISOGNA inizializzare i tipi personalizzati con i valori letti, perché altrimenti 
    // diventa ingestibile la situazione in questo tipo di componenti.
    let {
      personalBuilds = $bindable([]),
      comunityBuilds = $bindable([]),
      isEditable = false
    } 
    : {
      personalBuilds?: completeBuild[],
      comunityBuilds?: completeBuild[],
      isEditable?: boolean
    } = $props();

    let personal = $derived(personalBuilds)
    let comunity = $derived(comunityBuilds)
</script>

<div class="build-container">
{#if personal.length > 0}
<div class="build-content">
  <span>Your Builds</span>
  {#each personal as build}
  <Buildcard
      Build={build}
      isEditable={isEditable}
    />
    {/each}
    <form
    class="btn-more"
    method="post"
    action="?/moreBuilds"
    use:enhance = {() => async ({result}) => {
      if(result.type === 'success' && result.data?.builds){
        personal = (result.data as {builds : completeBuild[]}).builds
      } else if (result.type === 'failure' && result.data) {
        popup.text = result.data.msg + ""
        popup.color = 'red'
      }
    }}
    >
      <input name="originalLength" type="hidden" value={personal.length}/>
      <input name="personal" type="hidden" value={true}/>
      <input name="limit" type="hidden" value={personal.length + 3}/>
      <button class="btn-more" type="submit">More...</button>
    </form>
  </div>
    {/if}
    {#if comunity.length > 0}
  <div class="build-content">
    <span>Other's Builds</span>
    {#each comunity as build}
    <Buildcard Build={build} />
    {/each}
    <form
    class="btn-more"
    method="post"
    action="?/moreBuilds"
    use:enhance = {() => async ({result}) => {
      if(result.type === 'success' && result.data?.builds){
        console.log(comunityBuilds.length)
        comunity = (result.data as {builds : completeBuild[]}).builds
        console.log(comunityBuilds.length)
      } else if (result.type === 'failure' && result.data) {
        popup.text = result.data.msg + ""
        popup.color = 'red'
      }
    }}
    >
      <input name="originalLength" type="hidden" value={comunity.length}/>
      <input name="limit" type="hidden" value={comunity.length + 3}/>
      <button class="btn-more" type="submit">More...</button>
    </form>
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
</style>