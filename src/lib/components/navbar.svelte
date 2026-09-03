<script lang="ts">
    import { enhance } from "$app/forms";
    import { goto } from "$app/navigation";
    import { page } from "$app/state";
    import { popup } from "./store/popup.svelte";

  let { profile, role = "User" } : { profile? : String, role? : String } = $props();
  //TODO: Add role to each navbar
</script>

<div class="nav-container">
  <div class="nav-content">
    <div class="nav-title">
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
    <div class="spacing"></div>
    <div class="nav-links">
      {#if role === "Admin"}
        <a href="/admin/reports" class="nav-link">reports</a>
      {/if}
      <a href="/builder" class="nav-link">builder</a>
      <a href="/champions" class="nav-link">champions</a>
      <a href="/items" class="nav-link">items</a>
      {#if !profile}
        <a href="/login" class="nav-login">Login</a>
      {:else if (page.url.pathname.includes("/account/" + profile))}
        <form 
          method="post" 
          action="?/logout" 
          use:enhance={ () => async ({result}) => {
            if (result.status === 200) {
              popup.color = 'green'
              popup.text = "Logout successful"
              goto("/")
            }
          } }
        >
          <button class="nav-login" type="submit">Logout</button>
        </form>
      {:else}
        <a href="/account/{profile}" class="nav-login">{profile}</a>
      {/if}
    </div>
  </div>
</div>

<style>
  .nav-container {
    width: 100%;
    height: auto;

    box-sizing: border-box;
    padding-bottom: 10px;
    padding-top: 10px;
  }

  .nav-content {
    display: flex;
    align-items: center;
    flex-direction: row;

    color: white;
  }

  .nav-title {
    width: clamp(200px, 30vw, 600px);
    color: #ce2a2a;
  }

  .nav-title svg {
    width: 100%;
    height: auto;
    display: block;
  }

  .spacing {
    width: 100%;
    flex-grow: 1;
  }

  .nav-links {
    font-family: var(--font-mono);
    font-size: var(--text-sm);
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    height: 100%;
  }

  .nav-link {
    display: block;
  }

  .nav-link:hover {
    text-decoration: underline;
  }

  .nav-login {
    font-weight: 800;
    font-family: inherit;
    font-size: var(--text-md);

    border: none;
    background-color: transparent;
    color: white;

    min-width: fit-content;
  }

  .nav-login:hover {
    text-decoration: underline;
    cursor: pointer;
  }
</style>
