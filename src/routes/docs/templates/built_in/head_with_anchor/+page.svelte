<script>
	import { code_to_html } from '$lib/api/local/syntax';
</script>

<div class="tech_doc">
	<h1>
		<span class="inline_code">ammonite_head</span>
	</h1>
	<p>
		This template is special among other built-in templates. It is the only template that allows
		users to modify the contents within the <span class="inline_code">head</span> element.
	</p>
	<h2>Parameters</h2>
	<div class="flex flex-row">
		<div class="flex flex-row">
			<div class="table_header">Type</div>
			<div class="table_header">Name</div>
		</div>
		<div class="table_column">
			<div class="table_cell font-mono">title</div>
			<div class="table_cell font-mono">description</div>
			<div class="table_cell font-mono">thumbnail_url</div>
		</div>
		<div class="table_column">
			<div class="table_cell font-mono">String</div>
			<div class="table_cell font-mono">String</div>
			<div class="table_cell font-mono">String</div>
		</div>
		<div class="table_column">
			<div class="table_header">Description</div>
			<div class="table_cell">Sets the title of the web page</div>
			<div class="table_cell">
				Sets the description of the web page for Google Search, Twitter preview, etc.
			</div>
			<div class="table_cell">
				Sets the thumbnail image of the web page for Google Search, Twitter preview, etc.
			</div>
		</div>
	</div>
	<h2>Example</h2>
	<pre><code
			>{@html code_to_html(
				'json',
				`\`\`\`ammonite_head
	"version": 1,
	"data": {
		"title": "My web page title",
		"description": "This is my web page",
		"thumbnail_url": "https://ammonite.dev/assets/abc.png"
	}
}`
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
