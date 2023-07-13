<script lang="ts">
	import { FONT_SIZES, FONT_WEIGHT } from '$lib/styles/fonts';
	import { SECTIONS } from '$lib/constants/table_of_contents';
	import { FONT_COLOR, FONT_COLOR_HOVER } from '$lib/constants/colors';
	import {
		HAMBURGER_BUTTON_1,
		HAMBURGER_BUTTON_1_OPEN,
		HAMBURGER_BUTTON_2_OPEN,
		HAMBURGER_BUTTON_3_OPEN,
		HAMBURGER_MENU_CLOSED,
		HAMBURGER_MENU_OPENED
	} from '$lib/styles/hamburger';
	import { page } from '$app/stores';

	const SECTION_STYLE = `
        ${FONT_SIZES['lg']} ${FONT_WEIGHT['bold']}
        pt-4 pb-2
    `;

	const SECTION_ITEM_STYLE_SHARED = `
		pl-1 pb-0.5
        duration-300
	`;

	const SECTION_ITEM_STYLE_DEFAULT = `
        ${SECTION_ITEM_STYLE_SHARED}
        text-gray-300
        ${FONT_COLOR_HOVER['accentPrimary']}
    `;
	const SECTION_ITEM_STYLE_SELECTED = `
        ${SECTION_ITEM_STYLE_SHARED}
        ${FONT_COLOR['accentPrimary']}
    `;

	export let path: string;

	export let open: boolean;

	const toggleMenu = () => {
		open = !open;
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
	<div class={open ? HAMBURGER_MENU_OPENED : HAMBURGER_MENU_CLOSED}>
		<div class="flex justify-end w-full pt-2 px-6">
			<div class="{FONT_COLOR['primary']} {FONT_COLOR_HOVER['accentPrimary']}">
				<button on:click={toggleMenu}>
					<div class={HAMBURGER_BUTTON_1_OPEN} />
					<div class={HAMBURGER_BUTTON_2_OPEN} />
					<div class={HAMBURGER_BUTTON_3_OPEN} />
				</button>
			</div>
		</div>
		<div class="px-6">
			{#each SECTIONS as section}
				<div class={SECTION_STYLE}>{section.name}</div>
				<ul class="flex flex-col">
					{#each section.subsections ?? [] as subsection}
						{#if subsection.url === $page.url.pathname}
							<div class={SECTION_ITEM_STYLE_SELECTED}>{subsection.name}</div>
						{:else}
							<a class={SECTION_ITEM_STYLE_DEFAULT} href={subsection.url}>{subsection.name}</a>
						{/if}
					{/each}
				</ul>
			{/each}
		</div>
		<div class="h-6" />
		<div>Debug: {path}</div>
	</div>
</div>
