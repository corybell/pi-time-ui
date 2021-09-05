<script context="module">
  export const prerender = false
</script>

<script>
  import { onMount } from "svelte"
  import RelayCardList from "$lib/modules/relay/RelayCardList.svelte"
  import RelaySettingsDrawer from "$lib/modules/relay/RelaySettingsDrawer.svelte"
  import PageTitle from "$lib/components/page-title/PageTitle.svelte"
  import {
    relays,
    hoursList,
    minutesList,
    hoursDict,
    minutesDict,
    hostStore,
  } from "$lib/store/store.js"
  import { hydrate } from "$lib/services/api"

  onMount(async () => {
    const response = await hydrate($hostStore)
    if (response?.status !== 200) {
      console.log('hydrate failed')
      return
    }
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
  <PageTitle title="Active Relays" />
  <RelayCardList />
</section>
<RelaySettingsDrawer />
