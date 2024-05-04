<script>
	import Icon from '@iconify/svelte'

	let isOn = $state(false)
</script>

<label class="flex cursor-pointer select-none items-center text-base-content">
	<div class="relative">
		<input onclick={() => (isOn = !isOn)} type="checkbox" class="peer sr-only" />
		<div
			class:bg-base-200={!isOn}
			class:bg-primary={isOn}
			class="block h-10 w-16 rounded-full"
		></div>
		<div
			class="dot absolute left-1 top-1 flex h-8 w-9 items-center justify-center rounded-full bg-base-100 p-1 transition peer-checked:translate-x-1/2 peer-checked:bg-primary"
		>
			{#if isOn}
				<span class="text-sm"> ON </span>
			{:else}
				<span class="text-sm text-base-content"> OFF </span>
			{/if}
		</div>
	</div>
</label>
