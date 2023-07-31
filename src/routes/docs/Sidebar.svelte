<script lang="ts">
	import { SECTIONS } from '$lib/constants/sections';
	import { FONT_COLOR, FONT_COLOR_HOVER } from '$lib/styles/colors';

	const SECTION_STYLE = `
		text-lg font-bold
        pt-4 pb-2
    `;

	const SECTION_LINK_STYLE = `
		duration-300
		${FONT_COLOR['primary']}
		${FONT_COLOR_HOVER['accent-primary']}
    `;

	const SECTION_LINK_STYLE_SELECTED = `
		${FONT_COLOR['accent-primary']}
	`;

	const SECTION_ITEM_STYLE_SHARED = `
		pl-1 pb-0.5
        duration-300
	`;

	const SECTION_ITEM_STYLE_DEFAULT = `
        ${SECTION_ITEM_STYLE_SHARED}
        ${FONT_COLOR['tertiary']}
        ${FONT_COLOR_HOVER['accent-primary']}
    `;
	const SECTION_ITEM_STYLE_SELECTED = `
        ${SECTION_ITEM_STYLE_SHARED}
        ${FONT_COLOR['accent-primary']}
    `;

	export let path: string;
</script>

<div>
	{#each SECTIONS as section}
		{#if section.url}
			<div class={SECTION_STYLE}>
				{#if section.url === path.slice(0, -1)}
					<a class={SECTION_LINK_STYLE_SELECTED} href={section.url}>{section.name}</a>
				{:else}
					<a class={SECTION_LINK_STYLE} href={section.url}>{section.name}</a>
				{/if}
			</div>
		{:else}
			<div class={SECTION_STYLE}>{section.name}</div>
		{/if}
		<div class="flex flex-col">
			{#each section.subsections ?? [] as subsection}
				{#if subsection.url === path.slice(0, -1)}
					<a id="#{section.name}" class={SECTION_ITEM_STYLE_SELECTED} href={subsection.url}
						>{subsection.name}</a
					>
				{:else}
					<a id="#{section.name}" class={SECTION_ITEM_STYLE_DEFAULT} href={subsection.url}
						>{subsection.name}</a
					>
				{/if}
			{/each}
		</div>
	{/each}
	<div class="h-12" />
</div>
