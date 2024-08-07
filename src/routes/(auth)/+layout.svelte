<script lang="ts">
	import '$styles/app.css'
	import { ParaglideJS } from '@inlang/paraglide-js-adapter-sveltekit'
	import { i18n } from '$lib/i18n.js'
	// import { page } from '$app/stores'
	// import * as m from '$m'
	import Header from '$components/Header.svelte'
	import Sidebar from '$components/Sidebar.svelte'
	import type { Snippet } from 'svelte'
	type Props = {
		children?: Snippet
	}
	const { children }: Props = $props()
</script>

<ParaglideJS {i18n}>
	
	<div class="drawer lg:drawer-open">
		<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
		<div class="drawer-content flex flex-col items-start justify-start">
			<Header logo={false} />
			<label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
			<div class="w-full p-4">
				{@render children!()}
			</div>
		</div>
		<div class="drawer-side shadow-md">
			<label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
			<Sidebar />
		</div>
	</div>
</ParaglideJS>
