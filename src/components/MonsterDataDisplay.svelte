<script>
	import { browser } from '$app/environment';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	export let opened = false;
	export let data;
	export let index = 0;
    let dialog

    $: if (opened === true) {
        dialog.showModal();
    }


	const closeCard = () => {
        opened = false
        dispatch("closeModal")
		dialog.close();
	};

    console.table(dialog)
</script>


<dialog bind:this={dialog} >
    <h1>{data[index].name}</h1>
    <div class="stats-wrapper">
        <!-- <div class="labels">
            <p>Name:</p>
            <p>HP:</p>    
        </div>
    
        <div class="values">
            <p>{data[index].name}</p>
            <p>{data[index].HP}</p>
        </div> -->


        <p>HP:</p>    
        <p class="values">{data[index].HP}</p>
        
        <p>Attack:</p>
        <p class="values">{data[index].attack}</p>
        
        <p>Defense:</p>
        <p class="values">{data[index].defense}</p>
        
        <p>Accuracy:</p>
        <p class="values">{data[index].accuracy}</p>

        <p>Agility:</p>
        <p class="values">{data[index].agility}</p>
        
        <p>Intellect:</p>
        <p class="values">{data[index].intellect}</p>

        <p>Evasion:</p>
        <p class="values">{data[index].evasion}</p>

        <p>Magic Defense:</p>
        <p class="values">{data[index].magicDefense}</p>
    </div>

    <h2>Drops</h2>

    <div class="">
        {#each data[index].items as item}
            <p>{item}</p>
        {/each}
    </div>

 
	<button  on:click={closeCard}>Close</button>
</dialog>


<style>
    h1 {
        text-align: center;
    }

    h2 {
        text-align: center;
    }
    dialog {
        /* translate: 0 -6rem; */
    }
    .stats-wrapper {
        /* display: flex; */
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        column-gap: 1rem;
        margin: 1rem 0;
    }

    .labels {
        text-align: left;
        /* display: flex;
        flex-direction: column; */
    }

    .values {
        text-align: right;
        /* display: flex;
        flex-direction: column;
        justify-self: stretch; */
    }
</style>