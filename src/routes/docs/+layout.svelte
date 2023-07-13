<script lang="ts">
	import Sidebar from './Sidebar.svelte';
	import { page } from '$app/stores';

	const pageTitle = 'Ammonite Docs';
	const pageDescription = 'Learn how to use Ammonite to generate great wiki pages';

	const pageUrl = `${$page.url.hostname}${$page.url.pathname}`;
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta
		name="robots"
		content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
	/>

	<meta name="twitter:title" content={pageTitle} />
	<meta name="twitter:description" content={pageDescription} />
	<meta name="twitter:card" content="summary_large_image" />

	<meta property="og:site_name" content="Ammonite" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={pageUrl} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={pageDescription} />
</svelte:head>

<div class="flex flex-row flex-nowrap">
	<div class="pr-4">
		<div class="w-52 overflow-y-auto max-h-screen border border-white/0 border-r-white">
			<Sidebar path={$page.url.pathname} />
		</div>
	</div>
	<div class="min-w-0">
		<slot />
	</div>
</div>
