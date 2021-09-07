<script>
  import Drawer from "$lib/components/drawer/Drawer.svelte"
  import Dropdown from "$lib/components/dropdown/Dropdown.svelte"
  import Button from '$lib/components/button/Button.svelte'
  import ButtonGroup from "$lib/components/button/ButtonGroup.svelte"
  import { 
    hostStore0,
    hostStore1,
    hostStore2,
    hostStore3,
    activeHostIndex, 
    isEditActiveDrawerOpen 
  } from "$lib/store/hostStore"

  let hostValue = $activeHostIndex
  let hostOptions
  
  $: hostOptions = [
    { value: 0, label: $hostStore0 },
    { value: 1, label: $hostStore1 },
    { value: 2, label: $hostStore2 },
    { value: 3, label: $hostStore3 },
  ]

  function closeDrawer() {
    isEditActiveDrawerOpen.set(false)
    hostValue = $activeHostIndex
  }

  function handleSave() {
    activeHostIndex.set(hostValue)
    closeDrawer()
  }
</script>

<style>
  .content {
    padding: 1rem;
  }
</style>

<Drawer bind:isOpen={$isEditActiveDrawerOpen} handleCancel={closeDrawer}>
  <div class="content">
    <h2 class="marginBottom__2">Edit Active Host</h2>
    <Dropdown
      bind:value={hostValue}
      options={hostOptions}
      label="Active Host"
      gutterBottom
      blank={false}
    />
    <ButtonGroup>
      <Button slot="left" text="Cancel" variant="secondary" handleClick={closeDrawer} />
      <Button slot="right" text="Save" variant="primary" handleClick={handleSave} />
    </ButtonGroup>
  </div>
</Drawer>