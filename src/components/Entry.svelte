<script>
	export let monsterId = '000';
	export let name = 'Monster Name';
	export let encountered = false;
</script>

<div>
	<input bind:checked={encountered} type="checkbox" />
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
