<script lang="ts">
    import type { itemStatFilter } from "$lib/server/itemManager";

    let { 
        filter = $bindable(),
        visible = $bindable()
    } : { 
        filter : itemStatFilter
        visible : boolean
    } = $props()

    let costFloor : number | undefined = $state(undefined)
    let costCeil : number | undefined = $state(undefined)

    function toggle(value? : number) {
        return value === undefined
            ? 1 : undefined
    }

</script>

<button
    class="backdrop"
    onclick={() => (visible = false)}
    aria-label="Close form"
></button>
<div class="filter-container">
    <div>
        <button
        type="button"
        onclick={() => filter.Vita = toggle(filter.Vita)}
        class:selected={filter.Vita !== undefined}
        >Health</button>
        <button
        type="button"
        onclick={() => filter.RigenerazioneVita = toggle(filter.RigenerazioneVita)}
        class:selected={filter.RigenerazioneVita !== undefined}
        >Health Regen</button>
        <button
        type="button"
        onclick={() => filter.Attacco = toggle(filter.Attacco)}
        class:selected={filter.Attacco !== undefined}
        >Attack Damage</button>
        <button
        type="button"
        onclick={() => filter.AttaccoMagico = toggle(filter.AttaccoMagico)}
        class:selected={filter.AttaccoMagico !== undefined}
        >Ability Power</button>
        <button
        type="button"
        onclick={() => filter.Armatura = toggle(filter.Armatura)}
        class:selected={filter.Armatura !== undefined}
        >Armor</button>
        <button
        type="button"
        onclick={() => filter.ResistenzaMagica = toggle(filter.ResistenzaMagica)}
        class:selected={filter.ResistenzaMagica !== undefined}
        >Magic Resistance</button>
        <button
        type="button"
        onclick={() => filter.Critico = toggle(filter.Critico)}
        class:selected={filter.Critico !== undefined}
        >Crit Rate</button>
        <button
        type="button"
        onclick={() => filter.Gittata = toggle(filter.Gittata)}
        class:selected={filter.Gittata !== undefined}
        >Range</button>
        <button
        type="button"
        onclick={() => filter.Mana = toggle(filter.Mana)}
        class:selected={filter.Mana !== undefined}
        >Mana</button>
        <button
        type="button"
        onclick={() => filter.RigenerazioneMana = toggle(filter.RigenerazioneMana)}
        class:selected={filter.RigenerazioneMana !== undefined}
        >Mana Regen</button>
        <button
        type="button"
        onclick={() => filter.VelocitàDiAttacco = toggle(filter.VelocitàDiAttacco)}
        class:selected={filter.VelocitàDiAttacco !== undefined}
        >Attack Speed</button>
        <button
        type="button"
        onclick={() => filter.Velocità_di_movimento = toggle(filter.Velocità_di_movimento)}
        class:selected={filter.Velocità_di_movimento !== undefined}
        >Movement Speed</button>
        <button type="submit">submit</button>
    </div>

    <div>
        <input name="costFloor" type="number" bind:value={costFloor} placeholder="Cost Floor..." />
        <input name="costCeil" type="number" bind:value={costCeil} placeholder="Cost Ceiling..." />
    </div>
</div>

<style>
.filter-container {
  z-index: 100;
  position: absolute;
  right: 15vw;
  width: 100%;
  max-width: 20vw; /* Replaced 10vw to allow text to fit comfortably */
  background-color: var(--background, #1e1e24);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5);
  padding: 12px;
  flex-direction: column;
  gap: 12px;
  backdrop-filter: blur(8px);
}

.filter-container > div:first-child {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    font-family: var(--font-mono, monospace);
}

.filter-container button[type="button"] {
  background-color: rgba(255, 255, 255, 0.06);
  color: #a0a0a0;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 6px;
  padding: 6px 10px;
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  user-select: none;
}

.filter-container button[type="button"]:hover {
  background-color: rgba(255, 255, 255, 0.12);
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.2);
}

.filter-container button[type="button"].selected {
  color: #ffffff;
  background-color: #2a2323;
  border-color: #4a3f3f;
  box-shadow: 0 0 4px var(--white-20);
}

.filter-container button[type="submit"] {
  width: 100%;
  margin-top: 6px;
  padding: 8px 12px;
  background: linear-gradient(135deg, #10b981, #059669);
  color: #ffffff;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: opacity 0.2s ease, transform 0.1s ease;
}

.filter-container button[type="submit"]:hover {
  opacity: 0.9;
}

.filter-container button[type="submit"]:active {
  transform: scale(0.98);
}

.filter-container > div:last-child {
  display: flex;
  gap: 8px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 12px;
}

.filter-container input[type="number"] {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 6px;
  padding: 6px 8px;
  color: #ffffff;
  font-family: var(--font-mono, monospace);
  font-size: 0.75rem;
  outline: none;
  transition: border-color 0.2s ease;
}

.filter-container input[type="number"]::placeholder {
  color: rgba(255, 255, 255, 0.35);
}

.filter-container input[type="number"]:focus {
  border-color: #3b82f6;
}

.filter-container input[type="number"]::-webkit-outer-spin-button,
.filter-container input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>