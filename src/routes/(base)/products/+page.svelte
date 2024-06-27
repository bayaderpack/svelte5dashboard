<!-- 
<script>
	import Filters from '$components/filters/Filters.svelte'
	import Filter from '$components/filters/Filter.svelte'
	import Icon from '@iconify/svelte'
	import ProductCard from '$components/ProductCard.svelte'
</script>

<section>
	<div
		class="mx-auto flex min-h-screen max-w-screen-xl flex-col justify-start px-4 py-8 sm:px-6 sm:py-12 lg:px-8"
	>
		<header>
			<h2 class="mb-6 text-xl font-bold text-base-content sm:text-3xl">Bags</h2>
		</header>

		<div class="mt-8 block lg:hidden">
			<button
				class="flex cursor-pointer items-center gap-2 border-b border-base-300 pb-1 text-base-content transition hover:border-base-100"
			>
				<span class="text-sm font-medium"> Filters & Sorting </span>

				<Icon icon="bi:filter"></Icon>
			</button>
		</div>

		<div class="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
			<div class="-mt-5 hidden space-y-4 lg:block">
				<div>
					<p class="block text-xs font-medium text-base-content">Filters</p>

					<div class="mt-1 space-y-2">
						<Filters title="Print">
							<Filter name="Plain (1)"></Filter>
							<Filter name="One Color (1)"></Filter>
							<Filter name="CYMK (2)"></Filter>
						</Filters>

						<Filters title="Foil">
							<Filter name="Gold(1)"></Filter>
							<Filter name="Silver(2)"></Filter>
							<Filter name="None(3)"></Filter>
						</Filters>

						<Filters title="Carton type">
							<Filter name="Ivercote (1)"></Filter>
						</Filters>

						<Filters title="Suitable for">
							<Filter name="Takeaways (1)"></Filter>
							<Filter name="Light weight (3)"></Filter>
							<Filter name="Heavy weights (5)"></Filter>
						</Filters>
					</div>
				</div>
			</div>

			<div class="lg:col-span-3">
				<ul class="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-3">
					<li class="h-full">
						<ProductCard title="Pizza box" price={100} link="/"></ProductCard>
					</li>

					<li class="h-full">
						<ProductCard title="Pizza box2" link="/"></ProductCard>
					</li>

					<li class="h-full">
						<ProductCard title="Pizza box3" price={3100} link="/" tags={['Plain', 'Gold']}
						></ProductCard>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section> -->
<script lang="ts">
	import Filters from '$lib/components/filters/Filters.svelte'
	import Filter from '$lib/components/filters/Filter.svelte'
	import Icon from '@iconify/svelte'
	import ProductCard from '$lib/components/ProductCard.svelte'
	import Card from '$lib/components/Card.svelte'

	import { flip } from 'svelte/animate'
	import { fade, fly, blur, slide } from 'svelte/transition'
	// import Multirange from '$lib/components/Multirange.svelte'
	// import Histogram from '$lib/components/Histogram.svelte'
	import { getContext, setContext, tick } from 'svelte'

	import { quintOut } from 'svelte/easing'
	import Seo from '$lib/components/Seo.svelte'


	let data = [
		{
			title: 'Kuca Ilidza',
			category: 'nekretnine',
			price: 12,
			tip: 'Potražnja',
			location: 'Ilidza, Sarajevo',
			image:
				'https://cf.bstatic.com/xdata/images/hotel/max1024x768/486885944.jpg?k=9e0bf27d355e88458f5593448bf17aacb959566926a4b43973d7483a60179c00&o=&hp=1',
		},
		{
			title: 'BMW extra stanje',
			category: 'automobili',
			price: 423,
			tip: 'Prodaja',
			location: 'Tomislavgrad',
			image: 'https://image.stern.de/33171308/t/st/v3/w1440/r1.7778/-/bmw-i4.jpg',
		},
		{
			title: 'Restoran na iznajmljivanje',
			category: 'nekretnine',
			price: 248,
			tip: 'Iznajmljivanje',
			location: 'Ilijas, Sarajevo',
			image: 'https://media-cdn.tripadvisor.com/media/photo-s/01/aa/65/94/vor-dem-restaurant.jpg',
		},
		{
			title: 'Iphone 16',
			category: 'mobiteli',
			price: 169,
			tip: 'Prodaja',
			location: 'Ilijas, Sarajevo',
			image:
				'https://tehnomag.com/upload/catalog/product/4855/wwen-iphone14promax-q422-space-black-pdp-images-po_63d92f4acc0d3.jpg',
		},
		{
			title: 'Kuca 3 sprata',
			category: 'nekretnine',
			price: 130,
			tip: 'Prodaja',
			location: 'Tuzla',
			image: 'https://www.njuskalo.hr/image-w920x690/nekretnine/kuca-tuzla-slika-213205794.jpg',
		},
		{
			title: 'Iznajmljivanje auta',
			category: 'automobili',
			price: 120,
			tip: 'Iznajmljivanje',
			location: 'Mostar',
			image:
				'https://carwow-de-wp-3.imgix.net/bmw-i7m-final-image-graded-grille-lights-1-1.png?auto=format&cs=tinysrgb&fit=crop&h=800&ixlib=rb-1.1.0&q=60&w=1600',
		},
	]

	const uniqueCategories = [...new Set(data.map((item) => item.category))]
	const uniqueType = [...new Set(data.map((item) => item.tip))]
	const uniqueLocations = [...new Set(data.map((item) => item.location))]

	let filterCategory: Array<string> = $state([])
	let filterType: Array<string> = $state([])
	let filterLocation: Array<string> = $state([])
	// let cards = $derived(data.filter(dat => dat.match(regexQuery)))



	// $inspect($currentMax)


	// $inspect(getContext("currentMax"))
	let cards: any[] = $derived.by(() => {
		// Validate input (optional, but recommended)



		// Filter the data based on price range
		return data.filter((item) => {
			const price = item.price
			return (
				(filterCategory.length === 0 || filterCategory.includes(item.category)) &&
				(filterType.length === 0 || filterType.includes(item.tip)) &&
				(filterLocation.length === 0 || filterLocation.includes(item.location))
			)
		})
	})

	// $effect(() => {
	// 	cards

	// 	if ($effect.active()) {
	// 		if (!document.startViewTransition) return
	// 		new Promise((fulfil) => {
	// 			/* This will take a screenshot of the whole page, and freeze
	// 		until the animation promise resolves */
	// 			document.startViewTransition!(() => new Promise(fulfil))
	// 		})
	// 	}
	// 	// console.log(cards , new Date())
	// 	// console.log( $effect.active(), new Date())
	// 	// if (document.startViewTransition) {
	// 	// 	document.startViewTransition(() => new Promise(() => {}))
	// 	// }
	// })

	
	Array.prototype.removeByValue = function (val: string) {
		for (var i = 0; i < this.length; i++) {
			if (this[i] === val) {
				this.splice(i, 1)
				i--
			}
		}
		return this
	}
</script>

<Seo
	title="Product page"
	description="Product page with filters"
	imageURL="https://bayaderpack.com/_next/image?url=https%3A%2F%2Fadmin.bayaderpack.com%2Fmedia%2Fproducts%2Fbags%2Finvercote-bag%2Fwrap_paper_large.jpg&w=384&q=75"
></Seo>

<section>
	<div class="mx-auto flex min-h-screen flex-col justify-start px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
		<header>
			<h2 class="mb-6 text-xl font-bold text-base-content sm:text-3xl">Oglasi</h2>
		</header>

		<div class="mt-8 block lg:hidden">
			<button
				class="flex cursor-pointer items-center gap-2 border-b border-base-300 pb-1 text-base-content transition hover:border-base-100"
			>
				<span class="text-sm font-medium"> Filters & Sorting </span>

				<Icon icon="bi:filter"></Icon>
			</button>
		</div>

		<div class="mt-4 lg:mt-8 lg:grid lg:grid-cols-6 lg:items-start lg:gap-8">
			<div class="-mt-5 hidden space-y-4 lg:block">
				<div>
					<p class="block text-xs font-medium text-base-content">Filteri</p>

					<div class="mt-1 space-y-2">
						<Filters title="Kategorije">
							{#each uniqueCategories as category}
								<Filter
									name={category}
									onclick={() => {
										!filterCategory.includes(category)
											? filterCategory.push(category)
											: filterCategory.removeByValue(category)
									}}
								></Filter>
							{/each}
						</Filters>

						<Filters title="Tip oglasa">
							{#each uniqueType as type}
								<Filter
									name={type}
									onclick={() => {
										!filterType.includes(type)
											? filterType.push(type)
											: filterType.removeByValue(type)
									}}
								></Filter>
							{/each}
						</Filters>

						<Filters title="Lokacija">
							{#each uniqueLocations as location}
								<Filter
									name={location}
									onclick={() => {
										!filterLocation.includes(location)
											? filterLocation.push(location)
											: filterLocation.removeByValue(location)
									}}
								></Filter>
							{/each}
						</Filters>
					</div>
				</div>
			</div>

			<div class="lg:col-span-5">
				<ul class="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-5">
					{#each cards as card (card.title)}
						<li class="item h-full" transition:slide={{ delay: 100, duration: 600, easing: quintOut, axis: 'y' }}>
							<ProductCard title="Pizza box3" price={3100} link="/" tags={['Plain', 'Gold']}
							></ProductCard>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>



