<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";
  import Popup from "$lib/components/popup.svelte";
  import { popup } from "$lib/components/store/popup.svelte";
  import "../app.css";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<Popup color={popup.color} text={popup.text}/>
{@render children()}
