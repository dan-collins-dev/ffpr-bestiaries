<script>
	import { base } from '$app/paths';
</script>

<ul>
	<li><a href="{base}/ff1/bestiary">Bestiary</a></li>
	<li><a href="{base}/ff1/chests">Chest Collection Log</a></li>
</ul>

<slot />

<style>
	ul {
		padding: 1rem;
		display: flex;
		background-color: black;
		justify-content: space-around;
		list-style: none;
	}

	a {
		color: white;
		text-decoration: none;
	}

	a:hover {
		color: yellow;
	}
</style>
