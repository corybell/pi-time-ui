<script>
  import Header from "$lib/components/header/Header.svelte"
  import Footer from "$lib/components/footer/Footer.svelte"
  import Nav from "$lib/components/nav/Nav.svelte"

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

<Footer />
