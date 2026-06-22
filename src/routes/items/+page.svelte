<script>
  import Navbar from "$lib/components/navbar.svelte";

  let { data } = $props()
</script>

<Navbar profile={data.profile} />
<div class="builder-container">items!!</div>
