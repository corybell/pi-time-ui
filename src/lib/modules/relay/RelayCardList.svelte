<script>
  import RelayCard from "$lib/modules/relay/RelayCard.svelte"
  import Spinner from "$lib/components/spinner/Spinner.svelte"
  import { relays } from "$lib/store/store"

  let _relays = []

  relays.subscribe((value) => {
    _relays = value
  })
</script>

<style>
  .relay-list {
    width: 100%;
    margin-top: 1rem;
    padding: 0 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>

<div class="relay-list">
  {#each _relays as relay}
    <RelayCard {relay} />
  {:else}
    <!-- this block renders when photos.length === 0 -->
    <Spinner />
  {/each}
</div>
