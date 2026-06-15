<script>
  let { name } = $props();
</script>

<div class="card-container">
  <div class="card-content">
    <img src="" alt="faker" />
    <div class="card-name">{name}</div>
  </div>
</div>

<style>
  .card-container {
    width: 100%;
    aspect-ratio: 0.75;
    background-color: var(--black-20);
    padding: 7px;
    border: solid 1px var(--white-20);
  }

  .card-content {
    width: 100%;
    height: 100%;
    background-color: black;
  }
</style>
