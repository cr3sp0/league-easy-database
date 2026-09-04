<script lang="ts">
    import type { itemStatFilter } from "$lib/server/itemManager";

    let { filter = $bindable(), visible = $bindable() } 
    : { filter : itemStatFilter, visible : boolean } = $props()

</script>

<button
    class="backdrop"
    onclick={() => (visible = false)}
    aria-label="Close form"
></button>

<button onclick={() => filter.Vita = 1}>Vita</button>
<button onclick={() => filter.RigenerazioneVita = 1}>Health Regen</button>
<button onclick={() => filter.Attacco = 1}>Attack Damage</button>
<button onclick={() => filter.AttaccoMagico = 1}>Ability Power</button>
<button onclick={() => filter.Armatura = 1}>Armor</button>
<button onclick={() => filter.ResistenzaMagica = 1}>Magic Resistance</button>
<button onclick={() => filter.Critico = 1}>Crit Rate</button>
<button onclick={() => filter.Gittata = 1}>Range</button>
<button onclick={() => filter.Mana = 1}>Mana</button>
<button onclick={() => filter.RigenerazioneMana = 1}>Mana Regen</button>
<button onclick={() => filter.VelocitàDiAttacco = 1}>Attack Speed</button>
<button onclick={() => filter.Velocità_di_movimento = 1}>Movement Speed</button>

<style>

</style>