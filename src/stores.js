import { writable } from 'svelte/store';

export const dataStore = writable({
    type: null,
    bName: null,
    dName: null,
    contact: 0
});