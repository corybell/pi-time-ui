<script>
  export let value
  export let label
  export let el = undefined
  export let gutterBottom = false

  const id = `text-input-${label}`
</script>

<label for={id}>{label}</label>
<input
  type="text"
  {id}
  bind:value
  bind:this={el}
  class={gutterBottom ? "marginBottom__2" : ""}
/>
