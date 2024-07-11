<script lang="ts">
	import type { DataHandler, Row } from '@vincjo/datatables'

	type T = $$Generic<Row>

	export let handler: DataHandler<T>
	let value = ''

	handler.on('clearSearch', () => (value = ''))
</script>

<input
	class={$$props.class ?? ''}
	bind:value
	placeholder={handler.i18n.search}
	spellcheck="false"
	on:input={() => handler.search(value)}
/>
