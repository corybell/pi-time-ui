<script context="module">
  export const prerender = false
</script>

<script>
  import PageTitle from "$lib/components/page-title/PageTitle.svelte"
</script>

<style>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
  }
</style>

<svelte:head>
  <title>Pi Time</title>
</svelte:head>

<section>
  <PageTitle title="Relays" />
</section>