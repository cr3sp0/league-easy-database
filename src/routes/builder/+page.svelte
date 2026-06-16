<script>
  import Buildcard from "$lib/components/buildcard.svelte";
    import BuildcardHolder from "$lib/components/buildcardHolder.svelte";
  import Champcard from "$lib/components/champcard.svelte";
  import Navbar from "$lib/components/navbar.svelte";
</script>

<div class="container">
  <div class="builder-content">
    <Navbar />
    <div class="builder-header-container">
      <div class="title">Builder</div>
      <div class="builder-message">
        Create a new Build... <br /><br /> Start by searching your
        <b>Champion!</b>
      </div>
      <div class="builder-search">
        <input
          type="search"
          class="search"
          id="champ-search"
          placeholder="Search for your Champion"
        />
      </div>
      <div class="builder-most-used">
        <a href="/builder/newbuild" class="element">
          <Champcard name={"champion"} /></a
        >

        <Champcard name={"champion"} />
        <Champcard name={"champion"} />
        <Champcard name={"champion"} />
      </div>
    </div>

    <div class="builder-builds">
      <div class="title">Build Browser</div>
      <div class="builder-message">
        Find inspiration or compare <br />
        your builds!
      </div>
      <div class="builder-search">
        <input
          type="search"
          class="search"
          id="build-search"
          placeholder="Search for a Build"
        />
      </div>
      <BuildcardHolder />
    </div>
  </div>
</div>

<style>
  a {
    display: contents;
  }

  .builder-content {
    height: 100%;
    width: 100%;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    gap: 90px;
    align-items: center;

    padding: 20px clamp(20px, 6vw, 80px);

    border: 1px var(--white-20) solid;
  }

  .builder-header-container {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 45px;
  }

  .builder-message {
    font-family: var(--font-mono);
    text-align: center;
  }

  .builder-search {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .search {
    background: transparent;
    border: none;
    border-bottom: 1px solid var(--white-20);
    outline: none;
    font-size: inherit;
    color: inherit;
    font-family: var(--font-mono);
    font-size: var(--text-md);

    width: 60%;
  }

  .builder-most-used {
    width: 100%;
    display: flex;
    flex-direction: row;

    gap: 20px;
  }

  .builder-builds {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 45px;

    width: 100%;
  }

</style>
