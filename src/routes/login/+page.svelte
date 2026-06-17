<script lang="ts">
  import Navbar from "$lib/components/navbar.svelte";
  import Logo from "$lib/components/logo.svelte";

  let registration: Boolean = $state(false);

  let user: String = $state("");
  let password: String = $state("");
  let passConfirm: String = $state("");

  function usernameCheck () : Boolean{
    user = user.trim();

	  return user.length != 0;
  }
</script>

<div class="container">
  <div class="login-content">    
    <div style="min-height: 5vw;"></div>

    <div class="login-form">
      <Logo width="75%" />

      <div style="min-height: 4vw;"></div>

      <div class="info-container">
        <div class="form-text">Username:</div>
        <input 
          type="text" 
          class="info-content form-text" 
          bind:value={user} 
          onkeydown={(e) => e.key === "Enter"} 
          placeholder="Insert here..."
        />

        <div class="form-text">Password:</div>
        <input 
          type="password" 
          class="info-content form-text" 
          bind:value={password} 
          onkeydown={(e) => e.key === "Enter"} 
          placeholder="Insert here..."
        />

        {#if registration}
          <div class="form-text">Confirm Password:</div>
          <input 
            type="password" 
            class="info-content form-text" 
            bind:value={passConfirm} 
            onkeydown={(e) => e.key === "Enter"} 
            placeholder="Insert here..."
          />
        {/if}
      </div>
      {#if registration}
        <a 
          id="login" class="form-button form-text" 
          href="/account/{user}" 
          onclick={() => usernameCheck()} 
          onkeydown={(e) => e.key === "Enter" && usernameCheck()}
        >
          Sign Up
        </a>
      {:else}
        <a 
          id="login" class="form-button form-text" 
          href="/account/{user}" 
          onclick={() => usernameCheck()} 
          onkeydown={(e) => e.key === "Enter" && usernameCheck()}
        >
          Login
        </a>
      {/if}

      <div style="min-height: 4vw;"></div>
      
      <div class="login-form-footer">
        <div style="width: 100%;"></div>
        {#if registration}
          <div class="form-text">You already have an account?</div>
          <button 
            class="form-button form-text" 
            onclick={() => {registration=false}}
          >
            Login
          </button>
        {:else}
          <div class="form-text">You don't have an account?</div>
          <button 
            class="form-button form-text" 
            onclick={() => {registration=true}}
          >
            Sign Up
          </button>
        {/if}
        <div style="width: 100%;"></div>
      </div>
    </div>
  </div>
</div>

<style>
  .logo-continer {
    height: 50%;
  }

  .login-content {
    display: flex;
    flex-direction: column;

    align-items: center;
  }

  .login-form {
    display: flex;
    flex-direction: column;    
    box-sizing: border-box;
    width: fit-content;

    align-items: center;  

    background-color: var(--black-20);
    
    padding: 2% 8%;
    gap: 25px;
  }

  .info-container {
    display: flex;
    flex-direction: column;
    
    gap: 10px;
  }

  .info-content {
    background: transparent;
    border: none;
    border-bottom: 1px solid var(--white-20);
    outline: none;
    font-size: inherit;
    color: inherit;
    font-size: var(--text-md);
  }

  .login-form-footer {
    display: flex;
    flex-direction: row;
    width: 100%;
    min-width: fit-content;

    font-size: 70%;
  }

  .form-button {
    background: transparent;
    border: none;
    outline: none;
    font-size: inherit;
    font-family: inherit;
    color: inherit;
    display: flex;
    flex-grow: 1;
    width: clamp(1vw, 10vw, 50%);
    cursor: pointer;
    justify-content: center;
  }
  .form-button:hover {
    text-decoration: underline;
  }
  .form-button:focus {
    text-decoration: dashed;
  }

  .form-text {
    min-width: fit-content;
    font-size: inherit;
    font-family: var(--font-mono);
  }
</style>