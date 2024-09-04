<script>
	import { ff1Bestiary, ff1Chests } from '$store';

	const clearAllData = () => {
		ff1Bestiary.reset();
		ff1Chests.reset();
	};
</script>

<button on:click={clearAllData}>Reset All Data</button>
