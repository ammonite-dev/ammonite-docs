<script lang="ts">
	import { DropdownMenu, headerMenuState } from '$lib/api/local/header_state';
	import { DROPDOWN_CLOSE_STYLE, DROPDOWN_OPEN_STYLE } from '$lib/styles/dropdown_menu';

	const openedState = DropdownMenu.Profile;

	$: currentMenuState = $headerMenuState;
	$: menuOpen = currentMenuState == openedState;

	const toggleMenu = () => {
		if (currentMenuState != openedState) {
			headerMenuState.set(openedState);
		} else {
			headerMenuState.set(DropdownMenu.None);
		}
	};
</script>

<div class="hover:text-dark-link-hover2 duration-300">
	<button on:click={toggleMenu} class="flex flex-row justify-center items-center w-10 h-10">
		<i class="fa-solid fa-user" />
	</button>
	<div class="relative">
		<div class={menuOpen ? DROPDOWN_OPEN_STYLE : DROPDOWN_CLOSE_STYLE}>
			<slot />
		</div>
	</div>
</div>
