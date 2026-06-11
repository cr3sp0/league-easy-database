<div class="buildcard-container">
  <div class="buildcard-header">
    <div class="buildcard-header-icon"></div>
    <div class="buildcard-header-title">
      <div class="buildcard-header-title-name">Champ Name, Build Name</div>
      <div class="buildcard-header-title-auth">Author Name</div>
    </div>
    <div class="buildcard-header-button"></div>
  </div>
  <div class="buildcard-model"></div>
  <div class="buildcard-section-title">Runes</div>
  <div class="buildcard-runes">
    <div class="runes-primary"></div>
    <div class="runes-secondary"></div>
  </div>
  <div class="buildcard-section-title">Items</div>
  <div class="buildcard-items"></div>
  <div class="buildcard-section-title">Stats</div>
  <div class="buildcard-stats"></div>
</div>

<style>
  .buildcard-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    box-sizing: border-box;
    width: 100%;
    height: 100%;

    padding: clamp(20px, 2vw, 30px) 10px;

    background-color: var(--black-20);
    font-family: var(--font-mono);
  }

  .buildcard-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 80px;
    width: 100%;
    gap: 20px;
  }

  .buildcard-header-icon {
    border-radius: 100px;
    height: 100%;
    aspect-ratio: 1;
    background-color: red;
  }

  .buildcard-header-title {
    width: 100%;
  }

  .buildcard-header-title-auth {
    color: var(--white-20);
  }

  .buildcard-model {
    width: 60%;
    height: auto;
  }

  .buildcard-section-title {
    width: 100%;
  }

  .buildcard-runes {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 100px;
  }

  .runes-primary {
    display: flex;
    flex-direction: row;
    background-color: blue;
  }

  .runes-secondary {
    display: flex;
    flex-direction: row;
    background-color: blue;
  }

  .buildcard-items {
    display: flex;
    flex-direction: column;
  }
</style>
