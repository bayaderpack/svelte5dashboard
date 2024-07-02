<script lang="ts">
	import QuotationCard from '$components/QuotationCard.svelte'
	import SettingsPage from '$components/SettingsPage.svelte'
	import TabItem from '$components/tab/TabItem.svelte'
	import Tabs from '$components/tab/Tabs.svelte'
	import Filters from '$components/filters/Filters.svelte'
	import Filter from '$components/filters/Filter.svelte'
	import Icon from '@iconify/svelte'
	import UserSelect from '$components/UserSelect.svelte'
	import { currentSelected } from '$components/selectedUsers.svelte'

	let data = [
		{
			id: '#Q2406091660',
			customer: 'ناصر علي السعد (بطاطس ابو علي)',
			mobile: '966-502933052',
			since: '24 June 2024',
			designers: ['Boss Manager', 'umair aziz'],
		},
		{
			id: '#Q2406091663',
			customer: 'ناصر علي السعد (بطاطس ابو علي)',
			mobile: '966-502931231',
			since: '24 June 2024',
			designers: ['Boss Manager', 'hazem ziady'],
		},
		{
			id: '#Q2406091665',
			customer: 'ناصر علي اشسا (بطاطس ابو علي)',
			mobile: '966-502931521',
			since: '24 June 2024',
			designers: ['Boss Manager', 'Ahmed Al-Ahywi', 'hazem ziady'],
		},
		{
			id: '#Q2406091668',
			customer: 'ناصر علي مشسب (بطاطس ابو علي)',
			mobile: '966-502933542',
			since: '24 June 2024',
			designers: ['ahmed eldeeb', 'Ahmed Al-Ahywi', 'hazem ziady'],
		},
		{
			id: '#Q2406091643',
			customer: 'ناصر علي حشسب (بطاطس ابو علي)',
			mobile: '966-502932521',
			since: '24 June 2024',
			designers: ['ahmed eldeeb', 'Ahmed Al-Ahywi', 'hazem ziady'],
		},
		{
			id: '#Q2406091629',
			customer: 'ناصر علي هعصثض (بطاطس ابو علي)',
			mobile: '966-502936614',
			since: '24 June 2024',
			designers: ['ahmed eldeeb', 'Ahmed Al-Ahywi', 'hazem ziady'],
		},
	]

	const uniqueCustomers = [...new Set(data.map((item) => item.customer))]
	// const uniqueLocations = [...new Set(data.map((item) => item.location))]

	let filterCustomer: Array<string> = $state([])
	let filterDesigners: Array<string> = $state([])
	let filterLocation: Array<string> = $state([])
	let quoted = $state()
	// let cards = $derived(data.filter(dat => dat.match(regexQuery)))

	// $inspect($currentMax)
	let selectedValues: Array<any> | undefined = $state()
	currentSelected.subscribe((value) => {
		selectedValues = value
	})
	let searchValue = $state('')
	// $inspect(getContext("currentMax"))
	let cards: any[] = $derived.by(() => {
		// Validate input (optional, but recommended)

		// Filter the data based on price range
		return data.filter((item) => {
			return (
				// (filterType.length === 0 || filterType.includes(item.customer)) &&
				(filterCustomer.length === 0 || filterCustomer.includes(item.customer)) &&
				(selectedValues?.length == 0 ||
					item.designers.some((designer) => selectedValues?.includes(designer))) &&
				(item.id.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
					item.mobile.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
					item.customer.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
			)
		})
	})

	Array.prototype.removeByValue = function (val: string) {
		for (var i = 0; i < this.length; i++) {
			if (this[i] === val) {
				this.splice(i, 1)
				i--
			}
		}
		return this
	}

	// $inspect(selectedValues)
</script>

<Tabs class="justify-around" style="pill">
	<TabItem open={true} activeClasses="btn-secondary">
		{#snippet titleSlot()}
			<div class="flex flex-col items-center">
				<Icon icon="fluent:box-20-filled" class="text-7xl"></Icon>
				Samples
			</div>
		{/snippet}

		<SettingsPage title="">test2414</SettingsPage>
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
				<TabItem open={true} activeClasses="bg-primary btn-block" inactiveClasses="bg-base-200">
					{#snippet titleSlot()}
						Under Design
					{/snippet}
					<a href="/orders/quotations/add" class="btn btn-primary float-right my-5">Add new quotation</a>
					<div class="divider"></div>
					<div class="drawer auto-cols-[1fr_4fr] gap-4 lg:drawer-open">
						<input id="my-drawer-1" type="checkbox" class="drawer-toggle" />
						<div class="drawer-content flex flex-col items-center justify-start gap-4">
							<!-- Page content here -->
							<label for="my-drawer-1" class="btn btn-primary drawer-button lg:hidden">
								Open drawer
							</label>

							{#each cards as customer}
								<QuotationCard
									id={customer.id}
									customer={customer.customer}
									mobile={customer.mobile}
									since={customer.since}
									designers={customer.designers}
								></QuotationCard>
							{/each}
						</div>
						<div class="drawer-side px-3">
							<label for="my-drawer-1" aria-label="close sidebar" class="drawer-overlay"></label>
							<div class="mt-1 space-y-2">
								<label class="input input-bordered flex w-full items-center">
									<input
										type="text"
										class="w-5/6 grow"
										placeholder="Search"
										bind:value={searchValue}
									/>
									<div class="w-1/6 text-3xl">
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
								<UserSelect show={true} {selectedValues}></UserSelect>

								<Filters title="Customers" open={false}>
									{#each uniqueCustomers as customer}
										<Filter
											name={customer}
											onclick={() => {
												!filterCustomer.includes(customer)
													? filterCustomer.push(customer)
													: filterCustomer.removeByValue(customer)
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
