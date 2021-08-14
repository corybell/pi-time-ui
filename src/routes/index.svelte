<script context="module">
  export const prerender = false
</script>

<script>
  import { onMount } from "svelte"

  const url = "http://localhost:5000/relay"
  let relays = []

  onMount(async () => {
    const res = await fetch(url)
    relays = await res.json()
    console.log(relays)
  })
</script>

<svelte:head>
  <title>Pi Time</title>
</svelte:head>

<section>
  <h1>This is the home page</h1>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
  }
</style>
