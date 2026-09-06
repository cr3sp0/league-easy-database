<script lang="ts">
  import { slide } from "svelte/transition";
  import Itemsgrid from "./itemsgrid.svelte";
  import type { completeBuild } from "$lib/server/buildManager";

  let {
    Build,
    isEditable = false,
  }: {
    Build: completeBuild;
    isEditable?: boolean;
  } = $props();

  const name = $derived(Build.build.TitoloConf);
  const author = $derived(Build.author);
  const champion = $derived(Build.champion);
  const runes = $derived(Build.runes);
  const items = $derived(Build.items);
  const wins = $derived(
    Build.results.filter((r) => r.Risultato === "Vittoria").length,
  );
  const losses = $derived(
    Build.results.filter((r) => r.Risultato === "Sconfitta").length,
  );
  const kills = $derived(0);
  const deaths = $derived(0);
  const assists = $derived(0);

  let isOpen = $state(false);
  let winPerc: string | undefined = $state();
  // svelte-ignore state_referenced_locally
  if (wins && losses) {
    winPerc = ((wins / (wins + losses)) * 100).toFixed(0) + "%";
  }

  function toggleCard() {
    isOpen = !isOpen;
    console.error("!!!!!!!!");
    console.log(wins + " " + losses + " " + kills);
  }
</script>

<div class="buildcard-container">
  <div
    class="buildcard-header"
    onclick={toggleCard}
    role="button"
    tabindex="0"
    onkeydown={(e) => e.key === "Enter" && toggleCard()}
  >
    <div class="buildcard-header-icon">
      <img src={champion.Icona} alt="champion-icon" />
    </div>
    <div class="buildcard-header-title">
      <div class="buildcard-header-title-name">{champion.nome}, {name}</div>
      <a href="/account/{author.Nome}" class="buildcard-header-title-auth"
        >{author.Nome}</a
      >
    </div>
    <div class="buildcard-header-winrate">{winPerc}</div>
    <div class="buildcard-header-button">
      <span class="arrow" class:rotated={isOpen}
        ><svg
          width="25"
          height="15"
          viewBox="0 0 25 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5 15L0 3.75L4.16863 0L12.5 7.5L20.8314 0L25 3.75L12.5 15Z"
            fill="white"
          />
        </svg>
      </span>
    </div>
  </div>

  {#if isOpen}
    <div transition:slide={{ duration: 300 }} class="buildcard-body">
      <div class="buildcard-model"></div>

      <div class="buildcard-section-title">Runes</div>
      <div class="buildcard-runes">
        <div class="buildcard-body-column">
          <img src={ runes.PietraChiave.Immagine } alt={ runes.PietraChiave.Nome } />
          <div class="buildcard-body-row">
            {#each runes.Primaria as rune}
              <img src={rune.Immagine} alt={ rune.Nome }/>
            {/each}
          </div>
        </div>
        <div class="buildcard-body-column">
          <div class="buildcard-body-row">
            {#each runes.Secondaria as rune}
              {#if rune.Nome !== "Nessuna"}
              <img src={rune.Immagine} alt={ rune.Nome }/>
              {/if}
            {/each}
          </div>
          <div class="buildcard-body-row">
            {#each runes.Frammenti as rune}
                <img src={rune.Immagine} alt={ rune.Nome }/>
            {/each}
          </div>
        </div>
      </div>

      <div class="buildcard-section-title">Items</div>
      <div class="buildcard-items">
          <Itemsgrid itemList={items} />
      </div>

      <div class="buildcard-section-title">Stats</div>
      <div class="buildcard-stats">
        <div>
          <div>K / D / A</div>
          <div class="total">{kills} / {deaths} / {assists}</div>
        </div>
      </div>
      <div class="buildcard-stats">
        <div>
          <div>Victories</div>
          <div class="win">{wins}</div>
        </div>
        <div>
          <div>Defeates</div>
          <div class="loss">{losses}</div>
        </div>
        <div>
          <div>Total</div>
          <div class="total">{wins + losses}</div>
        </div>
      </div>
      <form method="get" action="/builder/{champion.ID}">
        <input type="hidden" name="author" value={author.AccountId} />
        <input type="hidden" name="title" value={name} />

        <button type="submit" class="btn">Edit</button>
      </form>
    </div>
  {/if}
</div>

<style>
  .buildcard-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    box-sizing: border-box;
    width: 100%;
    height: auto;

    padding: clamp(20px, 2vw, 30px) 10px;

    background-color: var(--black-20, #1a1a1a);
    font-family: var(--font-mono, monospace);
  }

  .buildcard-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 80px;
    width: 100%;
    gap: 20px;
    cursor: pointer;
    user-select: none;
  }

  .buildcard-header-icon {
    height: 100%;
    aspect-ratio: 1;
  }
  .buildcard-header-icon img {
    border-radius: 100px;
    width: 100%;
    height: 100%;

    object-fit: cover;
  }

  .buildcard-header-title {
    width: 100%;
  }

  .buildcard-header-title-auth {
    color: var(--white-20, #888);
  }
  .buildcard-header-title-auth:hover {
    text-decoration: underline;
  }

  .buildcard-header-winrate {
    font-family: inherit;
    font-size: var(--text-lm);
    color: var(--white-20);
  }

  .buildcard-header-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
  }

  .btn {
    height: fit-content;
    padding: 1.5vh 2vw;

    background-color: var(--black-20);
    border: 1px var(--white-20) solid;

    color: white;

    font-family: var(--font-mono);
    font-size: var(--text-md);
    cursor: pointer;
  }
  .btn:hover,
  .btn:focus {
    background-color: #2a2323;
    border-color: #4a3f3f;
    text-decoration: underline;
  }

  .arrow {
    display: inline-block;
    transition: transform 0.3s ease;
    color: var(--white-100, #fff);
  }

  .arrow.rotated {
    transform: rotate(180deg);
  }

  .buildcard-body {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  .buildcard-body-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;
  }
  .buildcard-body-column {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
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
  .buildcard-runes img {
    height: 50px;
    width: 50px;

    overflow-x: visible;
  }

  .buildcard-items {
    display: flex;
    flex-direction: column;
    width: 90%;
  }

  .buildcard-stats {
    display: flex;
    flex-direction: row;

    cursor: default;

    gap: clamp(8rem, 2vw, 10rem);
  }
  .buildcard-stats div {
    display: flex;
    flex-direction: column;

    font-family: var(--font-mono);
    font-size: var(--text-md);
    align-items: center;
  }
  .buildcard-stats .win {
    color: green;

    font-size: var(--text-lm);
  }
  .buildcard-stats .loss {
    color: red;
    font-size: var(--text-lm);
  }
  .buildcard-stats .total {
    color: gray;
    font-size: var(--text-lm);
  }
</style>
