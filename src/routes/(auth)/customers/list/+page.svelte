<script>
    import Crud from "$lib/components/Crud.svelte"


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
			Name: 'Jro',
			Email: 'bajro3@gmail.com',
			Sex: 'Male',
		},
		{
			Name: 'Ro',
			Email: 'bajro4@gmail.com',
			Sex: 'Female',
		},
	])

</script>

<Crud headers={["Name", "Email", "Sex"]} {data} link="/customers/list/add" />