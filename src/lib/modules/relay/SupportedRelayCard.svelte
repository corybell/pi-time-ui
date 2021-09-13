<script>
  import Button from "$lib/components/button/Button.svelte"
  import Badge from "$lib/components/badge/Badge.svelte"
  import SpinnerIcon from "$lib/components/icon/SpinnerIcon.svelte"

  export let relay
  export let toggleActive
  let loading = false

  async function handleClick () {
    loading = true
    
    await toggleActive(relay)

    loading = false
  }
</script>

<style>
  li {
    height: 64px;
    display: flex;
    align-items: center;
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
  <h4>{relay.id}</h4>
  {#if relay.active}
    <Badge text="ACTIVE" />
  {/if}
  <div class="spacer" />
  {#if loading}
    <SpinnerIcon size={20} />
  {:else}
    <Button 
      variant="link" 
      text={relay.active ? "Deactivate" : "Activate"} 
      {handleClick} 
    />
  {/if}
</li>
