<!-- src/routes/+page.svelte -->
<script lang="ts">
  let { data } = $props();
</script>

<h1>Lista Utenti:</h1>

{#if data.users.length === 0}
  <p>Nessun utente trovato nel database.</p>
{:else}
  <ul>
    {#each data.users as user}
      <li>{user.name} - {user.email}</li>
    {/each}
  </ul>
{/if}
