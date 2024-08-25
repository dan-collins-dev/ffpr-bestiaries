<script>
	import { onMount } from 'svelte';
	import '../../../app.css';
	import EncounterTotal from '../../../components/EncounterTotal.svelte';
	import Entry from '../../../components/Entry.svelte';
	import bestiary from '../../../data/ff1/bestiary.json';
	let large = '.large';
	let small = '.small';
	let encounteredMonsters;

	// Although the data is in a stringified JSON file,
	// I had to stringify the file still for it to parse.
	let stringifiedBestiary = JSON.stringify(bestiary);
	let bestiaryJSON = JSON.parse(stringifiedBestiary);

	onMount(() => {
		if (localStorage.getItem('entries') === null) {
			localStorage.setItem('entries', stringifiedBestiary);
		} else {
			bestiaryJSON = JSON.parse(localStorage.getItem('entries'));
			updateEncounterTotal();
		}
	});

	const handleEntryUpdate = (e) => {
		bestiaryJSON[e.detail.idx].encountered = !bestiaryJSON[e.detail.idx].encountered;
		localStorage.setItem('entries', JSON.stringify(bestiaryJSON));
		updateEncounterTotal();
	};

	const updateEncounterTotal = () => {
		encounteredMonsters = 0;
		bestiaryJSON.forEach((enemy) => {
			if (enemy.encountered === true) {
				encounteredMonsters += 1;
			}
		});
	};
</script>

<p class:large>Final Fantasy I</p>
<p class:small>Bestiary</p>

<EncounterTotal {encounteredMonsters} />
{#each bestiaryJSON as entry, idx (entry.id)}
	<Entry
		on:entryUpdate={handleEntryUpdate}
		index={idx}
		monsterId={entry.id}
		name={entry.name}
		encountered={entry.encountered}
	/>
{/each}

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
