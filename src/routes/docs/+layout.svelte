<script lang="ts">
	import Sidebar from './Sidebar.svelte';
	import { page } from '$app/stores';
</script>

<div class="flex flex-row flex-nowrap">
	<div class="pr-4">
		<div class="w-64 overflow-y-auto max-h-screen border border-white/0 border-r-white">
			<Sidebar path={$page.url.pathname} />
		</div>
	</div>
	<div class="min-w-0">
		<slot />
	</div>
</div>
