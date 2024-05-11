<script>
	import Icon from '@iconify/svelte'

	import countries from '$components/inputs/country'

	let selected = countries[0]
	let open = false
</script>

<p class="prose text-sm">Phone</p>
<div class="relative flex">
	<div
		class="input input-bordered relative flex w-full rounded-box  px-2"
	>
		<button
			type="button"
			on:click={() => (open = !open)}
			class="flex h-full items-center border-r border-gray-300 p-3"
			><Icon icon={`flagpack:${selected.code.toLowerCase()}`} class="mr-3"></Icon>
			{selected.dial_code}
			<Icon icon="bi:caret-down-fill" class="ml-3 text-2xl" /></button
		>
		{#if open}
			<div
				class="w-92 absolute top-full h-72 overflow-auto rounded-box bg-base-100 px-6 py-4 shadow-lg"
			>
				{#each countries as country}
					<div
						tabindex="0"
						role="button"
						class="flex items-center space-x-3 space-y-4 py-2 hover:bg-base-200"
						on:click={() => {
							selected = country
							open = false
						}}
						on:keydown={() => {
							selected = country
							open = false
						}}
					>
						<Icon icon={`flagpack:${country.code.toLowerCase()}`} class="mr-3"></Icon>
						<p>{country.name}</p>
						<p>+{country.dial_code}</p>
					</div>
				{/each}
			</div>
		{/if}
		<input
			name="email"
			type="tel"
			placeholder="Phone number"
			class="my-1 w-full  appearance-none px-6 focus:outline-none"
		/>
	</div>
</div>
