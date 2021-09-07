<script>
  import Drawer from "$lib/components/drawer/Drawer.svelte"
  import Textbox from "$lib/components/textbox/Textbox.svelte"
  import Button from "$lib/components/button/Button.svelte"
  import ButtonGroup from "$lib/components/button/ButtonGroup.svelte"
  import {
    editingHostIndex,
    getHostStore,
    setHostStore,
  } from "$lib/store/hostStore"

  let hostValue
  $: hostValue = getHostStore($editingHostIndex)

  function closeDrawer() {
    editingHostIndex.set(undefined)
  }

  function handleSave() {
    setHostStore($editingHostIndex, hostValue)
    closeDrawer()
  }
</script>

<style>
  .content {
    padding: 1rem;
  }
</style>

<Drawer bind:isOpen={$editingHostIndex} handleCancel={closeDrawer}>
  <div class="content">
    <h2 class="marginBottom__2">Edit Host</h2>
    <Textbox bind:value={hostValue} label="Host" gutterBottom />
    <ButtonGroup>
      <Button
        slot="left"
        text="Cancel"
        variant="secondary"
        handleClick={closeDrawer}
      />
      <Button
        slot="right"
        text="Save"
        variant="primary"
        handleClick={handleSave}
      />
    </ButtonGroup>
  </div>
</Drawer>
