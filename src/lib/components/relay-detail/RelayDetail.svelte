<script>
  import Drawer from "$lib/components/drawer/Drawer.svelte"
  import Textbox from "$lib/components/textbox/Textbox.svelte"
  import Dropdown from "$lib/components/dropdown/Dropdown.svelte"
  import Button from '$lib/components/button/Button.svelte'
  import ButtonGroup from "$lib/components/button/ButtonGroup.svelte";
  import {
    relayDetailId,
    relays,
    hoursList,
    minutesList,
    hostStore,
  } from "$lib/store/store"
  import { putRelay } from "$lib/services/api"

  let isOpen = false
  let idValue, nameValue, hourValue, minuteValue

  relayDetailId.subscribe((id) => {
    if (!id) {
      isOpen = false
      return
    }

    isOpen = true
    const relay = $relays.find((r) => r.id === id)
    idValue = relay?.id
    nameValue = relay?.name
    hourValue = relay?.timer?.hr
    minuteValue = relay?.timer?.min
  })

  function closeDrawer() {
    relayDetailId.set(undefined)
  }

  async function handleSave() {
    // call api
    const data = {
      name: nameValue,
      timer: {
        hr: hourValue,
        min: minuteValue
      }
    }
    const response = await putRelay($hostStore, idValue, data)
    // handle response errors
    if (response.status !== 200) {
      console.log('putRelay failed')
      return
    }
    // update store with new relay data
    const newRelays = $relays.map((r) => {
      return r.id === idValue ? { id: idValue, ...data } : r
    })
    relays.set(newRelays)
    
    closeDrawer()
  }
</script>

<Drawer bind:isOpen handleCancel={closeDrawer} {handleSave}>
  <h2 class="marginBottom__2">{idValue}</h2>
  <Textbox bind:value={nameValue} label="Name" gutterBottom />
  <Dropdown
    bind:value={hourValue}
    options={$hoursList}
    label="Timer Hour Schedule"
    gutterBottom
  />
  <Dropdown
    bind:value={minuteValue}
    options={$minutesList}
    label="Timer Minute Schedule"
    gutterBottom
  />
  <ButtonGroup>
    <Button slot="left" text="Cancel" variant="secondary" handleClick={closeDrawer} />
    <Button slot="right" text="Save" variant="primary" handleClick={handleSave} />
  </ButtonGroup>
</Drawer>
