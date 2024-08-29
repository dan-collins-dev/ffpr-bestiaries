<script>
	import '$appCSS';
	import { base } from '$app/paths';
	import { ff1Bestiary, ff1Chests } from '$store';

	ff1Bestiary.initStorage()
	ff1Chests.initStorage()
</script>

<header>
	<p>FFPR Compendium</p>
	<nav>
		<ul>
			<li><a href="{base}/">Home</a></li>
		</ul>
	</nav>
</header>

<slot />

<style>
	header {
		background-color: blue;
		color: white;
		display: flex;
		padding: 1rem 0.5rem;
	}

	ul {
		display: flex;
	}

	p {
		font-size: 1rem;
		padding: 0.5rem;
	}

	nav {
		margin-left: auto;
	}

	li {
		list-style: none;
		padding: 0.5rem;
	}

	a {
		color: white;
		text-decoration: none;
	}
</style>
