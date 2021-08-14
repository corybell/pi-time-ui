<script context="module">
  export const prerender = false
</script>

<svelte:head>
  <title>Pi Time</title>
</svelte:head>

<script>
	import { onMount } from 'svelte';

  const url = 'http://localhost:5000/relay'
	let photos = [];

	onMount(async () => {
		const res = await fetch(url);
		photos = await res.json();
    console.log(photos)
	});
</script>

<section>
  <h1>This is the home page</h1>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
  }
</style>
