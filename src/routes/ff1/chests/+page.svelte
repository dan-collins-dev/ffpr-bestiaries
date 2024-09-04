<script>
	import { ff1Chests } from '$store';
	import Chest from '$components/Chest.svelte';
	import ChestTotal from '$components/ChestTotal.svelte';
</script>


<ChestTotal />
{#each $ff1Chests as entry, idx}
	<Chest data={entry} index={idx} />
{/each}
