<script lang="ts">
	import { FONT_COLOR_HOVER } from '$lib/constants/colors';

	export let url: string;
	export let label: string;

	const headerLink = `
		color-inherit
		duration-300
		no-underline
		${FONT_COLOR_HOVER['accentPrimary']}
		font-logo
        font-semibold
		`;
</script>

<a class={headerLink} href={url}>{label}</a>
