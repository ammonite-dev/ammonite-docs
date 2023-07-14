<script lang="ts">

	const PARAMETERS = [
		{
			name: "title",
			data_type: "String",
			description: "Sets the title of the web page",
		},
		{
			name: "description",
			data_type: "String",
			description: "Sets the description of the web page for Google Search, Twitter preview, etc.",
		},
		{
			name: "thumbnail_url",
			data_type: "String",
			description: "Sets the thumbnail image of the web page for Google Search, Twitter preview, etc.",
		},
	];
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
	<table>
		<thead>
			<tr>
				<th>Name</th>
				<th>Type</th>
				<th>Description</th>
			</tr>
		</thead>
		<tbody>
			{#each PARAMETERS as param}
			<tr>
				<td class="table_cell font-mono">{param.name}</td>
				<td class="table_cell font-mono">{param.data_type}</td>
				<td class="table_cell">{param.description}</td>
			</tr>
			{/each}
		</tbody>
	</table>
	<h2>Example</h2>
	<pre><code
			>{`\`\`\`ammonite_head
	"version": 1,
	"data": {
		"title": "My web page title",
		"description": "This is my web page",
		"thumbnail_url": "https://ammonite.dev/assets/abc.png"
	}
}`}</code
		></pre>
</div>

<style>
	table {
		border-color: #aaaaaa;
	}

	.table_cell {
		min-width: 0;
		padding: 0.5rem 1rem;
		border-width: 1px;
	}
</style>
