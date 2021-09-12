<script>
  import RelayCard from "$lib/modules/relay/RelayCard.svelte"
  import Spinner from "$lib/components/spinner/Spinner.svelte"
  import { relays } from "$lib/store/store"
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

<Spinner loading={!$relays.length} />
<div class="relay-list">
  {#each $relays as relay}
    <RelayCard {relay} />
  {/each}
</div>
