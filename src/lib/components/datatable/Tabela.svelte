<script lang="ts">
	import { type DataHandler, type Row } from '@vincjo/datatables'
	import Search from '$lib/components/datatable/Search.svelte'
	import RowsPerPage from '$lib/components/datatable/RowsPerPage.svelte'
	import RowCount from '$lib/components/datatable/RowCount.svelte'
    import Pagination from '$lib/components/datatable/Pagination.svelte'
	type T = $$Generic<Row>

	export let handler: DataHandler<T>

	export let search = true
	export let rowsPerPage = true
	export let rowCount = true
	export let pagination = true

	let element: HTMLElement
	let clientWidth = 1000
    

	const height = (search || rowsPerPage ? 48 : 8) + (rowCount || pagination ? 48 : 8)

	handler.on('change', () => {
		if (element) element.scrollTop = 0

	})
</script>

<section bind:clientWidth={clientWidth} class={$$props.class ?? ''}>
	<header class:container={search || rowsPerPage}>
		{#if search}
			<Search {handler} class="input input-bordered mb-4" />
		{/if}
		{#if rowsPerPage}
			<RowsPerPage {handler} small={clientWidth < 600} />
		{/if}
	</header>

	<article bind:this={element}>
		<slot />
	</article>

	<footer class:container={rowCount || pagination}>
		{#if rowCount}
			<RowCount {handler} small={clientWidth < 600} />
		{/if}
		{#if pagination}
			<Pagination {handler} small={clientWidth < 600} />
		{/if}
	</footer>
</section>

<style>
	section {
		height: 100%;
	}

	section :global(table) {
		border-collapse: separate;
		border-spacing: 0;
		width: 100%;
	}

	section :global(thead) {
		position: sticky;
		z-index: 1;
		inset-block-start: 0;
	}

	header,
	footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 16px;
		min-height: 8px;
	}
	header.container,
	footer.container {
		height: 48px;
	}
	footer {
		border-top: 1px solid #e0e0e0;
	}

	article {
		position: relative;
		/* height:calc(100% - 96px); */
		overflow: auto;
		scrollbar-width: thin;
	}

	article::-webkit-scrollbar {
		width: 6px;
		height: 6px;
	}
	article::-webkit-scrollbar-track {
		background: #f5f5f5;
	}
	article::-webkit-scrollbar-thumb {
		background: #c2c2c2;
	}
	article::-webkit-scrollbar-thumb:hover {
		background: #9e9e9e;
	}
</style>
