<script lang="ts">
  import type { Runa, Tipologia_runa } from "$lib/server/prisma/client";

  let { paths = [], runes = [] }: { paths: Tipologia_runa[]; runes: Runa[] } =
    $props();

  let selectedPath = $state<Tipologia_runa | null>(null);

  // Slot 0 e 1 per le due rune secondarie
  let selectedRunes = $state<(Runa | null)[]>([null, null]);

  // Stato per gestire i menu a tendina
  let activeMenu = $state<"path" | 0 | 1 | null>(null);
  let isAnimating = $state(false);

  // NOTA: Controlla se nel tuo schema il colore c'è, altrimenti teniamo il bianco di default.
  // Assicurati di usare .Id o .id in base a come è scritto nel tuo Prisma Schema.
  let currentPathColor = $derived(
    selectedPath ? (selectedPath as any).color || "#ffffff" : "#ffffff",
  );

  // Funzione che calcola le rune disponibili per uno slot, escludendo il Grado occupato dall'altro slot
  function getAvailableRunes(slotIndex: 0 | 1) {
    if (!selectedPath) return [];

    // Troviamo l'indice dell'altro slot (se guardo lo 0, l'altro è 1 e viceversa)
    const otherSlotIndex = slotIndex === 0 ? 1 : 0;
    const otherRune = selectedRunes[otherSlotIndex];
    const otherGrado = otherRune ? otherRune.Grado : null;

    return runes.filter(
      (r) =>
        r.CamminoId === (selectedPath as any).Id &&
        (r.Grado === 1 || r.Grado === 2 || r.Grado === 3) && // Solo rune minori
        r.Grado !== otherGrado, // ESCLUDE le rune della stessa riga (Grado) dell'altra scelta
    );
  }

  function toggleMenu(menu: "path" | 0 | 1) {
    activeMenu = activeMenu === menu ? null : menu;
  }

  function selectPath(path: Tipologia_runa) {
    selectedPath = path;
    selectedRunes = [null, null]; // Reset delle rune scelte
    activeMenu = null;
    isAnimating = false;

    setTimeout(() => {
      isAnimating = true;
    }, 10);
  }

  function selectRune(index: 0 | 1, rune: Runa) {
    selectedRunes[index] = rune;
    activeMenu = null;
  }
</script>

<div class="rune-builder" style="--current-path-color: {currentPathColor}">
  <div class="rune-row">
    <!-- SELETTORE PATH -->
    <div class="path-selector-wrapper" class:open={activeMenu === "path"}>
      <button
        class="path-circle"
        class:empty-glow={!selectedPath}
        onclick={() => toggleMenu("path")}
        aria-label="Select Secondary Rune Path"
      >
        <span class="arc-deco"></span>
        <span class="path-icon">
          {selectedPath ? selectedPath.Nome.charAt(0).toUpperCase() : "?"}
        </span>
      </button>

      {#if activeMenu === "path"}
        <div class="path-dropdown">
          {#each paths as path}
            <button
              class="path-option"
              onclick={() => selectPath(path)}
              style="--hover-color: {(path as any).color || '#ffffff'}"
            >
              {path.Nome}
            </button>
          {/each}
        </div>
      {/if}
    </div>

    <!-- SELETTORE RUNE E SHARDS -->
    <div class="beads-container">
      <div class="rune-line" class:pulse-active={isAnimating}></div>

      <!-- LE 2 RUNE SECONDARIE SELEZIONABILI -->
      {#each [0, 1] as slotIndex}
        <div class="bead-wrapper" class:open={activeMenu === slotIndex}>
          <button
            class="rune-bead"
            class:active={selectedPath}
            onclick={() => selectedPath && toggleMenu(slotIndex as 0 | 1)}
            aria-label={`Select Secondary Rune ${slotIndex + 1}`}
          >
            {#if selectedRunes[slotIndex]}
              <img
                src={selectedRunes[slotIndex]!.Immagine}
                alt={selectedRunes[slotIndex]!.Nome}
                title={selectedRunes[slotIndex]!.Descrizione}
              />
            {/if}
          </button>

          {#if activeMenu === slotIndex}
            <div class="path-dropdown rune-dropdown">
              {#each getAvailableRunes(slotIndex as 0 | 1) as rune}
                <button
                  class="path-option rune-option"
                  onclick={() => selectRune(slotIndex as 0 | 1, rune)}
                >
                  <img src={rune.Immagine} alt="" class="rune-option-img" />
                  {rune.Nome}
                </button>
              {/each}
            </div>
          {/if}
        </div>
      {/each}

      <!-- LE 3 SHARDS (STATISTICHE) - Placeholder per ora -->
      <div class="small-rune-bead" class:active={selectedPath}></div>
      <div class="small-rune-bead" class:active={selectedPath}></div>
      <div class="small-rune-bead" class:active={selectedPath}></div>
    </div>
  </div>
</div>

<!-- BACKDROP PER CHIUDERE I MENU -->
{#if activeMenu !== null}
  <button
    class="backdrop"
    onclick={() => (activeMenu = null)}
    aria-label="Close menu"
  ></button>
{/if}

<style>
  .rune-builder {
    width: 100%;
    max-width: 950px;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
  }

  .rune-row {
    display: flex;
    align-items: center;
    gap: 30px;
    position: relative;
    width: 100%;
  }

  .path-selector-wrapper {
    position: relative;
    z-index: 18;
    flex-shrink: 0;
  }

  .path-selector-wrapper.open {
    z-index: 19;
  }

  /* --- CLASSI PER I MENU RUNE (come nel ramo primario) --- */
  .bead-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 20;
  }

  .bead-wrapper.open {
    z-index: 50;
  }

  .rune-bead img {
    width: 80%;
    height: 80%;
    object-fit: contain;
    border-radius: 50%;
  }

  .rune-dropdown {
    min-width: 180px;
  }

  .rune-option {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .rune-option-img {
    width: 24px;
    height: 24px;
    object-fit: contain;
    border-radius: 50%;
  }
  /* -------------------------------------------------------- */

  .path-circle {
    position: relative;
    width: clamp(80px, 10vw, 125px);
    height: clamp(80px, 10vw, 125px);
    border-radius: 50%;
    background: #111214;
    border: 2px solid var(--current-path-color);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition:
      transform 0.2s,
      border-color 0.4s,
      box-shadow 0.4s;
    padding: 0;
  }

  .path-circle:hover {
    transform: scale(1.05);
  }

  .path-circle.empty-glow {
    animation: pulse-hint 2s infinite;
  }

  @keyframes pulse-hint {
    0% {
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.3);
    }
    70% {
      box-shadow: 0 0 0 12px rgba(255, 255, 255, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
    }
  }

  .path-icon {
    color: var(--current-path-color);
    font-weight: bold;
    font-size: clamp(1rem, 2vw, 1.5rem);
  }

  .arc-deco {
    position: absolute;
    top: -6px;
    left: -6px;
    right: -6px;
    bottom: -6px;
    border: 2px solid transparent;
    border-left: 3px solid var(--current-path-color);
    border-radius: 50%;
    transform: rotate(180deg);
    pointer-events: none;
    transition: border-color 0.4s;
  }

  .path-dropdown {
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    background: #15171b;
    border: 1px solid #32363e;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    padding: 5px 0;
    min-width: 140px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  }

  .path-option {
    background: transparent;
    border: none;
    color: #a0a8b6;
    padding: 10px 15px;
    text-align: left;
    cursor: pointer;
    font-size: 0.9rem;
    transition:
      background 0.2s,
      color 0.2s;
  }

  .path-option:hover {
    background: #202329;
    color: var(--hover-color);
  }

  .beads-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;
    height: clamp(100px, 12vw, 150px);
  }

  .rune-line {
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 3px;
    background: #252830;
    z-index: 1;
  }

  .rune-line.pulse-active {
    background: linear-gradient(
      90deg,
      #252830 0%,
      var(--current-path-color) 20%,
      var(--current-path-color) 50%,
      #252830 80%
    );
    background-size: 200% 100%;
    animation: run-pulse 1s ease-out forwards;
  }

  @keyframes run-pulse {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -60% 0;
      background: var(--current-path-color);
    }
  }

  .rune-bead {
    position: relative;
    z-index: 2;
    width: clamp(60px, 8vw, 100px);
    height: clamp(60px, 8vw, 100px);
    border-radius: 50%;
    background: #111214;
    border: 3px solid #252830;
    transition:
      border-color 0.4s 0.4s,
      box-shadow 0.4s 0.4s;
    flex-shrink: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .small-rune-bead {
    position: relative;
    z-index: 2;
    width: clamp(45px, 7vw, 80px);
    height: clamp(45px, 7vw, 80px);
    border-radius: 50%;
    background: #111214;
    border: 3px solid #252830;
    transition:
      border-color 0.4s 0.4s,
      box-shadow 0.4s 0.4s;
    flex-shrink: 0;
  }

  .rune-bead.active,
  .small-rune-bead.active {
    border-color: var(--current-path-color);
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.8);
  }

  .rune-bead:hover.active {
    border-color: white;
  }

  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: transparent;
    border: none;
    z-index: 10;
  }

  @media (max-width: 600px) {
    .rune-row {
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }

    .beads-container {
      width: 100%;
      padding: 0 10px;
      box-sizing: border-box;
    }
  }
</style>
