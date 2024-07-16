<script>
	import Card from '$components/Card.svelte'
	import Hero from '$components/Hero.svelte'
	import Seo from '$components/Seo.svelte'
	// import { onMount } from 'svelte'

	// $effect(() => {
	// 	fetch('http://localhost:8080/api/v1/test-jwt', {
	// 		mode: 'cors',
	// 		credentials: 'include',
	// 	})
	// })
</script>

<!-- <Seo title="Bayaderpack" description="You think it we print it" /> -->
<!-- <svelte:head>
    <title>Bayaderpack</title>
    <meta name="description" content="You think it we print it" />
</svelte:head> -->
<div class="flex flex-col items-center justify-center px-16">
	<Hero />
	<p>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae placeat voluptas odio aut
		magnam laboriosam accusantium exercitationem debitis animi doloribus voluptate quibusdam quis
		cupiditate, commodi iusto veniam in perferendis esse.
	</p>

	<div class="flex justify-between gap-4">
		<Card name="mechanicer" />
		<Card name="firefighter" />
		<Card name="gardener" />
		<Card name="cop" />
	</div>
</div>
