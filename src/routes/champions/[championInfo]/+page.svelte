<script lang="ts">
    import Navbar from '$lib/components/navbar.svelte';

    let { data } = $props();
</script>

<div class="info-container">
    <Navbar />
    {data.name} 
</div>

<style>

</style>