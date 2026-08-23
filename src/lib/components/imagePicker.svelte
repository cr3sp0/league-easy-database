<script lang="ts">

    let { selection = $bindable(), visible = $bindable(), images } 
    : { selection : string, visible : boolean, images : string[] } = $props()

    function select(imgLink : string) {
        selection = imgLink
    }
</script>

{#if visible}
<div class="grid-container">
    {#each images as imgLink}
        <button
        type="button"
        class="grid-item"
        class:selected={selection === imgLink}
        onclick={() => select(imgLink)}
        >
            <img src={imgLink} alt="" />
        </button>
    {/each}

    <div class="closing-row">
        <div class="filler"></div>
        <button type="button" class="btn" onclick={() => (visible = false)}>Close</button>
        <div class="filler"></div>
    </div>
</div>
{/if}

<style>
    .grid-container {
        position: relative;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 16px;
        width: 100%;
        margin: 0 auto;
        padding: 20px;
        box-sizing: border-box;
        z-index: 50;
        background-color: var(--black-20);
    }

    .grid-item {
        max-width: 250px;
        max-height: 250px;

        background: none;
        border: 2px solid transparent;
        padding: 4px;
        cursor: pointer;
        outline: none;
    }
    .grid-item:hover {
        border-color: #554949;
    }
    .grid-item img {
        width: 100%;
        height: 100%;

        object-fit: scale-down;
    }

    .selected {
        border-color: #554949;
        transform: scale(1.1);
    }

    .closing-row {
        display: flex;
        grid-column-start: span 4;
    }

    .btn {
        height: fit-content;
        padding: 1.5vh 2vw;

        background-color: var(--black-20);
        border: 1px var(--white-20) solid;
        
        color: white;
        
        font-family: var(--font-mono);
        font-size: var(--text-md);
        cursor: pointer;
    }
    .btn:hover, .btn:focus {
        background-color: #2a2323;
        border-color: #4a3f3f;
        text-decoration: underline;
    }
</style>