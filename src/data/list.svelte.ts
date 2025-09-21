import {writable} from 'svelte/store';

export let search = writable("");
export let filter = writable("all");
export let regex = writable(false);