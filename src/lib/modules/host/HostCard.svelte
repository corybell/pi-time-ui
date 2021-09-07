<script>
  import Button from "$lib/components/button/Button.svelte"

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

  .active {
    color: var(--color-white);
    background-color: var(--color-primary);
    font-weight: var(--font-weight-black);
    font-size: 12px;
    padding: 0.5rem;
    width: fit-content;
    border-radius: 500px;
  }
</style>

<div class="host">
  <div class="hostName">
    <h4>{hostName}</h4>
    <div class="spacer" />
    <Button variant="link" text="Edit" {handleClick} />
  </div>
  {#if isActive}
    <div class="active">ACTIVE</div>
  {/if}
</div>
