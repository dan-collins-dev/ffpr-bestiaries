<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	export let opened = false;
	export let data;
	export let index = 0;
	let dialog;

	$: if (opened === true) {
		dialog.showModal();
	}

	const closeCard = () => {
		opened = false;
		dispatch('closeModal', {
			isClosed: opened
		});
		dialog.close();
	};
</script>

<dialog bind:this={dialog} open={opened} on:close={closeCard}>
	<h1>{data[index].contents}</h1>
	<div class="image-container">
		<img class="chest" src={data[index].imgSrc} alt="A Picture of Chest with {data[index].contents}" />
		<img class="chest-location" src={data[index].locationImgSrc} alt="A Picture of {data[index].contents} location" />
	</div>
	<div class="button-container">
		<button on:click={closeCard}>Close</button>
	</div>
</dialog>

<style>
	dialog::backdrop {
		background-color: rgba(0, 0, 0, 0.7);
	}
	h1 {
		text-align: center;
	}

	button {
		width: 50%;
	}

	.button-container {
		display: flex;
		justify-content: center;
	}

	img {
		margin: .25rem 0;
		max-width: 100%;
	}

	.chest {
		margin:  0 0 .25rem 0;
	}

	.chest-location {
		margin: .25rem 0 0 0;
	}

	.image-container {
		display: flex;
		flex-direction: column;
	}

	@media (width > 500px) {
		.image-container {
			flex-direction: row;
			max-width: 100%;
			width: 100%;
		}

		img {
			margin: 0 .25rem;
			width: 50%;
		}
	}
</style>
