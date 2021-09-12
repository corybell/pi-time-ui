<script>
  import Button from "$lib/components/button/Button.svelte"
  import Badge from "$lib/components/badge/Badge.svelte"

  export let id
  export let active
  export let handleClick
</script>

<style>
  li {
    display: flex;
    padding: 1rem;
    margin: 1rem 2rem;
    background-color: var(--color-white);
  }
  .spacer {
    flex-grow: 1;
  }
  h4 {
    width: unset;
    margin-right: 1rem;
  }
</style>

<li>
  <h4>{id}</h4>
  {#if active}
    <Badge text="ACTIVE" />
  {/if}
  <div class="spacer" />
  <Button 
    variant="link" 
    text={active ? "Deactivate" : "Activate"} 
    handleClick={() => handleClick(active)} 
  />
</li>
