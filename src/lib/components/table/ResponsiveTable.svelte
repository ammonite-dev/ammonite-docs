<script lang="ts">
	import { BACKGROUND_COLOR } from '$lib/styles/colors';
	import { SELECT_STYLE } from '$lib/styles/select';
	import type { TableCell } from '$lib/types/table';
	import ErrorAlert from '../ErrorAlert.svelte';
	import DesktopTable from './DesktopTable.svelte';
	import MobileCol from './MobileCol.svelte';
	import MobileRow from './MobileRow.svelte';

	export let tableHeaders: Array<string>;
	export let tableRows: Array<Array<TableCell>>;

	enum ViewMode {
		Desktop = 'Desktop',
		MobileRow = 'MobileRow',
		MobileCol = 'MobileCol'
	}

	let selectedViewMode = ViewMode.MobileRow;
</script>

<div class="sm:block hidden">
	<DesktopTable {tableHeaders} {tableRows} />
</div>
<div class="sm:hidden block">
	<select bind:value={selectedViewMode} class={SELECT_STYLE}>
		<option value={ViewMode.Desktop}>Desktop</option>
		<option value={ViewMode.MobileRow}>Mobile Row</option>
		<option value={ViewMode.MobileCol}>Mobile Col</option>
	</select>
	<div class="h-4" />

	{#if selectedViewMode === ViewMode.Desktop}
		<DesktopTable {tableHeaders} {tableRows} />
	{/if}
	{#if selectedViewMode === ViewMode.MobileRow}
		{#each tableRows as row, i}
			<MobileRow rowNumber={i + 1} {tableHeaders} tableRow={row} />
			<div class="h-4" />
		{/each}
	{/if}
	{#if selectedViewMode === ViewMode.MobileCol}
		<ErrorAlert>Not Implemented!</ErrorAlert>
		<!--
        <div class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto w-full">
            {#each tableHeaders as header, i}
                <MobileCol tableHeader={header} tableCol={tableRows.map((row) => row[i])} />
            {/each}
        </div>
        -->
	{/if}
</div>
