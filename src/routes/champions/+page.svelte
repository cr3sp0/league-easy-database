<script>
  import { enhance } from "$app/forms";
  import Champcard from "$lib/components/champcard.svelte";
  import Navbar from "$lib/components/navbar.svelte";
  import Search from "$lib/components/search.svelte";
  import { redirect } from "@sveltejs/kit";

  let { data, form } = $props();

  let champions = $derived(form?.champions ?? data.champions);
</script>

<div class="container">
  <div class="champion-content">
    <Navbar profile={data.profile} />
    <div class="title">Champions</div>
    <form action="?/filterByName" method="post" use:enhance>
      <Search />
    </form>
    <div class="grid-content">
      {#each champions as champ}
        <a href="/champions/{champ.nome}" class="element">
          <Champcard name={champ.nome} Icon={champ.Icona} />
        </a>
      {/each}
    </div>
  </div>
</div>

<style>
  a {
    display: contents;
  }

  form {
    display: contents;
  }

  .champion-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;

    width: 100%;
    height: 100%;
    box-sizing: border-box;

    padding: 20px clamp(20px, 6vw, 80px);

    border: solid var(--white-20) 1px;
  }

  .grid-content {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px;
  }

  .element {
    overflow-wrap: anywhere;
    word-break: break-word;
    hyphens: auto;
  }
</style>
