<script>
  export let relay
</script>

<style>
  .relay {
    flex: 1 1;
    min-width: 280px;
    min-height: 200px;
    padding: 1rem;
    margin: 1rem;
    background-color: var(--color-white);
  }
</style>

<div class="relay">
  <h4>{`${relay.id} ${relay.name}`}</h4>
  {#if relay.timer}
    <div>HR: {relay.timer.hr}</div>
    <div>MIN: {relay.timer.min}</div>
  {/if}
</div>