<script lang="ts">
	import Sidebar from './Sidebar.svelte';
	import { page } from '$app/stores';
	import Hamburger from './Hamburger.svelte';

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

<div class="flex sm:flex-row flex-col flex-nowrap">
	<div>
		<!-- Desktop sidebar -->
		<div
			class="sm:block hidden pr-4 w-52 overflow-y-auto max-h-screen"
		>
			<Sidebar path={$page.url.pathname} />
		</div>
		<!-- Mobile hamburger -->
		<div class="sm:hidden block sm:p-0 px-4">
			<Hamburger path={$page.url.pathname} open={false} />
		</div>
	</div>
	<div class="min-w-0 px-4">
		<slot />
	</div>
</div>
