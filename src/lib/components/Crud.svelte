<script lang="ts">
	import Icon from '@iconify/svelte'
	import Swal from 'sweetalert2'

	let rowsPerPage = $state(2)

	let activePage = $state(1)

	interface MyProps {
		headers: Array<string>
		data: Array<any>
		link: string
	}
	const { headers, data, link }: MyProps = $props()
	let search = $state('')
	const startIndex = $derived((activePage - 1) * rowsPerPage)
	const endIndex = $derived(startIndex + rowsPerPage)
	let dropdownOpen = $state(false)
	let updateDataAndPagination = $derived.by(() => {
		if (search == '') {
			return data.slice(startIndex, endIndex)
		} else {
			let newData = data.filter((item) => {
				// Check if any field (Name, Email, Sex) contains the search term
				return Object.values(item).some((value) =>
					String(value).toLowerCase().includes(search.toLowerCase()),
				)
			})
			return newData.slice(startIndex, endIndex)
		}
	})
	
	let totalData = $derived.by(() => {
		if(search == '') {
			return data.length
		} else {
			return updateDataAndPagination.length
		}
	})
	const pageCount = $derived(Math.ceil(totalData / rowsPerPage))

	


	const deleteRecord = (index: any) => {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#d33',
			cancelButtonColor: '#3085d6',
			confirmButtonText: 'Yes, delete it!',
		}).then((result) => {
			if (result.isConfirmed) {
				data.splice(data.indexOf(index), 1)
				Swal.fire({
					title: 'Deleted!',
					text: 'Your record has been deleted.',
					icon: 'success',
				})
			}
		})
	}

	let isAscending = $state(false)

	//Pass field to function and compare values and sort based on the values
	const sortFields = (field: string) => {
		isAscending = !isAscending
		data.sort(function (a, b) {
			if (a[field] < b[field]) {
				return isAscending ? -1 : 1
			}
			if (a[field] > b[field]) {
				return isAscending ? 1 : -1
			}
			return 0
		})
	}

	// function searchAllFields() {
	// 	console.log(search)
	// 	return data.filter((item) => {
	// 		// Check if any field (Name, Email, Sex) contains the search term
	// 		return Object.values(item).some((value) =>
	// 			String(value).toLowerCase().includes(search.toLowerCase()),
	// 		)
	// 	})
	// }

	
</script>

<div class="flex flex-col">
	<div class="container">
		<label class="input input-bordered flex items-center gap-2">
			<input
				type="text"
				class="grow"
				placeholder="Search"
				bind:value={search}
				
			/>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 16 16"
				fill="currentColor"
				class="h-4 w-4 opacity-70"
				><path
					fill-rule="evenodd"
					d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
					clip-rule="evenodd"
				/></svg
			>
		</label>
		<a href={link} class="btn btn-success float-right">Add new</a>
		<table
			class=" my-5 flex w-full flex-row overflow-hidden rounded-lg sm:bg-base-100 sm:shadow-lg"
		>
			<thead class="text-base-content">
				{#each updateDataAndPagination as rows}
					<tr
						class="flex-no wrap mb-2 flex flex-col rounded-l-lg bg-base-200 sm:mb-0 sm:table-row sm:rounded-none"
					>
						{#each headers as header}
							<th class="p-3 text-left" onclick={() => sortFields(header)}>{header}</th>
						{/each}
						<th class="w-[100px] p-6 text-left md:p-3">Actions</th>
					</tr>
				{/each}
			</thead>
			<tbody class="flex-1 sm:flex-none">
				{#each updateDataAndPagination as dat, ind}
					<tr class="flex-no wrap mb-2 flex flex-col sm:mb-0 sm:table-row">
						{#each headers as head}
							<td class="truncate border border-base-100 p-3 hover:bg-base-300"
								>{dat[head as keyof typeof dat]}</td
							>
						{/each}
						<td class="flex cursor-pointer space-x-3 border border-base-100 p-3">
							<button class="btn btn-warning p-3 text-white">
								<Icon icon="bi:pen"></Icon>
							</button>
							<button class="btn btn-error p-3 text-white" onclick={() => deleteRecord(dat)}>
								<Icon icon="bi:trash"></Icon>
							</button>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
<div class="flex justify-between px-16">
	<div class="relative w-56">
		<button
			onclick={() => (dropdownOpen = !dropdownOpen)}
			class="inline-flex h-10 items-center justify-center rounded-md border bg-base-100 px-4 py-2 text-sm font-medium transition-colors hover:bg-base-200 focus:bg-base-300 focus:outline-none focus:ring-2 focus:ring-base-200 focus:ring-offset-2 active:bg-base-300 disabled:pointer-events-none disabled:opacity-50"
			>{rowsPerPage} per page</button
		>

		{#if dropdownOpen}
			<div class="absolute left-1/2 top-0 z-50 mt-12 w-56 -translate-x-1/2">
				<div
					class="mt-1 rounded-md border border-base-200 bg-base-200 p-1 text-sm text-base-content shadow-md"
				>
					<button
						onclick={() => {
							rowsPerPage = 2
							dropdownOpen = false
						}}
						class="group relative flex w-full cursor-default select-none items-center justify-between rounded px-2 py-1.5 outline-none hover:bg-neutral-100 hover:text-neutral-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
					>
						<span>2</span>
					</button>
					<button
						onclick={() => {
							rowsPerPage = 3
							dropdownOpen = false
						}}
						class="group relative flex w-full cursor-default select-none items-center justify-between rounded px-2 py-1.5 outline-none hover:bg-neutral-100 hover:text-neutral-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
					>
						<span>3</span>
					</button>
				</div>
			</div>
		{/if}
	</div>
	<div class="flex">
		<button
			onclick={() => {
				activePage > 1 ? (activePage -= 1) : (activePage = pageCount)
			}}
			class="btn card grid h-12 w-12 place-content-center p-3"
		>
			<Icon icon="bi:caret-left"></Icon>
		</button>
		{#each new Array(pageCount) as page, index}
			<button
				class="btn card grid h-12 w-12 place-content-center p-3"
				class:btn-ghost={index + 1 != activePage}
				class:btn-primary={index + 1 == activePage}
				onclick={() => (activePage = index + 1)}>{index + 1}</button
			>
		{/each}
		<button
			onclick={() => {
				activePage < pageCount ? (activePage += 1) : (activePage = 1)
			}}
			class="btn card grid h-12 w-12 place-content-center p-3"
		>
			<Icon icon="bi:caret-right"></Icon>
		</button>
	</div>
</div>

<style>
	@media (min-width: 640px) {
		table {
			display: inline-table !important;
		}

		thead tr:not(:first-child) {
			display: none;
		}
	}

	td:not(:last-child) {
		border-bottom: 0;
	}

	th:not(:last-child) {
		border-bottom: 2px solid rgba(0, 0, 0, 0.1);
	}
</style>
