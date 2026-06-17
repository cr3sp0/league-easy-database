<script>
  let isMenuOpen = $state(false);

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<div class="item-container">
  <button class="item-pic" aria-label="item-button" onclick={toggleMenu}
  ></button>

  {#if isMenuOpen}
    <div class="item-searcher">
      <input type="search" class="item-search" placeholder="Search for item" />
    </div>
  {/if}
</div>

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

    background-color: red;
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
    min-width: 140px;
    min-height: 200px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  }

  .item-search {
    background: transparent;
    border: none;
    border-bottom: 1px solid var(--white-20);
    outline: none;
    font-size: inherit;
    color: inherit;
    font-family: var(--font-mono);
    font-size: var(--text-md);
  }
</style>
