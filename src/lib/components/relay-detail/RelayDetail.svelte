<script>
  import { fly, fade } from 'svelte/transition'
  import { relayDetailId, relays } from "$lib/store/store"

  const flyInOut = { x: -500, y: 0, duration: 500 }
  let _relay

  relayDetailId.subscribe(id => {
    if (id) {
      _relay = $relays.find(r => r.id === id)
    } else {
      _relay = undefined
    }
  })

  function handleCancel() {
    relayDetailId.set(undefined)
  }

  function handleSave() {
    relayDetailId.set(undefined)
  }
</script>

<style>
  .relay-detail {
    z-index: 1010;
    background-color: var(--color-white);
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    max-width: 500px;
    padding: 2rem;
  }
  .relay-detail-content {
    padding: 1rem;
  }
  .overlay {
    z-index: 1000;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .overlay:hover {
    cursor: pointer;
  }
  .btn-save {
    color: #fff;
    background-color: var(--color-primary);
  }  
  .btn-cancel {
    color: var(--color-primary);
    background-color: var(--color-white);
    border: 2px solid var(--color-primary);
  }
  .btn-container {
    display: flex;
    justify-content: space-between;
  }
  @media (min-width: 480px) {
    .relay-detail {
      width: 60%;
    }
  }
  @media (min-width: 767px) {
    .relay-detail {
      width: 50%;
    }
  }
</style>

{#if _relay}
  <div
    in:fly="{flyInOut}" 
    out:fly="{flyInOut}" 
    class="relay-detail"
  >
    <div class="relay-detail-content">
      <div>{_relay.id}</div>
      <div>{_relay.name}</div>
    </div>
    <div class="btn-container">
      <button class="btn-cancel" on:click={handleCancel}>Cancel</button>
      <button class="btn-save" on:click={handleSave}>Save</button>
    </div>
  </div>
  <div class="overlay" in:fade out:fade on:click={handleCancel} />
{/if}