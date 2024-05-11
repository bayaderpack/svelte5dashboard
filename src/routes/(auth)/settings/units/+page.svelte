<script>
	import Crud from '$components/Crud.svelte'
	import SettingsPage from '$components/SettingsPage.svelte'

	let data = $state([
		{
			Name: 'Peace',
			'Single Factor': 1,
		},
		{
			Name: 'Sheet',
			'Single Factor': 1,
		},
		{
			Name: 'Roll',
			'Single Factor': 3000,
		},
		{
			Name: '1 Meter',
			'Single Factor': 1,
		},
	])
</script>

<SettingsPage title="Units">
	<Crud headers={['Name', 'Single Factor']} {data} link="/customers/supliers/add" isFull={true} />
</SettingsPage>
