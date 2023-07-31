<script lang="ts">
	export let url: string;
	export let label: string;
</script>

<a
	class="
		color-inherit
		duration-300
		no-underline
		font-mono
		sm:text-2xl text-xl
        font-semibold
		"
	href={url}>{label}</a
>
