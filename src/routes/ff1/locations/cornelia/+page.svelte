<script>
	import InfoDropdown from '$components/InfoDropdown.svelte';
</script>

<h1>Cornelia</h1>
<div class="image-container">
	<img
		class="overworld"
		src="https://lh3.googleusercontent.com/d/112Xo92x_bkieQSHszv2zbjf0Mq6CJW6z"
		alt="Overworld Map of Cornelia"
	/>
</div>

<InfoDropdown
	type="worldmap"
	src={'https://lh3.googleusercontent.com/d/10cEdJ9sq6SwxZCwDly70PA_ZUeB-iqH4'}
	alt={'Cornelia on World Map'}
/>
<InfoDropdown
	type="townmap"
	src={'https://lh3.googleusercontent.com/d/10vwsLOUlFkDC2HTbtMz6sLpdmcmKNiCV'}
	alt={'Town Map of Cornelia'}
/>

<style>
	h1 {
		text-align: center;
	}

	.image-container {
		margin: 0.5rem;
		display: flex;
	}

	.overworld {
		max-width: 100%;
	}
</style>
