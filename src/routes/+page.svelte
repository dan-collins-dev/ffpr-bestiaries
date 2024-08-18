<script>
	import '../app.css';
	import EncounterTotal from '../components/EncounterTotal.svelte';
	import Entry from '../components/Entry.svelte';
	import bestiary from '../data/ff1/bestiary.json';
	let large = '.large';
	let small = '.small';
</script>

<p class:large>Final Fantasy I</p>
<p class:small>Bestiary</p>
<EncounterTotal />
<div>
	{#each bestiary as entry (entry.id)}
		<Entry monsterId={entry.id} name={entry.name} encountered={entry.encountered} />
	{/each}
</div>

<style>
	p {
		background-color: hsl(237, 70%, 20%);
		color: white;
		text-align: center;
		font-weight: bolder;
		font-size: 2rem;
	}

	.large {
		font-weight: bolder;
		font-size: 2rem;
	}

	.small {
		font-size: 1.5rem;
	}
</style>
