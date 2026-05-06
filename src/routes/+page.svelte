<script>
  import Navbar from "$lib/components/navbar.svelte";
</script>

<div class="landpage-container">
  <div class="landpage-content">
    <Navbar />
    <div class="landpage-3d-container"></div>
    <div class="landpage-footer">
      <div class="landpage-message">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam soluta
        voluptate magni vel voluptas natus cupiditate sit blanditiis repellendus
        eaque atque possimus tempora, nostrum veritatis? Nesciunt autem
        voluptatum corporis soluta?
      </div>
    </div>
  </div>
</div>

<style>
  .landpage-container {
    width: 100%;
    height: 100%;
    background-color: #261a1a;
    box-sizing: border-box;
    padding: 40px 60px 40px 60px;
  }

  .landpage-content {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;
    box-sizing: border-box;

    border: solid rgba(255, 255, 255, 0.2) 1px;
    color: rgba(255, 255, 255, 0.6);
  }

  .landpage-3d-container {
    background-color: green;
    flex-grow: 1;
  }

  .landpage-footer {
    background-color: blue;
  }

  .landpage-message {
    max-width: 50%;
  }
</style>
