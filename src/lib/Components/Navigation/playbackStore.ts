import { writable } from "svelte/store";

export const currentlyPlaying = writable<string | null>(null);