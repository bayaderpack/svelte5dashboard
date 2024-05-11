<script lang="ts">
	import Effect from '$components/Effect.svelte'

	interface MyProps {
		title: string
		children: any
	}

	let { title, children }: MyProps = $props()
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content="Product page with filters" />
</svelte:head>
<div class="container mx-auto mt-24">
	<article class="prose max-w-full">
		<div class="flex space-x-24">
			<Effect />
			<h1 class="z-10 text-6xl uppercase">{title}</h1>
		</div>

		<div class="rounded-box bg-base-100 p-8 md:p-16">
			{@render children()}
		</div>
	</article>
</div>
