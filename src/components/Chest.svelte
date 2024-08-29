<script>
	import { ff1Chests } from '$store';

	export let data;
	export let index = 0;
</script>

<div>
	<input on:click={ff1Chests.editEntry(index)} bind:checked={data.opened} type="checkbox" />
	<p>{data.id}</p>
	<p>{data.contents}</p>
	<!-- <p>Locked: {data.locked}</p> -->
	<!-- <p>Opened: {data.opened}</p> -->
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
