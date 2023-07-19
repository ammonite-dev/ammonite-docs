<script>
	import { code_to_html } from '$lib/api/local/syntax';
	import { COMPANY_NAME } from '$lib/constants/company';
	import { AppRoute } from '$lib/constants/routes';
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
		{COMPANY_NAME} allow users to configure these using a custom built-in "template".
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
				'json',
				`\`\`\`ammonite_head
{
    "version": 1,
    "data": {
		"title": "My first page with a title",
	}
}
\`\`\``
			)}</code
		></pre>
	<p>To learn more, checkout <a href={AppRoute.DocsTemplatesAmmoniteHead}>ammonite_head</a></p>
</div>
