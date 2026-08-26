<script lang="ts">
  import type { Campione, Prisma } from "$lib/server/prisma/client";

  interface Props {
    champion: Campione;
  }

  let { champion }: Props = $props();
</script>

<div class="stats-container">
  <div class="stats-column left-stats">
    <div class="stat-item">
      <span class="stat-label">HP</span>
      <span class="stat-value">{champion.Vita}</span>
    </div>
    <div class="stat-item">
      <span class="stat-label">HP Regen</span>
      <span class="stat-value">placeholder</span>
    </div>
    <div class="stat-item">
      <span class="stat-label">AR</span>
      <span class="stat-value">{champion.Armatura}</span>
    </div>
    <div class="stat-item">
      <span class="stat-label">MR</span>
      <span class="stat-value">{champion.Resistenza_magica}</span>
    </div>
    <div class="stat-item">
      <span class="stat-label">MS</span>
      <span class="stat-value">{champion.Velocità_di_movimento}</span>
    </div>
    <div class="stat-item">
      <span class="stat-label">Base AS</span>
      <span class="stat-value">{champion.Velocità_di_attacco}</span>
    </div>
  </div>

  <div class="character-image">
    <img src="*" alt="Personaggio" />
  </div>

  <div class="stats-column right-stats">
    <div class="stat-item">
      <span class="stat-label">Mana</span>
      <span class="stat-value">{champion.Mana}</span>
    </div>
    <div class="stat-item">
      <span class="stat-label">Mana Regen</span>
      <span class="stat-value">placeholder</span>
    </div>
    <div class="stat-item">
      <span class="stat-label">AD</span>
      <span class="stat-value">{champion.Attacco}</span>
    </div>
    <div class="stat-item">
      <span class="stat-label">Crit. DMG</span>
      <span class="stat-value">placeholder</span>
    </div>
    <div class="stat-item">
      <span class="stat-label">Attack Range</span>
      <span class="stat-value">{champion.Gittata}</span>
    </div>
    <div class="stat-item">
      <span class="stat-label">Windup%</span>
      <span class="stat-value">placeholder</span>
    </div>
  </div>
</div>

<style>
  .stats-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 40px;
    color: white;

    box-sizing: border-box;
    font-family: var(--font-mono);
  }

  .stats-column {
    display: flex;
    flex-direction: column;
    gap: 15px;
    flex: 1;
  }

  .left-stats {
    text-align: left;
  }

  .right-stats {
    text-align: right;
  }

  .stat-item {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .stat-label {
    color: var(--white-50);
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: bold;
  }

  .stat-value {
    color: #ffffff;
    font-size: 26px;
    font-weight: 400;
  }

  .character-image {
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .character-image img {
    max-width: 100%;
    height: auto;
    max-height: 400px;
    object-fit: contain;
  }

  @media (max-width: 600px) {
    .stats-container {
      flex-direction: column;
      gap: 30px;
    }
    .left-stats,
    .right-stats {
      text-align: center;
      width: 100%;
    }
  }
</style>
