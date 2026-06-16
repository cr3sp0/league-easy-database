<script lang="ts">
  import Navbar from "$lib/components/navbar.svelte";
  import { redirect } from "@sveltejs/kit";

  let user: String = $state("");
</script>

<Navbar />
<div class="builder-container">login!!</div>
<div>
  <div role="button">
    <input type="text" bind:value={user} />
    <a href="/account/{user}" onkeydown={(e) => e.key === "Enter"}>login</a>
  </div>
</div>
