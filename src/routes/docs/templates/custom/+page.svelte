<script>
	import ErrorAlert from '$lib/components/ErrorAlert.svelte';
	import { COMPANY_NAME } from '$lib/constants/company';
</script>

<div class="tech_doc">
	<h1>Templates</h1>
	<ErrorAlert>
		<div class="font-bold text-xl">Coming Soon!</div>
		<div>
			Custom templates is currently on the roadmap. However, it will require building out some
			extensive infrastructure to get working and be performant
		</div>
	</ErrorAlert>
	<h2>Liquid</h2>
	<p>
		{COMPANY_NAME} leverages Shopify's <a href="https://shopify.dev/docs/api/liquid">Liquid</a>
		templating language to create flexible and powerful templates.
	</p>
</div>
