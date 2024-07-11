<script lang="ts">
	import { languageTag } from '$paraglide/runtime'
	import Icon from '@iconify/svelte'
	import type { DataHandler, Row } from '@vincjo/datatables'

	type T = $$Generic<Row>

	export let handler: DataHandler<T>
	export let small = false

	const pageNumber = handler.getPageNumber()
	const pageCount = handler.getPageCount()
	const pages = handler.getPages({ ellipsis: true })

</script>

<section class={$$props.class ?? ''}>
	{#if small}
		<button class="btn" type="button" class:disabled={$pageNumber === 1} on:click={() => handler.setPage(1)}>
			<Icon icon="bx:chevrons-left"></Icon>
		</button>
		<button class="btn"
			type="button"
			class:btn-disabled={$pageNumber === 1}
			on:click={() => handler.setPage('previous')}
		>
        <Icon icon="bx:chevron-left"></Icon>
		</button>
		<button class="btn" class:btn-disabled={$pageNumber === $pageCount} on:click={() => handler.setPage('next')}>
			<Icon icon="bx:chevron-right"></Icon>
		</button>
		<button
        class="btn"
			class:btn-disabled={$pageNumber === $pageCount}
			on:click={() => handler.setPage($pageCount)}
		>
        <Icon icon="bx:chevrons-right"></Icon>
		</button>
	{:else}
		<button
			class="btn rounded-e-none rounded-s-box"
			type="button"
			class:btn-disabled={$pageNumber === 1}
			class:btn-secondary={$pageNumber !== 1}
			on:click={() => handler.setPage('previous')}
		>
			{@html handler.i18n.previous}
		</button>
		{#each $pages as page}
			<button
				class="btn"
				type="button"
				class:btn-primary={$pageNumber === page}
				class:btn-ghost={$pageNumber !== page}
				class:ellipse={page === null}
				on:click={() => handler.setPage(page)}
			>
				{page != null ?  new Intl.NumberFormat(languageTag() == 'en' ? 'en-US' : 'ar-SA').format(page) : '...'}
			</button>
		{/each}
		<button
			class="btn rounded-e-box rounded-s-none"
			type="button"
			class:btn-disabled={$pageNumber === $pageCount}
			class:btn-secondary={$pageNumber !== $pageCount}
			on:click={() => handler.setPage('next')}
		>
			{@html handler.i18n.next}
		</button>
	{/if}
</section>

<style lang="postcss">
	section {
		@apply flex flex-wrap;
	}
</style>
