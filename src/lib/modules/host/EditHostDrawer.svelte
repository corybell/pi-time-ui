<script>
  import Drawer from "$lib/components/drawer/Drawer.svelte"
  import Textbox from "$lib/components/textbox/Textbox.svelte"
  import Button from "$lib/components/button/Button.svelte"
  import ButtonGroup from "$lib/components/button/ButtonGroup.svelte"
  import {
    editingHostIndex,
    getHostStore,
    setHostStore,
    getHostKey,
    setHostKey,
    isEditHostDrawerOpen,
  } from "$lib/store/hostStore"
  import { authorize } from "$lib/services/auth"

  let hostValue
  $: hostValue = getHostStore($editingHostIndex)

  let hostKey
  $: hostKey = getHostKey($editingHostIndex)

  function closeDrawer() {
    editingHostIndex.set(undefined)
  }

  function handleSave() {
    setHostStore($editingHostIndex, hostValue)
    setHostKey($editingHostIndex, hostKey)

    if (authorize(hostKey)) {
      closeDrawer()
      return
    }

    console.log('Auth failed')
  }
</script>

<style>
  .content {
    padding: 1rem;
  }
</style>

<Drawer isOpen={$isEditHostDrawerOpen} handleCancel={closeDrawer}>
  <div class="content">
    <h2 class="marginBottom__2">Edit Host</h2>
    <Textbox bind:value={hostValue} label="Host" gutterBottom />
    <Textbox bind:value={hostKey} label="API Key" gutterBottom />
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
