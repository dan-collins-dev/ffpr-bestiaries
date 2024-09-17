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
	<img src={data[index].imgSrc} alt="A Picture of Chest with {data[index].contents}" />
	<img src={data[index].locationImgSrc} alt="A Picture of {data[index].contents} location" />
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
		max-width: 100%;
	}
</style>
