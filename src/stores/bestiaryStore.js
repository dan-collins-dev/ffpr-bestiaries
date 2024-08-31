import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const createBestiaryStorage = (key, dataArray) => {
	const { subscribe, set, update } = writable(dataArray);

	const originalData = dataArray;

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
		set(originalData);
		if (browser) {
			localStorage.setItem(key, JSON.stringify(originalData));
		}
	};

	return { subscribe, reset, addEntries, initStorage, editEntry };
};
