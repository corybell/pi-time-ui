<script>
  import Relay from "$lib/relay/Relay.svelte"
  import Spinner from "$lib/spinner/Spinner.svelte"

  export let relays = []
</script>

<style>
  .relays {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>

<div class="relays">
  {#each relays as relay}
    <Relay relay={relay} />
  {:else}
    <!-- this block renders when photos.length === 0 -->
    <Spinner />
  {/each}
</div>
