<script>
	import { ff1Chests } from '$store';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let data;
	export let index = 0;

	const showDetails = () => {
		dispatch('showChestDetails', {
			idx: index
		});
	};
</script>

<div>
	<input on:click={ff1Chests.editEntry(index)} bind:checked={data.opened} type="checkbox" />
	<p>{data.id}</p>
	<p>{data.contents}</p>
	<button on:click={showDetails}>Details</button>
</div>

<style>
	div {
		display: flex;
		flex-direction: row;
		border: 1px solid black;
		margin: 0.5rem 1rem;
		padding: 0.25rem 0.25rem;
		align-items: center;
	}

	input {
		padding: 0 4rem;
	}

	p {
		padding: 0 0.25rem;
	}

	button {
		margin-left: auto;
	}
</style>
