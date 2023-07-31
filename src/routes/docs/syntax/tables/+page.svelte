<script>
	import { code_to_html } from '$lib/api/local/syntax';
	import ErrorAlert from '$lib/components/ErrorAlert.svelte';
	import ResponsiveTable from '$lib/components/table/ResponsiveTable.svelte';
	import { TABLE_CELL_STYLE } from '$lib/styles/table';

	const TABLE_HEADERS = ['Option', 'Description'];

	const PARAMETERS = [
		[
			{ classes: TABLE_CELL_STYLE, value: 'data' },
			{
				classes: TABLE_CELL_STYLE,
				value: 'path to data files to supply the data that will be passed into templates.'
			}
		],
		[
			{ classes: TABLE_CELL_STYLE, value: 'engine' },
			{
				classes: TABLE_CELL_STYLE,
				value: 'engine to be used for processing templates. Handlebars is the default.'
			}
		],
		[
			{ classes: TABLE_CELL_STYLE, value: 'ext' },
			{ classes: TABLE_CELL_STYLE, value: 'extension to be used for dest files.' }
		]
	];
</script>

<div class="tech_doc">
	<h1>Tables</h1>
	<ErrorAlert>
		<div class="font-bold text-xl">Work In Progress</div>
		<div>
			Tables are a bit more complicated to implement. Especially a layout that is mobile friendly.
			Many things may be broken.
		</div>
	</ErrorAlert>
	<p>Tables are often useful for grouping categories of data</p>
	<h4>Example Input</h4>
	<pre><code
			>{@html code_to_html(
				'markdown',
				`| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |`
			)}</code
		></pre>
	<h4>Example Output</h4>
	<div class="article_preview">
		<ResponsiveTable tableHeaders={TABLE_HEADERS} tableRows={PARAMETERS} />
	</div>
</div>
