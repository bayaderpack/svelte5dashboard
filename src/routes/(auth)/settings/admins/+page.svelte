<script>
	import SettingsPage from '$components/SettingsPage.svelte'
	import Toggle from '$components/Toggle.svelte'
	import Icon from '@iconify/svelte'
	import Swal from 'sweetalert2'

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
		<button class="btn btn-primary mb-6">Add new</button>
		<div class="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
			<div class="card rounded-box border border-primary bg-base-100 p-6">
				<div class="flex flex-col">
					<div class="flex justify-between">
						<h3>Boss Manager</h3>

						<div class="flex items-center justify-end space-x-4">
							<button class="btn btn-success" onclick={() => editRecord()}>
								<Icon icon="bi:pen" class="text-3xl"></Icon>
							</button>
							<button class="btn btn-error">
								<Icon icon="bi:trash" class="text-3xl" onclick={() => deleteRecord()}></Icon>
							</button>

							<Toggle></Toggle>
						</div>
					</div>
					<div class="divider"></div>
					<div class="flex justify-between">
						<div class="flex flex-col justify-between">
							<p>Username: <span class="font-semibold">admin</span></p>

							<p>Role: <span class="badge badge-primary">Admin</span></p>
						</div>
						<div class="flex flex-col justify-between">
							<p>Mobile: <span class="font-semibold">(966) 57 057 1870</span></p>
						</div>
						<div class="flex flex-col justify-between">
							<p>Email:</p>
							<p class="font-semibold">bayader.dev@gmail.com</p>

							<p>Created at <span class="font-semibold">13.04.2023</span></p>
						</div>
					</div>
				</div>
			</div>
			<div class="card rounded-box border border-primary bg-base-100 p-6">
				<div class="flex flex-col">
					<div class="flex justify-between">
						<h3>Boss Manager</h3>

						<div class="flex items-center justify-end space-x-4">
							<button class="btn btn-success" onclick={() => editRecord()}>
								<Icon icon="bi:pen" class="text-3xl"></Icon>
							</button>
							<button class="btn btn-error">
								<Icon icon="bi:trash" class="text-3xl" onclick={() => deleteRecord()}></Icon>
							</button>
							<Toggle></Toggle>
						</div>
					</div>
					<div class="divider"></div>
					<div class="flex justify-between">
						<div class="flex flex-col justify-between">
							<p>Username: <span class="font-semibold">admin</span></p>

							<p>Role: <span class="badge badge-primary">Admin</span></p>
						</div>
						<div class="flex flex-col justify-between">
							<p>Mobile: <span class="font-semibold">(966) 57 057 1870</span></p>
						</div>
						<div class="flex flex-col justify-between">
							<p>Email:</p>
							<p class="font-semibold">bayader.dev@gmail.com</p>

							<p>Created at <span class="font-semibold">13.04.2023</span></p>
						</div>
					</div>
				</div>
			</div>
			<div class="card rounded-box border border-primary bg-base-100 p-6">
				<div class="flex flex-col">
					<div class="flex justify-between">
						<h3>Boss Manager</h3>

						<div class="flex items-center justify-end space-x-4">
							<button class="btn btn-success" onclick={() => editRecord()}>
								<Icon icon="bi:pen" class="text-3xl"></Icon>
							</button>
							<button class="btn btn-error">
								<Icon icon="bi:trash" class="text-3xl" onclick={() => deleteRecord()}></Icon>
							</button>
							<Toggle></Toggle>
						</div>
					</div>
					<div class="divider"></div>
					<div class="flex justify-between">
						<div class="flex flex-col justify-between">
							<p>Username: <span class="font-semibold">admin</span></p>

							<p>Role: <span class="badge badge-primary">Admin</span></p>
						</div>
						<div class="flex flex-col justify-between">
							<p>Mobile: <span class="font-semibold">(966) 57 057 1870</span></p>
						</div>
						<div class="flex flex-col justify-between">
							<p>Email:</p>
							<p class="font-semibold">bayader.dev@gmail.com</p>

							<p>Created at <span class="font-semibold">13.04.2023</span></p>
						</div>
					</div>
				</div>
			</div>
			<div class="card rounded-box border border-primary bg-base-100 p-6">
				<div class="flex flex-col">
					<div class="flex justify-between">
						<h3>Boss Manager</h3>

						<div class="flex items-center justify-end space-x-4">
							<button class="btn btn-success" onclick={() => editRecord()}>
								<Icon icon="bi:pen" class="text-3xl"></Icon>
							</button>
							<button class="btn btn-error">
								<Icon icon="bi:trash" class="text-3xl" onclick={() => deleteRecord()}></Icon>
							</button>
							<Toggle></Toggle>
						</div>
					</div>
					<div class="divider"></div>
					<div class="flex justify-between">
						<div class="flex flex-col justify-between">
							<p>Username: <span class="font-semibold">admin</span></p>

							<p>Role: <span class="badge badge-primary">Admin</span></p>
						</div>
						<div class="flex flex-col justify-between">
							<p>Mobile: <span class="font-semibold">(966) 57 057 1870</span></p>
						</div>
						<div class="flex flex-col justify-between">
							<p>Email:</p>
							<p class="font-semibold">bayader.dev@gmail.com</p>

							<p>Created at <span class="font-semibold">13.04.2023</span></p>
						</div>
					</div>
				</div>
			</div>
			<div class="card rounded-box border border-primary bg-base-100 p-6">
				<div class="flex flex-col">
					<div class="flex justify-between">
						<h3>Boss Manager</h3>

						<div class="flex items-center justify-end space-x-4">
							<button class="btn btn-success" onclick={() => editRecord()}>
								<Icon icon="bi:pen" class="text-3xl"></Icon>
							</button>
							<button class="btn btn-error">
								<Icon icon="bi:trash" class="text-3xl" onclick={() => deleteRecord()}></Icon>
							</button>
							<Toggle></Toggle>
						</div>
					</div>
					<div class="divider"></div>
					<div class="flex justify-between">
						<div class="flex flex-col justify-between">
							<p>Username: <span class="font-semibold">admin</span></p>

							<p>Role: <span class="badge badge-primary">Admin</span></p>
						</div>
						<div class="flex flex-col justify-between">
							<p>Mobile: <span class="font-semibold">(966) 57 057 1870</span></p>
						</div>
						<div class="flex flex-col justify-between">
							<p>Email:</p>
							<p class="font-semibold">bayader.dev@gmail.com</p>

							<p>Created at <span class="font-semibold">13.04.2023</span></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</SettingsPage>
