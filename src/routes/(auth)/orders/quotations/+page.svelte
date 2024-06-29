<script lang="ts">
	import QuotationCard from '$components/QuotationCard.svelte'
	import SettingsPage from '$components/SettingsPage.svelte'
	import TabItem from '$components/tab/TabItem.svelte'
	import Tabs from '$components/tab/Tabs.svelte'
	import Filters from '$components/filters/Filters.svelte'
	import Filter from '$components/filters/Filter.svelte'
	import Icon from '@iconify/svelte'
	import UserSelect from '$components/UserSelect.svelte'

	let data = [
		{
			id: '#Q2406091660',
			category: 'nekretnine',
			price: 12,
			tip: 'Potražnja',
			location: 'Ilidza, Sarajevo',
			image:
				'https://cf.bstatic.com/xdata/images/hotel/max1024x768/486885944.jpg?k=9e0bf27d355e88458f5593448bf17aacb959566926a4b43973d7483a60179c00&o=&hp=1',
		},
		{
			id: '#Q2406091663',
			category: 'automobili',
			price: 423,
			tip: 'Prodaja',
			location: 'Tomislavgrad',
			image: 'https://image.stern.de/33171308/t/st/v3/w1440/r1.7778/-/bmw-i4.jpg',
		},
		{
			id: '#Q2406091665',
			category: 'nekretnine',
			price: 248,
			tip: 'Iznajmljivanje',
			location: 'Ilijas, Sarajevo',
			image: 'https://media-cdn.tripadvisor.com/media/photo-s/01/aa/65/94/vor-dem-restaurant.jpg',
		},
		{
			id: '#Q2406091668',
			category: 'mobiteli',
			price: 169,
			tip: 'Prodaja',
			location: 'Ilijas, Sarajevo',
			image:
				'https://tehnomag.com/upload/catalog/product/4855/wwen-iphone14promax-q422-space-black-pdp-images-po_63d92f4acc0d3.jpg',
		},
		{
			id: '#Q2406091643',
			category: 'nekretnine',
			price: 130,
			tip: 'Prodaja',
			location: 'Tuzla',
			image: 'https://www.njuskalo.hr/image-w920x690/nekretnine/kuca-tuzla-slika-213205794.jpg',
		},
		{
			id: '#Q2406091629',
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
	let quoted = $state()
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
</script>

<Tabs class="justify-around" style="pill">
	<TabItem open={true} activeClasses="btn-secondary">
		{#snippet titleSlot()}
			<div class="flex flex-col items-center">
				<Icon icon="fluent:box-20-filled" class="text-7xl"></Icon>
				Samples
			</div>
		{/snippet}

		<SettingsPage title="" >test2414</SettingsPage>
	</TabItem>
	<TabItem activeClasses="btn-secondary">
		{#snippet titleSlot()}
			<div class="flex flex-col items-center">
				<Icon icon="emojione-monotone:page-facing-up" class="text-7xl"></Icon>
				Quotations
			</div>
		{/snippet}

		<SettingsPage title="">
			<Tabs class="justify-around" style="pill">
				<TabItem open={true} activeClasses="bg-primary" inactiveClasses="bg-base-200">
					{#snippet titleSlot()}
						Under Design
					{/snippet}
					<button class="btn btn-primary float-right my-5">Add new sample</button>
					<div class="divider"></div>
					<div class="drawer auto-cols-[1fr_4fr] gap-4 lg:drawer-open">
						<input id="my-drawer-1" type="checkbox" class="drawer-toggle" />
						<div class="drawer-content flex flex-col items-center justify-start">
							<!-- Page content here -->
							<label for="my-drawer-1" class="btn btn-primary drawer-button lg:hidden">
								Open drawer
							</label>
							
							<QuotationCard></QuotationCard>
						</div>
						<div class="drawer-side px-3">
							<label for="my-drawer-1" aria-label="close sidebar" class="drawer-overlay"></label>
							<div class="mt-1 space-y-2">
								<label class="input input-bordered flex items-center justify-around">
									<input type="text" class="grow" placeholder="Search" />
									<div class="text-3xl me-2">
										<Icon icon="ic:round-search"></Icon>
									</div>
								</label>
								<div class="join w-full border">
									<input
										class="btn join-item w-1/2"
										type="radio"
										name="options"
										aria-label="Quoted"
										onchange={() => (quoted = !quoted)}
									/>
									<input
										class="btn join-item w-1/2"
										type="radio"
										name="options"
										aria-label="Unquoted"
										onchange={() => (quoted = !quoted)}
									/>
								</div>
								<UserSelect show={true}></UserSelect>



							</div>
						</div>
					</div>
				</TabItem>
				<TabItem activeClasses="bg-primary" inactiveClasses="bg-base-200">
					{#snippet titleSlot()}
						Printing
					{/snippet}

					<div class="drawer drawer-end lg:drawer-open">
						<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
						<div class="drawer-content flex flex-col items-center justify-center">
							<!-- Page content here -->
							<label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">
								Open drawer
							</label>
						</div>
						<div class="drawer-side col-start-4">
							<label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
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
				</TabItem>
				<TabItem activeClasses="bg-primary" inactiveClasses="bg-base-200">
					{#snippet titleSlot()}
						Done
					{/snippet}
					<div></div>
				</TabItem>
			</Tabs>
		</SettingsPage>
	</TabItem>
	<TabItem activeClasses="btn-secondary">
		{#snippet titleSlot()}
			<div class="flex flex-col items-center">
				<Icon icon="fluent-mdl2:reservation-orders" class="text-7xl"></Icon>
				Job Orders
			</div>
		{/snippet}
		<SettingsPage title="" addButtonLink="/" addButtonText="Add new job">test2414</SettingsPage>
	</TabItem>
</Tabs>
