<script>
	import { ff1Bestiary } from '$store';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	export let data;
	export let index = 0;

	const showDetails = () => {
		dispatch('showMonsterDetails', {
			idx: index
		});
	};
</script>

<div>
	<input on:click={ff1Bestiary.editEntry(index)} bind:checked={data.encountered} type="checkbox" />
	<p>{data.id}</p>
	<p>{data.name}</p>
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
