<script>
	import { ff1Chests } from '$store';

	$: progress = Math.floor((getOpenedChests() / $ff1Chests.length) * 100);

	$: getOpenedChests = () => {
		let count = 0;
		$ff1Chests.forEach((chest) => {
			if (chest.opened === true) count += 1;
		});

		return count;
	};
</script>

<section>
	<p class="title">Chest Collection Progress</p>
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
