<script lang="ts">
	import type { HTMLDialogAttributes } from 'svelte/elements'
	import type { Snippet } from 'svelte'

	interface Props extends HTMLDialogAttributes {
		children?: Snippet
		open: boolean
	}

	let { children, open = $bindable(), ...rest }: Props = $props()

	let dialog = $state<HTMLDialogElement | null>(null)

	$effect(() => {
		if (open) dialog?.showModal()
		else dialog?.close()
	})

	let coreStyles =
		'fixed inset-0 bg-card text-foreground w-[600px] max-w-2xl rounded-md p-6 open:animate-fade-in backdrop:animate-backdrop-fade backdrop:backdrop-brightness-50 outline-none shadow-xl'
	let extraStyles = rest.class ? ' ' + rest.class : ''
</script>

<dialog
	{...rest}
	bind:this={dialog}
	class={coreStyles + extraStyles}
	onclose={() => (open = false)}
>
	{@render children?.()}
	<button onclick={() => (open = false)} class="btn btn-ghost float-right">Close</button>
</dialog>
