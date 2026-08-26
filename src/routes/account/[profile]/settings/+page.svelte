<script lang="ts">
    import { enhance } from '$app/forms';
    import { goto } from '$app/navigation';
    import ImagePicker from '$lib/components/imagePicker.svelte';
    import Navbar from '$lib/components/navbar.svelte';
    import { popup } from '$lib/components/store/popup.svelte.js';

    let { data } = $props()

    const imagesLinkList = $derived(data.imageList)
    let pfp = $derived(data.currentImage)
    let username = $derived(data.profile)
    let riotID : string | undefined = $state()

    let isPickerOpen : boolean = $state(false)
</script>

<div class="container">
    <div class="content">
        <Navbar profile={data.profile} />

        <div class="title">Settings</div>
        
        <form
        class="form"
        method="post"
        action="?/sendEdit"
        use:enhance={() => async({ result }) => {
            if (result.type === "failure") {
                popup.color = "red"
                popup.text = result.data?.msg ? "" + result.data?.msg : "Unknown Error"
            } else if (result.type === "success") {
                popup.color = "green"
                popup.text = "" + result.data?.msg
                goto("/account/" + username)
            }
        }}
        >

            <div class="form-info">
                {#if !isPickerOpen}
                <div>Select a new Profile Image:</div>
                <div class="filler"></div>
                <button 
                type="button"
                class="pfp"
                onclick={() => isPickerOpen = true}
                >
                    <img src="{pfp}" alt="Selection" />
                </button>
                {/if}
                <div class="picker-container">
                    <ImagePicker bind:visible={isPickerOpen} bind:selection={pfp} images={imagesLinkList} />
                </div>
                <input name="newImage" type="hidden" bind:value={pfp} />
            </div>

            <div class="form-info">
                <div>Set a new Username</div>
                <div class="filler"></div>
                <textarea name="newUsername" class="text" bind:value={username}></textarea>
            </div>

            <div class="form-info">
                <div>Insert a new RiotID</div>
                <div class="filler"></div>
                <textarea name="newID" class="text" placeholder="RiotID" bind:value={riotID}></textarea>
            </div>

            <button type="submit" class="btn">Edit</button>
        </form>

    </div>
</div>

<style>
    .content{
        height: 100%;
        width: 100%;
        box-sizing: border-box;

        display: flex;
        flex-direction: column;
        gap: 50px;
        align-items: center;

        padding: 20px clamp(20px, 6vw, 80px);

        border: 1px solid var(--white-20);
    }

    .form {
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 60%;

        padding: clamp(5rem, 2vh, 15rem);
        gap: clamp(25px, 1vh, 80px);
    }

    .form-info {
        display: flex;
        flex-direction: row;
        align-items: center;
        
        width: 100%;
        gap: 20px;

        color: white;
        font-family: var(--font-mono);
        font-size: var(--text-md);
    }

    .text {
        min-height: min-content;

        background-color: var(--black-20);
        color: white;
        border: 2px solid var(--white-20);

        font-size: var(--text-md);
        font-family: var(--font-mono);
    }

    .picker-container  {
        max-width: 1200px;
    }

    .pfp {
        background: none;
        border: 2px solid transparent;
        padding: 4px;
        cursor: pointer;
        outline: none;
        border-color: #554949;

        aspect-ratio: 1;
        overflow: hidden;
    }
    .pfp img {
        max-width: 200px;
    }

    .btn {
        height: fit-content;
        padding: 1.5vh 2vw;

        background-color: var(--black-20);
        border: 1px var(--white-20) solid;
        
        color: white;
        
        font-family: var(--font-mono);
        font-size: var(--text-md);
        cursor: pointer;
    }
    .btn:hover, .btn:focus {
        background-color: #2a2323;
        border-color: #4a3f3f;
        text-decoration: underline;
    }
</style>