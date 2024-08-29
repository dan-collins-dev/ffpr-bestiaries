<script>
	import { ff1Bestiary } from '$store';
	import EncounterTotal from '$components/EncounterTotal.svelte';
	import Entry from '$components/Entry.svelte';
</script>

<EncounterTotal />
{#each $ff1Bestiary as entry, idx}
	<Entry data={entry} index={idx} />
{/each}
