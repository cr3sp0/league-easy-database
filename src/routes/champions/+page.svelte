<script>
  import Navbar from "$lib/components/navbar.svelte";
  import Search from "$lib/components/search.svelte";
</script>

<div class="container">
  <div class="champion-content">
    <Navbar />
    <div class="title">Champions</div>
    <Search />
    <div class="grid-container">
      <div class="grid-content">
        {#each ["akali", "supercalifragilistichespiralidoso", "supercalifragilistichespiralidoso", "supercalifragilistichespiralidoso", "supercalifragilistichespiralidoso", "supercalifragilistichespiralidoso"] as champion}
          <div class="champion">
            <a href="" class="element">{champion}</a>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
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

  .grid-container {
    width: 100%;
    row-gap: 10px;
    background-color: aqua;
  }

  .grid-content {
    width: 100%;
    display: grid;

    grid-template-columns: repeat(auto-fit, minmax(200px, 250px));
    justify-content: center;

    column-gap: clamp(0.5rem, 3vw, 3rem);
    row-gap: inherit;
    background-color: green;
  }

  .element {
    display: flex;
    overflow-wrap: anywhere;
    word-break: break-word;
    hyphens: auto;
  }

  .champion {
    flex-grow: 1;
    background-color: blue;
  }
</style>
