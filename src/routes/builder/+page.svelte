<script lang="ts">
  import { enhance } from "$app/forms";
  import BuildcardHolder from "$lib/components/buildcardHolder.svelte";
  import Champcard from "$lib/components/champcard.svelte";
  import Navbar from "$lib/components/navbar.svelte";

  let { data, form } = $props();

  let indices = $derived(form?.indices ?? data.randomIndices);

</script>

<div class="container">
  <div class="builder-content">
    <Navbar profile={data.profile} role={data.role} />
    <div class="builder-header-container">
      <div class="title">Builder</div>
      <div class="builder-message section">
        Create a new Build... <br /><br /> Start by searching your
        <b>Champion!</b>
      </div>
      <div class="builder-search section">
        <form action="?/filterByName" method="post" use:enhance>
          <input
            type="search"
            name="championName"
            class="search"
            id="champ-search"
            placeholder="Search for your Champion"
          />
        </form>
      </div>
      <div class="builder-most-used section">
        {#each indices as i}
          <a
            href={"/builder/" + data.champions[i].nome + "-new-build"}
            class="element"
          >
            {#if data.champions && data.champions[i]}
              <Champcard
                name={data.champions[i].nome}
                Icon={data.champions[i].Icona}
              />
            {:else}
              <Champcard name={"champion"} Icon={"*"} />
            {/if}
          </a>
        {/each}
      </div>
    </div>

    <div class="builder-builds section">
      <div class="title">Build Browser</div>
      <div class="builder-message section">
        Find inspiration or compare <br />
        your builds!
      </div>
      <div class="builder-search section">
        <input
          type="search"
          class="search"
          id="build-search"
          placeholder="Search for a Build"
        />
      </div>
      <BuildcardHolder comunityBuilds={data.communityBuilds} />
    </div>
  </div>
</div>

<style>
  a {
    display: contents;
  }

  form {
    display: contents;
  }

  .builder-content {
    height: 100%;
    width: 100%;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 20px clamp(20px, 6vw, 80px);

    border: 1px var(--white-20) solid;
  }

  .builder-header-container {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
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
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px;
  }

  .builder-builds {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
  }
</style>
