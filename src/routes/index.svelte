<script context="module">
  export const prerender = true
</script>

<script>
  import { onMount } from "svelte"
  import RelayList from "$lib/components/relay-list/RelayList.svelte"
  import RelayDetail from "$lib/components/relay-detail/RelayDetail.svelte"
  import { relays } from "$lib/store/store.js"

  const url = "http://localhost:5000/relay"

  onMount(async () => {
    const res = await fetch(url)
    const r = await res.json()
    relays.set(r)
  })
</script>

<svelte:head>
  <title>Pi Time</title>
</svelte:head>

<section>
  <RelayList />
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
