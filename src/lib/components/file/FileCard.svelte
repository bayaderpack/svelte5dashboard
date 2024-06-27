<script lang="ts">
	import Icon from '@iconify/svelte'
	import type { Snippet } from 'svelte'

	interface MyProps {
		name: string
		type: string
		isFolder: boolean
		onclick?: (e: any) => void
		path: string
	}
	let { name, type, isFolder, path, onclick }: MyProps = $props()
</script>

<div class="card border border-base-300" {onclick} tabindex="-1" role="button" onkeydown={onclick}>
	<figure class="relative min-h-56 w-full">
		<div class="flex w-full flex-col items-center">
			{#if isFolder}
				<Icon icon="bi:folder" class="text-6xl"></Icon>
			{:else if type == 'zip' || type == 'rar' || type == '7z'}
				<Icon icon="formkit:zip" class="text-6xl"></Icon>
			{:else if type == 'sql'}
				<Icon icon="ph:file-sql-bold" class="text-6xl"></Icon>
			{:else if type == 'html'}
				<Icon icon="icomoon-free:html-five" class="text-6xl"></Icon>
			{:else if type == 'css'}
				<Icon icon="icomoon-free:css3" class="text-6xl"></Icon>
			{:else if type == 'sass'}
				<Icon icon="akar-icons:sass-fill" class="text-6xl"></Icon>
			{:else if type == 'scss'}
				<Icon icon="bi:filetype-scss" class="text-6xl"></Icon>
			{:else if type == 'pdf'}
				<div>
					<object title={name} data={path} type="application/pdf" width="100%" height="200">
						<embed src={path} type="application/pdf" />
					</object>
				</div>
			{:else if type == 'jpg' || type == 'jpeg' || type == 'avif' || type == 'webp' || type == 'gif' || type == 'JPG' || type == 'psd' || type == 'png'}
				<img src={path} alt={name} />
			{:else if type == 'md'}
				<Icon icon="simple-icons:mdbook" class="text-6xl"></Icon>
			{:else if type == 'json'}
				<Icon icon="simple-icons:json" class="text-6xl"></Icon>
			{:else if type == 'js' || type == 'ts'}
				<Icon icon="simple-icons:javascript" class="text-6xl"></Icon>
			{:else}
				<Icon icon="bi:file" class="text-6xl"></Icon>
			{/if}
		</div>
		<figcaption class="absolute bottom-0 left-0 w-full bg-base-300 px-8 py-2">{name}</figcaption>
	</figure>
</div>
