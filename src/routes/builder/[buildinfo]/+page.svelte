<script lang="ts">
  import { enhance } from "$app/forms";
  import Itemselector from "$lib/components/Itemselector.svelte";
  import Navbar from "$lib/components/navbar.svelte";
  import Runeselector from "$lib/components/runeselector.svelte";
  import Spellselector from "$lib/components/Spellselector.svelte";
  import {
    type Campione,
    type SetBase,
    type Oggetto,
    type Runa,
    type Tipologia_runa,
    type Incantesimo,
  } from "$lib/server/prisma/browser.js";

  let { data } = $props();

  const champ: Campione = data.champ;
  const stats: SetBase = data.stats;

  const defaultTitle = data.champ.nome + " New Build";

  const eb = data.existingBuild;

  const getRune = (name: string) =>
    data.runes.find((r) => r.Nome === name) || null;
  const getPath = (runeName: string) => {
    const r = getRune(runeName);
    return r ? data.path.find((p) => p.Id === r.CamminoId) || null : null;
  };

  let currentTitle = $state(eb ? eb.TitoloConf : defaultTitle);
  let isEditing = $state(false);

  let buildSpells = $state<(Incantesimo | null)[]>(
    eb ? [eb.Inc1, eb.Inc2] : [null, null],
  );

  let initialItems: (Oggetto | null)[] = [null, null, null, null, null, null];

  if (eb) {
    eb.Inv.forEach((invObj: any, index: number) => {
      if (index < 6) {
        initialItems[index] =
          data.items.find((i) => i.Nome === invObj.NomeOggetto) || null;
      }
    });
  }

  let buildItems = $state<(Oggetto | null)[]>(initialItems);

  let buildPrimaryPath = $state<Tipologia_runa | null>(
    eb ? getPath(eb.Pag_Runa.Principale.Pietrachiave) : null,
  );

  let buildPrimaryRunes = $state<(Runa | null)[]>(
    eb
      ? [
          getRune(eb.Pag_Runa.Principale.Pietrachiave),
          getRune(eb.Pag_Runa.Principale.RigaSuperiore),
          getRune(eb.Pag_Runa.Principale.RigaCentrale),
          getRune(eb.Pag_Runa.Principale.RigaInferiore),
        ]
      : [null, null, null, null],
  );

  let initialSecondaryRunes: (Runa | null)[] = [null, null];

  if (eb) {
    const secRunes = [
      getRune(eb.Pag_Runa.Secondaria.RigaSuperiore),
      getRune(eb.Pag_Runa.Secondaria.RigaCentrale),
      getRune(eb.Pag_Runa.Secondaria.RigaInferiore),
    ].filter((r) => r !== null && r.Nome !== "Nessuna");

    initialSecondaryRunes = [secRunes[0] || null, secRunes[1] || null];
  }

  let buildSecondaryPath = $state<Tipologia_runa | null>(
    eb ? getPath(eb.Pag_Runa.Secondaria.RigaSuperiore) : null,
  );

  let buildSecondaryRunes = $state<(Runa | null)[]>(initialSecondaryRunes);

  let initialShards: (Runa | null)[] = [null, null, null];

  if (eb) {
    const shards = [
      getRune(eb.Pag_Runa.Shards.RigaSuperiore),
      getRune(eb.Pag_Runa.Shards.RigaCentrale),
      getRune(eb.Pag_Runa.Shards.RigaInferiore),
    ].filter((r) => r !== null && r.Nome !== "Nessuna");

    initialShards = [shards[0] || null, shards[1] || null, shards[2] || null];
  }

  let buildShards = $state<(Runa | null)[]>(initialShards);

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === "Enter") {
      isEditing = false;
    } else if (event.key === "Escape") {
      isEditing = false;
      currentTitle = eb ? eb.TitoloConf : defaultTitle;
    }
  }

  function focusInput(node: HTMLInputElement) {
    node.focus();
  }

  const statsArr = [
    { id: 1, name: "Attack Damage", value: stats.Attacco },
    { id: 2, name: "Ability Power", value: stats.AttaccoMagico },
    { id: 3, name: "Armor", value: stats.Armatura },
    { id: 4, name: "Magic Resist", value: stats.ResistenzaMagica },
    { id: 5, name: "Attack Speed", value: stats.VelocitàDiAttacco },
    { id: 6, name: "Range", value: stats.Gittata },
    { id: 7, name: "Mana", value: stats.Vita },
    { id: 8, name: "HP", value: stats.Mana },
    { id: 9, name: "Move Speed", value: stats.Velocità_di_movimento },
  ];

  type MatchRecord = {
    id: number;
    date: string;
    kda: string;
    result: "Vittoria" | "Sconfitta";
  };

  let matches: MatchRecord[] = $state(
    eb
      ? eb.Partite.map((p: any) => ({
          id: new Date(p.Data).getTime(),
          date: new Date(p.Data).toLocaleDateString("it-IT"),
          kda: `${p.Uccisioni}/${p.Morti}/${p.Assist}`,
          result: p.Risultato === "Vittoria" ? "Vittoria" : "Vittoria",
        }))
      : [],
  );

  let wins = $state(
    eb ? matches.filter((m) => m.result === "Vittoria").length : 0,
  );
  let losses = $state(
    eb ? matches.filter((m) => m.result === "Vittoria").length : 0,
  );

  let buildPayload = $derived(
    JSON.stringify({
      originalTitle: eb ? eb.TitoloConf : null,
      title: currentTitle,
      championID: champ.ID,
      spells: buildSpells,
      items: buildItems,
      runes: {
        primaryPath: buildPrimaryPath,
        primaryRunes: buildPrimaryRunes,
        secondaryPath: buildSecondaryPath,
        secondaryRunes: buildSecondaryRunes,
        shards: buildShards,
      },
      matches: matches,
    }),
  );

  let isAddingGame = $state(false);
  let editingMatchId = $state<number | null>(null);
  let originalResult = $state<"Vittoria" | "Sconfitta" | null>(null);

  let newDate = $state(new Date().toLocaleDateString("it-IT"));
  let newK = $state(0);
  let newD = $state(0);
  let newA = $state(0);
  let newResult = $state<"Vittoria" | "Sconfitta">("Vittoria");

  function openAddGame() {
    editingMatchId = null;
    originalResult = null;
    newDate = new Date().toLocaleDateString("it-IT");
    newK = 0;
    newD = 0;
    newA = 0;
    newResult = "Vittoria";
    isAddingGame = true;
  }

  function cancelForm() {
    isAddingGame = false;
    editingMatchId = null;
    originalResult = null;
  }

  function editGame(match: MatchRecord) {
    editingMatchId = match.id;
    originalResult = match.result;
    newDate = match.date;

    const [k, d, a] = match.kda.split("/");
    newK = parseInt(k) || 0;
    newD = parseInt(d) || 0;
    newA = parseInt(a) || 0;

    newResult = match.result;
    isAddingGame = true;
  }

  function deleteGame(id: number) {
    const matchIndex = matches.findIndex((m) => m.id === id);
    if (matchIndex > -1) {
      const match = matches[matchIndex];
      if (match.result === "Vittoria") wins--;
      else losses--;

      matches.splice(matchIndex, 1);
    }
  }

  function saveGame() {
    if (editingMatchId !== null) {
      const matchIndex = matches.findIndex((m) => m.id === editingMatchId);
      if (matchIndex > -1) {
        matches[matchIndex].date = newDate;
        matches[matchIndex].kda = `${newK}/${newD}/${newA}`;
        matches[matchIndex].result = newResult;

        if (originalResult !== newResult) {
          if (originalResult === "Vittoria") wins--;
          else losses--;

          if (newResult === "Vittoria") wins++;
          else losses++;
        }
      }
    } else {
      const newMatch: MatchRecord = {
        id: Date.now(),
        date: newDate,
        kda: `${newK}/${newD}/${newA}`,
        result: newResult,
      };
      matches.push(newMatch);

      if (newResult === "Vittoria") wins++;
      else losses++;
    }

    cancelForm();
  }
</script>

<div class="container">
  <div class="buildinfo-content">
    <Navbar profile={data.profile} role={data.role} />
    <div class="buildinfo-header">
      <div class="champpic">
        <img src={champ.Icona} alt="champ icon" />
      </div>

      <div class="spells-wrapper">
        <Spellselector
          spells={data.spells}
          bind:selectedSpell={buildSpells[0]}
        />
        <Spellselector
          spells={data.spells}
          bind:selectedSpell={buildSpells[1]}
        />
      </div>

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
      {#if data.isOwner}
        <button
          class="pen"
          type="button"
          aria-label="Edit title"
          onclick={() => (isEditing = true)}
          title="Edit"
        >
          <svg
            viewBox="0 0 75 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35.2525 60.6005L62.9865 32.8665C58.3209 30.9174 54.0833 28.0712 50.5144 24.4893C46.9308 20.9196 44.0833 16.6808 42.1335 12.0135L14.3995 39.7475C12.2358 41.9112 11.1521 42.9949 10.2221 44.1874C9.12488 45.5953 8.18318 47.1179 7.41347 48.7285C6.76474 50.0934 6.28101 51.5484 5.31354 54.4507L0.206226 69.7615C-0.0288393 70.4625 -0.0637147 71.2152 0.105519 71.9349C0.274752 72.6547 0.641386 73.313 1.16421 73.8358C1.68703 74.3586 2.34532 74.7253 3.06507 74.8945C3.78483 75.0637 4.53752 75.0288 5.23855 74.7938L20.5492 69.6865C23.4554 68.719 24.9066 68.2353 26.2715 67.5865C27.889 66.8166 29.4027 65.8803 30.8126 64.7779C32.0051 63.8479 33.0888 62.7642 35.2525 60.6005ZM70.6812 25.1718C73.4465 22.4065 75 18.656 75 14.7453C75 10.8346 73.4465 7.08408 70.6812 4.3188C67.9159 1.55352 64.1654 2.9137e-08 60.2547 0C56.344 -2.9137e-08 52.5935 1.55352 49.8282 4.3188L46.5021 7.64493L46.6446 8.06116C48.2832 12.7514 50.9655 17.0083 54.4893 20.5107C58.0964 24.1399 62.5023 26.8751 67.3551 28.4979L70.6812 25.1718Z"
              fill="white"
            />
          </svg>
        </button>

        <form
          method="POST"
          action="?/saveBuild"
          use:enhance={() => {
            return async ({ result, update }) => {
              if (result.type === "success") {
                alert("Build salvata con successo!");
              } else {
                alert("Si è verificato un errore durante il salvataggio.");
                console.error(result);
              }
              update();
            };
          }}
        >
          <input type="hidden" name="buildData" value={buildPayload} />

          <button
            class="save-build-btn"
            type="submit"
            aria-label="Save Build"
            title="Save Build"
          >
            <svg
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H3V3.5C3 3.89782 3.15804 4.27936 3.43934 4.56066C3.72064 4.84196 4.10218 5 4.5 5H8.5C8.89782 5 9.27936 4.84196 9.56066 4.56066C9.84196 4.27936 10 3.89782 10 3.5V0H10.379C10.9094 0.000113275 11.418 0.210901 11.793 0.586L13.414 2.207C13.7891 2.58199 13.9999 3.09061 14 3.621V12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14V8.5C12 8.10218 11.842 7.72064 11.5607 7.43934C11.2794 7.15804 10.8978 7 10.5 7H3.5C3.10218 7 2.72064 7.15804 2.43934 7.43934C2.15804 7.72064 2 8.10218 2 8.5V14C1.46957 14 0.960859 13.7893 0.585786 13.4142C0.210714 13.0391 0 12.5304 0 12V2ZM9 0H4V3.5C4 3.63261 4.05268 3.75979 4.14645 3.85355C4.24021 3.94732 4.36739 4 4.5 4H8.5C8.63261 4 8.75979 3.94732 8.85355 3.85355C8.94732 3.75979 9 3.63261 9 3.5V0ZM11 8.5V14H3V8.5C3 8.36739 3.05268 8.24021 3.14645 8.14645C3.24021 8.05268 3.36739 8 3.5 8H10.5C10.6326 8 10.7598 8.05268 10.8536 8.14645C10.9473 8.24021 11 8.36739 11 8.5Z"
                fill="white"
              />
            </svg>
          </button>
        </form>
      {/if}
    </div>

    <div class="buildinfo-runes">
      <div class="buildinfo-sectiontitle">Runes</div>
      <Runeselector
        runes={data.runes}
        paths={data.path}
        bind:primaryPath={buildPrimaryPath}
        bind:primaryRunes={buildPrimaryRunes}
        bind:secondaryPath={buildSecondaryPath}
        bind:secondaryRunes={buildSecondaryRunes}
        bind:shards={buildShards}
      />
    </div>

    <div class="buildinfo-items">
      <div class="buildinfo-sectiontitle">Items</div>
      <div class="items-row">
        <Itemselector items={data.items} bind:selectedItem={buildItems[0]} />
        <Itemselector items={data.items} bind:selectedItem={buildItems[1]} />
        <Itemselector items={data.items} bind:selectedItem={buildItems[2]} />
      </div>
      <div class="items-row">
        <Itemselector items={data.items} bind:selectedItem={buildItems[3]} />
        <Itemselector items={data.items} bind:selectedItem={buildItems[4]} />
        <Itemselector items={data.items} bind:selectedItem={buildItems[5]} />
      </div>
    </div>

    <div class="buildinfo-stats">
      <div class="buildinfo-sectiontitle">Stats</div>
      <div class="stats-grid">
        {#each statsArr as stat (stat.id)}
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
          <div class="winloss">{wins}</div>
        </div>

        <div class="result-content">
          <div class="buildinfo-section-column">Losses</div>
          <div class="winloss">{losses}</div>
        </div>
      </div>

      <div class="buildinfo-match">
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
                <option value="Vittoria">Win</option>
                <option value="Sconfitta">Loss</option>
              </select>
            </div>
            {#if data.isOwner}
              <div class="form-actions">
                <button class="action-btn cancel-btn" onclick={cancelForm}
                  >cancel</button
                >
                <button class="action-btn save-btn" onclick={saveGame}
                  >save</button
                >
              </div>
            {/if}
          </div>
        {:else if data.isOwner}
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

              <div class="match-actions">
                <button class="action-txt-btn" onclick={() => editGame(match)}
                  >edit</button
                >
                <button
                  class="action-txt-btn delete"
                  onclick={() => deleteGame(match.id)}>x</button
                >
              </div>
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
    width: 100%;
  }

  .champpic {
    height: 100%;
    aspect-ratio: 1;
    border-radius: 50%;
    overflow: hidden;
    background-color: #111214;
    border: 1px solid var(--white-20);
  }

  .champpic img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .pen {
    margin-left: auto;
    background: transparent;
    border: none;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pen svg {
    height: 2rem;
    aspect-ratio: 1;
    cursor: pointer;
    transition: opacity 0.2s;
  }

  .pen:hover svg {
    opacity: 0.7;
  }

  .save-build-btn {
    background: transparent;
    border: none;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .save-build-btn svg {
    height: 2rem;
    aspect-ratio: 1;
    cursor: pointer;
    transition: opacity 0.2s;
  }

  .save-build-btn:hover svg {
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

  .spells-wrapper {
    display: flex;
    flex-direction: row;
    gap: 5px;
    margin-right: 15px;
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
    gap: 200px;
  }

  .result-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    box-sizing: border-box;
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

  .match-item > span {
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

  .match-actions {
    display: flex;
    gap: 12px;
    justify-content: flex-end;
    min-width: 70px;
    margin-left: 15px;
  }

  .action-txt-btn {
    background: transparent;
    border: none;
    color: var(--white-20);
    font-family: var(--font-mono);
    cursor: pointer;
    padding: 0;
    transition: color 0.2s;
  }

  .action-txt-btn:hover {
    color: white;
  }

  .action-txt-btn.delete:hover {
    color: #ff4444;
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
