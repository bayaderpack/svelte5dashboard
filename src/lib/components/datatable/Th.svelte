<script lang="ts">
	import type { DataHandler, Field, Row } from '@vincjo/datatables'

	type T = $$Generic<Row>

	export let handler: DataHandler<T>
	export let orderBy: Field<T>
	export let identifier = orderBy?.toString()
	export let align: 'left' | 'right' | 'center' = 'left'
	export let rowSpan: number = 1

	const sort = handler.getSort()
</script>

<th
	on:click={() => handler.sort(orderBy, identifier)}
	class:sortable={orderBy}
	class:active={$sort.identifier === identifier}
	class={$$props.class ?? ''}
	rowspan={rowSpan}
>
	<div
		class="flex"
		style:justify-content={align === 'left'
			? 'flex-start'
			: align === 'right'
				? 'flex-end'
				: 'center'}
	>
		<strong>
			<slot />
		</strong>
		<span class:asc={$sort.direction === 'asc'} class:desc={$sort.direction === 'desc'}></span>
	</div>
</th>

<style lang="postcss">
	th {
		@apply bg-inherit px-3 py-3 whitespace-nowrap text-lg select-none border;
	}
	th:first-child {
		@apply rounded-s-box;
	}
	th:last-child {
		@apply rounded-e-box;
	}

	th.sortable {
		@apply cursor-pointer;
	}
	th strong {
		@apply whitespace-pre-wrap line-clamp-2;
	}
	th.sortable div.flex {
		@apply items-center p-0 h-full;
	}
	th.sortable span {
		@apply ps-3;
	}
	th.sortable span:before,
	th.sortable span:after {
		@apply block w-0 h-0;
		border: 4px solid transparent;
		content: '';
	}
	th.sortable span:before {
		@apply my-1 border-b-base-100;
	}
	th.sortable span:after {
		@apply my-1 border-t-base-100;
	}
	th.active.sortable span.asc:before {
		@apply border-b-base-content;
	}
	th.active.sortable span.desc:after {
		@apply border-t-base-content;
	}
	th:not(.sortable) span {
		@apply hidden;
	}
</style>
