<script lang="ts">
	import { BACKGROUND_COLOR, BACKGROUND_COLOR_REVERSE } from '$lib/styles/colors';
	import type { TableCell } from '$lib/types/table';

	export let rowNumber: number;
	export let tableHeaders: Array<string>;
	export let tableRow: Array<TableCell>;
</script>

<div class="flex flex-col border border-primary-500 ${BACKGROUND_COLOR['primary']} rounded-lg">
	<div
		class="flex flex-row justify-center font-bold text-primary-500 {BACKGROUND_COLOR[
			'tertiary'
		]} py-2 rounded-t-lg"
	>
		Row #{rowNumber}
	</div>
	<div class="h-px bg-primary-500" />
	{#each tableHeaders as header, i}
		<div class="flex flex-col px-3">
			<div class="font-bold text-lg">{header}</div>
			<div>{tableRow[i].value}</div>
		</div>
		<div class="h-3" />
	{/each}
</div>
