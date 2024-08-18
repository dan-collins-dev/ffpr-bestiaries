<script>
	import {createEventDispatcher} from "svelte"
	const dispatch = createEventDispatcher();

	export let index = 0
	export let monsterId = '000';
	export let name = 'Monster Name';
	export let encountered = false;

	const entryUpdated = () => {
		dispatch("entryUpdate", {
			idx: index 
		})
	}
</script>

<div>
	<input on:click={entryUpdated} bind:checked={encountered} type="checkbox" />
	<p>{monsterId}</p>
	<p>{name}</p>
</div>

<style>
	div {
		display: flex;
		flex-direction: row;
		border: 1px solid black;
		margin: 0.5rem 1rem;
		padding: 0.25rem 0.25rem;
	}

	input {
		padding: 0 4rem;
	}

	p {
		padding: 0 0.25rem;
	}
</style>
