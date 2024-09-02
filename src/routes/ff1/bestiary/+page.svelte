<script>
	import { ff1Bestiary } from '$store';
	import EncounterTotal from '$components/EncounterTotal.svelte';
	import Entry from '$components/Entry.svelte';
	import QuickNav from '$components/QuickNav.svelte';
	import MonsterDataDisplay from '$components/MonsterDataDisplay.svelte';

	let currentMonster = 0
	let openModal = false

	const updateMonsterDetails = (e) => {
		currentMonster = e.detail.idx
		openModal = true
	}

	const handleModalClose = (e) => {
		openModal = false
	}

</script>

<QuickNav />
<EncounterTotal />
{#each $ff1Bestiary as entry, idx}
	<Entry on:showMonsterDetails={updateMonsterDetails} data={entry} index={idx} />
{/each}
<MonsterDataDisplay on:closeModal={handleModalClose} data={$ff1Bestiary} index={currentMonster} opened={openModal}/>