<script lang="ts">
	import type { TableCell } from '$lib/types/table';

	export let tableHeaders: Array<string>;
	export let tableRows: Array<Array<TableCell>>;
</script>

<table>
	<thead>
		<tr>
			{#each tableHeaders as header}
				<th>{header}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each tableRows as row}
			<tr>
				{#each row as cell}
					<td class={cell.classes}>{cell.value}</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>
