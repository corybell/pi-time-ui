<script>
  export let value
  export let label
  export let gutterBottom = false

  const id = `text-input-${label}`
</script>

<label for={id}>{label}</label>
<input
  type="text"
  {id}
  bind:value
  class={gutterBottom ? "marginBottom__2" : ""}
/>
