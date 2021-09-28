<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				status: status
			}
		};
	}
</script>

<script>
	export let status;
</script>

  <svelte:head>
    <title>Error | Minefly</title>
  </svelte:head>
{#if status == 404}
<p></p>
{:else if status == 401}
  <p></p>
{/if}
