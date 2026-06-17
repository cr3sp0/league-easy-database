<script lang="ts">
    let { width = "auto", height = "auto" } 
    : { width? : String, height? : String } = $props();
</script>

<div style="width: {width}; height: {height}">
    <div class="logo">
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <a href="/">
            <svg viewBox="0 0 448 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                d="M77.8744 130H0V0H59.0338V88.3414H80.8051L77.8744 130Z"
                fill="currentColor"
                />
                <path
                d="M179.247 130H85.0443V0H183.225L180.085 42.7053H144.078V50.2416H179.247L177.154 84.992H144.078V92.5282H182.387L179.247 130Z"
                fill="currentColor"
                />
                <path
                d="M315.372 62.1739C315.372 107.391 291.507 130 243.778 130H187.465V0H245.034C270.573 0 288.646 5.37306 299.253 16.1192C309.999 26.7257 315.372 42.0773 315.372 62.1739ZM251.523 97.1337V38.9372H244.824V97.1337H251.523Z"
                fill="currentColor"
                />
                <path
                d="M447.825 91.6908C447.825 104.251 444.197 113.811 436.94 120.37C429.682 126.79 417.611 130 400.724 130H320.756V0H399.886C430.171 0 445.313 11.4439 445.313 34.3317C445.313 41.4493 444.406 46.9619 442.592 50.8696C440.917 54.7772 437.637 58.1267 432.753 60.9179V61.7552C442.801 65.6629 447.825 75.6414 447.825 91.6908ZM386.07 103.414V77.6651H379.371V103.414H386.07ZM386.07 53.8003V32.029H379.371V53.8003H386.07Z"
                fill="currentColor"
                />
            </svg>
        </a>
    </div>
</div>

<style>
    .logo {
        color: #ce2a2a;
    }

    .logo svg {
        width: 100%;
        height: auto;
        display: block;
    }
</style>