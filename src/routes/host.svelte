<script context="module">
  export const prerender = false
</script>

<script>
  import PageTitle from "$lib/components/page-title/PageTitle.svelte"
  import Button from "$lib/components/button/Button.svelte"
  import EditHostDrawer from "$lib/modules/host/EditHostDrawer.svelte"
  import { hostStore, isHostDrawerOpen } from "$lib/store/store"

  function handleEditClick() {
    isHostDrawerOpen.set(true)
  }
</script>

<style>
  .host {
    display: flex;
    align-items: center;
    padding: 1rem;
    margin: 2rem;
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
</section>
<EditHostDrawer />
