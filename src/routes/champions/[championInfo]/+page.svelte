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
    <div class="info-cover">
      <Navbar user={data.profile}/>
      <div class="champ-name">{data.champName}</div>
    </div>
    <div class="info-content">
      <div class="title">Statistiche</div>
      <Sectionheader />
      <div class="info-stat"><InfoStat /></div>
      <div class="title">Migliori Build</div>
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
    gap: 20px;
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
    align-items: end;
    flex-direction: row;

    text-transform: uppercase;
    font-family: var(--font-passion);
    font-size: var(--text-lg);
    color: var(--white-50);
  }

  .info-stat {
    width: 100%;
  }
</style>
