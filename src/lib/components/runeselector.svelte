<script lang="ts">
  import Runeselector2 from "./runeselector2.svelte";
  import type { Runa, Tipologia_runa } from "$lib/server/prisma/client";

  let { runes = [], paths = [] }: { runes: Runa[]; paths: Tipologia_runa[] } =
    $props();

  let selectedPath = $state<Tipologia_runa | null>(null);

  let selectedRunes = $state<(Runa | null)[]>([null, null, null, null]);

  let activeMenu = $state<"path" | 0 | 1 | 2 | 3 | null>(null);
  let isAnimating = $state(false);

  let availableRunes = $derived(
    [0, 1, 2, 3].map((slot) =>
      selectedPath
        ? runes.filter(
            (r) => r.CamminoId === (selectedPath as any).Id && r.Grado === slot,
          )
        : [],
    ),
  );

  function isSelected() {
    return selectedPath !== null;
  }

  function toggleMenu(menu: "path" | 0 | 1 | 2 | 3) {
    activeMenu = activeMenu === menu ? null : menu;
  }

  function selectPath(path: Tipologia_runa) {
    selectedPath = path;
    selectedRunes = [null, null, null, null];
    activeMenu = null;
    isAnimating = false;

    setTimeout(() => {
      isAnimating = true;
    }, 10);
  }

  function selectRune(index: number, rune: Runa) {
    selectedRunes[index] = rune;
    activeMenu = null;
  }
</script>

<div class="rune-builder" style="--current-path-color: #ffffff">
  <div class="rune-row">
    <div class="path-selector-wrapper" class:open={activeMenu === "path"}>
      <button
        class="path-circle"
        class:empty-glow={!selectedPath}
        onclick={() => toggleMenu("path")}
        aria-label="Select Rune Path"
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
              style="--hover-color: #ffffff"
            >
              {path.Nome}
            </button>
          {/each}
        </div>
      {/if}
    </div>

    <div class="beads-container">
      <div class="rune-line" class:pulse-active={isAnimating}></div>

      <div class="bead-wrapper" class:open={activeMenu === 0}>
        <button
          class="rune-bead keystone"
          class:active={selectedPath}
          onclick={() => selectedPath && toggleMenu(0)}
          aria-label="Select Keystone"
        >
          {#if selectedRunes[0]}
            <img
              src={selectedRunes[0].Immagine}
              alt={selectedRunes[0].Nome}
              title={selectedRunes[0].Descrizione}
            />
          {/if}
        </button>

        {#if activeMenu === 0}
          <div class="path-dropdown rune-dropdown">
            {#each availableRunes[0] as rune}
              <button
                class="path-option rune-option"
                onclick={() => selectRune(0, rune)}
              >
                <img src={rune.Immagine} alt="" class="rune-option-img" />
                {rune.Nome}
              </button>
            {/each}
          </div>
        {/if}
      </div>

      {#each [1, 2, 3] as slotIndex}
        <div class="bead-wrapper" class:open={activeMenu === slotIndex}>
          <button
            class="rune-bead"
            class:active={selectedPath}
            onclick={() => selectedPath && toggleMenu(slotIndex as 1 | 2 | 3)}
            aria-label={`Select Minor Rune ${slotIndex}`}
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
              {#each availableRunes[slotIndex] as rune}
                <button
                  class="path-option rune-option"
                  onclick={() => selectRune(slotIndex, rune)}
                >
                  <img src={rune.Immagine} alt="" class="rune-option-img" />
                  {rune.Nome}
                </button>
              {/each}
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</div>
<Runeselector2
  paths={paths.filter((p) =>
    selectedPath ? (p as any).Id !== (selectedPath as any).Id : true,
  )}
  {runes}
/>

{#if activeMenu !== null}
  <button
    class="backdrop"
    onclick={() => (activeMenu = null)}
    aria-label="Close menu"
  ></button>
{/if}

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
    z-index: 20;
    flex-shrink: 0;
  }

  .path-selector-wrapper.open {
    z-index: 50;
  }

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

  .rune-bead.keystone {
    width: clamp(90px, 12vw, 150px);
    height: clamp(90px, 12vw, 150px);
  }

  .rune-bead.active {
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
    z-index: 40;
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
