<script context="module">
  export const prerender = false
</script>

<script>
  import PageTitle from "$lib/components/page-title/PageTitle.svelte"
  import Button from "$lib/components/button/Button.svelte"
  import EditHostDrawer from "$lib/modules/host/EditHostDrawer.svelte"
  import AddHostDrawer from "$lib/modules/host/AddHostDrawer.svelte"
  import { isHostDrawerOpen, hostStore } from "$lib/store/hostStore"

  function handleEditClick() {
    
  }

  function handleAddClick() {
    isHostDrawerOpen.set(true)
  }
</script>

<style>
  .host {
    display: flex;
    align-items: center;
    padding: 1rem;
    margin: 1rem 2rem;
    background-color: var(--color-white);
  }

  .spacer {
    flex-grow: 1;
  }
</style>

<svelte:head>
  <title>Pi Time</title>
</svelte:head>

<section>
  <PageTitle title="Host" />
  <div class="host">
    <h4>{$hostStore}</h4>
    <div class="spacer" />
    <Button variant="secondary" text="Edit" handleClick={handleEditClick} />
  </div>
  <div class="host">
    <h4>New host...</h4>
    <div class="spacer" />
    <Button variant="secondary" text="Add" handleClick={handleAddClick} />
  </div>
</section>
<EditHostDrawer />
<AddHostDrawer />
