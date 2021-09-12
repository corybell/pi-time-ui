<script context="module">
  export const prerender = false
</script>

<script>
  import { onMount } from "svelte"
  import PageTitle from "$lib/components/page-title/PageTitle.svelte"
  import Spinner from "$lib/components/spinner/Spinner.svelte"
  import RelayListItem from "$lib/modules/relay/RelayListItem.svelte"
  import { getRelays } from "$lib/services/api"
  import { activeHostName } from "$lib/store/hostStore"

  let relays = []

  onMount(async () => {
    const response = await getRelays($activeHostName)
    if (response?.status !== 200) {
      console.log("getRelays failed")
      return
    }
    relays = await response.json()
  })

  function handleClick (active) {
    console.log(active)
  }
</script>

<style>
  
</style>

<svelte:head>
  <title>Pi Time</title>
</svelte:head>

<section>
  <PageTitle title="Relays" />
  <Spinner loading={!relays.length} />
  <ul>
    {#each relays as relay}
      <RelayListItem 
        id={relay.id}
        active={relay.active}
        handleClick={handleClick} 
      />
    {/each}
  </ul>
</section>
