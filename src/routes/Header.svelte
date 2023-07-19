<script lang="ts">
	import { LOGO_NAME } from '$lib/constants/company';
	import { BACKGROUND_COLOR, FONT_COLOR } from '$lib/constants/colors';
	import HeaderLink from '$lib/components/header/HeaderLink.svelte';

	import { AppRoute } from '$lib/constants/routes';
	import { FONT_SIZES } from '$lib/styles/fonts';

	const HEADER_STYLE = `
		${BACKGROUND_COLOR['primary']}
		${FONT_COLOR['primary']}
		w-full
		py-1
		sm:px-6 px-3
		overflow-visible
		${FONT_SIZES['subtitle']}
	`;
</script>

<header class={HEADER_STYLE}>
	<nav class="w-full flex flex-row justify-between items-center">
		<div>
			<HeaderLink url={AppRoute.Home} label={LOGO_NAME} />
		</div>
		<div class="sm:block hidden" />
		<div class="sm:hidden flex flex-row" />
	</nav>
</header>
