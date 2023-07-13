<script lang="ts">
	import { FONT_SIZES, FONT_WEIGHT } from '$lib/styles/fonts';
	import { SECTIONS, SECTION_ITEMS } from '$lib/constants/table_of_contents';
	import { FONT_COLOR_HOVER } from '$lib/constants/colors';

	const SECTION_STYLE = `
        ${FONT_SIZES['lg']} ${FONT_WEIGHT['bold']}
        pt-4 pb-2
    `;

	const SECTION_ITEM_STYLE = `
        pl-1 pb-0.5
        duration-300
        text-gray-300
        ${FONT_COLOR_HOVER['accentPrimary']}
    `;

	export let path: string;
</script>

<div>
	{#each SECTIONS as section}
		<div class={SECTION_STYLE}>{section.name}</div>
		<ul class="flex flex-col">
			{#each SECTION_ITEMS[section.id] ?? [] as link}
				<a class={SECTION_ITEM_STYLE} href={link.url}>{link.name}</a>
			{/each}
		</ul>
	{/each}
	<div class="h-6" />
	<div>Debug: {path}</div>
</div>
