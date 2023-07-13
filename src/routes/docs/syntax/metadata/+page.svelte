<script>
	import { COMPANY_NAME } from '$lib/constants/company';
	import { ARTICLE_H1_STYLE, ARTICLE_H2_STYLE } from '$lib/styles/article_content';
	import { CODEBLOCK_STYLE, INLINE_CODE_STYLE } from '$lib/styles/code';
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
		To get started, first create a code block like we would with {COMPANY_NAME}'s templates. Except
		this time, we will be specifying <span class="inline_code">ammonite_head</span>. Inside this
		code block, we can specify a JSON object with a version attribute and a title attribute. The
		version lets us know which version of <span class="inline_code">ammonite_head</span>
		we want to use, in case we introduce breaking changes in the future. The title lets us set the title
		of our page.
	</p>
	<pre><code
			>{`\`\`\`ammonite_head
{
    "version": 1,
    "title": "My first page with a title",
}
\`\`\``}</code
		></pre>
	<p>
		In addition to these attributes, we also introduce the <span class="inline_code">meta</span> attribute.
		This attribute allows users to configure certain meta tags of the web page. Here are some common
		meta tags websites have.
	</p>
	<pre><code
			>{`\`\`\`ammonite_head
{
    "version": 1,
    "title": "My first page with a title",
    "meta": [
        {
            "name": "description",
            "content": "The first page I created"
        },
        {
            "name": "twitter:card",
            "content": "Heres a summary for my friends on Twitter!"
        },
        {
            "property": "og:url",
            "content": "https://ammonite.dev/proj/my_project/p/my_page"
        },
        {
            "property": "og:image",
            "content": "https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png"
        }
    ]
}
\`\`\``}</code
		></pre>
</div>
