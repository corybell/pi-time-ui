<script>
  import SpinnerIcon from "$lib/components/icon/SpinnerIcon.svelte"

  export let loading
  export let size = 150
</script>

<style>
  .spinner {
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-primary);
  }
</style>

{#if loading}
  <div class="spinner">
    <SpinnerIcon {size} />
  </div>
{/if}
