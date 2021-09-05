<script>
    import Drawer from "$lib/components/drawer/Drawer.svelte"
    import Textbox from "$lib/components/textbox/Textbox.svelte"
    import Button from '$lib/components/button/Button.svelte'
    import ButtonGroup from "$lib/components/button/ButtonGroup.svelte";
    import { isSettingsDrawerOpen, hostStore } from "$lib/store/store"

    let host = $hostStore

    function closeDrawer() {
      isSettingsDrawerOpen.set(false)
      host = $hostStore
    }
  
    function handleSave() {
      hostStore.set(host) 
      closeDrawer()
      location.reload()
    }
  </script>
  
  <Drawer bind:isOpen={$isSettingsDrawerOpen} handleCancel={closeDrawer} {handleSave}>
    <h2 class="marginBottom__2">Settings</h2>
    <Textbox bind:value={host} label="Host" gutterBottom />
    <ButtonGroup>
      <Button slot="left" text="Cancel" variant="secondary" handleClick={closeDrawer} />
      <Button slot="right" text="Save" variant="primary" handleClick={handleSave} />
    </ButtonGroup>
  </Drawer>