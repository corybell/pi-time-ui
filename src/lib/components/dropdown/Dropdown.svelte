<!-- https://moderncss.dev/custom-select-styles-with-pure-css/ -->
<script>
  export let value
  export let options
  export let label
  export let gutterBottom = false
  export let blank = true

  const id = `select-${label}`

  const _options = blank ? [{ value: undefined, label: "" }, ...options] : [...options]
</script>

<style>
  .select {
    display: grid;
    grid-template-areas: "select";
    align-items: center;
    width: 100%;
    height: 3rem;
    padding: 0 0.5em 0 0;
    font-size: var(--font-size-form-control);
    cursor: pointer;
    line-height: var(--line-height-normal);
    background-color: var(--color-form-control);
  }

  .select::after {
    justify-self: end;
    content: "";
    width: 0.8em;
    height: 0.5em;
    background-color: #777;
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
  }

  select,
  .select:after {
    grid-area: select;
  }
</style>

<label for={id}>{label}</label>
<div class={`select ${gutterBottom ? "marginBottom__2" : ""}`}>
  <select {id} bind:value>
    {#each _options as hour}
      <option value={hour.value}>
        {hour.label}
      </option>
    {/each}
  </select>
</div>
