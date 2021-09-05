<script>
  import { hoursDict, minutesDict, relayDetailId } from "$lib/store/store.js"
  export let relay

  const onClick = (id) => (e) => {
    relayDetailId.set(id)
  }
</script>

<style>
  .relay {
    display: block;
    flex: 1 1;
    min-width: 320px;
    min-height: 200px;
    padding: 1rem;
    margin: 1rem;
    background-color: var(--color-white);
  }
  .relay:hover {
    cursor: pointer;
  }
</style>

<div class="relay" on:click={onClick(relay.id)}>
  <h4>{`${relay.id} ${relay.name}`}</h4>
  {#if relay.timer}
    <div>HR: {$hoursDict[relay.timer.hr]}</div>
    <div>MIN: {$minutesDict[relay.timer.min]}</div>
  {/if}
</div>
