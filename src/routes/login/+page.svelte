<script lang="ts">
  import Navbar from "$lib/components/navbar.svelte";

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
    <Navbar />
    
    <div style="min-height: 5vw;"></div>

    <div class="login-form">
      <div class="info-container">
        <div>Username:</div>
        <input type="text" class="info-content" bind:value={user} onkeydown={(e) => e.key === "Enter"} placeholder="Insert here..."/>
        <div>Password:</div>
        <input type="password" class="info-content" bind:value={password} onkeydown={(e) => e.key === "Enter"} placeholder="Insert here..."/>
        {#if registration}
          <div>Confirm Password:</div>
          <input type="password" class="info-content" bind:value={passConfirm} onkeydown={(e) => e.key === "Enter"} placeholder="Insert here..."/>
        {/if}
      </div>
      {#if registration}
        <a id="login" class="form-button" href="/account/{user}" onclick={() => usernameCheck()} onkeydown={(e) => e.key === "Enter" && usernameCheck()}>Sign Up</a>
      {:else}
        <a id="login" class="form-button" href="/account/{user}" onclick={() => usernameCheck()} onkeydown={(e) => e.key === "Enter" && usernameCheck()}>Login</a>
      {/if}

      <div style="min-height: 5vw;"></div>
      
      <div class="login-form-footer">
        <div style="width: 100%;"></div>
        {#if registration}
          <div style="min-width: fit-content;">You already have an account?</div>
          <button class="form-button" onclick={() => {registration=false}}>Login</button>
        {:else}
          <div style="min-width: fit-content;">You don't have an account?</div>
          <button class="form-button" onclick={() => {registration=true}}>Sign Up</button>
        {/if}
        <div style="width: 100%;"></div>
      </div>
    </div>

    <div style="min-height: 5vw;"></div>
  </div>
</div>

<style>
  .login-content{
    display: flex;
    flex-direction: column;
    height: 100%;
    flex-grow: 1;

    align-items: center;
  }

  .login-form{
    display: flex;
    flex-direction: column;
    align-items: center;  

    box-sizing: border-box;
    width: 50%;
    height: 100%;
    flex-grow: 1;

    padding: clamp(20px, 2vw, 30px) 10px;

    background-color: var(--black-20);
    font-family: var(--font-mono);
    gap: 25px;
  }

  .info-container{
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: left;
    gap: 10px;
  }

  .login-form-footer {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
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
</style>