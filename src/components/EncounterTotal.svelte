<script>
	import { ff1Bestiary } from '$store';

	$: progress = Math.floor((getEncounteredMonsters() / $ff1Bestiary.length) * 100);

	$: getEncounteredMonsters = () => {
		let count = 0;
		$ff1Bestiary.forEach((monster) => {
			if (monster.encountered === true) count += 1;
		});

		return count;
	};
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
		background-color: blue;
		color: white;
		padding: 0.5rem;
	}

	p {
		font-size: 1.5rem;
	}
</style>
