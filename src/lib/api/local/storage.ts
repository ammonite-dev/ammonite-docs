import { writable, type Writable } from 'svelte/store';
import { browser } from '$app/environment';

import jwt_decode from 'jwt-decode';

export enum StorageKey {
	JWT_TOKEN = 'jwt_token'
}

export type JwtDecoded =
	| {
			email: string;
			username: string;
	  }
	| null
	| undefined;

export function localStoreVal(input: { key: string; value: string }) {
	const { key, value } = input;
	localStorage.setItem(key, value);
}

export const jwt = writable(browser ? localStorage.getItem(StorageKey.JWT_TOKEN) : undefined);

export let jwt_token: string | undefined | null = undefined;
jwt.subscribe((value) => {
	jwt_token = value;
});

export let jwt_decoded: JwtDecoded = undefined;
jwt.subscribe((value) => {
	if (value === undefined) {
		jwt_decoded = undefined;
	} else if (value === null) {
		jwt_decoded = null;
	} else {
		jwt_decoded = jwt_decode(value ?? '{}');
	}
});

export function setJwt(new_jwt: string) {
	if (browser) {
		localStorage.setItem(StorageKey.JWT_TOKEN, new_jwt);
	}
	jwt.set(localStorage.getItem(StorageKey.JWT_TOKEN));
}

export function deleteJwt() {
	if (browser) {
		localStorage.removeItem(StorageKey.JWT_TOKEN);
	}
	jwt.set(null);
}

export function getUsername() {}
