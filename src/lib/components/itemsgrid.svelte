<script lang="ts">
    import type { CompleteItem } from "$lib/server/itemManager";
    import StatGrid from "./statGrid.svelte";

  let { itemList } : { itemList : CompleteItem[] } = $props()

  console.log("--")
  // svelte-ignore state_referenced_locally
  const items = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    item: itemList[i]
  }));

  let expandedId = $state<number | null>(null);

  const toggleExpand = (id: number): void => {
    expandedId = expandedId === id ? null : id;
  };
</script>

<div class="grid-container">
  {#each items as gridItem (gridItem.id)}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
      class="grid-item"
      class:expanded={expandedId === gridItem.id}
      onclick={() => toggleExpand(gridItem.id)}
    >
      <div class="image-wrapper">
        <img src={gridItem.item.item.Immagine} alt={gridItem.item.item.Nome} />
      </div>

      {#if expandedId === gridItem.id}
        <div class="info-wrapper">
          <h3>{gridItem.item.item.Nome}</h3>
          <StatGrid 
          Vita = {gridItem.item.stats.Vita}
          Mana = {gridItem.item.stats.Mana}
          Velocità_di_movimento = {gridItem.item.stats.Velocità_di_movimento}
          Armatura = {gridItem.item.stats.Armatura}
          ResistenzaMagica = {gridItem.item.stats.ResistenzaMagica}
          Gittata = {gridItem.item.stats.Gittata}
          RigenerazioneVita = {gridItem.item.stats.RigenerazioneVita}
          RigenerazioneMana = {gridItem.item.stats.RigenerazioneMana}
          Critico = {gridItem.item.stats.Critico}
          Attacco = {gridItem.item.stats.Attacco}
          VelocitàDiAttacco = {gridItem.item.stats.VelocitàDiAttacco}
          AttaccoMagico = {gridItem.item.stats.AttaccoMagico}
          />
          <p>{gridItem.item.item.Descrizione}</p>
        </div>
      {/if}
    </div>
  {/each}
</div>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 16px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
  }

  .grid-item {
    background-color: var(--black-20, #1e1e1e);
    border: 1px var(--white-20, #333) solid;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    width: 100%;
    aspect-ratio: 1;
    overflow: hidden;

    display: flex;
    flex-direction: row;
  }

  .grid-item:hover {
    background-color: #2a2323;
    border-color: #4a3f3f;
  }

  .image-wrapper {
    flex: 0 0 100%;
    height: 100%;
    transition: all 0.3s ease;
  }

  .image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .grid-item.expanded {
    grid-column: span 3;
    background-color: #2a2323;
    border-color: #554949;
    aspect-ratio: auto;
    align-items: flex-start;
  }

  .grid-item.expanded .image-wrapper {
    flex: 0 0 calc((100% - 32px) / 3);
    aspect-ratio: 1;
  }

  .info-wrapper {
    flex: 1;
    padding: 16px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    animation: fadeIn 0.4s ease-out;
  }

  .info-wrapper h3 {
    margin: 0 0 8px 0;
  }

  .info-wrapper p {
    margin: 0;
    opacity: 0.8;
    line-height: 1.4;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateX(-10px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (max-width: 1024px) {
    .grid-container {
      grid-template-columns: repeat(6, 1fr);
    }
  }

  @media (max-width: 768px) {
    .grid-container {
      grid-template-columns: repeat(4, 1fr);
    }
    .grid-item.expanded {
      grid-column: span 2;
    }
    .grid-item.expanded .image-wrapper {
      flex: 0 0 calc((100% - 16px) / 2);
    }
  }

  @media (max-width: 480px) {
    .grid-container {
      grid-template-columns: repeat(2, 1fr);
    }
    .grid-item.expanded {
      grid-column: span 2;
    }
    .grid-item.expanded .image-wrapper {
      flex: 0 0 calc((100% - 16px) / 2);
    }
  }
</style>
