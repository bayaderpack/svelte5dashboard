<script>
	import Crud from '$components/Crud.svelte'
	import SettingsPage from '$components/SettingsPage.svelte'

	let data = $state([
		{
			Name: 'English',
			Code: 'en',
		},
		{
			Name: 'Arabic',
			Code: 'ar',
		},
	])
</script>

<SettingsPage title="Languages">
	<Crud headers={['Name', 'Code']} {data} link="/customers/supliers/add" isFull={true} />
</SettingsPage>
