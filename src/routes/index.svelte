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
  <div class="relays">
    {#each relays as relay}
      <div class="relay">
        <h4>{`${relay.id} ${relay.name}`}</h4>
        {#if relay.timer}
	        <div>HR: {relay.timer.hr}</div>
          <div>MIN: {relay.timer.min}</div>
        {/if}
      </div>
    {:else}
      <!-- this block renders when photos.length === 0 -->
      <p>loading...</p>
    {/each}
  </div>
</section>

<style>
  section {
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1; */
  }
  .relays {
    width: 100%;
		display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .relay {
    flex: 1 1;
    min-width: 280px;
    min-height: 200px;
    padding: 1rem;
    margin: 1rem;
    background-color: var(--color-white);
  }
</style>
