<script>
    import Crud from "$lib/components/Crud.svelte"


    let data = $state([
		{
			Name: 'English',
            Code: 'en'
		},
		{

			Name: 'Arabic',
            Code: 'ar'
		},
	])

</script>

<Crud headers={["Name","Code"]} {data} link="/customers/supliers/add" isFull={true} />