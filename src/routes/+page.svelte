<script>
  import Navbar from "$lib/components/navbar.svelte";
</script>

<div class="landpage-container">
  <div class="landpage-content">
    <Navbar />
    <div class="landpage-3d-container">
      <img src="..\img\shyvana 1.png" alt="" srcset="" />
    </div>
    <div class="filler"></div>
    <div class="landpage-footer">
      <div class="landpage-message">
        A LEAGUE OF LEGENDS DB DRIVEN PROJECT MADE BY THREE FRIENDS, IN SEARCH
        FOR A GOOD GRADE.
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
    padding: 40px clamp(15px, 5vw, 60px);
  }

  .landpage-content {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;
    box-sizing: border-box;

    padding: 20px clamp(20px, 6vw, 80px);

    border: solid rgba(255, 255, 255, 0.2) 1px;
    color: rgba(255, 255, 255, 0.6);
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.05) 1px,
      transparent 1px
    );

    background-size: 10% 75%;

    background-repeat: repeat-x;
    background-position: top;

    position: relative;
    isolation: isolate;
  }

  .landpage-3d-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none;
    padding: 10px;
    box-sizing: border-box;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .landpage-3d-container img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  .landpage-message {
    font-family: var(--font-mono);
    font-size: var(--text-md);
    max-width: 50%;
  }
</style>
