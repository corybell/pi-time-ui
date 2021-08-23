<script context="module">
  export const prerender = false
</script>

<script>
  import { onMount } from "svelte"
  import RelayList from "$lib/components/relay-list/RelayList.svelte"
  import RelayDetail from "$lib/components/relay-detail/RelayDetail.svelte"
  import {
    relays,
    hoursList,
    minutesList,
    hoursDict,
    minutesDict,
  } from "$lib/store/store.js"

  const url = "http://localhost:5000/hydrate"

  onMount(async () => {
    const response = await fetch(url)
    const { relays: relayData, hours, minutes } = await response.json()
    relays.set(relayData)
    hoursList.set(hours.list)
    minutesList.set(minutes.list)
    hoursDict.set(hours.dict)
    minutesDict.set(minutes.dict)
  })
</script>

<style>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
  }
</style>

<svelte:head>
  <title>Pi Time</title>
</svelte:head>

<section>
  <RelayList />
</section>
<RelayDetail />
