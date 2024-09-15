<script>
	import { ff1Chests } from '$store';
	import Chest from '$components/Chest.svelte';
	import ChestTotal from '$components/ChestTotal.svelte';
	import ChestDataDisplay from '$components/ChestDataDisplay.svelte';

	let currentChest = 0;
	let openModal = false;

	const updateChestDetails = (e) => {
		currentChest = e.detail.idx;
		openModal = true;
	};

	const handleModalClose = (e) => {
		openModal = e.detail.isClosed;
	};
</script>

<ChestTotal />
{#each $ff1Chests as entry, idx}
	<Chest on:showChestDetails={updateChestDetails} data={entry} index={idx} />
{/each}
<ChestDataDisplay
	on:closeModal={handleModalClose}
	data={$ff1Chests}
	index={currentChest}
	opened={openModal}
/>
