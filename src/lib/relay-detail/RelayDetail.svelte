<script>
  let relay
</script>

<style>
  .relay-detail {
    background-color: var(--color-white);
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 34vw;
  }
</style>

{#if relay}
  <div class="relay-detail">
    <div>{relay.id}</div>
    <div>{relay.name}</div>
  </div>
{/if}