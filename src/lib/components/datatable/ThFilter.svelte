<script lang="ts">
	import type { DataHandler, Field, Row, Comparator } from '@vincjo/datatables'

	type T = $$Generic<Row>

	export let handler: DataHandler<T>
	export let filterBy: Field<T>
	export let align: 'left' | 'right' | 'center' = 'left'
	export let comparator: Comparator<T> | null = null

	let value: string = ''

	handler.on('clearFilters', () => (value = ''))
</script>

<th class={$$props.class ?? ''}>
	<input
		style:text-align={align}
		type="text"
		placeholder={handler.i18n.filter}
		spellcheck="false"
		bind:value
		on:input={() => handler.filter(value, filterBy, comparator!)}
	/>
</th>

<style lang="postcss">
	th {
		@apply border-b-base-content px-4;
	}
	input {

		@apply input input-bordered w-full my-2;
	}
	input::placeholder {
		@apply text-base-content text-sm;
	}

</style>
