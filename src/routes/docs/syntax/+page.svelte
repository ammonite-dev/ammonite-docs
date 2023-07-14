<script>
	import { SYNTAX_SECTION } from '$lib/constants/sections';
</script>

<div class="tech_doc">
	<h1>Syntax</h1>
	<p>
		This section will be going over all the syntax available to users for writing their pages. Much
		of the syntax is Markdown, so you may skip most of this if you are already proficient with
		Markdown.
	</p>
	<ul>
		{#each SYNTAX_SECTION as section}
			<li><a href={section.url}>{section.name}</a></li>
		{/each}
	</ul>
</div>
