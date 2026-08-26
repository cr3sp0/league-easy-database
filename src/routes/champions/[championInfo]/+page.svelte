<script lang="ts">
  import BuildcardHolder from "$lib/components/buildcardHolder.svelte";
  import InfoStat from "$lib/components/info-stat.svelte";
  import Navbar from "$lib/components/navbar.svelte";
  import Search from "$lib/components/search.svelte";
  import Sectionheader from "$lib/components/sectionheader.svelte";

  let { data } = $props();
</script>

<div class="container">
  <div class="info-container">
    <div
      class="info-cover"
      style="background-image: url({data.champion?.Cosmetico[0].Immagine});"
    >
      <Navbar profile={data.profile} />
      <div class="champ-name">
        {data.champion?.nome}
        <br />
        <div class="ruolo">ruolo</div>
      </div>
    </div>

    <div class="info-content">
      <div class="title">{data.champion?.Titolo}</div>
      <div class="description section">{data.champion?.Descrizione}</div>
      <div class="title">Stats</div>
      <Sectionheader />
      {#if data.champion}
        <div class="info-stat section">
          <InfoStat champion={data.champion} />
        </div>
      {/if}
      <div class="title">Best Builds</div>
      <Search />
      <BuildcardHolder />
    </div>
  </div>
</div>

<style>
  .info-container {
    height: 100%;
    width: 100%;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-items: center;

    border: 1px var(--white-20) solid;
  }

  .info-cover {
    width: 100%;
    height: 70vh;
    box-sizing: border-box;
    padding: 20px clamp(20px, 6vw, 80px);

    display: flex;
    flex-direction: column;
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
    box-shadow: inset 0 0 150px 50px rgba(0, 0, 0, 0.9);
  }

  .info-content {
    box-sizing: border-box;
    width: 100%;

    padding: 0px clamp(20px, 6vw, 80px);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .champ-name {
    flex-grow: 1;
    display: flex;
    align-items: start;
    justify-content: end;
    flex-direction: column;
    gap: 0px;

    text-transform: uppercase;
    font-family: var(--font-passion);
    font-size: var(--text-lg);
    color: var(--white-50);
  }

  .ruolo {
    font-size: var(--text-lm);
    text-transform: capitalize;
  }

  .description {
    text-align: center;
    font-size: var(--text-md);
    font-family: var(--font-mono);
  }

  .info-stat {
    width: 100%;
  }
</style>
