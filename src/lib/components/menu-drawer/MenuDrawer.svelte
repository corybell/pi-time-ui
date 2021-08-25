<script>
    import Drawer from "$lib/components/drawer/Drawer.svelte"
    import Textbox from "$lib/components/textbox/Textbox.svelte"
    import { isSettingsDrawerOpen, hostStore } from "$lib/store/store"

    let host = $hostStore

    function closeDrawer() {
      isSettingsDrawerOpen.set(false)
      host = $hostStore
    }
  
    function handleSave() {
      hostStore.set(host) 
      closeDrawer()
    }
  </script>
  
  <Drawer bind:isOpen={$isSettingsDrawerOpen} handleCancel={closeDrawer} {handleSave}>
    <h2 class="marginBottom__2">Settings</h2>
    <Textbox bind:value={host} label="Host" />
  </Drawer>