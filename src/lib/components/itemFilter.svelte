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
<div class="container">
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
    .container {
        z-index: 100;
        position: absolute;
        right: 15vw;
        background-color: var(--background);
        max-width: 10vw;
        background-color: var(--black-20);
        padding: 0;
    }
    .container div {
        padding: 1vw;
        display: block;
        justify-content: center;

        color: white;
        font-family: var(--font-mono);
        
    }

    .selected {
        background-color: red;
    }
</style>