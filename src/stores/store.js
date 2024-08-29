import {createBestiaryStorage} from "../stores/bestiaryStore"
import {createChestStorage} from "../stores/chestStore"

// TODO: Figure out a cleaner way to import all data and create stores
import bestiary from '$data/ff1/bestiary.json';
let stringifiedBestiary = JSON.stringify(bestiary);
let bestiaryJSON = JSON.parse(stringifiedBestiary);

import chests from "$data/ff1/chests.json"
let stringifiedChests = JSON.stringify(chests)
let chestJSON = JSON.parse(stringifiedChests)

export const ff1Bestiary = createBestiaryStorage('ff1-bestiary', bestiaryJSON);
export const ff1Chests = createChestStorage("ff1-chests", chestJSON)