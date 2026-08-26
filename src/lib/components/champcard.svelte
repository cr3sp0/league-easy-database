<script>
  let { name, Icon } = $props();
</script>

<div class="card-container">
  <div class="card-content">
    <img src={Icon} alt="faker" />
    <div class="card-name">{name}</div>
  </div>
</div>

<style>
  .card-container {
    width: 100%;
    aspect-ratio: 0.75;
    background-color: var(--black-20, #333);
    padding: 7px;
    border: solid 1px var(--white-20, rgba(255, 255, 255, 0.2));
    box-sizing: border-box;
    max-width: 20%;
  }

  .card-content {
    width: 100%;
    height: 100%;
    background-color: black;
    position: relative;
    overflow: hidden;
  }

  .card-content img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .card-name {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    color: white;
    text-align: center;
    padding: 12px 4px 8px 4px;
    box-sizing: border-box;

    background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.9));

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: var(--font-passion);
    font-size: var(--text-lm);
  }
</style>
