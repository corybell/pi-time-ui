<script>
  export let value
  export let label
  export let gutterBottom

  const id = `text-input-${label}`
</script>

<label for={id}>{label}</label>
<input
  type="text" 
  id={id} 
  bind:value={value} 
  class={gutterBottom ? 'marginBottom__2': ''}
>
