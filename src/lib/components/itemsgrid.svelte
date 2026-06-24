<script lang="ts">
  interface GridItem {
    id: number;
    title?: string;
  }

  // PLACEHOLDER
  const items: GridItem[] = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
  }));

  let expandedId = $state<number | null>(0);

  const toggleExpand = (id: number): void => {
    expandedId = expandedId === id ? null : id;
  };
</script>

<div class="grid-container">
  {#each items as item (item.id)}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
      class="grid-item"
      class:expanded={expandedId === item.id}
      onclick={() => toggleExpand(item.id)}
    ></div>
  {/each}
</div>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-auto-rows: 100px;
    gap: 16px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
  }

  .grid-item {
    background-color: var(--black-20);
    border: 1px var(--white-20) solid;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .grid-item:hover {
    background-color: #2a2323;
    border-color: #4a3f3f;
  }

  .grid-item.expanded {
    grid-column: span 3;
    background-color: #2a2323;
    border-color: #554949;
  }

  @media (max-width: 1024px) {
    .grid-container {
      grid-template-columns: repeat(6, 1fr);
    }
  }

  @media (max-width: 768px) {
    .grid-container {
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: 80px;
    }
    .grid-item.expanded {
      grid-column: span 2;
    }
  }

  @media (max-width: 480px) {
    .grid-container {
      grid-template-columns: repeat(2, 1fr);
    }
    .grid-item.expanded {
      grid-column: span 2;
    }
  }
</style>
