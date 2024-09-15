<script>
	export let type = null;
	export let src = '';
	export let alt = '';
	let header;
	let content;
	let active = false;
	const handleClick = () => {
		active = !active;
	};
</script>

<div class="container">
	{#if type === 'townmap'}
		<button bind:this={header} class="header" on:click={handleClick}>
			<p>Town Map</p>
		</button>
		<div bind:this={content} class="content" class:active>
			<img class="map" {src} {alt} />
		</div>
	{:else if type === 'worldmap'}
		<button bind:this={header} class="header" on:click={handleClick}>
			<p>World Map</p>
		</button>
		<div bind:this={content} class="content" class:active>
			<img class="map" {src} {alt} />
		</div>
	{:else}
		<p>THIS COMPONENT DOES NOT HAVE A TYPE</p>
	{/if}
</div>

<style>
	.container {
		margin: 0.5rem;
	}

	.header {
		background-color: blue;
		color: white;
		width: 100%;
		height: 3rem;
		border: none;
		text-align: left;
		padding-left: 1rem;
		font-size: larger;
	}

	.content {
		display: none;
		background-color: rgb(189, 189, 189);
	}

	.map {
		max-width: 100%;
	}

	.active {
		display: flex;
		flex-direction: column;
	}
</style>
