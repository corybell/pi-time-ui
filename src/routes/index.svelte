<script context="module">
  export const prerender = false
</script>

<script>
  import { onMount } from "svelte"
  import RelayList from "$lib/relay-list/RelayList.svelte"
  import RelayDetail from "$lib/relay-detail/RelayDetail.svelte"
  
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
  <RelayList relays={relays} />
</section>
<RelayDetail />

<style>
  section {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    flex: 1;
  }
</style>
