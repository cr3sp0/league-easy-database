<script lang="ts">
  import type { Oggetto } from "$lib/server/prisma/client";
  let { items = [] }: { items: Oggetto[] } = $props();

  let isMenuOpen = $state(false);
  let searchQuery = $state("");
  let selectedItem = $state<Oggetto | null>(null);

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
      searchQuery = "";
    }
  }

  function selectItem(item: any) {
    selectedItem = item;
    isMenuOpen = false;
  }

  let filteredItems = $derived(
    items.filter((item: any) =>
      item.Nome.toLowerCase().includes(searchQuery.toLowerCase()),
    ),
  );
</script>

<div class="item-container">
  <button
    class="item-pic"
    aria-label="item-button"
    onclick={toggleMenu}
    style={selectedItem
      ? `background-image: url(${selectedItem.Immagine}); background-size: cover;`
      : ""}
  >
    {#if !selectedItem}
      <span class="placeholder">+</span>
    {/if}
  </button>

  {#if isMenuOpen}
    <div class="item-searcher" class:open={isMenuOpen}>
      <input
        type="search"
        class="item-search"
        placeholder="Search for item"
        bind:value={searchQuery}
        autofocus
      />

      <div class="item-results">
        {#each filteredItems as item}
          <button class="item-result-btn" onclick={() => selectItem(item)}>
            <img src={item.Immagine} alt={item.Nome} class="item-icon-small" />
            <span>{item.Nome}</span>
          </button>
        {:else}
          <div class="no-results">Nessun oggetto trovato</div>
        {/each}
      </div>
    </div>
  {/if}
</div>

{#if isMenuOpen}
  <button
    class="backdrop"
    onclick={() => (isMenuOpen = false)}
    aria-label="Close menu"
  ></button>
{/if}

<style>
  .item-container {
    position: relative;
    height: clamp(50px, 10vw, 125px);
    aspect-ratio: 1;
    border-radius: 1px solid white;
  }

  .item-pic {
    width: 100%;
    height: 100%;
    background: #111214;
    border: 1px solid var(--white-20);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 2rem;
  }

  .item-searcher {
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    background: #15171b;
    border: 1px solid #32363e;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    padding: 5px;
    min-width: 200px;
    min-height: 200px;
    max-height: 300px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  }

  .item-searcher.open {
    z-index: 50;
  }

  .item-search {
    background: transparent;
    border: none;
    border-bottom: 1px solid var(--white-20);
    outline: none;
    padding: 5px;
    margin-bottom: 10px;
    color: white;
    font-family: var(--font-mono);
    font-size: var(--text-md);
  }

  .item-results {
    display: flex;
    flex-direction: column;
    gap: 5px;
    overflow-y: auto;
    flex-grow: 1;
  }

  .item-result-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    background: transparent;
    border: none;
    color: white;
    padding: 5px;
    cursor: pointer;
    text-align: left;
    font-family: var(--font-mono);
  }

  .item-result-btn:hover {
    background-color: #2a2e38;
    border-radius: 4px;
  }

  .item-icon-small {
    width: 24px;
    height: 24px;
    object-fit: cover;
  }

  .no-results {
    color: #8a93a0;
    font-size: 0.8rem;
    text-align: center;
    padding: 10px;
    font-family: var(--font-mono);
  }

  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: transparent;
    border: none;
    z-index: 40;
  }
</style>
