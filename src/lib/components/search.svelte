<script lang="ts">
    import type { itemStatFilter } from "$lib/server/itemManager";
    import ItemFilter from "./itemFilter.svelte";


  let { 
    itemFilter = $bindable(),
    championFilter = $bindable(),
    buildFilter = $bindable()
  } : { 
    itemFilter? : itemStatFilter
    championFilter? : any
    buildFilter? : any
  } = $props()

  let isFilterVisible = $state(false)
</script>

<form 
class="search-container"
id="head-section"
method="get"
>
  <input type="text" class="search" placeholder="Search..." name="search" />
  <div class="filler"></div>
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="filter" id="filter" onclick={() => isFilterVisible = true}>
    <svg
      width="10"
      height="12"
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0011 9V16.88C10.0411 17.18 9.94111 17.5 9.71111 17.71C9.61859 17.8027 9.50871 17.8762 9.38773 17.9264C9.26676 17.9766 9.13708 18.0024 9.00611 18.0024C8.87514 18.0024 8.74546 17.9766 8.62448 17.9264C8.50351 17.8762 8.39362 17.8027 8.30111 17.71L6.29111 15.7C6.18211 15.5933 6.09922 15.4629 6.04892 15.319C5.99861 15.175 5.98225 15.0213 6.00111 14.87V9H5.97111L0.211108 1.62C0.0487158 1.41153 -0.0245586 1.14726 0.00729555 0.88493C0.0391497 0.622602 0.173543 0.383546 0.381108 0.22C0.571108 0.08 0.781108 0 1.00111 0H15.0011C15.2211 0 15.4311 0.08 15.6211 0.22C15.8287 0.383546 15.9631 0.622602 15.9949 0.88493C16.0268 1.14726 15.9535 1.41153 15.7911 1.62L10.0311 9H10.0011Z"
        fill="white"
      />
    </svg>

    Filter
  </div>
  {#if isFilterVisible && itemFilter !== undefined}
    <input name="filter" type="hidden" value={JSON.stringify(itemFilter)} />
    <ItemFilter bind:visible={isFilterVisible} bind:filter={itemFilter} />
  {/if}
</form>

<style>
  .search-container {
    display: flex;
    flex-direction: row;
    width: 100%;

    border-bottom: 1px var(--white-20) solid;
    font-family: var(--font-mono);
  }

  .search {
    background: transparent;
    border: none;
    outline: none;
    font-size: inherit;
    font-family: inherit;
    color: inherit;
    flex-grow: 1;
  }

  .filter {
    cursor: pointer;
  }
  .filter:hover {
    text-decoration: underline;
  }
</style>
