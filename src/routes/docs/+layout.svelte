<script lang="ts">
	import { page } from '$app/stores';
	import { MetaTags } from 'svelte-meta-tags';

	import Hamburger from './Hamburger.svelte';
	import Sidebar from './Sidebar.svelte';

	const pageTitle = 'Ammonite Docs';
	const pageDescription = 'Learn how to use Ammonite to generate great wiki pages';
</script>

<MetaTags
	title={pageTitle}
	twitter={{
		title: pageTitle,
		description: pageDescription,
		cardType: 'summary_large_image'
	}}
	openGraph={{
		site_name: 'Ammonite',
		type: 'website',
		title: pageTitle,
		description: pageDescription
	}}
/>

<div class="flex sm:flex-row flex-col flex-nowrap">
	<div>
		<!-- Desktop sidebar -->
		<div class="sm:block hidden pr-4 w-52 overflow-y-auto max-h-screen">
			<Sidebar path={$page.url.pathname} />
		</div>
		<!-- Mobile hamburger -->
		<div class="sm:hidden block sm:p-0 px-4">
			<Hamburger path={$page.url.pathname} open={false} />
		</div>
	</div>
	<div class="min-w-0 px-4">
		<slot />
		<div class="h-12" />
	</div>
</div>
