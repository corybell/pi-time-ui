<script>
  import { isNavOpen } from "$lib/store/store"

  function handleClick() {
    isNavOpen.set(true)
  }
</script>

<style>
  .menu {
    display: flex;
    background-color: var(--color-primary);
  }
  .svg {
    fill: white;
  }
</style>

<button class="menu" on:click={handleClick}>
  <svg class="svg" viewBox="0 0 100 80" width="30" height="30">
    <rect width="100" height="15" rx="8" />
    <rect y="33" width="100" height="15" rx="8" />
    <rect y="66" width="100" height="15" rx="8" />
  </svg>
</button>
