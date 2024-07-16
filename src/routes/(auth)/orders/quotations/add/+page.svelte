<script lang="ts">
	import QuotationField from '$components/QuotationField.svelte'
	interface Material {
		name: string
		sheet: number
		waste: number
		sheet_size: string
		price: number
	}
	interface Item {
		name: string
		quantity: number
		length: number
		width: number
		heigth: number
		materials: Array<Material>
	}
	const items: Array<Item> = $state([])

	// item1.materials.push(material1)
	items.push({
		name: 'Item 1',
		quantity: 1000,
		length: 0,
		width: 0,
		heigth: 0,
		materials: [
			{
				name: 'Material 1',
				sheet: 1,
				waste: 200,
				sheet_size: 'none',
				price: 0,
			},
		],
	})

	// const material
</script>

<div class="card flex flex-col p-5 shadow">
	<h3>Customer</h3>
	<label class="form-control w-full max-w-xs">
		<div class="label">
			<span class="label-text">Search</span>
		</div>
		<select class="select select-bordered">
			<option disabled selected>Pick one</option>
			<option>Star Wars</option>
			<option>Harry Potter</option>
			<option>Lord of the Rings</option>
			<option>Planet of the Apes</option>
			<option>Star Trek</option>
		</select>
		<div class="label">
			<span class="label-text-alt">Error</span>
		</div>
	</label>
</div>

<div class="p-8">
	<h2 class="py-5 text-2xl font-semibold">Items</h2>
	{#each items as item, index}
		<div class="card flex flex-col p-5 shadow">
			<h3 class="my-3 font-semibold">Item {index + 1}</h3>
			<QuotationField sufixes={['m', '%']} sup="2"></QuotationField>
			<div class="flex flex-col gap-4 md:flex-row">
				<label class="form-control w-full">
					<div class="label">
						<span class="label-text">Item name</span>
					</div>
					<input
						type="text"
						placeholder="Type here"
						bind:value={item.name}
						class="input input-bordered w-full max-w-xs"
					/>
					<div class="label">
						<span class="label-text-alt">Error</span>
					</div>
				</label>

				<label class="form-control w-full">
					<div class="label">
						<span class="label-text">Quantity</span>
					</div>
					<input
						type="text"
						placeholder="Type here"
						bind:value={item.quantity}
						class="input input-bordered w-full max-w-xs"
					/>
					<div class="label">
						<span class="label-text-alt">Error</span>
					</div>
				</label>
				<label class="form-control w-full">
					<div class="label">
						<span class="label-text">Length (L)</span>
					</div>
					<input
						type="text"
						placeholder="Type here"
						bind:value={item.length}
						class="input input-bordered w-full max-w-xs"
					/>
					<div class="label">
						<span class="label-text-alt">Error</span>
					</div>
				</label>
				<label class="form-control w-full">
					<div class="label">
						<span class="label-text">Width (W)</span>
					</div>
					<input
						type="text"
						placeholder="Type here"
						bind:value={item.width}
						class="input input-bordered w-full max-w-xs"
					/>
					<div class="label">
						<span class="label-text-alt">Error</span>
					</div>
				</label>
				<label class="form-control w-full">
					<div class="label">
						<span class="label-text">Height (H)</span>
					</div>
					<input
						type="text"
						placeholder="Type here"
						bind:value={item.heigth}
						class="input input-bordered w-full max-w-xs"
					/>
					<div class="label">
						<span class="label-text-alt">Error</span>
					</div>
				</label>
			</div>
			{#each item.materials as material, index1}
				<label class="form-control w-full">
					<div class="label">
						<span class="label-text font-semibold">Material name {index1 + 1}</span>
					</div>
					<input
						type="text"
						placeholder="Type here"
						bind:value={material.name}
						class="input input-bordered w-full max-w-xs"
					/>
					<div class="label">
						<span class="label-text-alt">Error</span>
					</div>
				</label>
				<div class="flex flex-col md:flex-row">
					<label class="form-control w-full">
						<div class="label">
							<span class="label-text">Box sheet</span>
						</div>
						<input
							type="text"
							placeholder="Type here"
							class="input input-bordered w-full max-w-xs"
						/>
						<div class="label">
							<span class="label-text-alt">Error</span>
						</div>
					</label>
					<label class="form-control w-full">
						<div class="label">
							<span class="label-text">Waste</span>
						</div>
						<input
							type="text"
							placeholder="Type here"
							class="input input-bordered w-full max-w-xs"
						/>
						<div class="label">
							<span class="label-text-alt">Error</span>
						</div>
					</label>
					<label class="form-control w-full">
						<div class="label">
							<span class="label-text">Sheet size</span>
						</div>
						<input
							type="text"
							placeholder="Type here"
							class="input input-bordered w-full max-w-xs"
						/>
						<div class="label">
							<span class="label-text-alt">Error</span>
						</div>
					</label>
					<label class="form-control w-full">
						<div class="label">
							<span class="label-text">Price</span>
						</div>
						<input
							type="text"
							placeholder="Type here"
							class="input input-bordered w-full max-w-xs"
						/>
						<div class="label">
							<span class="label-text-alt">Error</span>
						</div>
					</label>
				</div>
			{/each}

			<button
				onclick={() => {
					const name = item.materials.length + 1
					item.materials.push({
						name: 'Material ' + name,
						sheet: 1,
						waste: 200,
						sheet_size: 'none',
						price: 0,
					})
				}}>Add Material</button
			>
		</div>

		<div class="mt-8">
			<QuotationField checkable={false} sufixes={['m']} sup="2" name="Die" item="Die"
			></QuotationField>
			<QuotationField checkable={false} sufixes={['SAR']} name="Filling" item="Filling"
			></QuotationField>
			<QuotationField name="Magnetic amount/piece" item="Magnetic" isActive={false}
			></QuotationField>
			<QuotationField sufixes={['SAR']} isActive={false} name="Miscellaneous" item="Miscellaneous"
			></QuotationField>
			<QuotationField
				type="select"
				name="Rope"
				item="Rope"
				isActive={false}
				selectOptions={['Normal Rope', 'Twisted Rope']}
			></QuotationField>
		</div>
	{/each}
	<div class="card flex justify-center p-5 shadow">
		<button
			onclick={() => {
				const name = items.length + 1
				items.push({
					name: 'Item ' + name,
					quantity: 1000,
					length: 0,
					width: 0,
					heigth: 0,
					materials: [
						{
							name: 'Material 1',
							sheet: 1,
							waste: 200,
							sheet_size: 'none',
							price: 0,
						},
					],
				})
			}}>Add Item</button
		>
	</div>
</div>
