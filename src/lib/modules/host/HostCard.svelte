<script>
  import Button from "$lib/components/button/Button.svelte"
  import Badge from "$lib/components/badge/Badge.svelte"

  export let hostName
  export let isActive
  export let handleClick
</script>

<style>
  .host {
    padding: 1rem;
    margin: 1rem 2rem;
    background-color: var(--color-white);
  }
  .hostName {
    display: flex;
    margin-bottom: 0.5rem;
    align-items: center;
  }

  .spacer {
    flex-grow: 1;
  }
</style>

<div class="host">
  <div class="hostName">
    <h4>{hostName}</h4>
    <div class="spacer" />
    <Button variant="link" text="Edit" {handleClick} />
  </div>
  {#if isActive}
    <Badge text="ACTIVE" />
  {/if}
</div>
