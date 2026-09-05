<script lang="ts">
    import Champcard from "$lib/components/champcard.svelte";
  import Navbar from "$lib/components/navbar.svelte";
    import type { Campione, Oggetto, Runa } from "$lib/server/prisma/browser";

  let { data } = $props();

  let dropdownOpen = $state(false);
  let selectedOption = $state("Filtri");
  let selection : {Nome: string, Immagine: string}[] = $state([])

  let updates : {
    champion: Campione[],
    items: Oggetto[],
    rune: Runa[]
  } = {
    champion: [],
    items: [],
    rune: []
  }

  function handleSelect(option: string, list: any[]) {
    selectedOption = option;
    selection = list
    dropdownOpen = false;
  }
</script>

<div class="container">
  <div class="patch-content">
    <Navbar profile={data.profile} role={data.role} />

    <div class="title">Insert new Patch</div>

    <form action="" class="search-bar">
      <div class="dropdown">
        <button
          type="button"
          class="dropdown-btn"
          onclick={() => (dropdownOpen = !dropdownOpen)}
        >
          {selectedOption} ▼
        </button>

        {#if dropdownOpen}
          <div class="dropdown-content">
            <button type="button" onclick={() => {
                handleSelect("Champions", data.champions.map((c) => {
                  return {
                    Nome: c.nome,
                    Immagine: c.Icona
                  }
                }))
              }
            }
            >Champions</button>

            <button type="button" onclick={() => handleSelect("Items", data.items)}
            >Items</button>

            <button type="button" onclick={() => handleSelect("Runes", data.runes)}
            >Runes</button>
          </div>
        {/if}
      </div>

      <input type="text" placeholder="Cerca..." name="search" />
    </form>

    <div class="grid-content">
      {#each selection as gridElem}
      <button class="element">
        <Champcard name={gridElem.Nome} Icon={gridElem.Immagine} />
      </button>
      {/each}
    </div>
  </div>

  <div class="new-updates">
    <div>
      {#each updates.champion as champ}
      <button class="update-record">
        <Champcard name={champ.nome} Icon={champ.Icona} />
      </button>
      {/each}
    </div>
    <div>
      {#each updates.items as item}
      <button class="update-record">
        <Champcard name={item.Nome} Icon={item.Immagine} />
      </button>
      {/each}
    </div>
    <div>
      {#each updates.rune as rune}
      <button class="update-record">
        <Champcard name={rune.Nome} Icon={rune.Immagine} />
      </button>
      {/each}
    </div>
  </div>
</div>

{#if dropdownOpen}
  <button
    class="backdrop"
    onclick={() => (dropdownOpen = false)}
    aria-label="Close menu"
  ></button>
{/if}

<style>
  form {
    display: contents;
  }
  .search-bar {
    display: flex;
    align-items: center;
    padding: 5px;
    gap: 10px;
    width: 100%;
    max-width: 600px;

    border-bottom: 1px solid var(--white-20);
  }

  .search-bar input {
    flex-grow: 1;
    border: none;
    outline: none;
    padding: 10px;

    background-color: transparent;
    color: white;
    font-family: var(--font-mono);
    font-size: var(--text-md);
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-btn {
    padding: 10px 15px;
    cursor: pointer;
    border: none;
    border-radius: 6px;
    font-family: var(--font-passion);
  }

  .dropdown-content {
    position: absolute;
    top: 110%;
    left: 0;
    min-width: 120px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    z-index: 10;
    background: var(--background);
    border: 1px solid #32363e;
    z-index: 11;
  }

  .dropdown-content button {
    padding: 12px 16px;
    border: none;
    background: none;
    text-align: left;
    cursor: pointer;
    color: white;
  }

  .dropdown-content button:hover {
    background: #202329;
  }

  .patch-content {
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

  .new-updates {
    display: flex;
    flex-direction: column;
  }
  .new-updates div {
    display: flex;
    flex-direction: row;
  }

  button {
    background-color: transparent;
    color: white;
    cursor: pointer;
    border: transparent;

    max-width: 20vw;
  }
</style>
