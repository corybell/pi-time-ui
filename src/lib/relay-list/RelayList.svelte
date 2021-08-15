<script>
  import RelayCard from "$lib/relay-card/RelayCard.svelte"
  import Spinner from "$lib/spinner/Spinner.svelte"

  export let relays = []
</script>

<style>
  .relay-list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>

<div class="relay-list">
  {#each relays as relay}
    <RelayCard relay={relay} />
  {:else}
    <!-- this block renders when photos.length === 0 -->
    <Spinner />
  {/each}
</div>
