<script context="module">
  export const prerender = false
</script>

<script>
  import { onMount } from "svelte"
  import RelaySettingsDrawer from "$lib/modules/relay/RelaySettingsDrawer.svelte"
  import PageTitle from "$lib/components/page-title/PageTitle.svelte"
  import Spinner from "$lib/components/spinner/Spinner.svelte"
  import ActiveRelayCard from "$lib/modules/relay/ActiveRelayCard.svelte"
  import {
    activeRelays,
    hoursList,
    minutesList,
    hoursDict,
    minutesDict,
  } from "$lib/store/store.js"
  import { activeHostName } from "$lib/store/hostStore"
  import { hydrate } from "$lib/services/api"

  onMount(async () => {
    const response = await hydrate($activeHostName)
    if (!response) {
      console.log("hydrate failed")
      return
    }
    const { relays, hours, minutes } = response
    activeRelays.set(relays)
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
  ul {
    width: 100%;
    margin-top: 1rem;
    padding: 0 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>

<svelte:head>
  <title>Pi Time</title>
</svelte:head>

<section>
  <PageTitle title="Active Relays" />
  <Spinner loading={!$activeRelays.length} />
  <ul class="relay-list">
    {#each $activeRelays as relay}
      <ActiveRelayCard {relay} />
    {/each}
  </ul>
</section>
<RelaySettingsDrawer />
