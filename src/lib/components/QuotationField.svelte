<script lang="ts">
	let price = $state(0.0)
	// let num = $state(2)
	let selected = $state(1)
  
	let input = $state<HTMLInputElement>()
	let inputValue = $state('')

	interface Props {
		type?: string
		sufixes: Array<any>
		sup?: string
        isActive?: boolean
	}
	let { type = 'text', sufixes = [], sup, isActive=true }: Props = $props()
	let num = $derived(sufixes.length)
</script>

<div class="flex gap-3 items-center w-full">
	<div>
		<input type="checkbox" name="" id="item" class="peer hidden" bind:checked={isActive} />
		<label for="item" class="btn peer-checked:btn-primary">Item</label>
	</div>

	{#if type == 'text' && isActive}
		<div class="group relative max-w-xs ">
			<input
				type="text"
				class="peer input input-bordered w-full"
                id="Weight"
                
				bind:this={input}
				bind:value={inputValue}
			/>

			<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
			<label
				for="Weight"
				class:top-2={inputValue != ''}
				class:-translate-y-6={inputValue != ''}
				class:scale-[1.15]={inputValue != ''}
				class:text-primary={inputValue != ''}

               
				class="badge  absolute left-4 top-1/2 z-10 origin-[0] -translate-y-1/2 scale-[1.4] transform cursor-text select-none border-none duration-300 peer-focus:top-2 peer-focus:-translate-y-6 peer-focus:scale-[1.15] peer-focus:text-primary"
			>
				Weight
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
				<div class="join absolute right-0 top-1/2 -translate-y-1/2 py-1 text-base-content ">
					{#each sufixes as sufix, index}
						<button
							class:rounded-s-none={index == 0}
							class="btn join-item hover:btn-secondary"
							class:btn-primary={selected == index}
							onclick={(event) => {
								event.stopPropagation()
								selected = index
							}}
							onkeydown={(event) => {
								event.stopPropagation()
								selected = index
							}}
							onmousedown={(event) => {event.preventDefault(); event.stopPropagation(); input!.focus()}}

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
	{:else if type == 'select' && isActive}
		<div class="group relative mt-4 max-w-xs">
			<div
				class="badge absolute left-4 top-2 z-10 origin-[0] -translate-y-6 scale-[1.15] transform cursor-text select-none border-none text-primary duration-300"
			>
				Weight
			</div>
			<select class="select select-bordered w-full max-w-xs">
				<option disabled selected>Who shot first?</option>
				<option>Han Solo</option>
				<option>Greedo</option>
			</select>
		</div>
	{/if}
</div>
<p class="p-3 text-sm text-error">Greska u systemu</p>
