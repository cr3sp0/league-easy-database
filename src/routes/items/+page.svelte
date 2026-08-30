<script>
  import Itemsgrid from "$lib/components/itemsgrid.svelte";
  import Navbar from "$lib/components/navbar.svelte";
  import Search from "$lib/components/search.svelte";

  let { data } = $props()
</script>

<div class="container">
  <div class="items-content">
    <Navbar profile={data.profile} role={data.role} />
    <div class="title">Items</div>
    <Search />
    <!--<Itemsgrid />-->
  </div>
</div>

<style>
  .items-content {
    height: 100%;
    width: 100%;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    gap: 50px;
    align-items: center;

    padding: 20px clamp(20px, 6vw, 80px);

    border: 1px var(--white-20) solid;
  }
</style>
