<script lang="ts">
	import Icon from '@iconify/svelte'
	import FileCard from '$components/file/FileCard.svelte'
	import { browser } from '$app/environment'
	import Lottie from '$components/Lottie.svelte'
	import { SvelteSet  as Sett } from 'svelte/reactivity'
	import Modal from '$components/Modal.svelte'
	import Swal from 'sweetalert2'
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
			const pathic = 'http://localhost:8080/api/media/?path=' + selected

			const res = await fetch(pathic)
			const data1 = await res.json()

			newData = data1.data.children ?? []
		} else {
			const pathic = 'http://localhost:8080/api/media/'
			const res = await fetch(pathic)
			const data1 = await res.json()
			newData = data1.data.children ?? []
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
	let selectedFiles = new Sett()

	const addElement = (el: string) => {
		console.log(el)

		if (selectedFiles.has(el)) {
			selectedFiles.delete(el)
		} else {
			selectedFiles.add(el)
		}
	}
	let modalOpen = $state(false)
	let folderName = $state()

	const createFolder = async () => {
		if (folderName && folderName != '') {
			const pathic = 'http://localhost:8080/api/media/create?path=' + selected + folderName
			const res = await fetch(pathic)
			if (res.ok) {
				Swal.fire({
					icon: 'success',
					title: 'Folder is created 😀',
					showConfirmButton: false,
					timer: 2500,
				})
				modalOpen = false
				folderName = ''
				getNewData()
			} else {
				const data1 = await res.json()
				console.log(data1)
				Swal.fire({
					icon: 'error',
					title: 'Folder cant be created 😥',
					html: `
					<h2 class="text-2xl font-black">Error is:  ${data1}</h2>
					`,
					showConfirmButton: false,
					timer: 2500,
				})
				modalOpen = false
				folderName = ''
			}
		}
	}

	let renameFolderNameOld = $state()
	let renameFolderNameNew = $state()
	const renameFolder = () => {
		if (renameFolderNameNew && renameFolderNameNew != '') {
		}
	}
	const filecontext = (e: MouseEvent, file: DataType) => {
		e.preventDefault()
		const div = document.createElement('div')

		div.classList.add(
			'rounded-box',
			'bg-base-200',
			'border',
			'px-8',
			'flex',
			'flex-col',
			'space-y-4',
		)

		// div.appendChild()
	}
</script>

<div class="min-h-[500px] w-full border-base-300">
	<div class="grid grid-cols-5 mb-8 gap-4">
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
		<div class="w-full lg:tooltip" data-tip="Create new folder">
			<button
				class="btn btn-ghost w-full"
				onclick={() => {
					modalOpen = !modalOpen
				}}><Icon icon="material-symbols:create-new-folder-rounded" class="text-3xl"></Icon></button
			>

			<Modal open={modalOpen}>
				<div class="flex flex-col items-center space-y-5">
					<label class="form-control w-full max-w-xs">
						<div class="label">
							<span class="label-text">Folder name</span>
						</div>
						<input
							type="text"
							bind:value={folderName}
							placeholder="Folder name"
							class="input input-bordered w-full max-w-xs"
						/>
					</label>
					<button onclick={() => createFolder()} class="btn btn-success btn-block max-w-xs"
						>Create folder</button
					>
				</div>
			</Modal>
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
				<!-- {JSON.stringify(Array.from(selectedFiles))} -->
				{#each newData as file}
					<div class="relative" oncontextmenu={(e) => filecontext(e, file)} role="dialog">
						<FileCard
							name={file.name}
							isFolder={file.isFolder}
							type={file.type}
							path={'http://localhost:8080/static/' + selected + file.name}
							onclick={() => {
								if (file.isFolder) {
									selected += file.name + '/'
									getNewData()
								}
							}}
						></FileCard>
						<div class="form-control absolute right-1 top-1">
							<label class="label cursor-pointer">
								<input
									type="checkbox"
									checked={isAllSelected ? true : false}
									onclick={() => {
										addElement(selected + file.name)
									}}
									class="checkbox-primary checkbox"
								/>
							</label>
						</div>
						<div class="absolute bottom-1 right-1 cursor-pointer">
							<Icon
								icon="mingcute:download-3-fill"
								class="text-3xl text-emerald-800"
								onclick={() => {
									fetch(
										'http://localhost:8080/api/media/download?files=' +
										selected + file.name,
									)
										.then((raw) => {
											return raw.blob()
										})
										.then((data) => {
											const imageBase64 = URL.createObjectURL(data)
											const a = document.createElement('a')
											a.style.setProperty('display', 'none')
											document.body.appendChild(a)
											a.download =
												`http://localhost:8080/api/media/download?files=${selected + file.name}`.replace(
													/^.*[\\\/]/,
													'',
												)
											a.href = imageBase64
											a.click()
											a.remove()
										})
								}}
							></Icon>
						</div>
					</div>
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
