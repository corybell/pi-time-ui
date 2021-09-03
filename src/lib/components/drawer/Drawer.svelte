<script>
  import { fly, fade } from "svelte/transition"

  export let isOpen = false
  export let handleCancel
  export let handleSave

  const flyInOut = { x: -500, y: 0, duration: 500 }
</script>

<style>
  .drawer {
    z-index: 1010;
    background-color: var(--color-white);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    max-width: 500px;
  }
  .drawer-content {
    padding: 1rem;
  }
  .overlay {
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
  .overlay:hover {
    cursor: pointer;
  }
  @media (min-width: 480px) {
    .drawer {
      width: 70%;
      padding: 1rem;
    }
  }
  @media (min-width: 767px) {
    .drawer {
      width: 60%;
      padding: 2rem;
    }
  }
</style>

{#if isOpen}
  <div in:fly={flyInOut} out:fly={flyInOut} class="drawer">
    <div class="drawer-content">
      <slot />
    </div>
    
  </div>
  <div class="overlay" in:fade out:fade on:click={handleCancel} />
{/if}
