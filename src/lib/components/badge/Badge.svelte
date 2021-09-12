<script>
  export let text
</script>

<style>
  .badge {
    color: var(--color-white);
    background-color: var(--color-primary);
    font-weight: var(--font-weight-black);
    font-size: 12px;
    padding: 0.5rem;
    width: fit-content;
    border-radius: 500px;
  }
</style>

<div class="badge">{text}</div>