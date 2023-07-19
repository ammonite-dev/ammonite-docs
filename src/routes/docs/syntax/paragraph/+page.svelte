<script>
	import { code_to_html } from '$lib/api/local/syntax';
</script>

<div class="tech_doc">
	<h1>Paragraph</h1>
	<p>
		We can create a paragraph just by typing. To create a line break or a new paragraph, just create
		an empty line between paragraphs
	</p>

	<h4>Example Input</h4>
	<pre><code
			>{@html code_to_html(
				'md',
				`Hey, this is a paragraph

Hey, here is another paragraph`
			)}</code
		></pre>
	<h4>Example Output</h4>
	<div class="article_preview">
		<p>Hey, this is a paragraph</p>
		<p>Hey, here is another paragraph</p>
	</div>

	<h4>Example Input</h4>
	<pre><code
			>{@html code_to_html(
				'md',
				`We can also create
**bold text**
*italic text*
__underline text__
~~strikethrough text~~`
			)}</code
		></pre>
	<h4>Example Output</h4>
	<div class="article_preview">
		We can also create
		<strong>bold text</strong>
		<em>italic text</em>
		<u>underline text</u>
		<s>strikethrough text</s>
	</div>
</div>
