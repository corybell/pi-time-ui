<script>
  export let handleClick
  export let text
  export let variant

  const variants = ["primary", "secondary", "link"]

  function getClass() {
    if (variant && variants.includes(variant)) {
      return `btn-${variant}`
    }
    return "btn-primary"
  }
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
  .btn-link {
    color: var(--color-primary);
    background-color: transparent;
    padding: 0;
    border-bottom: 2px solid transparent;
    text-transform: none;
    flex: unset;
  }
  .btn-link:hover,
  .btn-link:focus {
    border-bottom: 2px solid var(--color-primary);
  }
</style>

<button class={getClass()} on:click={handleClick}>{text}</button>
