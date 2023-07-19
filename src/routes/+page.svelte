<script lang="ts">
	import { onMount } from 'svelte';
	import { redirect } from '@sveltejs/kit';
	import { MetaTags } from 'svelte-meta-tags';

	import { PRIMARY_BUTTON_STYLE } from '$lib/styles/button';
	import { AppRoute } from '$lib/constants/routes';

	onMount(() => {
		throw redirect(301, AppRoute.DocsHome);
	});
</script>

<MetaTags
	title="Ammonite Docs"
	description="Technical documentation on the Ammonite platform"
	canonical="https://docs.ammonite.dev"
	openGraph={{
		url: 'https://docs.ammonite.dev',
		title: 'Ammonite Docs',
		description: 'Technical documentation on the Ammonite platform',
		site_name: 'Ammonite Docs'
	}}
/>

<div class="flex flex-col items-center justify-center">
	<div class="h-12" />
	<div>
		<a href={AppRoute.DocsHome} class={PRIMARY_BUTTON_STYLE}>Go To Docs</a>
	</div>
</div>
