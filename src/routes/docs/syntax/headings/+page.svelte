<script>
	import { code_to_html } from '$lib/api/local/syntax';
</script>

<div class="tech_doc">
	<h1>Headings</h1>
	<p>
		Headings allow users to organize content into organized sections. There are 6 levels of
		headings, denoted by the <span class="inline_code">#</span> symbol
	</p>
	<h4>Example Input</h4>
	<pre><code
			>{@html code_to_html(
				'md',
				`# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6`
			)}</code
		></pre>
	<h4>Example Output</h4>
	<div class="article_preview">
		<h1>Heading 1</h1>
		<h2>Heading 2</h2>
		<h3>Heading 3</h3>
		<h4>Heading 4</h4>
		<h5>Heading 5</h5>
		<h6>Heading 6</h6>
	</div>
</div>
