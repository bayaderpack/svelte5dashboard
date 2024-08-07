<script lang="ts">
	import Icon from '@iconify/svelte'
	import UserSelectCheckbox from './UserSelectCheckbox.svelte'
	import { currentSelected } from './selectedUsers.svelte'
	// let options = $state([])
	let open = $state(false)
	let filter = $state('')

	interface Props {
		show?: boolean
		checked?: Array<any>
		selectedValues?: Array<any>
		options: Array<any>
			fields?: Array<any>
	}
	let { show = false,fields=[], checked = [],options = [], selectedValues = $bindable() }: Props = $props()
	// const options = ['Boss Manager', 'umair aziz', 'ahmed eldeeb', 'Ahmed Al-Ahywi', 'hazem ziady']
	let selected = $state(options.map((option) => (checked.includes(option) ? true : false)))
	// $inspect(options.filter((o, i) => selected[i]))
	$effect(() => {
		currentSelected.set(options.filter((o, i) => selected[i]))
		// new CustomEvent("ccc", new Cust options.filter((o, i) => selected[i]))
	})
	// $inspect("asda",currentSelected)
</script>

<div class="relative w-full">
	{#if !show}
		<button class="btn" onclick={() => (open = !open)}>
			Assign
			<Icon icon="mingcute:down-fill" class="text-2xl"></Icon>
		</button>
	{/if}

	{#if open || show}
		<div
			class:w-56={!show}
			class:w-full={show}
			class:absolute={!show}
			class:relative={show}
			class:shadow-lg={!show}
			class="z-50 mt-3 flex flex-col gap-3 rounded-box border bg-base-100 p-3"
		>
			<input
				bind:value={filter}
				placeholder="filter"
				class="-mx-3 border-b p-3 pt-0 outline-none"
				type="text"
			/>

			{#each options as opt, index}
				{#if [ 'firstname', 'lastname'].some(field => opt[field].toLowerCase().includes(filter.toLowerCase()))}
					<UserSelectCheckbox fields={fields.length == 1? opt[fields[0]] : [opt[fields[0]], opt[fields[1]]]} bind:checked={selected[index]}></UserSelectCheckbox>
				{/if}
			{/each}
		</div>
	{/if}
</div>
