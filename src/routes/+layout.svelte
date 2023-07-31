<script lang="ts">
	// Your selected Skeleton theme:
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/skeleton.css';

	import '../style/app.postcss';

	import { navigating, page } from '$app/stores';

	import { darkTheme } from '$lib/api/local/theme';
	import { BACKGROUND_COLOR, FONT_COLOR } from '$lib/styles/colors';

	import Navbar from './Header.svelte';
	import Footer from './Footer.svelte';
	import { Diamonds } from 'svelte-loading-spinners';
	import { Drawer, drawerStore } from '@skeletonlabs/skeleton';
	import Sidebar from './docs/Sidebar.svelte';
	import { afterNavigate } from '$app/navigation';
	import {
		HAMBURGER_BUTTON_1_OPEN,
		HAMBURGER_BUTTON_2_OPEN,
		HAMBURGER_BUTTON_3_OPEN
	} from '$lib/styles/hamburger';

	$: dark = $darkTheme;

	const MAIN_CLASS_STYLE = `
		m-0 p-0
		overflow-none
		scroll-smooth
		z-0
		box-border
		font-sans
		duration-200

		${FONT_COLOR['primary']}
		${BACKGROUND_COLOR['primary']}
		`;

	const MAIN_BODY_STYLE = `
		min-h-screen sm:px-12 px-0
	`;

	$: diamondColor = dark ? '#ffffff' : '#000000';

	afterNavigate(() => {
		drawerStore.close();
	});
</script>

<main class:dark>
	<div class={MAIN_CLASS_STYLE}>
		<Navbar />
		<div class={MAIN_BODY_STYLE}>
			{#if $navigating}
				<div class="w-full flex flex-row justify-center mt-4">
					<Diamonds size="64" color={diamondColor} unit="px" duration="3s" />
				</div>
			{:else}
				<slot />
			{/if}
		</div>
		<Footer />
		<Drawer
			duration={300}
			bgBackdrop="bg-surface-backdrop-white"
			bgDrawer={BACKGROUND_COLOR['primary']}
		>
			<div class="h-6" />
			<div class="flex flex-row-reverse w-full">
				<div class="mr-6">
					<button
						on:click={() => {
							drawerStore.close();
						}}
					>
						<div class={HAMBURGER_BUTTON_1_OPEN} />
						<div class={HAMBURGER_BUTTON_2_OPEN} />
						<div class={HAMBURGER_BUTTON_3_OPEN} />
					</button>
				</div>
			</div>
			<div class="px-4 overflow-auto">
				<Sidebar path={$page.url.pathname} />
			</div>
		</Drawer>
	</div>
</main>
