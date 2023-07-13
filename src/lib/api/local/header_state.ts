import { writable } from 'svelte/store';

export enum DropdownMenu {
	None,
	Profile,
	Create
}

export const headerMenuState = writable(DropdownMenu.None);
