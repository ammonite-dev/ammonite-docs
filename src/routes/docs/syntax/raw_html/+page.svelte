<script>
	import { code_to_html } from '$lib/api/local/syntax';
</script>

<div class="tech_doc">
	<h1>Raw HTML</h1>
	<p>
		Markdown supports embedding HTML within a Markdown document. However, most Markdown renderers do
		not allow Javascript due to the security risks involved.
	</p>
	<h4>Example Input</h4>
	<pre><code
			>{@html code_to_html(
				'html',
				`<h1 id="header-id1">This header has an id</h1>
<a href="#header-id1">Click here to go to header</a>`
			)}</code
		></pre>
	<h4>Example Output</h4>
	<div class="article_preview">
		<h1 id="header-id1">This header has an id</h1>
		<a href="#header-id1">Click here to go to header</a>
	</div>
</div>
