<script>
  import Header from "$lib/modules/header/Header.svelte"
  import Nav from "$lib/modules/nav/Nav.svelte"

  import "../app.css"
</script>

<style>
  main {
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
    max-width: var(--container-width);
    margin: 0 auto;
  }
</style>

<Header />
<Nav />

<main>
  <slot />
</main>
