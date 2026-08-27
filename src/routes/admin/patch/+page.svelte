<script lang="ts">
  import Navbar from "$lib/components/navbar.svelte";

  let { data } = $props();

  let dropdownOpen = $state(false);
  let selectedOption = $state("Filtri");

  function handleSelect(option: string) {
    selectedOption = option;
    dropdownOpen = false;
  }
</script>

<div class="container">
  <div class="patch-content">
    <Navbar profile={data.profile} />

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
            <button type="button" onclick={() => handleSelect("Champions")}
              >Champions</button
            >
            <button type="button" onclick={() => handleSelect("Items")}
              >Items</button
            >
            <button type="button" onclick={() => handleSelect("Runes")}
              >Runes</button
            >
          </div>
        {/if}
      </div>

      <input type="text" placeholder="Cerca..." name="search" />
    </form>
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
</style>
