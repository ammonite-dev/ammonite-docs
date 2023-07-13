<script lang="ts">
	import { FONT_SIZES, FONT_WEIGHT } from '$lib/styles/fonts';
	import { SECTIONS } from '$lib/constants/table_of_contents';
	import { FONT_COLOR, FONT_COLOR_HOVER } from '$lib/constants/colors';
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
</script>

<div>
	{#each SECTIONS as section}
		<div class={SECTION_STYLE}>{section.name}</div>
		<ul class="flex flex-col">
			{#each section.subsections ?? [] as subsection}
				{#if subsection.url === $page.url.pathname}
					<a class={SECTION_ITEM_STYLE_SELECTED} href={subsection.url}>{subsection.name}</a>
				{:else}
					<a class={SECTION_ITEM_STYLE_DEFAULT} href={subsection.url}>{subsection.name}</a>
				{/if}
			{/each}
		</ul>
	{/each}
	<div class="h-6" />
	<div>Debug: {path}</div>
</div>
