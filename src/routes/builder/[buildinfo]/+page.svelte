<script lang="ts">
  import Itemselector from "$lib/components/Itemselector.svelte";
  import Navbar from "$lib/components/navbar.svelte";
  import Runeselector from "$lib/components/runeselector.svelte";
  import type { StatItem } from "$lib/types";

  let { data } = $props();

  const defaultTitle = $derived(data.champ.replaceAll("-", " "));

  let currentTitle = $derived(data.champ.replaceAll("-", " "));
  let isEditing = $state(false);

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === "Enter") {
      isEditing = false;
      // TODO: Logica per salvare il nome nel database o nello store
    } else if (event.key === "Escape") {
      isEditing = false;
      currentTitle = defaultTitle;
    }
  }

  function focusInput(node: HTMLInputElement) {
    node.focus();
  }

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

  let wins = $state(0);
  let losses = $state(0);

  //PLACE HOLDER
  type MatchRecord = {
    id: number;
    date: string;
    kda: string;
    result: "Win" | "Loss";
  };

  let matches: MatchRecord[] = $state([]);

  let isAddingGame = $state(false);

  let newDate = $state(new Date().toLocaleDateString("it-IT"));
  let newK = $state(0);
  let newD = $state(0);
  let newA = $state(0);
  let newResult = $state<"Win" | "Loss">("Win");

  function openAddGame() {
    newDate = new Date().toLocaleDateString("it-IT");
    newK = 0;
    newD = 0;
    newA = 0;
    newResult = "Win";
    isAddingGame = true;
  }

  function saveGame() {
    const newMatch: MatchRecord = {
      id: Date.now(),
      date: newDate,
      kda: `${newK}/${newD}/${newA}`,
      result: newResult,
    };

    matches.push(newMatch);

    if (newResult === "Win") {
      wins++;
    } else {
      losses++;
    }

    isAddingGame = false;
  }
</script>

<div class="container">
  <div class="buildinfo-content">
    <Navbar profile={data.profile} />
    <div class="buildinfo-header">
      <div class="champpic"></div>

      {#if isEditing}
        <input
          type="text"
          class="title title-input"
          bind:value={currentTitle}
          onkeydown={handleKeydown}
          onblur={() => (isEditing = false)}
          use:focusInput
        />
      {:else}
        <div class="title">{currentTitle}</div>
      {/if}
      <button
        class="pen"
        type="button"
        aria-label="Edit title"
        onclick={() => (isEditing = true)}
      >
        <svg viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M35.2525 60.6005L62.9865 32.8665C58.3209 30.9174 54.0833 28.0712 50.5144 24.4893C46.9308 20.9196 44.0833 16.6808 42.1335 12.0135L14.3995 39.7475C12.2358 41.9112 11.1521 42.9949 10.2221 44.1874C9.12488 45.5953 8.18318 47.1179 7.41347 48.7285C6.76474 50.0934 6.28101 51.5484 5.31354 54.4507L0.206226 69.7615C-0.0288393 70.4625 -0.0637147 71.2152 0.105519 71.9349C0.274752 72.6547 0.641386 73.313 1.16421 73.8358C1.68703 74.3586 2.34532 74.7253 3.06507 74.8945C3.78483 75.0637 4.53752 75.0288 5.23855 74.7938L20.5492 69.6865C23.4554 68.719 24.9066 68.2353 26.2715 67.5865C27.889 66.8166 29.4027 65.8803 30.8126 64.7779C32.0051 63.8479 33.0888 62.7642 35.2525 60.6005ZM70.6812 25.1718C73.4465 22.4065 75 18.656 75 14.7453C75 10.8346 73.4465 7.08408 70.6812 4.3188C67.9159 1.55352 64.1654 2.9137e-08 60.2547 0C56.344 -2.9137e-08 52.5935 1.55352 49.8282 4.3188L46.5021 7.64493L46.6446 8.06116C48.2832 12.7514 50.9655 17.0083 54.4893 20.5107C58.0964 24.1399 62.5023 26.8751 67.3551 28.4979L70.6812 25.1718Z"
            fill="white"
          />
        </svg>
      </button>
    </div>

    <div class="buildinfo-runes">
      <div class="buildinfo-sectiontitle">Runes</div>
      <Runeselector />
    </div>

    <div class="buildinfo-items">
      <div class="buildinfo-sectiontitle">Items</div>
      <div class="items-row">
        <Itemselector items={data.items} /><Itemselector
          items={data.items}
        /><Itemselector items={data.items} />
      </div>
      <div class="items-row">
        <Itemselector items={data.items} /><Itemselector
          items={data.items}
        /><Itemselector items={data.items} />
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

    <div class="buildinfo-results">
      <div class="buildinfo-sectiontitle">Results</div>
      <div class="result-container">
        <div class="result-content">
          <div class="buildinfo-section-column">Victories</div>
          <div class="result-value">
            <button class="stepper-btn" onclick={() => (wins > 0 ? wins-- : 0)}
              >-</button
            >
            <input
              type="number"
              name="wins"
              min="0"
              bind:value={wins}
              class="winloss"
            />
            <button class="stepper-btn" onclick={() => wins++}>+</button>
          </div>
        </div>

        <div class="result-content">
          <div class="buildinfo-section-column">Losses</div>
          <div class="result-value">
            <button
              class="stepper-btn"
              onclick={() => (losses > 0 ? losses-- : 0)}>-</button
            >
            <input
              type="number"
              name="losses"
              min="0"
              bind:value={losses}
              class="winloss"
            />
            <button class="stepper-btn" onclick={() => losses++}>+</button>
          </div>
        </div>
      </div>

      <div class="buildinfo-match">
        <div class="buildinfo-sectiontitle">Match</div>

        {#if isAddingGame}
          <div class="add-game-form">
            <div class="form-row">
              <input
                type="text"
                class="form-input date-input"
                bind:value={newDate}
                placeholder="Data (es. 30/08/2026)"
              />

              <div class="kda-inputs">
                <input
                  type="number"
                  class="form-input number-input"
                  bind:value={newK}
                  min="0"
                />
                /
                <input
                  type="number"
                  class="form-input number-input"
                  bind:value={newD}
                  min="0"
                />
                /
                <input
                  type="number"
                  class="form-input number-input"
                  bind:value={newA}
                  min="0"
                />
              </div>

              <select class="form-input result-select" bind:value={newResult}>
                <option value="Win">Win</option>
                <option value="Loss">Loss</option>
              </select>
            </div>

            <div class="form-actions">
              <button
                class="action-btn cancel-btn"
                onclick={() => (isAddingGame = false)}>cancel</button
              >
              <button class="action-btn save-btn" onclick={saveGame}
                >save</button
              >
            </div>
          </div>
        {:else}
          <button class="add-game-btn" onclick={openAddGame}>
            + add game
          </button>
        {/if}

        <div class="match-list">
          {#each matches as match (match.id)}
            <div class="match-item">
              <span class="match-date">partita del {match.date}</span>
              <span class="match-kda">{match.kda}</span>
              <span class="match-result">{match.result}</span>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .title {
    margin-bottom: 0;
  }

  .title-input {
    background: transparent;
    color: white;
    border: none;
    border-bottom: 1px solid var(--white-20);
    outline: none;
    font-family: var(--font-passion);
    font-size: var(--text-lg);
    padding: 0 5px;
    max-width: 400px;
    transition: border-bottom-color 0.2s ease;
  }

  .title-input:focus {
    border-bottom-color: white;
  }

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

  .pen {
    background: transparent;
    border: none;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pen svg {
    height: 2.5rem;
    aspect-ratio: 1;
    cursor: pointer;
    transition: opacity 0.2s;
  }

  .pen:hover svg {
    opacity: 0.7;
  }

  .buildinfo-sectiontitle {
    font-size: var(--text-xlm);
    font-family: var(--font-mono);
  }
  .buildinfo-section-column {
    font-size: var(--text-md);
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

  .buildinfo-results {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }

  .result-container {
    display: flex;
    flex-direction: row;

    box-sizing: border-box;
  }

  .result-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    box-sizing: border-box;
  }

  .result-value {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .stepper-btn {
    background: transparent;
    border: none;
    color: white;
    font-size: var(--text-xlm);
    font-family: var(--font-mono);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .stepper-btn:hover {
    opacity: 0.7;
  }

  .winloss {
    border: none;
    background-color: transparent;
    color: white;
    font-family: var(--font-mono);
    font-size: var(--text-xlm);
    text-align: center;
    max-width: 30%;
  }

  .winloss:focus {
    outline: none;
    border-bottom: 1px solid white;
  }

  /*Default arrows hiding*/
  .winloss::-webkit-outer-spin-button,
  .winloss::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .winloss[type="number"] {
    -moz-appearance: textfield;
  }

  .buildinfo-match {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
  }

  .add-game-btn {
    width: 100%;
    max-width: 700px;
    padding: 15px;
    background: transparent;
    border: 1px dashed var(--white-20);
    color: white;
    font-family: var(--font-mono);
    font-size: var(--text-md);
    cursor: pointer;
    transition:
      background-color 0.2s,
      opacity 0.2s;
    text-align: center;
  }

  .add-game-btn:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }

  .match-list {
    width: 100%;
    max-width: 700px;
    display: flex;
    flex-direction: column;
  }

  .match-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px 10px;
    border-bottom: 1px solid var(--white-20);
    font-family: var(--font-mono);
    color: white;
  }

  .match-item span {
    flex: 1;
  }

  .match-date {
    text-align: left;
  }

  .match-kda {
    text-align: center;
  }

  .match-result {
    text-align: right;
  }

  .add-game-form {
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 15px;
    border: 1px dashed var(--white-20);
  }

  .form-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
  }

  .form-input {
    background: transparent;
    border: 1px solid var(--white-20);
    color: white;
    font-family: var(--font-mono);
    font-size: var(--text-md);
    padding: 5px 10px;
    outline: none;
  }

  .form-input:focus {
    border-color: white;
  }

  .date-input {
    flex: 1;
    min-width: 120px;
  }

  .kda-inputs {
    display: flex;
    align-items: center;
    gap: 5px;
    font-family: var(--font-mono);
    color: var(--white-20);
  }

  .number-input {
    width: 50px;
    text-align: center;
  }

  .number-input::-webkit-outer-spin-button,
  .number-input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .number-input[type="number"] {
    -moz-appearance: textfield;
  }

  .result-select {
    width: 90px;
    cursor: pointer;
  }

  .result-select option {
    background-color: #111214;
    color: white;
  }

  .form-actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }

  .action-btn {
    background: transparent;
    border: 1px solid var(--white-20);
    color: white;
    font-family: var(--font-mono);
    padding: 5px 15px;
    cursor: pointer;
    transition: all 0.2s;
  }

  .cancel-btn:hover {
    background-color: rgba(255, 0, 0, 0.1);
    border-color: rgba(255, 0, 0, 0.5);
  }

  .save-btn:hover {
    background-color: rgba(0, 255, 0, 0.1);
    border-color: rgba(0, 255, 0, 0.5);
  }

  @media (max-width: 500px) {
    .stats-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
