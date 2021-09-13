<script context="module">
  export const prerender = false
</script>

<script>
  import { onMount } from "svelte"
  import PageTitle from "$lib/components/page-title/PageTitle.svelte"
  import Spinner from "$lib/components/spinner/Spinner.svelte"
  import SupportedRelayCard from "$lib/modules/relay/SupportedRelayCard.svelte"
  import { getRelays } from "$lib/services/api"
  import { activeHostName } from "$lib/store/hostStore"
  import { supportedRelays } from "$lib/store/store"
  import { putRelay }  from "$lib/services/api"

  onMount(async () => {
    const response = await getRelays($activeHostName)
    if (response?.status !== 200) {
      console.log("getRelays failed")
      return
    }
    const relays = await response.json()
    supportedRelays.set(relays)
  })

  async function toggleActive(relay) {
    const newRelay = {
      ...relay,
      active: !relay.active,
    }
    
    const response = await putRelay($activeHostName, relay.id, newRelay)
    
    if (response?.status !== 200) {
      console.log("putRelay failed")
      return
    }

    const newStore = $supportedRelays.map(r => r.id === relay.id ? newRelay : r)
    supportedRelays.set(newStore)
  }
</script>

<svelte:head>
  <title>Pi Time</title>
</svelte:head>

<section>
  <PageTitle title="Relays" />
  <Spinner loading={!$supportedRelays.length} />
  <ul>
    {#each $supportedRelays as relay}
      <SupportedRelayCard relay={relay} {toggleActive} />
    {/each}
  </ul>
</section>
