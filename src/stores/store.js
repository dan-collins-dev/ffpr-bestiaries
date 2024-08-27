import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const createDataStorage = (key, dataArray) => {
	const { subscribe, set, update } = writable(dataArray);

	const initStorage = () => {
		update((dataArray) => {
			if (browser) {
				if (localStorage.getItem(key) === null) {
					localStorage.setItem(key, JSON.stringify(dataArray));
				} else {
					dataArray = JSON.parse(localStorage.getItem(key));
				}
			}

			return dataArray;
		});
	};

	const addEntries = (value) => {
		update((dataArray) => {
			dataArray = [...dataArray, value];
			if (browser) {
				localStorage.setItem(key, JSON.stringify(dataArray));
			}

			return dataArray;
		});
	};

	const editEntry = (index) => {
		update((dataArray) => {
			if (browser) {
				let storage = JSON.parse(localStorage.getItem(key));
				storage[index].encountered = !storage[index].encountered;
				dataArray = storage;
				localStorage.setItem(key, JSON.stringify(dataArray));
			}

			return dataArray;
		});
	};

	const reset = () => {
		// set("0")
		// // if (browser)
	};

	return { subscribe, reset, addEntries, initStorage, editEntry };
};

import bestiary from '$data/ff1/bestiary.json';
let stringifiedBestiary = JSON.stringify(bestiary);
let bestiaryJSON = JSON.parse(stringifiedBestiary);

export const ff1Bestiary = createDataStorage('ff1-bestiary', bestiaryJSON);
