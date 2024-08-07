<script context="module" lang="ts">
	import { writable, type Writable } from 'svelte/store'

	export interface TabCtxType {
		activeClasses: string
		inactiveClasses: string
		selected: Writable<HTMLElement>
	}
</script>

<script lang="ts">
	import type { Snippet } from 'svelte'
	import { twMerge } from 'tailwind-merge'
	import { setContext } from 'svelte'

	interface Props {
		children: Snippet
		style?: 'full' | 'pill' | 'underline' | 'none'
		defaultClass?: string
		contentClass?: string
		divider?: boolean
		activeClasses?: string
		inactiveClasses?: string
		class?: string
	}
	let {
		children,
		style = 'none',
		defaultClass,
		contentClass,
		divider = true,
		activeClasses,
		inactiveClasses,
		class: classname,
		...attributes
	}: Props = $props()

	let defaultCls: string = twMerge('flex space-x-2', defaultClass)
	let contentCls: string = twMerge('  rounded-box ', contentClass)
	let activeCls: string = twMerge(
		'',
		activeClasses,
	)
	let inactiveCls: string = twMerge(
		'',
		inactiveClasses,
	)

	// styles
	const styledActiveClasses = {
		full: 'p-4 w-full group-first:rounded-s-lg group-last:rounded-e-lg text-base-content bg-base-100 focus:ring-4 focus:ring-primary-300 focus:outline-none',
		pill: 'p-4',
		underline: 'p-4 text-base-content border-b-2 border-primary',
		none: '',
	}

	const styledInactiveClasses = {
		full: 'p-4 w-full group-first:rounded-s-lg group-last:rounded-e-lg bg-base-100 text-base-content focus:ring-4 focus:ring-primary-300 focus:outline-none',
		pill: 'p-4',
		underline: 'p-4 border-b-2 border-transparent  hover:border-gray-300 text-base-content',
		none: '',
	}

	const ctx: TabCtxType = {
		activeClasses: styledActiveClasses[style] || activeCls,
		inactiveClasses: styledInactiveClasses[style] || inactiveCls,
		selected: writable<HTMLElement>(),
	}

	setContext('ctx', ctx)

	function init(node: HTMLElement) {
		const destroy = ctx.selected.subscribe((x: HTMLElement) => {
			if (x) node.replaceChildren(x)
		})
		return { destroy }
	}

	let ulClass = twMerge(defaultCls, style === 'underline' && '-mb-px', classname)
</script>

<ul class={ulClass}>
	{@render children()}
</ul>
{#if divider}
	<div class="bg-base-100 "></div>
{/if}
<div class={contentCls} role="tabpanel" aria-labelledby="id-tab" use:init></div>
