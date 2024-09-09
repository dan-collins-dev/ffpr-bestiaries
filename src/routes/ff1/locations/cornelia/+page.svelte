<script>
	let header;
	let content;
	let active = false;
	const handleClick = () => {
		active = !active;
	};
</script>

<h1>Cornelia</h1>
<div class="image-container">
    <img class="town-map" src="https://lh3.googleusercontent.com/d/10vwsLOUlFkDC2HTbtMz6sLpdmcmKNiCV" alt="Map of Cornelia">
</div>
<div class="container">
    <button bind:this={header} class="header" on:click={handleClick}>
        <p>Title</p>
    </button>
    <div bind:this={content} class="content" class:active>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
    </div>
</div>

<style>
    h1 {
        text-align: center;
    }
    .container {
        margin: .5rem;
    }

    .image-container {
        margin: .5rem;
    }

    .town-map {
        max-width: 100%;
    }
	.header {
		background-color: gray;
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

	.active {
		display: block;
	}
</style>
