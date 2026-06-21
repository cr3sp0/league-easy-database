<script lang="ts">
  import Logo from "$lib/components/logo.svelte";
  import { enhance } from "$app/forms";
  import { goto } from "$app/navigation";
    import type { ActionResult } from "@sveltejs/kit";

  let registration: Boolean = $state(false);

  let user: String = $state("");
  let password: String = $state("");
  let passConfirm: String = $state("");

  function stateChange() {
    registration = !registration
  }

  function usernameCheck () : Boolean{
    user = user.trim();

	  return user.length != 0;
  }

  function userCheck(result: ActionResult) {
    //TODO: something
    if (result.type === 'success' && result.status === 200 && result.data?.user.length !== 0) {
      goto("/account/" + result.data?.user)
    } else {
      //TODO: error
    }
  }
</script>

<div class="container">
  <div class="login-content">    
    <div style="min-height: 5vw;"></div>
    <div class="form-container">
      <Logo width="75%" />

      <div style="min-height: 4vw;"></div>
      {#if registration}
        <div class="form-text">You already have an account?</div>
      {:else}
        <form
          action="?/login"
          method="post"
          class="login-form"
          use:enhance = {() => {return async({result}) => {userCheck(result)}} }
        >
          <div class="form-text">Username:</div>
          <input name="user" type="text" class="info-content form-text" bind:value={user} placeholder="Insert here..." />
          <div class="form-text">Password:</div>
          <input name="password" type="password" class="info-content form-text" bind:value={password} placeholder="Insert here..." />
          <div class="button-container">
            <button class="form-button form-text">Login</button>
          </div>
        </form>
        
        <div style="min-height: 4vw;"></div>
        
        <div class="login-form-footer">
          <div class="form-text">You don't have an account?</div>
          <button class="form-button form-text" onclick={() => stateChange()}>Sign Up</button>
        </div>
      {/if}
    </div>
  </div>
</div>

<style>
  .login-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .form-container {
    display: flex;
    flex-direction: column;    
    box-sizing: border-box;
    width: fit-content;

    align-items: center;

    background-color: var(--black-20);
    
    padding: 25px 8%;
    gap: 25px;
  }

  .login-form {
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

  .button-container {
    display:flex;
    width: 100%;
    align-items: center;
  }

  .form-button {
    display: flex;
    flex-grow: 1;
    background: transparent;
    
    border: none;
    outline: none;
    
    color: inherit;
    font-size: inherit;
    font-family: inherit;

    width: clamp(1vw, 10vw, 50%);
    justify-content: center;
    cursor: pointer;
  } 
  .form-button:hover {
    text-decoration: underline;
  }
  .form-button:focus-visible {
    text-decoration: underline;
  }

  .form-text {
    min-width: fit-content;
    font-size: inherit;
    font-family: var(--font-mono);
  }
</style>