<script>
	import Icon from '@iconify/svelte'

	let isOn = $state(false)

	/**
	 * @param {number} length
	 */
	function makeid(length) {
		let result = ''
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
		const charactersLength = characters.length
		let counter = 0
		while (counter < length) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength))
			counter += 1
		}
		return result
	}

	let id = $state(makeid(5))
</script>

<label
	for={id}
	class="text-dark flex cursor-pointer select-none items-center dark:text-white"
>
	<div class="relative">
		<input type="checkbox" id={id} class="peer sr-only" bind:checked={isOn} />
		<div class="block h-8 w-14 rounded-full bg-base-200"></div>
		<div
			class="dot absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-base-100 transition peer-checked:translate-x-full peer-checked:bg-primary"
		>
			{#if !isOn}
				<Icon icon="bi:x" class="text-3xl"></Icon>
			{:else}
				<Icon icon="bi:check" class="text-3xl"></Icon>
			{/if}
		</div>
	</div>
</label>
