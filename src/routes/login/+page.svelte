<script lang="ts">
  import Logo from "$lib/components/logo.svelte";
  import { enhance } from "$app/forms";
  import { goto } from "$app/navigation";
  import { text, type ActionResult } from "@sveltejs/kit";
    import { popup } from "$lib/components/store/popup.svelte";

  let registration: Boolean = $state(false);

  function stateChange() {
    registration = !registration
  }

  function userCheck(result: ActionResult) {
    if (
      result.type === 'success' && 
      result.status === 200 && 
      result.data?.user
    ) {

      popup.text = ""
      popup.color = 'green'
      popup.text = "Access Successful"
      goto("/account/" + result.data?.user)
    
    } else if (result.type === 'redirect' ) {

      goto(result.location, {invalidateAll: true})

    } else if (result.type === 'failure') {

      popup.text = ""
      popup.color = 'red'
      popup.text = result.data?.msg

    }
  }
</script>

<div class="container">
  <div class="login-content">
    <div style="min-height: 5vw;"></div>
    <div class="form-container">
      <Logo width="75%" />

      <div style="min-height: 4vw;"></div>

      <form
        action={registration ? "?/signup" : "?/login"}
        method="post"
        class="login-form"
        use:enhance={ () => {return async({result}) => {userCheck(result)}} }
      >
        <div class="form-text">Username:</div>
        <input name="user" type="text" class="info-content form-text" placeholder="Insert here..." />
        <div class="form-text">Password:</div>
        <input name="password" type="password" class="info-content form-text" placeholder="Insert here..." />
        
        {#if registration}
          <div class="form-text">Confirm Password:</div>
          <input name="confirmPassword" type="password" class="info-content form-text" placeholder="Insert here..." />
        {/if}

        <div class="button-container">
          <button class="form-button form-text" type="submit">
            {registration ? "Sign Up" : "Login"}
          </button>
        </div>
      </form>
        
      <div style="min-height: 4vw;"></div>

      <div class="login-form-footer">
        {#if registration}
          <div class="form-text">You already have an account?</div>
        {:else}
          <div class="form-text">You don't have an account?</div>
        {/if}
        <button class="form-button form-text" onclick={() => stateChange()}>
          {registration ? "Login" : "Sign Up"}
        </button>
      </div>
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