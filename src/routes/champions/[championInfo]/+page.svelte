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
      <Navbar profile={data.profile} />
      <div class="champ-name">
        {data.champName}
        <br />
        <div class="ruolo">ruolo</div>
      </div>
    </div>

    <div class="info-content">
      <div class="title">Sottotitolo</div>
      <div class="description section">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae beatae
        ipsum animi, ipsam amet similique voluptatem nisi itaque dolorum aut ab
        facilis culpa natus a nobis quae hic possimus maxime! Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Eaque illum totam quo a?
        Perspiciatis, molestiae. Mollitia culpa maiores at laborum eos iure
        perferendis architecto aspernatur consectetur, corrupti, quibusdam ab
        nihil.
      </div>
      <div class="title">Statistiche</div>
      <Sectionheader />
      <div class="info-stat section"><InfoStat /></div>
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
    font-size: var(--text-md);
    font-family: var(--font-mono);
  }

  .info-stat {
    width: 100%;
  }
</style>
