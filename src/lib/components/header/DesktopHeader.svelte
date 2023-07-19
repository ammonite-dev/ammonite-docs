<script lang="ts">
	import { navigating, page } from '$app/stores';

	import { DropdownMenu, headerMenuState } from '$lib/api/local/header_state';
	import { BACKGROUND_COLOR_HOVER, FONT_COLOR } from '$lib/constants/colors';
	import ProfileButton from '$lib/components/header/ProfileButton.svelte';
	import ToggleTheme from '$lib/components/ToggleTheme.svelte';
	import { FONT_SIZES } from '$lib/styles/fonts';

	import { jwt_decoded } from '$lib/api/local/storage';
	import * as StorageApi from '$lib/api/local/storage';
	import { CTA_BUTTON_STYLE } from '$lib/styles/button';
	import { AppRoute, createAppRoute } from '$lib/constants/routes';

	const PROFILE_MENU_ITEM_STYLE = `
		px-4 py-3
		w-full
		${BACKGROUND_COLOR_HOVER['accentTertiary']}
		${FONT_SIZES['text']}
		duration-300
	`;

	function logout() {
		StorageApi.deleteJwt();
	}

	function resetHeaderMenu() {
		headerMenuState.set(DropdownMenu.None);
	}

	$: if ($navigating) resetHeaderMenu();
</script>

<div class={`flex flex-row ${FONT_SIZES['lg']} items-center`}>
	{#if jwt_decoded === undefined}
		<div />
	{/if}
	{#if jwt_decoded === null}
		<ToggleTheme />
		<div class="w-6" />
		<!--
			<ToggleTheme />
			<div class="w-6" />
			<a class={OUTLINE_BUTTON_STYLE} href={AppRoute.UserLogin}> Login </a>
			<div class="w-2" />
			<a class={CTA_BUTTON_STYLE} href={AppRoute.UserSignUp}> Sign Up </a>
		-->
	{/if}
	{#if jwt_decoded}
		<ProfileButton>
			<div class="flex flex-col items-start">
				<div class="h-2" />
				<div class="ml-4"><ToggleTheme /></div>
				<div class="h-2" />
				<button class={PROFILE_MENU_ITEM_STYLE} on:click={logout}> Logout </button>
			</div>
		</ProfileButton>
	{/if}
</div>
