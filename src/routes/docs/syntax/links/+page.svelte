<script>
	import { code_to_html } from '$lib/api/local/syntax';
</script>

<div class="tech_doc">
	<h1>Links</h1>
	<p>Links are essential for users to navigate around our projects and pages.</p>

	<h4>Example Input</h4>
	<pre><code
			>{@html code_to_html(
				'md',
				`My favorite search engine is [Duck Duck Go](https://duckduckgo.com).`
			)}</code
		></pre>
	<h4>Example Output</h4>
	<div class="article_preview">
		<p>My favorite search engine is <a href="https://duckduckgo.com">Duck Duck Go</a>.</p>
	</div>
	<h2>Reference-style Links</h2>
	<p>We can also create reference-like links</p>

	<h4>Example Input</h4>
	<pre><code
			>{@html code_to_html(
				'md',
				`This page was generated by Ammonite[1].

...

[1]: https://ammonite.dev (Ammonite Dev)`
			)}</code
		></pre>
	<h4>Example Output</h4>
	<div class="article_preview">
		<!-- TODO -->
	</div>
</div>
