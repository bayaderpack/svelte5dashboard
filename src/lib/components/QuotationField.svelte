<script lang="ts">
	let price = $state(0.0)
	let num = $state(2)
	let selected = $state(1)
	let input = $state<HTMLInputElement>()
	let inputValue = $state('')
	let type = 'select'
</script>

<!-- <label class="form-control w-full">
    <div class="label">
      <span class="label-text">What is your name?</span>
      <span class="label-text-alt">Top Right label</span>
    </div>
    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
    <div class="label">
      <span class="label-text-alt">Bottom Left label</span>
      <span class="label-text-alt">Bottom Right label</span>
    </div>
  </label> -->
<!-- <label class="input input-bordered flex items-center gap-2">
    <input type="text" class="grow" placeholder="Search" />
    <span class="badge badge-info">Optional</span>
</label> -->
{#if type == 'text'}
	<div class="group relative mt-4 max-w-xs">
		<input
			type="text"
			class="peer input input-bordered w-full"
			bind:this={input}
			bind:value={inputValue}
		/>

		<label
			for="Weight"
			class:top-2={inputValue != ''}
			class:-translate-y-6={inputValue != ''}
			class:scale-[1.15]={inputValue != ''}
			class:text-primary={inputValue != ''}
			class="badge absolute left-4 top-1/2 z-10 origin-[0] -translate-y-1/2 scale-[1.4] transform cursor-text select-none border-none duration-300 peer-focus:top-2 peer-focus:-translate-y-6 peer-focus:scale-[1.15] peer-focus:text-primary"
		>
			Weight
		</label>
		{#if num == 1}
			<div
				class="absolute right-1 top-1/2 -translate-y-1/2 border-none px-1 py-1 text-base-content peer-focus:text-primary"
			>
				kg
			</div>
		{/if}
		{#if num == 2}
			<div class="join absolute right-0 top-1/2 -translate-y-1/2 py-1 text-base-content">
				<!-- <input class="btn join-item rounded-l-none" type="radio" name="options" aria-label="%" />
			<input class="btn join-item" type="radio" name="options" aria-label="SAR" /> -->
				<div
					class="btn join-item rounded-l-none"
					class:bg-primary={selected == 1}
					onclick={(event) => {
						event.stopPropagation()
						selected = 1
					}}
					onkeydown={(event) => {
						event.stopPropagation()
						selected = 1
					}}
					onmousedown={(event) => {event.preventDefault(); event.stopPropagation(); input!.focus()}}
					role="button"
					tabindex="0"
				>
					%
				</div>
				<div
					class="btn join-item"
					class:bg-primary={selected == 2}
					onclick={() => (selected = 2)}
					onkeydown={() => (selected = 1)}
					onmousedown={(event) => {event.preventDefault(); event.stopPropagation(); input!.focus()}}
					role="button"
					tabindex="0"
				>
					SAR
				</div>
			</div>
		{/if}
	</div>
{:else if type == 'select'}
	<div class="group relative mt-4 max-w-xs">
		<div
			class="badge absolute left-4  z-10 origin-[0] transform cursor-text select-none border-none duration-300 top-2 -translate-y-6 scale-[1.15] text-primary"
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

<!-- <div class="flex w-full justify-between">
	<div class="flex">
		<label class="input input-bordered flex items-center gap-2">
			<input type="text" class="grow" placeholder="Search" />
			<span class="badge badge-info">Optional</span>
		</label>
	</div>
	<div class="font-semibold">{price} SAR</div>
</div> -->
