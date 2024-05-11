<script>
	import Crud from '$components/Crud.svelte'
	import SettingsPage from '$components/SettingsPage.svelte'

	let data = $state([
		{
			ID: 1,
			Name: 'Bajro',
		},
		{
			ID: 2,
			Name: 'Ajro',
		},
		{
			ID: 3,
			Name: 'Za',
		},
		{
			ID: 4,
			Name: 'za',
		},
	])
</script>

<SettingsPage title="Customers groups">
	<Crud headers={['ID', 'Name']} {data} link="/customers/groups/add" />
</SettingsPage>
