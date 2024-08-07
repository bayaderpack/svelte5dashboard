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
	import QuotationDetails from '$components/QuotationDetails.svelte'
	import { invalidate, invalidateAll } from '$app/navigation'

	let { data } = $props()

	let quoted = $state()
	// let cards = $derived(data2.filter(dat => dat.match(regexQuery)))

	// $inspect($currentMax)
	let selectedValues: Array<any> | undefined = $state()
	currentSelected.subscribe((value) => {
		selectedValues = value
		// console.log(value)
	})
	let searchValue = $state('')

	Array.prototype.removeByValue = function (val: string) {
		for (var i = 0; i < this.length; i++) {
			if (this[i] === val) {
				this.splice(i, 1)
				i--
			}
		}
		return this
	}

	let selected = $state<any>({})
	let quotations = $derived(data.dataquotation.data)
	let withFiles = $state(false)

	$effect(() => {
		if(withFiles == true) {
			console.log(withFiles)
			invalidate("http://localhost:8080/api/quotation?status=2&page=0&per-page=500&files=1").then(t => {
				console.log(t)
			}).catch(e => {
				console.log(e)
			})
		}
	})

	// console.log(data.data.data[0].firstname)
	console.log(selected)
</script>

<Tabs class="justify-around" style="pill">
	<TabItem open={true} activeClasses="btn-secondary">
		{#snippet titleSlot()}
			<div class="flex flex-col items-center">
				<Icon icon="fluent:box-20-filled" class="text-4xl"></Icon>
				Samples
			</div>
		{/snippet}

		<SettingsPage title="">
			<Tabs class="justify-around" style="pill">
				<TabItem open={true} activeClasses="bg-primary btn-block" inactiveClasses="bg-base-200">
					{#snippet titleSlot()}
						Under Design
					{/snippet}
					<a href="/orders/quotations/add" class="btn btn-primary float-right my-5"
						>Add new quotation</a
					>
					<div class="divider"></div>
					<div class="drawer auto-cols-[2fr_5fr] gap-4 lg:drawer-open">
						<input id="my-drawer-1" type="checkbox" class="drawer-toggle" />
						<div class="drawer-content flex flex-col items-center justify-start gap-4">
							<!-- Page content here -->
							<label for="my-drawer-1" class="btn btn-primary drawer-button lg:hidden">
								Open drawer
							</label>

							<div class="w-full">
								{#if Object.keys(selected).length > 0}
									<QuotationDetails data={selected}></QuotationDetails>
								{/if}
							</div>
							<!-- {#each data.dataquotation.data as customer}
							{data.data.data.length}
								<QuotationCard
									id={customer.id}
									customer={customer.customer}
									mobile={customer.mobile}
									since={customer.since}
									designers={customer.designers}
									options={data.data.data}
								></QuotationCard>
							{/each} -->
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
								<div class="form-control">
									<label class="label cursor-pointer">
									  <span class="label-text">With Files</span>
									  <input type="checkbox" bind:checked={withFiles} class="checkbox" />
									</label>
								  </div>
								<div class="flex flex-col">
									{#each quotations as quotation}
										<!-- Component: One Line List With Trailing Badge And Leading Icon -->
										<ul class="divide-y divide-slate-100">
											<button
												class="flex w-full items-center gap-4 px-4 py-3 hover:bg-slate-200 focus:bg-primary active:bg-primary"
												class:bg-white={selected.number != quotation.number}
												class:bg-primary={selected.number == quotation.number}
												onclick={() => (selected = quotation)}
											>
												<div
													class="flex items-center self-center text-primary focus:text-white active:text-white text-3xl"
													class:text-base-100={selected.number == quotation.number}
												>
													<Icon icon="mingcute:settings-6-line" />
												</div>

												<div
													class="flex min-h-[2rem] flex-1 flex-col items-start justify-center gap-0 overflow-hidden"
												>
													<h4 class="w-full truncate text-lg text-base-content">
														{quotation.customer.firstname + " " + quotation.customer.lastname}
													</h4>
												</div>
												<span
													class="inline-flex items-center justify-center  bg-primary px-3 py-4 text-xs text-primary-content"
												>
													{quotation.number}
													<span class="sr-only"> {quotation.number}</span>
												</span>
											</button>
										</ul>
									{/each}
								</div>
								<!-- <UserSelect show={true} {selectedValues} options={data.data.data} fields={["firstname", "lastname"]}></UserSelect> -->

								<!-- <Filters title="Customers" open={false}>
									{#each uniqueCustomers as customer}
										<Filter
											name={customer.customer}
											onclick={() => {
												!filterCustomer.includes(customer.customer)
													? filterCustomer.push(customer.customer)
													: filterCustomer.removeByValue(customer.customer)
											}}
										></Filter>
									{/each}
								</Filters> -->
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
				<Icon icon="emojione-monotone:page-facing-up" class="text-4xl"></Icon>
				Quotations
			</div>
		{/snippet}

		<SettingsPage title="">
			<Tabs class="justify-around" style="pill">
				<TabItem open={true} activeClasses="bg-primary btn-block" inactiveClasses="bg-base-200">
					{#snippet titleSlot()}
						Under Design
					{/snippet}
					<a href="/orders/quotations/add" class="btn btn-primary float-right my-5"
						>Add new quotation</a
					>
					<div class="divider"></div>
					<div class="drawer auto-cols-[2fr_5fr] gap-4 lg:drawer-open">
						<input id="my-drawer-1" type="checkbox" class="drawer-toggle" />
						<div class="drawer-content flex flex-col items-center justify-start gap-4">
							<!-- Page content here -->
							<label for="my-drawer-1" class="btn btn-primary drawer-button lg:hidden">
								Open drawer
							</label>

							<div class="w-full">
								{#if Object.keys(selected).length > 0}
									<QuotationDetails data={selected}></QuotationDetails>
								{/if}
							</div>
							<!-- {#each data.dataquotation.data as customer}
							{data.data.data.length}
								<QuotationCard
									id={customer.id}
									customer={customer.customer}
									mobile={customer.mobile}
									since={customer.since}
									designers={customer.designers}
									options={data.data.data}
								></QuotationCard>
							{/each} -->
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
								<div class="flex flex-col">
									{#each quotations as quotation}
										<!-- Component: One Line List With Trailing Badge And Leading Icon -->
										<ul class="divide-y divide-slate-100">
											<button
												class="flex w-full items-center gap-4 px-4 py-3 transition-all duration-500 hover:bg-slate-200 focus:bg-primary active:bg-primary"
												class:bg-white={selected.number != quotation.number}
												class:bg-primary={selected.number == quotation.number}
												onclick={() => (selected = quotation)}
											>
												<div
													class="flex items-center self-center text-primary focus:text-white active:text-white"
													class:text-base-100={selected.number == quotation.number}
												>
													<Icon icon="mingcute:settings-6-line" class="text-3xl" />
												</div>

												<div
													class="flex min-h-[2rem] flex-1 flex-col items-start justify-center gap-0 overflow-hidden"
												>
													<h4 class="w-full truncate text-lg text-base-content">
														{quotation.customer}
													</h4>
												</div>
												<span
													class="inline-flex items-center justify-center bg-primary px-3 py-4 text-xs text-primary-content"
												>
													{quotation.number}
													<span class="sr-only"> {quotation.number}</span>
												</span>
											</button>
										</ul>
										<!-- End One Line List With Trailing Badge And Leading Icon -->
									{/each}
								</div>
								<!-- <UserSelect show={true} {selectedValues} options={data.data.data} fields={["firstname", "lastname"]}></UserSelect> -->

								<!-- <Filters title="Customers" open={false}>
									{#each uniqueCustomers as customer}
										<Filter
											name={customer.customer}
											onclick={() => {
												!filterCustomer.includes(customer.customer)
													? filterCustomer.push(customer.customer)
													: filterCustomer.removeByValue(customer.customer)
											}}
										></Filter>
									{/each}
								</Filters> -->
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
				<Icon icon="fluent-mdl2:reservation-orders" class="text-4xl"></Icon>
				Job Orders
			</div>
		{/snippet}
		<SettingsPage title="" addButtonLink="/" addButtonText="Add new job">test2414</SettingsPage>
	</TabItem>
</Tabs>
