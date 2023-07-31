<script lang="ts">
	import { SECTIONS } from '$lib/constants/sections';
	import { FONT_COLOR, FONT_COLOR_HOVER } from '$lib/styles/colors';
	import { HAMBURGER_BUTTON_1 } from '$lib/styles/hamburger';
	import { page } from '$app/stores';
	import { drawerStore } from '@skeletonlabs/skeleton';

	const SECTION_STYLE = `
		text-lg font-bold
        pt-4 pb-2
    `;

	const SECTION_LINK_STYLE = `
		duration-300
		${FONT_COLOR_HOVER['accent-primary']}
    `;

	const SECTION_ITEM_STYLE_SHARED = `
		pl-1 pb-0.5
        duration-300
	`;

	const SECTION_ITEM_STYLE_DEFAULT = `
        ${SECTION_ITEM_STYLE_SHARED}
        text-gray-300
        ${FONT_COLOR_HOVER['accent-primary']}
    `;
	const SECTION_ITEM_STYLE_SELECTED = `
        ${SECTION_ITEM_STYLE_SHARED}
        ${FONT_COLOR['accent-primary']}
    `;

	const toggleMenu = () => {
		if (!$drawerStore.open) {
			drawerStore.open();
		} else {
			drawerStore.close();
		}
	};
</script>

<div>
	<button on:click={toggleMenu}>
		<div
			class="
		duration-300
		bg-light-text-primary
		dark:bg-dark-text-primary
		hover:bg-light-primary
		hover:dark:bg-dark-primary"
		>
			<div class={HAMBURGER_BUTTON_1} />
			<div class={HAMBURGER_BUTTON_1} />
			<div class={HAMBURGER_BUTTON_1} />
			<div class={HAMBURGER_BUTTON_1} />
		</div>
	</button>
</div>
