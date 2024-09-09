<script>
	import { base } from '$app/paths';
</script>

<ul>
	<li><a href="{base}/ff1/bestiary">Bestiary</a></li>
	<li><a href="{base}/ff1/chests">Chests</a></li>
	<li><a href="{base}/ff1/locations">Locations</a></li>
</ul>

<slot />

<style>
	ul {
		padding: 1rem 0;
		display: flex;
		flex-wrap: wrap;
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
