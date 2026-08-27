<script lang="ts">
  import { onNavigate } from "$app/navigation";
  import favicon from "$lib/assets/favicon.svg";
  import Popup from "$lib/components/popup.svelte";
  import { popup } from "$lib/components/store/popup.svelte";
  import "../app.css";

  let { children } = $props();

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<Popup color={popup.color} bind:text={popup.text} />
{@render children()}
