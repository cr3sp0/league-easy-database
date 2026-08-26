<script lang="ts">
  let { data } = $props();
</script>

<div class="item-container">
  {#each data.oggetto as oggetto}
    <div class="item">
      <img src={oggetto.Immagine} alt="MANCA!!!!" />
      <div class="text">{oggetto.Nome}</div>
    </div>
  {/each}
</div>

<style>
  img {
    max-width: 100px;
    margin: 20px;
  }
  .item-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px;
    margin-top: 50px;
  }
  .item {
    width: auto;
    height: 300px;
    width: 300px;
    background-color: #1f1f1f;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
