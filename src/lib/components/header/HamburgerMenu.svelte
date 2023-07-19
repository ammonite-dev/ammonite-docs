<script lang="ts">
	import {
		HAMBURGER_BUTTON_1,
		HAMBURGER_BUTTON_1_OPEN,
		HAMBURGER_BUTTON_2_OPEN,
		HAMBURGER_BUTTON_3_OPEN,
		HAMBURGER_MENU_CLOSED,
		HAMBURGER_MENU_OPENED
	} from '$lib/styles/hamburger';
	import ToggleTheme from '$lib/components/ToggleTheme.svelte';
	import { FONT_COLOR, FONT_COLOR_HOVER } from '$lib/constants/colors';

	export let open: boolean;

	const toggleMenu = () => {
		open = !open;
	};
</script>

<div class="pt-1">
	<button on:click={toggleMenu}>
		<div
			class="
		duration-300
		bg-light-text-primary
		dark:bg-dark-text-primary
		hover:bg-light-primary
		hover:dark:bg-dark-primary"
		>
			<div class={HAMBURGER_BUTTON_1} />
			<div class={HAMBURGER_BUTTON_1} />
			<div class={HAMBURGER_BUTTON_1} />
			<div class={HAMBURGER_BUTTON_1} />
		</div>
	</button>
	<div class={open ? HAMBURGER_MENU_OPENED : HAMBURGER_MENU_CLOSED}>
		<div class="flex flex-col items-start">
			<div class="flex justify-end w-full pt-2 px-6">
				<div class="{FONT_COLOR['primary']} {FONT_COLOR_HOVER['accentPrimary']}">
					<button on:click={toggleMenu}>
						<div class={HAMBURGER_BUTTON_1_OPEN} />
						<div class={HAMBURGER_BUTTON_2_OPEN} />
						<div class={HAMBURGER_BUTTON_3_OPEN} />
					</button>
				</div>
			</div>
			<div class="h-12" />
			<div class="flex flex-col items-center justify-center w-full">
				<!-- <a class={OUTLINE_BUTTON_STYLE} href={AppRoute.UserLogin}> Login </a>
				<div class="h-4" />
				<a class={CTA_BUTTON_STYLE} href={AppRoute.UserSignUp}> Sign Up </a>
				-->
				<div class="h-8" />
				<ToggleTheme />
			</div>
		</div>
	</div>
</div>
