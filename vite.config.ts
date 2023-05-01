import { sveltekit } from '@sveltejs/kit/vite';
import wasm from 'vite-plugin-wasm';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [wasm(), sveltekit()],
	build: {
		target: 'esnext'
	}
	/*
	server: {
		proxy: {
			'/api': 'http://localhost:8080'
		}
	}
	*/
};

export default config;
