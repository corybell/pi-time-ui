<script context="module">
  export const prerender = false
</script>

<script>
  import { onMount } from "svelte"
  import PageTitle from "$lib/components/page-title/PageTitle.svelte"
  import Button from "$lib/components/button/Button.svelte"
  import Spinner from "$lib/components/spinner/Spinner.svelte"
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
    console.log(relays)
  })

  function handleClick () {

  }
</script>

<style>
  li {
    display: flex;
    padding: 1rem;
    margin: 1rem 2rem;
    background-color: var(--color-white);
  }
  .spacer {
    flex-grow: 1;
  }
  .active {
    color: var(--color-white);
    background-color: var(--color-primary);
    font-weight: var(--font-weight-black);
    font-size: 12px;
    padding: 0.5rem;
    width: fit-content;
    border-radius: 500px;
  }
  h4 {
    width: unset;
    margin-right: 1rem;
  }
</style>

<svelte:head>
  <title>Pi Time</title>
</svelte:head>

<section>
  <PageTitle title="Relays" />
  <ul class="relay-list">
    {#each relays as relay}
      <li>
        <h4>{relay.id}</h4>
        {#if relay.active}
          <div class="active">ACTIVE</div>
        {/if}
        <div class="spacer" />
        <Button variant="link" text={relay.active ? "Deactivate" : "Activate"} {handleClick} />
      </li>
    {:else}
      <Spinner />
    {/each}
  </ul>
</section>
