<script>
	import { ff1Chests } from '$store';
	import Chest from '$components/Chest.svelte';
	import ChestTotal from '$components/ChestTotal.svelte';
	import QuickNav from '$components/QuickNav.svelte';
</script>

<QuickNav />
<ChestTotal />
{#each $ff1Chests as entry, idx}
	<Chest data={entry} index={idx} />
{/each}
