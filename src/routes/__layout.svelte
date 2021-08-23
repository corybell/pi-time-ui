<script>
  import Header from "$lib/components/header/Header.svelte"
  import Footer from "$lib/components/footer/Footer.svelte"
  import "../app.css"
</script>

<style>
  main {
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 2rem;
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
  }
</style>

<Header />

<main>
  <slot />
</main>

<Footer />
