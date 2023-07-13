<script>
	import { COMPANY_NAME } from '$lib/constants/company';
	import { AppRoute } from '$lib/constants/routes';
</script>

<div class="tech_doc">
	<h1>The <span class="inline_code">head</span> Element</h1>
	<p>
		Almost all websites have a <span class="inline_code">&lt;head&gt;</span>. This element is
		responsible for everything that does not appear on the page. Users can place elements within the
		<span class="inline_code">&lt;head&gt;</span>
		element to configure many aspects of the website. This includes, but not limited to:
		<uL>
			<li>The title of the page (what you see on your tabs)</li>
			<li>The thumbnail preview of the page (when you share links with friends)</li>
			<li>The preview description of the page (when you share links with friends)</li>
			<li>Whether a bot should scrape this website (like Google's search engine)</li>
		</uL>
	</p>
	<div class="h-4" />
	<p>
		{COMPANY_NAME} allow users to configure these using a custom built-in template:
		<a href={AppRoute.DocsTemplatesAmmoniteHead}>ammonite_head</a>
	</p>
	<h4>Example HTML</h4>
	<pre><code
			>{`<html>
	<head>
		<title>My Webpage Title</title>

		<meta name="description" content="My first webpage using Ammonite">

		<meta name="twitter:image:src" content="https://link_to_image">
		<meta name="twitter:site" content="@abc">
		<meta name="twitter:card" content="summary_large_image">
		<meta name="twitter:title" content="My Webpage Title">
		<meta name="twitter:description" content="My first webpage using Ammonite">

      	<meta property="og:image" content="https://link_to_image">
		<meta property="og:image:alt" content="My first webpage using Ammonite">
		<meta property="og:site_name" content="Ammonite">
		<meta property="og:type" content="website">
		<meta property="og:title" content="My Webpage Title">
		<meta property="og:url" content="https://ammonite.dev/proj/test/p/test_page">
		<meta property="og:description" content="My first webpage using Ammonite">
	</head>
	<body>
		<!-- content -->
	</body>
</html>`}</code
		></pre>
</div>
