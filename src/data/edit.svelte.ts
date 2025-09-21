import { writable } from 'svelte/store';

export let edit_now = writable("");//key
export let edit_original = writable("");//original
export let edit_translated = writable("");//translated