<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	export let opened = false;
	export let data;
	export let index = 0;
	let dialog;

	$: if (opened === true) {
		dialog.showModal();
	}

	const closeCard = () => {
		opened = false;
		dispatch('closeModal', {
			isClosed: opened
		});
		dialog.close();
	};
</script>

<dialog bind:this={dialog} open={opened} on:close={closeCard}>
	<h1>{data[index].name}</h1>
	<div class="stats-wrapper">
		<!-- <div class="labels">
            <p>Name:</p>
            <p>HP:</p>    
        </div>
    
        <div class="values">
            <p>{data[index].name}</p>
            <p>{data[index].HP}</p>
        </div> -->

		<p>HP:</p>
		<p class="values">{data[index].HP}</p>

		<p>Attack:</p>
		<p class="values">{data[index].attack}</p>

		<p>Defense:</p>
		<p class="values">{data[index].defense}</p>

		<p>Accuracy:</p>
		<p class="values">{data[index].accuracy}</p>

		<p>Agility:</p>
		<p class="values">{data[index].agility}</p>

		<p>Intellect:</p>
		<p class="values">{data[index].intellect}</p>

		<p>Evasion:</p>
		<p class="values">{data[index].evasion}</p>

		<p>Magic Defense:</p>
		<p class="values">{data[index].magicDefense}</p>

		<p>Gil Dropped:</p>
		<p class="values">{data[index].gil}</p>

		<p>XP Awarded:</p>
		<p class="values">{data[index].exp}</p>
	</div>

	<h2>Drops</h2>

	<div class="drops">
		{#each data[index].items as item}
			<p>{item}</p>
		{/each}
	</div>

	<h2>Areas</h2>

	<div class="areas">
		{#each data[index].spawnArea as area}
			<p>{area}</p>
		{/each}
	</div>

	<div class="button-container">
		<button on:click={closeCard}>Close</button>
	</div>
</dialog>

<style>
	dialog::backdrop {
		background-color: rgba(0, 0, 0, 0.7);
	}
	h1 {
		text-align: center;
	}

	h2 {
		text-align: center;
	}

	button {
		width: 50%;
	}

	.button-container {
		display: flex;
		justify-content: center;
	}

	.stats-wrapper {
		/* display: flex; */
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		column-gap: 1rem;
		margin: 1rem 0;
	}

	.labels {
		text-align: left;
		/* display: flex;
        flex-direction: column; */
	}

	.values {
		text-align: right;
		/* display: flex;
        flex-direction: column;
        justify-self: stretch; */
	}

	.drops {
		display: flex;
	}

	.areas {
		display: flex;
		flex-wrap: wrap;
	}

	.areas > p {
		padding: 0.25rem;
		margin: 0.25rem;
		background-color: rgb(42, 207, 141);
	}
</style>
