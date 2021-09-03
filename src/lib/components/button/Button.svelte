<script>
  export let handleClick
  export let text
  export let variant
  const className = variant === 'primary' ? 'btn-primary' : 'btn-secondary'
</script>
  
<style>
  .btn-primary {
    color: #fff;
    background-color: var(--color-primary);
  }
  .btn-secondary {
    color: var(--color-primary);
    background-color: var(--color-white);
    border: 2px solid var(--color-primary);
  }
</style>

<button class={className} on:click={handleClick}>{text}</button>
