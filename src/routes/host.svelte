<script context="module">
  export const prerender = false
</script>

<script>
  import Button from "$lib/components/button/Button.svelte"
  import EditHostDrawer from "$lib/modules/host/EditHostDrawer.svelte"
  import EditActiveHostDrawer from "$lib/modules/host/EditActiveHostDrawer.svelte"
  import HostCard from "$lib/modules/host/HostCard.svelte"
  import { 
    editingHostIndex, 
    activeHostIndex, 
    isEditActiveDrawerOpen,
    hostStore0,
    hostStore1,
    hostStore2,
    hostStore3
  } from "$lib/store/hostStore"
  
  const makeEditClickHandler = (i) => () => {
    editingHostIndex.set(i)
  }

  function handleEditActiveHostClick() {
    isEditActiveDrawerOpen.set(true)
  }
</script>

<style>
  .container {
    display: flex;
    padding: 2rem;
  }
</style>

<svelte:head>
  <title>Pi Time</title>
</svelte:head>

<section>
  <div class="container">
    <h1>Hosts</h1>
    <Button 
      variant="primary" 
      text="Edit active host" 
      handleClick={handleEditActiveHostClick} 
    />
  </div>
  <div class="host-list">
    <HostCard 
      hostName={$hostStore0} 
      handleClick={makeEditClickHandler(0)}
      isActive={$activeHostIndex === 0}
    />
    <HostCard 
      hostName={$hostStore1} 
      handleClick={makeEditClickHandler(1)}
      isActive={$activeHostIndex === 1}
    />
    <HostCard 
      hostName={$hostStore2} 
      handleClick={makeEditClickHandler(2)}
      isActive={$activeHostIndex === 2}
    />
    <HostCard 
      hostName={$hostStore3} 
      handleClick={makeEditClickHandler(3)}
      isActive={$activeHostIndex === 3}
    />
  </div>
</section>
<EditHostDrawer />
<EditActiveHostDrawer />
