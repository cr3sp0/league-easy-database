<script lang="ts">
  let { level = $bindable(1) }: { level: number } = $props();

  let isDropdownOpen = $state(false);

  const levels = Array.from({ length: 20 }, (_, i) => i + 1);

  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }

  function selectLevel(selected: number) {
    level = selected;
    isDropdownOpen = false;
  }
</script>

<div class="section">
  <div class="filter-wrapper">
    <button class="filter-container" onclick={toggleDropdown}>
      Level {level}
      <span class="arrow" class:open={isDropdownOpen}>
        <svg viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.5 15L0 3.75L4.16863 0L12.5 7.5L20.8314 0L25 3.75L12.5 15Z"
            fill="white"
          />
        </svg>
      </span>
    </button>

    {#if isDropdownOpen}
      <div class="dropdown-menu">
        {#each levels as l}
          <button
            class="dropdown-item"
            class:active={level === l}
            onclick={() => selectLevel(l)}
          >
            Level {l}
          </button>
        {/each}
      </div>
    {/if}
  </div>
</div>

{#if isDropdownOpen}
  <button
    class="backdrop"
    aria-label="Close"
    onclick={() => (isDropdownOpen = false)}
  ></button>
{/if}

<style>
  .section {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: end;
    font-family: var(--font-mono);
    border-bottom: 1px solid var(--white-20, rgba(255, 255, 255, 0.2));
  }

  .filter-wrapper {
    position: relative;
  }

  .filter-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: transparent;
    border: none;
    color: white;
    font-family: inherit;
    font-size: 1rem;
    padding: 10px 0;
    cursor: pointer;
  }

  .filter-container:hover {
    text-decoration: underline;
  }

  .arrow {
    height: 10px;
    width: 15px;
    display: flex;
    transition: transform 0.2s ease;
  }

  .arrow.open {
    transform: rotate(180deg);
  }

  .dropdown-menu {
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #15171b;
    border: 1px solid #32363e;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    min-width: 120px;
    max-height: 250px;
    overflow-y: auto;
    z-index: 50;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  }

  .dropdown-item {
    background: transparent;
    border: none;
    color: white;
    padding: 10px 15px;
    text-align: right;
    font-family: inherit;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .dropdown-item:hover {
    background-color: #2a2e38;
  }

  .dropdown-item.active {
    background-color: #32363e;
    font-weight: bold;
    color: #4a90e2;
  }

  .dropdown-menu::-webkit-scrollbar {
    width: 6px;
  }
  .dropdown-menu::-webkit-scrollbar-thumb {
    background: #32363e;
    border-radius: 3px;
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
    cursor: default;
  }
</style>
