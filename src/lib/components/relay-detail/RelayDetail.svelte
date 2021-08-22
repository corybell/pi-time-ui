<script>
  import Drawer from "$lib/components/drawer/Drawer.svelte"
  import { relayDetailId, relays } from "$lib/store/store"

  let _relay
  let isOpen = false
  
  relayDetailId.subscribe(id => {
    if (id) {
      _relay = $relays.find(r => r.id === id)
    } else {
      _relay = undefined
    }
    isOpen = Boolean(_relay)
  })

  function handleCancel() {
    relayDetailId.set(undefined)
  }

  function handleSave() {
    relayDetailId.set(undefined)
  }
</script>

<style>
  
</style>

<Drawer bind:isOpen={isOpen} handleCancel={handleCancel} handleSave={handleSave}>
  <h2>{_relay.id}</h2>
  <div>{_relay.name}</div>
  <div>{_relay.timer?.hr}</div>
  <div>{_relay.timer?.min}</div>
</Drawer>