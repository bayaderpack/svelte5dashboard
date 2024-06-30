<script lang="ts">
	import Icon from '@iconify/svelte'

	interface MyProps {}

	// const { title }: MyProps = $props()
	interface MyProps {
		children: any
		title: string,
		open?: boolean
	}
	let { children, title, open=true }: MyProps = $props()
</script>

<div>
	<details
		bind:open={open}
		class="group overflow-hidden rounded-box border border-base-300 [&_summary::-webkit-details-marker]:hidden"
	>
		<summary
			class="flex cursor-pointer items-center justify-between gap-2 p-4 text-base-content transition"
		>
			<span class="text-sm font-medium"> {title} </span>

			<span class="transition group-open:-rotate-180">
				<Icon icon="bi:caret-down-fill"></Icon>
			</span>
		</summary>

		<div class="border-t border-base-100 bg-base-100">
			<ul class="space-y-1 border-base-100 p-4">
				{@render children()}
			</ul>
		</div>
	</details>
</div>

