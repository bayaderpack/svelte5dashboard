<script lang="ts">


	import { browser } from '$app/environment'
    import { onMount } from 'svelte'

	import type { DataHandler, Row } from '@vincjo/datatables'

	type T = $$Generic<Row>

	export let handler: DataHandler<T>
	export let small = false
    let aha = handler.getRowsPerPage()

	// const rowsPerPage = handler.getRowsPerPage()
	const defaultValue = 5
	let rowsPerPage = browser
		? Number(window.localStorage.getItem('per-page')) ?? defaultValue
		: defaultValue

	onMount(() => {
        aha.set(rowsPerPage)
    })

	const changeNumber = () => {
		handler.setPage(1)
		if (browser) {
			window.localStorage.setItem('per-page', String(rowsPerPage))
            
            aha.set(rowsPerPage)
		}
	}

	const options = [5, 10, 20, 50, 100]
</script>

<aside class={$$props.class ?? ''}>
	{#if !small}
		<span>{handler.i18n.show}</span>
	{/if}
	<select bind:value={rowsPerPage} on:change={() => changeNumber()}>
		{#each options as option}
			<option value={option}>
				{new Intl.NumberFormat('ar-SA').format(option)}
			</option>
		{/each}
	</select>
	{#if !small}
		<span>{handler.i18n.entries}</span>
	{/if}
</aside>

<style lang="postcss">
	aside {
		@apply flex justify-start items-center text-base-content mb-8;
	}
	select {
		@apply mx-3 select;
	}
</style>
