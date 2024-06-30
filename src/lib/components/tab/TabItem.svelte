<script lang="ts">
	import type { Snippet } from 'svelte'
	import { getContext } from 'svelte'
	import type { TabCtxType } from './Tabs.svelte'
	import { writable } from 'svelte/store'
	import { twMerge } from 'tailwind-merge'
	interface Props {
		children?: Snippet
		titleSlot?: Snippet
		open?: boolean
		title?: string
		activeClasses?: string
		inactiveClasses?: string
		defaultClass?: string
		class?: string
		disabled?: boolean
	}

	let {
		children,
		titleSlot,
		open = false,
		title = 'Tab title',
		activeClasses,
		inactiveClasses,
		defaultClass,
		class: className,
		disabled,
		...attributes
	}: Props = $props()

	let defaultCls: string = twMerge(
		'btn  w-full h-full',
		defaultClass,
	)

	const ctx = getContext<TabCtxType>('ctx') ?? {}
	const selected = ctx.selected ?? writable<HTMLElement>()

	function init(node: HTMLElement) {
		selected.set(node)

		const destroy = selected.subscribe((x) => {
			if (x !== node) {
				open = false
			}
		})

		return { destroy }
	}
	let buttonClass = $state('')
// $inspect(ctx.activeClasses)
	$effect(() => {
		
		buttonClass = twMerge(
			defaultCls,
			open ? twMerge(ctx.activeClasses,activeClasses ): twMerge(ctx.inactiveClasses,inactiveClasses ),
			// open && twMerge(ctx.activeClasses,activeClasses ) ,
		)
	})
	// console.log(activeClasses)
</script>

<li class={twMerge('group w-full', className)} role="presentation">
	<button type="button" onclick={() => (open = true)} role="tab" {disabled} class={buttonClass}>
		{#if titleSlot}
			{@render titleSlot()}
		{:else}
			{title}
		{/if}
	</button>

	{#if open && children}
		<div class="tab_content_placeholder hidden">
			<div use:init>
				{@render children()}
			</div>
		</div>
	{/if}
</li>


