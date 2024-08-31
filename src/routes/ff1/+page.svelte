<script>
	import { ff1Bestiary, ff1Chests } from '$store';

	const clearAllData = () => {
		ff1Bestiary.reset();
		ff1Chests.reset();
	};
</script>

<ul>
	<li><a href="./ff1/bestiary">Bestiary</a></li>
	<li><a href="./ff1/chests">Chest Collection Log</a></li>
</ul>

<button on:click={clearAllData}>Reset All Data</button>
