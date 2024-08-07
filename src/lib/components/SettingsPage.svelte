<script lang="ts">
	interface MyProps {
		title: string
		addButtonText?: string
		addButtonLink?: string
		children: any
	}
	let { children, title, addButtonLink, addButtonText }: MyProps = $props()
</script>

<div class="flex justify-between">
	<h2 class="mb-3 text-3xl uppercase">{title}</h2>
	{#if addButtonLink && addButtonText}
		<a href={addButtonLink} class="btn btn-primary">{addButtonText}</a>
	{/if}
</div>
<div class="rounded-box p-3 md:p-5">
	{@render children?.()}
</div>
