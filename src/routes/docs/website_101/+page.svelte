<script lang="ts">
	import { code_to_html } from '$lib/api/local/syntax';
	import { CodeBlock } from '@skeletonlabs/skeleton';
</script>

<div class="tech_doc">
	<h1>Website 101</h1>
	<p>
		This section is geared towards an audience who has little to no knowledge of how websites work.
		In particular, HTML elements and their purposes. In general, an HTML document has the following
		structure. An <span class="inline_code">&lt;html&gt;</span> element with a
		<span class="inline_code">&lt;head&gt;</span>
		element and <span class="inline_code">&lt;body&gt;</span> element inside it.
	</p>
	<pre><code
			>{@html code_to_html(
				'html',
				`<html>
	<head>
		<!-- content -->
	</head>
	<body>
		<!-- content -->
	</body>
</html>`
			)}</code
		></pre>
</div>
