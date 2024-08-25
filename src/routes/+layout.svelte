<script>
	import '../app.css';
	import { base } from '$app/paths';
</script>


<header>
	<p>FFPR Compendium</p>
	<nav>
		<ul>
			<li><a href="{base}/">Home</a></li>
	</nav>
</header>


<style>
	header {
		background-color: blue;
		color: white;
		display: flex;
		padding: 1rem .5rem;
	}

    ul {
        display: flex;
    }
	
	p {
		font-size: 1rem;
        padding: .5rem;
	}

	nav {
		margin-left: auto;
	}

	li {
		list-style: none;
        padding: .5rem;
	}

	a {
		color: white;
		text-decoration: none;
        
	}
</style>

<slot />