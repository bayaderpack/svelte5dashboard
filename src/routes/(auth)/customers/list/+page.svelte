<script>
	import Crud from '$components/Crud.svelte'
	import SettingsPage from '$components/SettingsPage.svelte'

	let data = $state([
		{
			Name: 'Bajro',
			Email: 'bajro0@gmail.com',
			Sex: 'Male',
		},
		{
			Name: 'Ajro',
			Email: 'bajro2@gmail.com',
			Sex: 'Male',
		},
		{
			Name: 'Za',
			Email: 'bajro3@gmail.com',
			Sex: 'Male',
		},
		{
			Name: 'za',
			Email: 'bajro4@gmail.com',
			Sex: 'Female',
		},
	])
</script>

<SettingsPage title="Customers list">
	<Crud headers={['Name', 'Email', 'Sex']} {data} link="/customers/list/add" />
</SettingsPage>
