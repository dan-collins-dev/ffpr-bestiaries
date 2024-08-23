<script>
	import { onMount } from 'svelte';
	import '../../../app.css';
	import EncounterTotal from '../../../components/EncounterTotal.svelte';
	import Entry from '../../../components/Entry.svelte';
	import bestiary from '../../../data/ff1/bestiary.json';
	let large = '.large';
	let small = '.small';
	let ls = JSON.stringify(bestiary);
	let bJson = JSON.parse(ls)
	let encounteredMonsters = 0
	onMount(() => {
		console.log("Page is in onMount")
		if (localStorage.getItem('entries') === null) {
			localStorage.setItem('entries', ls);
		} else {
			// console.log('Entries found');
			bJson = JSON.parse(localStorage.getItem("entries"))
		}
	});

	const handleEntryUpdate = (e) => {
		console.log(e.detail.idx);
		console.log(bJson[e.detail.idx])
		bJson[e.detail.idx].encountered = !bJson[e.detail.idx].encountered
		localStorage.setItem("entries", JSON.stringify(bJson))
	};

	const say = (e) => {
		console.log(e.target)
	}

	
</script>

<p class:large>Final Fantasy I</p>
<p class:small>Bestiary</p>
<EncounterTotal />
<div>
	{#each bJson as entry, idx (entry.id)}
		<Entry
			on:entryUpdate={handleEntryUpdate}
			index={idx}
			monsterId={entry.id}
			name={entry.name}
			encountered={entry.encountered}
		/>
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