<script lang="ts">
	import '../app.postcss';

	import { navigating } from '$app/stores';

	import { darkTheme } from '$lib/api/local/theme';
	import { BACKGROUND_COLOR, FONT_COLOR } from '$lib/constants/colors';

	import Navbar from './Header.svelte';
	import Footer from './Footer.svelte';
	import { Diamonds } from 'svelte-loading-spinners';
	import { afterNavigate } from '$app/navigation';

	$: dark = $darkTheme;

	const MAIN_CLASS_STYLE = `
		m-0 p-0
		overflow-none
		scroll-smooth
		z-0
		box-border
		font-sans
		duration-200

		${BACKGROUND_COLOR['secondary']}
		${FONT_COLOR['primary']}
		`;

	const MAIN_BODY_STYLE = `
		min-h-screen sm:px-12 px-0
	`;

	$: diamondColor = dark ? '#ffffff' : '#000000';
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
	</div>
</main>
