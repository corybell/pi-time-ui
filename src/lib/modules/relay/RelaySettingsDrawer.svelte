<script>
  import Drawer from "$lib/components/drawer/Drawer.svelte"
  import Textbox from "$lib/components/textbox/Textbox.svelte"
  import Dropdown from "$lib/components/dropdown/Dropdown.svelte"
  import Button from "$lib/components/button/Button.svelte"
  import ButtonGroup from "$lib/components/button/ButtonGroup.svelte"
  import {
    relayDetailId,
    activeRelays,
    hoursList,
    minutesList,
  } from "$lib/store/store"
  import { activeHostName } from "$lib/store/hostStore"
  import { putRelay } from "$lib/services/api"

  let isOpen = false
  let idValue, nameValue, hourValue, minuteValue
  let nameEl

  relayDetailId.subscribe((id) => {
    if (!id) {
      isOpen = false
      return
    }

    isOpen = true
    const relay = $activeRelays.find((r) => r.id === id)
    idValue = relay?.id
    nameValue = relay?.name
    hourValue = relay?.timer?.hr
    minuteValue = relay?.timer?.min
  })

  function closeDrawer() {
    relayDetailId.set(undefined)
  }

  function handleClear() {
    nameValue = ""
    hourValue = minuteValue = undefined
    nameEl.focus()
  }

  async function handleSave() {
    // call api
    const data = {
      name: nameValue,
      timer: {
        hr: hourValue,
        min: minuteValue,
      },
    }
    const response = await putRelay($activeHostName, idValue, data)
    // handle response errors
    if (response.status !== 200) {
      console.log("putRelay failed")
      return
    }
    // update store with new relay data
    const newRelays = $activeRelays.map((r) => {
      return r.id === idValue ? { id: idValue, ...data } : r
    })
    activeRelays.set(newRelays)

    closeDrawer()
  }
</script>

<style>
  .headerContainer {
    display: flex;
  }
  .content {
    padding: 1rem;
  }
</style>

<Drawer bind:isOpen handleCancel={closeDrawer}>
  <div class="content">
    <h1 class="marginBottom__2">Relay Settings</h1>
    <div class="headerContainer marginBottom__2">
      <h2 class="">{idValue}</h2>
      <Button text="Clear data" variant="link" handleClick={handleClear} />
    </div>
    <Textbox
      bind:value={nameValue}
      bind:el={nameEl}
      label="Name"
      gutterBottom
    />
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
