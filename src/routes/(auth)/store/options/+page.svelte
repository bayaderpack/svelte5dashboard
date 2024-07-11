<script lang="ts">
	import SettingsPage from '$components/SettingsPage.svelte'
    import Icon from "@iconify/svelte"
	let data = $state([
		{
			ID: 1,
			Name: 'Bajro',
			Type: 'Select',
			Order: 0,
			Filter: false,
		},
		{
			ID: 2,
			Name: 'Ajro',
			Type: 'Select',
			Order: 0,
			Filter: true,
		},
		{
			ID: 3,
			Name: 'Za',
			Type: 'Select',
			Order: 0,
			Filter: false,
		},
		{
			ID: 4,
			Name: 'za',
			Type: 'Select',
			Order: 0,
			Filter: true,
		},
	])

	import { DataHandler } from '@vincjo/datatables'
	import Th from '$lib/components/datatable/Th.svelte'
	import ThFilter from '$lib/components/datatable/ThFilter.svelte'
	import Tabela from '$lib/components/datatable/Tabela.svelte'
	import Swal from 'sweetalert2'

	// $inspect(data)

	const handler = new DataHandler(data, { rowsPerPage: 10 })
	const rows = handler.getRows()
</script>

<div class="mb-12 flex justify-end">
	<a href="/store/options/add" class="btn btn-success">Add new</a>
</div>
<SettingsPage title="Options">
	<!-- <Crud headers={['ID', 'Name', 'Type', 'Order', 'Filter']} {data} /> -->
	<Tabela {handler}>
		<table class="table">
			<thead>
				<tr class="bg-base-200 transition-all duration-300">
					<Th {handler} orderBy="ID">ID</Th>
					<Th {handler} orderBy="Name">Name</Th>
					<Th {handler} orderBy="Type">Type</Th>
					<Th {handler} orderBy="Order">Order</Th>
					<Th {handler} orderBy="Filter">Filter</Th>
					<th
						class="w-1/12 select-none whitespace-nowrap rounded-e-box border bg-inherit px-3 py-3 text-lg"
						>Action</th
					>
				</tr>
				<tr class="transition-all duration-300">
					<ThFilter {handler} filterBy="ID" />
					<ThFilter {handler} filterBy="Name" />
					<ThFilter {handler} filterBy="Type" />
					<ThFilter {handler} filterBy="Order" />
					<ThFilter {handler} filterBy="Filter" />
				</tr>
			</thead>
			<tbody>
				{#each $rows as row}
					<tr class="mx-5 hover:bg-base-300">
						<td class="border-r">{row.ID}</td>
						<td class="border-r">{row.Name.substring(0, 30) + '...'}</td>
                        <td class="border-r">{row.Type}</td>
                        <td class="border-r">{row.Order}</td>
                        <td class="border-r text-center"><Icon icon={row.Filter ? 'bi:check' : 'bi:x'} class="text-3xl"></Icon></td>
						<td class="flex space-x-2">
							<a href={`/admin/blog/${row.ID}`} class="btn btn-warning">Edit</a>
							<form
								action={`?/delete`}
								method="POST"
								onsubmit={(e) => {
									e.preventDefault()

									Swal.fire({
										title: 'Are you sure?',
										icon: 'warning',
										showCancelButton: true,
										confirmButtonColor: '#3085d6',
										cancelButtonColor: '#d33',
										confirmButtonText: 'Yes, delete it!',
									}).then((result) => {
										if (result.isConfirmed) {
											const form = e.target as HTMLFormElement
											form!.submit()
										}
									})
								}}
							>
								<input type="hidden" name="id" value={row.ID} />
								<button type="submit" class="btn btn-error">Delete</button>
							</form>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</Tabela>
</SettingsPage>

<style lang="postcss">
	td {
		@apply py-3;
	}
</style>
