<script>
	import { AppRoute } from '$lib/constants/routes';
</script>

<div class="tech_doc">
	<h1>Images</h1>
	<p>A website won't be complete without some images and graphics for users to view.</p>

	<h4>Example Input</h4>
	<pre><code
			>{`![Tux, the Linux mascot](https://mdg.imgix.net/assets/images/tux.png?auto=format&fit=clip&q=40&w=100)`}</code
		></pre>
	<h4>Example Output</h4>
	<div class="article_preview">
		<img
			src="https://mdg.imgix.net/assets/images/tux.png?auto=format&fit=clip&q=40&w=100"
			alt="Tux, the Linux mascot"
		/>
	</div>

	<h2>Advanced Features</h2>
	<p>
		Markdown does not support many features that configures the layout of the document. However,
		there are many features users would like to use with images such as:
	</p>
	<ul>
		<li>Right aligned images</li>
		<li>Resizing images</li>
		<li>Responsive resizing images</li>
	</ul>
	<h3>Solution 1: Write HTML</h3>
	<p>
		One solution to this is to manually write HTML within a Markdown document. Markdown supports
		embedding HTML within a Markdown document.
	</p>
	<h3>Solution 2: Use Built-in Templates</h3>
	<p>
		Another solution we have created for users with limited programming background is to use the
		built-in collection of templates specifically geared towards images. You can learn more about
		them <a href={AppRoute.DocsTemplatesBuiltIn}>here</a>
	</p>
</div>
