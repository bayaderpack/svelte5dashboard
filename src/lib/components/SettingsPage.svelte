<script lang="ts">
    interface MyProps {
        title: string,
        children: any
    }
	let { children, title }: MyProps = $props()
</script>

<h2 class="text-3xl uppercase mb-6">{title}</h2>

<div class="rounded-box bg-base-200 p-3 md:p-8">
	{@render children()}
</div>
