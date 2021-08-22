<script>
  import Drawer from "$lib/components/drawer/Drawer.svelte"
  import Textbox from "$lib/components/textbox/Textbox.svelte"
  import Dropdown from "$lib/components/dropdown/Dropdown.svelte"
  import { relayDetailId, relays, hoursList, minutesList } from "$lib/store/store"

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

<Drawer bind:isOpen={isOpen} handleCancel={handleCancel} handleSave={handleSave}>
  <h2 class="marginBottom__2">{_relay.id}</h2>
  <Textbox value={_relay.name} label="Name" gutterBottom />
  <Dropdown value={_relay.timer?.hr} options={$hoursList} label="Timer Hour Schedule" gutterBottom />
  <Dropdown value={_relay.timer?.min} options={$minutesList} label="Timer Minute Schedule" gutterBottom />
</Drawer>