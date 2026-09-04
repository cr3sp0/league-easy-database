<script lang="ts">

    let {
        Vita = 0,
        Mana = 0,
        Velocità_di_movimento = 0,
        Armatura = 0,
        ResistenzaMagica = 0,
        Gittata = 0,
        RigenerazioneVita = 0,
        RigenerazioneMana = 0,
        Critico = 0,
        Attacco = 0,
        VelocitàDiAttacco = 0,
        AttaccoMagico = 0
    } : {   
        Vita                         ?: number
        Mana                         ?: number
        Velocità_di_movimento        ?: number
        Armatura                     ?: number
        ResistenzaMagica             ?: number
        Gittata                      ?: number
        RigenerazioneVita            ?: number
        RigenerazioneMana            ?: number
        Critico                      ?: number
        Attacco                      ?: number
        VelocitàDiAttacco            ?: number
        AttaccoMagico                ?: number
    } = $props()
</script>

<div class="stat-grid">
    {#if Vita > 0}
        <div>Health: {Vita}</div>
    {/if}
    {#if RigenerazioneVita > 0}
        <div>Health Regen: {RigenerazioneVita}</div>
    {/if}
    {#if Mana > 0}
        <div>Mana: {Mana}</div>
    {/if}
    {#if RigenerazioneMana > 0}
        <div>Mana Regen: {RigenerazioneMana}</div>
    {/if}
    {#if Velocità_di_movimento > 0}
        <div>Movement Speed: {Velocità_di_movimento}</div>
    {/if}
    {#if Armatura > 0}
        <div>Armor: {Armatura}</div>
    {/if}
    {#if ResistenzaMagica > 0}
        <div>Magic Resistance: {ResistenzaMagica}</div>
    {/if}
    {#if Gittata > 0}
        <div>Range: {Gittata}</div>
    {/if}
    {#if Critico > 0}
        <div>Critical Rate: {Critico}</div>
    {/if}
    {#if Attacco > 0}
        <div>Attack: {Attacco}</div>
    {/if}
    {#if VelocitàDiAttacco > 0}
        <div>Attack Speed: {VelocitàDiAttacco}</div>
    {/if}
    {#if AttaccoMagico > 0}
        <div>Ability Power: {AttaccoMagico}</div>
    {/if}
</div>

<style>
  .stat-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, 1fr);
    gap: 10px;
  }
</style>