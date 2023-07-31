<script>
	import { BACKGROUND_COLOR } from '$lib/styles/colors';
</script>

<div
	class="
		{BACKGROUND_COLOR['error']}
		rounded-md
		p-4 my-2"
>
	<slot />
</div>
