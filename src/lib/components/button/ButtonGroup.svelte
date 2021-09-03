  
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
  <slot name="left"></slot>
  <div class="spacer" />
  <slot name="right"></slot>
</div>