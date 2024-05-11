<script lang="ts">
	import { page } from '$app/stores'
	import Lottie from '$components/Lottie.svelte'
	import { i18n } from '$lib/i18n'
</script>

{#if $page.status == 404}
	<div class="my-12 flex flex-col items-center justify-center">
		<h1 class="text-5xl font-black text-primary">This page doesn't exist</h1>
		<Lottie path="/404.json" moreClass="w-3/4"></Lottie>
		<a href={i18n.resolveRoute('/')} class="btn btn-primary btn-lg btn-block max-w-48">Go Home</a>
	</div>
	{:else if $page.status == 500}
	<div class="my-12 flex flex-col items-center justify-center">
		<h1 class="text-5xl font-black text-primary">Tere is server error please visit later</h1>
		<Lottie path="/500.json" moreClass="w-3/4"></Lottie>
	</div>
{/if}
