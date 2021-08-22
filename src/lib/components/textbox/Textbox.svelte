<script>
  export let value
  export let label
  export let gutterBottom
</script>

<label for="standard-text-input">{label}</label>
<input
  type="text" 
  id="standard-text-input" 
  bind:value={value} 
  class={gutterBottom ? 'marginBottom__2': ''}
>
