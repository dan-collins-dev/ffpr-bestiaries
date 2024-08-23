<script>
	export let encounteredMonsters = 0;
	let totalMonsters = 128;
	$: progress = Math.floor((encounteredMonsters / totalMonsters) * 100);
</script>

<section>
	<p class="title">Encounter Progress</p>
	<p>{progress}%</p>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: hsl(240, 63%, 51%);
		color: white;
		padding: 0.5rem;
	}

	p {
		font-size: 1.5rem;
	}
</style>
