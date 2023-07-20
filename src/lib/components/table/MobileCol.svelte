<script lang="ts">
	import type { TableCell } from '$lib/types/table';

	export let tableHeader: string;
	export let tableCol: Array<TableCell>;
</script>

<div class="flex flex-col bg-slate-700 p-2 rounded-lg">
	<div class="font-bold">{tableHeader}</div>
	{#each tableCol as col}
		<div class="flex flex-col mb-2">
			<div>{col.value}</div>
		</div>
	{/each}
</div>
