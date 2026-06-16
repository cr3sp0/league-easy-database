<script lang="ts">
  import { slide } from "svelte/transition";

  let { name, author, champion, runes, items }
  : { name:String, author: String, champion: Champion, runes: Rune[], items: Item[] } = $props();
  // TODO: More parameters are required for this component, add them once the dbms is ready.

  let isOpen = $state(false);

  function toggleCard() {
    isOpen = !isOpen;
  }
</script>

<div class="buildcard-container">
  <div
    class="buildcard-header"
    onclick={toggleCard}
    role="button"
    tabindex="0"
    onkeydown={(e) => e.key === "Enter" && toggleCard()}
  >
    <div class="buildcard-header-icon"></div>
    <div class="buildcard-header-title">
      <div class="buildcard-header-title-name">{champion.Name}, {name}</div>
      <div class="buildcard-header-title-auth">{author}</div>
    </div>
    <div class="buildcard-header-button">
      <span class="arrow" class:rotated={isOpen}
        ><svg
          width="25"
          height="15"
          viewBox="0 0 25 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5 15L0 3.75L4.16863 0L12.5 7.5L20.8314 0L25 3.75L12.5 15Z"
            fill="white"
          />
        </svg>
      </span>
    </div>
  </div>

  {#if isOpen}
    <div transition:slide={{ duration: 300 }} class="buildcard-body">
      <div class="buildcard-model"></div>

      <div class="buildcard-section-title">Runes</div>
      <div class="buildcard-runes">
        <div class="runes-primary"></div>
        <div class="runes-secondary"></div>
      </div>

      <div class="buildcard-section-title">Items</div>
      <div class="buildcard-items"></div>

      <div class="buildcard-section-title">Stats</div>
      <div class="buildcard-stats"></div>
    </div>
  {/if}
</div>

<style>
  .buildcard-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    box-sizing: border-box;
    width: 100%;
    height: auto;

    padding: clamp(20px, 2vw, 30px) 10px;

    background-color: var(--black-20, #1a1a1a);
    font-family: var(--font-mono, monospace);
  }

  .buildcard-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 80px;
    width: 100%;
    gap: 20px;
    cursor: pointer;
    user-select: none;
  }

  .buildcard-header-icon {
    border-radius: 100px;
    height: 100%;
    aspect-ratio: 1;
    background-color: red;
  }

  .buildcard-header-title {
    width: 100%;
  }

  .buildcard-header-title-auth {
    color: var(--white-20, #888);
  }

  .buildcard-header-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
  }

  .arrow {
    display: inline-block;
    transition: transform 0.3s ease;
    color: var(--white-100, #fff);
  }

  .arrow.rotated {
    transform: rotate(180deg);
  }

  .buildcard-body {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .buildcard-model {
    width: 60%;
    height: auto;
  }

  .buildcard-section-title {
    width: 100%;
  }

  .buildcard-runes {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 100px;
  }

  .runes-primary {
    display: flex;
    flex-direction: row;
    background-color: blue;
  }

  .runes-secondary {
    display: flex;
    flex-direction: row;
    background-color: blue;
  }

  .buildcard-items {
    display: flex;
    flex-direction: column;
  }
</style>
