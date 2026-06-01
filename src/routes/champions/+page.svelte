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
      {#each ["akali", "aurora", "b", "d", "supercalifragilistichespiralidoso", "z"] as champion}
        <div class="element">
          <div class="champion">{champion}</div>
        </div>
      {/each}
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
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(5, auto);
    column-gap: clamp(0.5rem, 3vw, 3rem);
    row-gap: 10px;
    padding-left: 5%;
    padding-right: 5%;
    background-color: aqua;
  }

  .element {
    display: flex;
  }

  .champion {
    flex-grow: 1;
    background-color: blue;
  }
</style>
