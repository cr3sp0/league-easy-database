<script lang="ts">
  //TODO: we need to use the database data here

  type RunePath =
    | "precision"
    | "domination"
    | "sorcery"
    | "resolve"
    | "inspiration";

  interface PathConfig {
    id: RunePath;
    name: string;
    color: string;
  }

  const paths: PathConfig[] = [
    { id: "precision", name: "Precision", color: "#e5c158" },
    { id: "domination", name: "Domination", color: "#dc4b4b" },
    { id: "sorcery", name: "Sorcery", color: "#9faafb" },
    { id: "resolve", name: "Resolve", color: "#a1d28a" },
    { id: "inspiration", name: "Inspiration", color: "#49a0b4" },
  ];

  let selectedPath = $state<RunePath | null>(null);
  let isMenuOpen = $state(false);
  let isAnimating = $state(false);

  let currentPathColor = $derived(
    paths.find((p) => p.id === selectedPath)?.color || "#ffffff",
  );

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function selectPath(pathId: RunePath) {
    selectedPath = pathId;
    isMenuOpen = false;
    isAnimating = false;

    setTimeout(() => {
      isAnimating = true;
    }, 10);
  }
</script>

<div class="rune-builder" style="--current-path-color: {currentPathColor}">
  <div class="rune-row">
    <div class="path-selector-wrapper">
      <button
        class="path-circle"
        class:empty-glow={!selectedPath}
        onclick={toggleMenu}
        aria-label="Select Rune Path"
      >
        <span class="arc-deco"></span>
        <span class="path-icon">
          {selectedPath ? selectedPath.charAt(0).toUpperCase() : "?"}
        </span>
      </button>

      {#if isMenuOpen}
        <div class="path-dropdown">
          {#each paths as path}
            <button
              class="path-option"
              onclick={() => selectPath(path.id)}
              style="--hover-color: {path.color}"
            >
              {path.name}
            </button>
          {/each}
        </div>
      {/if}
    </div>

    <div class="beads-container">
      <div class="rune-line" class:pulse-active={isAnimating}></div>

      <div class="rune-bead keystone" class:active={selectedPath}></div>
      <div class="rune-bead" class:active={selectedPath}></div>
      <div class="rune-bead" class:active={selectedPath}></div>
      <div class="rune-bead" class:active={selectedPath}></div>
    </div>
  </div>
</div>

{#if isMenuOpen}
  <button
    class="backdrop"
    onclick={() => (isMenuOpen = false)}
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
      #252830 80
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
  }

  .rune-bead.keystone {
    width: clamp(90px, 12vw, 150px);
    height: clamp(90px, 12vw, 150px);
  }

  .rune-bead.active {
    border-color: var(--current-path-color);
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.8);
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
