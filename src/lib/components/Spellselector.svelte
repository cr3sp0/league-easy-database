<script lang="ts">
  import type { Incantesimo } from "$lib/server/prisma/client";

  let {
    spells = [],
    selectedSpell = $bindable(null),
  }: {
    spells: Incantesimo[];
    selectedSpell?: Incantesimo | null;
  } = $props();

  let isMenuOpen = $state(false);

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function selectSpell(spell: Incantesimo) {
    selectedSpell = spell;
    isMenuOpen = false;
  }
</script>

<div class="spell-container">
  <button class="spell-pic" aria-label="Select Spell" onclick={toggleMenu}>
    <span class="placeholder">+</span>
  </button>

  {#if isMenuOpen}
    <div class="spell-dropdown">
      {#each spells as spell (spell.Nome)}
        <button
          class="spell-option"
          onclick={() => selectSpell(spell)}
          title={spell.Nome}
        >
          <img src={"*"} alt={spell.Nome} />
        </button>
      {/each}
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
  .spell-container {
    position: relative;
    width: clamp(40px, 6vw, 60px);
    aspect-ratio: 1;
  }

  .spell-pic {
    width: 100%;
    height: 100%;
    background: #111214;
    border: 1px solid var(--white-20);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    padding: 0;
    border-radius: 4px;
    overflow: hidden;
  }

  .spell-pic img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .spell-dropdown {
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    background: #15171b;
    border: 1px solid #32363e;
    border-radius: 4px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5px;
    padding: 10px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
    z-index: 50;
  }

  .spell-option {
    background: transparent;
    border: 1px solid transparent;
    padding: 0;
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 4px;
    overflow: hidden;
  }

  .spell-option:hover {
    border-color: white;
  }

  .spell-option img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
