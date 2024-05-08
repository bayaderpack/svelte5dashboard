<script>
    import Crud from "$lib/components/Crud.svelte"


    let data = $state([
		{
			Name: 'Peace',
            'Single Factor': 1
		},
		{
			Name: 'Sheet',
            'Single Factor': 1

		},
		{
			Name: 'Roll',
            'Single Factor': 3000

		},
		{
			Name: '1 Meter',
            'Single Factor': 1
		},
	])

</script>

<Crud headers={["Name","Single Factor"]} {data} link="/customers/supliers/add" isFull={true} />