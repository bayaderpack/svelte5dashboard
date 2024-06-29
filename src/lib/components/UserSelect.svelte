<script lang="ts">
	import Icon from '@iconify/svelte'
	import UserSelectCheckbox from './UserSelectCheckbox.svelte'
	// let options = $state([])
	let open = $state(false)
	let filter = $state('')
	let { show=false } = $props()
	const options = ['Boss Manager', 'umair aziz', 'ahmed eldeeb', 'Ahmed Al-Ahywi', 'hazem ziady']
	let selected = $state(options.map(() => false))
</script>

<div class="relative w-full">
	{#if !show}
	<button class="btn" onclick={() => (open = !open)}>
		Assign
		<Icon icon="mingcute:down-fill" class="text-2xl"></Icon>
	</button>
	{/if}

	{#if open || show}
		<div class:w-56={!show} class:w-full={show}  class="z-50 absolute mt-3 flex  flex-col gap-3 rounded-lg bg-white p-3 shadow-lg">
			<input
				bind:value={filter}
				placeholder="filter"
				class="-mx-3 border-b p-3 pt-0 outline-none"
				type="text"
			/>

			{#each options as opt, index}
				{#if opt.toLowerCase().includes(filter.toLowerCase())}
					<UserSelectCheckbox value={opt} bind:checked={selected[index]}></UserSelectCheckbox>
				{/if}
			{/each}
		</div>
	{/if}
</div>
