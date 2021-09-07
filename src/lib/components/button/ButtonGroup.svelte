<style>
  .btn-container {
    display: flex;
  }
  .spacer {
    flex: 1;
    max-width: 1rem;
  }
</style>

<div class="btn-container">
  <slot name="left" />
  <div class="spacer" />
  <slot name="right" />
</div>
