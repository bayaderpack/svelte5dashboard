<script lang="ts">
	let price = $state(0.0)
	// let num = $state(2)
	let selected = $state(1)

	let input = $state<HTMLInputElement>()
	let inputValue = $state('')

	interface Props {
		type?: string
		sufixes?: Array<any>
		sup?: string
		isActive?: boolean
		name?: string
		item?: string
		checkable?: boolean
		selectOptions?: Array<any>
	}
	let {
		type = 'text',
		sufixes = [],
		sup,
		isActive = true,
		item = 'Item',
		name = 'Weight',
		checkable = true,
		selectOptions = [],
	}: Props = $props()
	let num = $derived(sufixes.length)
	let id = crypto.randomUUID()
	let itemActive = crypto.randomUUID()
</script>

<div class="mb-6 flex w-full items-end gap-3">
	{#if checkable}
		<div class="w-1/3 max-w-28">
			<input type="checkbox" name="" id={itemActive} class="peer hidden" bind:checked={isActive} />
			<label for={itemActive} class="btn btn-sm w-full peer-checked:btn-primary">{item}</label>
		</div>
	{:else}
		<button class="btn btn-primary btn-sm w-1/3 max-w-28">{item}</button>
	{/if}

	{#if (type == 'text' && isActive) || (type == 'text' && !checkable)}
		<div class="group relative w-1/3">
			<input
				type="text"
				class="peer input input-sm input-bordered w-full"
				{id}
				bind:this={input}
				bind:value={inputValue}
			/>

			<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
			<label
				for={id}
				class:top-2={inputValue != ''}
				class:-translate-y-6={inputValue != ''}
				class:scale-[1.15]={inputValue != ''}
				class:text-primary={inputValue != ''}
				class="badge absolute left-4 top-1/2 z-10 origin-[0] -translate-y-1/2 scale-[1.4] transform cursor-text select-none border-none duration-500 peer-focus:top-2 peer-focus:-translate-y-6 peer-focus:scale-[1.15] peer-focus:text-primary"
			>
				{name}
			</label>
			{#if num == 1}
				<div
					class="absolute right-1 top-1/2 -translate-y-1/2 border-none px-1 py-1 text-base-content peer-focus:text-primary"
				>
					{sufixes[0]}
					{#if sup}
						<sup>{sup}</sup>
					{/if}
				</div>
			{/if}
			{#if num > 1}
				<div class="join absolute right-0 top-1/2 -translate-y-1/2 py-1 text-base-content">
					{#each sufixes as sufix, index}
						<button
							class:rounded-s-none={index == 0}
							class="btn join-item btn-sm hover:btn-secondary"
							class:btn-primary={selected == index}
							onclick={(event) => {
								event.stopPropagation()
								selected = index
							}}
							onkeydown={(event) => {
								event.stopPropagation()
								selected = index
							}}
							onmousedown={(event) => {
								event.preventDefault()
								event.stopPropagation()
								input!.focus()
							}}
						>
							{sufix}
							{#if sup && index == 0}
								<sup>{sup}</sup>
							{/if}
						</button>
					{/each}
				</div>
			{/if}
		</div>
	{:else if (type == 'select' && isActive) || (type == 'select' && !checkable)}
		<div class="group relative mt-4 flex w-1/3 items-end">
			<div
				class="badge absolute left-4 top-2 z-10 origin-[0] -translate-y-6 scale-[1.15] transform cursor-text select-none border-none text-primary duration-300"
			>
				{name}
			</div>
			<select class="select select-bordered select-sm w-full">
				{#each selectOptions as option}
					<option>{option}</option>
				{/each}
			</select>
		</div>
	{/if}
	<p class="ml-auto">{price}</p>
</div>
<!-- <p class="p-3 text-sm text-error">Greska u systemu</p> -->
