<script>
	import SettingsPage from '$components/SettingsPage.svelte'
	import Toggle from '$components/Toggle.svelte'
	import Icon from '@iconify/svelte'
	import Swal from 'sweetalert2'

	let { data } = $props()

	$inspect(data)
	const deleteRecord = () => {
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
				// data.splice(data.indexOf(index), 1)
				Swal.fire({
					title: 'Deleted!',
					text: 'Your record has been deleted.',
					icon: 'success',
				})
			}
		})
	}
	const editRecord = () => {}
</script>

<SettingsPage title="Admins List">
	<div class="flex flex-col items-end">
		<a href="/settings/admins/add" class="btn btn-primary mb-6">Add new</a>
		<div class="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
			{#each data.data.data as admin}
				<div class="card rounded-box border border-primary bg-base-100 p-6">
					<div class="flex flex-col">
						<div class="flex justify-between">
							<h3>{admin.firstname} {admin.lastname}</h3>

							<div class="flex items-center justify-end space-x-4">
								<button class="btn btn-success" onclick={() => editRecord()}>
									<Icon icon="bi:pen" class="text-3xl"></Icon>
								</button>
								<button class="btn btn-error">
									<Icon icon="bi:trash" class="text-3xl" onclick={() => deleteRecord()}></Icon>
								</button>

								<Toggle isOn={admin.status}></Toggle>
							</div>
						</div>
						<div class="divider"></div>
						<div class="flex justify-between">
							<div class="flex flex-col justify-between">
								<p>Username: <span class="font-semibold">{admin.username}</span></p>

								<p>Role: <span class="badge badge-primary">Admin</span></p>
							</div>
							<div class="flex flex-col justify-between">
								<p>Mobile: <span class="font-semibold">({admin.country_code}) {admin.mobile}</span></p>
							</div>
							<div class="flex flex-col justify-between">
								<p>Email:</p>
								<p class="font-semibold">{admin.email}</p>

								<p>Created at <span class="font-semibold">{new Intl.DateTimeFormat('en-US').format(new Date(admin.date_added))}</span></p>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</SettingsPage>
