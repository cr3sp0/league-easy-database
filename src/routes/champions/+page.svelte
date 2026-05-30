<script>
  import Navbar from "$lib/components/navbar.svelte";
  import Search from "$lib/components/search.svelte";
</script>

<div class="champion-container">
  <div class="champion-content">
    <Navbar />
    <div class="title">Champion</div>
    <div class="grid-container">
      <Search />
      <div class="grid-content">
        {#each ["akali", "supercalifragilistichespiralidoso", "supercalifragilistichespiralidoso", "supercalifragilistichespiralidoso", "supercalifragilistichespiralidoso", "supercalifragilistichespiralidoso"] as champion}
        <div class="element">
          <div class="champion">{champion}</div>
        </div>
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  .champion-content{
    display: flex;
    flex-direction: column;
  }

  .grid-container{
    display: grid;
    justify-content: center;
    align-items: center;
    row-gap: 10px;
    background-color: aqua;
  }
  
  .grid-content{
    display: grid;
    grid-template-columns: repeat(5, auto);
    column-gap: clamp(.5rem, 3vw, 3rem);
    row-gap: inherit;
    background-color: green;
  }

  .element{
    grid-area: 'element';
    display: flex;
  }

  .champion{
    flex-grow: 1;
    background-color: blue;
  }
</style>