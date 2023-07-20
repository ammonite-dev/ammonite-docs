<script>
	import { code_to_html } from '$lib/api/local/syntax';
	import { TABLE_CELL_STYLE } from '$lib/styles/table';

	const TABLE_HEADERS = ['Name', 'Type', 'Description'];

	const TABLE_ROWS = [
		[
			{ classes: `${TABLE_CELL_STYLE} font-mono`, value: 'title' },
			{ classes: `${TABLE_CELL_STYLE} font-mono`, value: 'String' },
			{ classes: TABLE_CELL_STYLE, value: 'Sets the title of the web page' }
		],
		[
			{ classes: `${TABLE_CELL_STYLE} font-mono`, value: 'description' },
			{ classes: `${TABLE_CELL_STYLE} font-mono`, value: 'String' },
			{
				classes: TABLE_CELL_STYLE,
				value: 'Sets the description of the web page for Google Search, Twitter preview, etc.'
			}
		],
		[
			{ classes: `${TABLE_CELL_STYLE} font-mono`, value: 'thumbnail_url' },
			{ classes: `${TABLE_CELL_STYLE} font-mono`, value: 'String' },
			{
				classes: TABLE_CELL_STYLE,
				value: 'Sets the thumbnail image of the web page for Google Search, Twitter preview, etc.'
			}
		]
	];
</script>

<div class="tech_doc">
	<h1>
		<span class="inline_code">anchored_heading</span>
	</h1>
	<p>
		This template is special among other built-in templates. It is the only template that allows
		users to modify the contents within the <span class="inline_code">head</span> element.
	</p>
	<h2>Parameters</h2>
	<h2>Example</h2>
	<pre><code
			>{@html code_to_html(
				'json',
				`\`\`\`
\`\`\``
			)}</code
		></pre>
</div>

<style>
	.table_column:nth-child(even) {
		background-color: #777777;
	}
	.table_cell {
		padding: 0.5rem 1rem;
	}
	.table_header {
		padding: 0.5rem 1rem;
		background-color: #555555;
		font-weight: bold;
	}
</style>
