<script lang="ts">
    let { visible = $bindable(), focus = false } : {visible : Boolean, focus? : Boolean } = $props();

</script>

{#if visible}
    <div class="report-background">
        <button
            class="backdrop"
            onclick={() => (visible = false)}
            aria-label="Close menu"
        ></button>
        <div class="report-content">
            <div class="container">
                <div class="form-content">
                    <div class="header">
                        <div class="title">
                            Do you want to Report this User?
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
{/if}

<style>
    .report-background {
        position: fixed;
        top: 0;
        left: 0;
        
        display: flex;
        width: 100vw;
        height: 100vh;
        align-items: center;
        justify-content: center;

        z-index: 50;

        backdrop-filter: blur(5px) grayscale(60%);
    }

    .report-content{
        width: 80%;
        height: 80%;
        z-index: 100;
    }
    
    .form-content {
        display: flex;
        flex-direction: column;
        
        padding: 20px clamp(20px, 6vw, 80px);
        border: 1px var(--white-20) solid;

    }

    .header {
        display: flex;
        flex-direction: row;
    }
</style>