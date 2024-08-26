import { writable } from "svelte/store";
import { browser } from "$app/environment";

class DataStorage {
    constructor(dataKey) {
        this.dataKey = dataKey
        this.data = [];
    }

    getData = () => {
        if (browser) {
            if (localStorage.getItem(this.dataKey) === null) {
                localStorage.setItem(this.dataKey ,JSON.stringify(this.data))
            } else {
                this.data = JSON.parse(localStorage.getItem(this.dataKey))
            }
        }

        return this.data
    }

    setData = (value) => {
        if (browser) {
            this.data = this.getData()
            this.data.push(value)
            localStorage.setItem(this.dataKey, JSON.stringify(this.data))
        }
    }

    updateData = () => {
        if (browser) {
            this.data = [...this.data]
            localStorage.setItem(this.dataKey, JSON.stringify(this.data))
        }
    }
}

// TODO: update the variable names because I hate numbers in the middle
// of variable names
export const ff1Bestiary = writable(new DataStorage("ff1-bestiary"))