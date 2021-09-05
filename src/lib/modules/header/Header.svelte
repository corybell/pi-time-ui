<script>
  import MenuButton from "$lib/modules/header/MenuButton.svelte"
</script>

<style>
  header {
    background-color: var(--color-primary);
  }

  h3 {
    color: var(--color-white);
    margin-left: 1rem;
  }

  .header-container {
    max-width: var(--container-width);
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>

<header>
  <div class="header-container">
    <MenuButton />
    <h3>PI TIME</h3>
  </div>
</header>