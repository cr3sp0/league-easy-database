<script lang="ts">
  import Itemselector from "$lib/components/Itemselector.svelte";
  import Navbar from "$lib/components/navbar.svelte";
  import Runeselector from "$lib/components/runeselector.svelte";
  import type { StatItem } from "$lib/types";

  let { data } = $props()

  // PLACEHOLDER
  const stats: StatItem[] = [
    { id: 1, name: "Attack Damage", value: "75" },
    { id: 2, name: "Ability Power", value: "120" },
    { id: 3, name: "Armor", value: "45" },
    { id: 4, name: "Magic Resist", value: "38" },
    { id: 5, name: "Attack Speed", value: "1.42" },
    { id: 6, name: "Ability Haste", value: "25" },
    { id: 7, name: "Critical Strike", value: "20%" },
    { id: 8, name: "Lethality", value: "18" },
    { id: 9, name: "Move Speed", value: "345" },
  ];
</script>

<div class="container">
  <div class="buildinfo-content">
    <Navbar user={data.profile}/>
    <div class="buildinfo-header">
      <div class="champpic"></div>
      <div class="title">New build</div>
      <div class="pen">
        <svg viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M35.2525 60.6005L62.9865 32.8665C58.3209 30.9174 54.0833 28.0712 50.5144 24.4893C46.9308 20.9196 44.0833 16.6808 42.1335 12.0135L14.3995 39.7475C12.2358 41.9112 11.1521 42.9949 10.2221 44.1874C9.12488 45.5953 8.18318 47.1179 7.41347 48.7285C6.76474 50.0934 6.28101 51.5484 5.31354 54.4507L0.206226 69.7615C-0.0288393 70.4625 -0.0637147 71.2152 0.105519 71.9349C0.274752 72.6547 0.641386 73.313 1.16421 73.8358C1.68703 74.3586 2.34532 74.7253 3.06507 74.8945C3.78483 75.0637 4.53752 75.0288 5.23855 74.7938L20.5492 69.6865C23.4554 68.719 24.9066 68.2353 26.2715 67.5865C27.889 66.8166 29.4027 65.8803 30.8126 64.7779C32.0051 63.8479 33.0888 62.7642 35.2525 60.6005ZM70.6812 25.1718C73.4465 22.4065 75 18.656 75 14.7453C75 10.8346 73.4465 7.08408 70.6812 4.3188C67.9159 1.55352 64.1654 2.9137e-08 60.2547 0C56.344 -2.9137e-08 52.5935 1.55352 49.8282 4.3188L46.5021 7.64493L46.6446 8.06116C48.2832 12.7514 50.9655 17.0083 54.4893 20.5107C58.0964 24.1399 62.5023 26.8751 67.3551 28.4979L70.6812 25.1718Z"
            fill="white"
          />
        </svg>
      </div>
    </div>

    <div class="buildinfo-runes">
      <div class="buildinfo-sectiontitle">Runes</div>
      <Runeselector />
    </div>

    <div class="buildinfo-items">
      <div class="buildinfo-sectiontitle">Items</div>
      <div class="items-row">
        <Itemselector /><Itemselector /><Itemselector />
      </div>
      <div class="items-row">
        <Itemselector /><Itemselector /><Itemselector />
      </div>
    </div>

    <div class="buildinfo-stats">
      <div class="buildinfo-sectiontitle">Stats</div>
      <div class="stats-grid">
        {#each stats as stat (stat.id)}
          <div class="stat-card">
            <span class="stat-name">{stat.name}</span>
            <span class="stat-value">{stat.value}</span>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  .buildinfo-content {
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

  .buildinfo-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 50px;
    height: 75px;
  }

  .champpic {
    background-color: red;
    height: 100%;
    aspect-ratio: 1;
    border-radius: 100px;
  }

  .pen svg {
    height: 2.5rem;
    aspect-ratio: 1;

    cursor: pointer;
  }

  .buildinfo-sectiontitle {
    font-size: var(--text-lm);
    font-family: var(--font-mono);
  }

  .buildinfo-runes {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
  }

  .buildinfo-items {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }

  .items-row {
    width: 100%;
    display: flex;
    flex-direction: row;

    gap: clamp(80px, 10vw, 125px);
  }

  .buildinfo-stats {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 50px;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    width: 100%;
  }

  .stat-card {
    font-family: var(--font-mono);
    border-radius: 4px;
    padding: 15px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition:
      background 0.2s,
      border-color 0.2s,
      transform 0.2s;
  }

  .stat-name {
    color: #8a93a0;
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 6px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  }

  .stat-value {
    color: #ffffff;
    font-size: 1.2rem;
    font-weight: bold;
  }

  @media (max-width: 500px) {
    .stats-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
