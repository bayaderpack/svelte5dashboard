<script lang="ts">
	import Icon from '@iconify/svelte'
	import FileCard from '$components/file/FileCard.svelte'
	import { browser } from '$app/environment'
	import Lottie from '$components/Lottie.svelte'

	let selected = $state('')

	interface DataType {
		name: string
		type: string
		isFolder: boolean
	}
	let isAllSelected = $state(false)
	let newData = $state<DataType[]>([])
	const getNewData = async () => {
		if (selected != '/' && selected != '' && selected) {
			const pathic = 'http://localhost:8080/api/v1/media?path=' + selected

			const res = await fetch(pathic)
			const data1 = await res.json()

			newData = data1.message.children ?? []
		} else {
			const pathic = 'http://localhost:8080/api/v1/media'
			const res = await fetch(pathic)
			const data1 = await res.json()
			newData = data1.message.children ?? []
		}
	}

	function removeLastPathSegment() {
		let parts = selected.split('/').filter((part) => part)

		if (parts.length > 1) {
			parts.pop()
		} else {
			parts = []
		}
		if (parts.length > 1) {
			selected = parts.join('/')
		} else {
			if (parts[0] != undefined) {
				selected = parts[0]
				selected = selected.slice(-1) === '/' ? selected : selected + '/'
			} else {
				selected = ''
			}
		}
		getNewData()
	}
</script>

<div class="min-h-[500px] w-full border-base-300">
	<div class="grid grid-cols-4">
		<div class="w-full lg:tooltip" data-tip="Go back">
			<button
				class="btn btn-ghost w-full"
				onclick={() => {
					removeLastPathSegment()
				}}
			>
				<Icon icon="icon-park-outline:return" class="text-3xl"></Icon>
			</button>
		</div>
		<button
			class="btn btn-ghost"
			onclick={() => {
				isAllSelected = !isAllSelected
			}}
		>
			Select all
		</button>
		<div class="w-full lg:tooltip" data-tip="Delete">
			<button
				class="btn btn-error w-full"
				onclick={() => {
					isAllSelected = !isAllSelected
				}}
			>
				<Icon icon="bi:trash" class="text-3xl"></Icon>
			</button>
		</div>
	</div>
	{#await browser ? getNewData() : Promise.resolve()}
		<p>loading</p>
	{:then}
		{#if newData && newData.length > 0}
			<div class="grid grid-cols-6 gap-4">
				<!-- Trick to fetch only on the client side -->

				{#each newData as file}
					<FileCard
						name={file.name}
						isFolder={file.isFolder}
						type={file.type}
						path={'http://localhost:8080/assets/european_honey/' + selected + file.name}
						isChecked={isAllSelected}
						onclick={() => {
							if (file.isFolder) {
								selected += file.name + '/'
								getNewData()
							}
						}}
					></FileCard>
				{/each}
			</div>
		{:else}
			<Lottie path="/nodata.json"></Lottie>
		{/if}
	{:catch}
		<div class="flex flex-col items-center justify-center">
			<Lottie path="/error.json" moreClass="w-1/2"></Lottie>
			<h1 class="text-8xl font-black">There is error on the server please contact server admin</h1>
		</div>
	{/await}
</div>
