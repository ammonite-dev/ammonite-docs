<script context="module" lang="ts">
	import { darkTheme } from '$lib/api/local/theme';
</script>

<script lang="ts">
	const toggleDark = () => {
		$darkTheme = !$darkTheme;
	};

	$: iconClass = $darkTheme ? 'fa-moon' : 'fa-sun';

	$: faIcon = `
		fa-solid fa-lg ${iconClass}
	`;

	const BUTTON_STYLE = `
		hover:text-dark-link-hover2 duration-300
		hover:cursor-pointer
	`;
</script>

<button on:click={toggleDark} class={BUTTON_STYLE}>
	<div class="flex flex-row justify-center">
		<div><i class={faIcon} /></div>
	</div>
</button>
