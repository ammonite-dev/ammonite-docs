<script lang="ts">
	import { code_to_html } from '$lib/api/local/syntax';
	import ResponsiveTable from '$lib/components/table/ResponsiveTable.svelte';
	import { COMPANY_NAME } from '$lib/constants/company';
	import { AppRoute } from '$lib/constants/routes';
	import { TABLE_CELL_STYLE } from '$lib/styles/table';

	const TABLE_HEADERS = ['Name', 'Type', 'Description'];

	const PARAMETERS = [
		[
			{ classes: `${TABLE_CELL_STYLE} font-mono`, value: 'version' },
			{ classes: `${TABLE_CELL_STYLE} font-mono`, value: 'int' },
			{
				classes: TABLE_CELL_STYLE,
				value:
					'As the platform grows, new features will be added and a versioning system is required to indicate what features should be available'
			}
		],
		[
			{ classes: `${TABLE_CELL_STYLE} font-mono`, value: 'page' },
			{ classes: `${TABLE_CELL_STYLE} font-mono`, value: 'Object' },
			{ classes: TABLE_CELL_STYLE, value: 'Sets the metadata of the web page' }
		]
	];

	const PAGE_PARAMETERS = [
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
	<h1>Metadata</h1>
	<p>
		Almost all websites have a <span class="inline_code">&lt;head&gt;</span>
		section where users can configure many aspects of the website. This includes, but not limited to:
		<uL>
			<li>The title of the page (what you see on your tabs)</li>
			<li>The thumbnail preview of the page (when you share links with friends)</li>
			<li>The preview description of the page (when you share links with friends)</li>
			<li>Whether a bot should scrape this website (like Google's search engine)</li>
		</uL>
		{COMPANY_NAME} allow users to configure these using a YAML config at the top of each page.
	</p>
	<h2>Usage</h2>
	<p>
		To get started, first create a code block at the top of the Markdown document like we would with {COMPANY_NAME}'s
		templates. Except this time, we will be specifying
		<span class="inline_code">ammonite_head</span>. Inside this code block, we can specify a JSON
		object with a version attribute and a title attribute. The version lets us know which version of
		<span class="inline_code">ammonite_head</span>
		we want to use, in case we introduce breaking changes in the future. The title lets us set the title
		of our page.
	</p>
	<pre><code
			>{@html code_to_html(
				'yaml',
				`---
version: 1
page:
  title: My first page with a title
  description: Hello world
---
`
			)}</code
		></pre>
	<h2>Parameters</h2>
	<ResponsiveTable tableHeaders={TABLE_HEADERS} tableRows={PARAMETERS} />

	<h4>Page Parameters</h4>
	<ResponsiveTable tableHeaders={TABLE_HEADERS} tableRows={PAGE_PARAMETERS} />
	<h2>Example</h2>
	<pre><code
			>{@html code_to_html(
				'yaml',
				`---
version: 1
page:
  title: My web page title
  description: This is my web page
  thumbnail_url: https://ammonite.dev/assets/abc.png
---`
			)}</code
		></pre>
</div>

<style>
	table {
		border-color: #aaaaaa;
	}

	.py-2 px-4 {
		min-width: 0;
		padding: 0.5rem 1rem;
		border-width: 1px;
	}
</style>
