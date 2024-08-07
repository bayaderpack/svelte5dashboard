<script lang="ts">
	import Icon from '@iconify/svelte'
	import { twMerge } from 'tailwind-merge'

	interface Props {
		data: any
	}
	let { data }: Props = $props()

	$inspect(data)

	const convertToValidJson = $derived.by(() => {
		// Wrap the input string in square brackets to form a JSON array
		const formattedInput = `[${data.assignees}]`

		// Parse the formatted input to a JavaScript object
		try {
			const jsonArray = JSON.parse(formattedInput)
			return jsonArray
		} catch (error) {
			console.error('Invalid JSON input:', error)
			return null
		}
	})
	const convertToValidJsonProducts = $derived.by(() => {
		// Wrap the input string in square brackets to form a JSON array
		const formattedInput = `[${data.products}]`

		// Parse the formatted input to a JavaScript object
		try {
			const jsonArray = JSON.parse(formattedInput)
			return jsonArray
		} catch (error) {
			console.error('Invalid JSON input:', error)
			return null
		}
	})
	// console.log(convertToValidJsonProducts)
</script>

<div class="rounded-box border border-primary p-4">
	RFQ Detail No.: {data.number}

	<div>
		<div class="mx-auto p-4">
			<!-- <div class="row-gap-0 grid gap-8 lg:grid-cols-3">
				<button
					class="btn relative flex h-36 w-36 flex-col items-center justify-center rounded-full"
				>
					<Icon icon="fluent:box-20-filled" class="text-2xl"></Icon>

					<h6 class="mb-1 text-sm font-extrabold">Samples 0</h6>
				</button>

				<button
					class="btn relative flex h-36 w-36 flex-col items-center justify-center rounded-full"
				>
					<Icon icon="emojione-monotone:page-facing-up" class="text-2xl"></Icon>

					<h6 class="mb-1 text-sm font-extrabold">Quotations</h6>
				</button>

				<button
					class="btn relative flex h-36 w-36 flex-col items-center justify-center rounded-full"
				>
					<Icon icon="fluent-mdl2:reservation-orders" class="text-2xl"></Icon>

					<h6 class="mb-1 text-sm font-extrabold">Jobs</h6>
				</button>
			</div> -->
			<div class="row-gap-0 grid gap-8 lg:grid-cols-3">
				<div class="relative text-center">
					<div
						class="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50 sm:h-20 sm:w-20"
					>
						<Icon icon="fluent:box-20-filled" class="text-2xl"></Icon>
					</div>
					<h6 class="mb-2 text-sm">Samples</h6>
				</div>
				<div class="relative text-center">
					<div
						class="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50 sm:h-20 sm:w-20"
					>
						<Icon icon="emojione-monotone:page-facing-up" class="text-2xl"></Icon>
					</div>
					<h6 class="mb-2 text-sm">Quotations</h6>
				</div>
				<div class="relative text-center">
					<div
						class="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50 sm:h-20 sm:w-20"
					>
						<Icon icon="fluent-mdl2:reservation-orders" class="text-2xl"></Icon>
					</div>
					<h6 class="mb-2 text-sm">Jobs</h6>
				</div>
			</div>
		</div>

		<div class="flex flex-col">
			<p>Firstname: {data.customer.firstname + ' ' + data.customer.lastname}</p>
			<p>Company: {data.customer.company}</p>
			<p class="space-x-3">
				Assigned to:
				{#if data.assignee && data.assignee.length > 0}
					{#each data.assignee as admin}
						<span class="badge badge-primary">{admin.name}</span>
					{/each}
				{:else}
					<span class="badge badge-primary">Boss Manager</span>
				{/if}
			</p>
		</div>
		<div></div>
	</div>

	<div></div>

	<div>
		<div></div>
		<div></div>
	</div>

	<div></div>

	Items
	<ul class="divide-y divide-slate-100 border">
		{#each data.quotation_products as item, index}
			<li
				class={twMerge(
					'flex flex-col items-start gap-4 px-4 py-3',
					index % 2 == 0 ? 'bg-primary/60' : '',
				)}
			>
				<div class="flex min-h-[2rem] flex-col items-start justify-center gap-0">
					<h4 class="text-base text-slate-700">
						{index + 1}. {item.title} (#{item.quotation_product_id})
					</h4>
					<h3 class="text-base text-slate-700">Quantity: {item.quantity}</h3>
				</div>
				<div class="flex justify-between">
					<div class="flex flex-col">
						<h5>Specification</h5>
						<p>Length(L): <span class="font-semibold">{item.length}</span></p>
						<p>Width(W): <span class="font-semibold">{item.width}</span></p>
						<p>Height(H): <span class="font-semibold">{item.height}</span></p>
					</div>
					{#each item.designer_files.split(',') as file}
					{@const ext = file.split('.')[file.split('.').length-1]}
						{#if ext == 'jpg' || ext == 'png' || ext == 'webp'}
						<div class="aspect-video w-52" >
							<img src={file} alt="" />
						</div>
							
						{:else if ext == 'pdf'}
							<object title={file} data={file} type="application/pdf" width="100%" height="200">
								<embed src={file} type="application/pdf" />
							</object>
						{/if}
					{/each}
				</div>

				<ul class="flex divide-y divide-slate-100 border">
					{#each item.materials as material, index}
						<li
							class={twMerge(
								'flex flex-col items-start gap-4 px-4 py-3',
								index % 2 == 0 ? 'bg-primary/60' : '',
							)}
						>
							<div class="flex min-h-[2rem] flex-col items-start justify-center gap-0">
								<h4 class="text-base text-slate-700">
									Material {index + 1}. (#{material.material_id})
								</h4>
								<p>Box/Sheet: <span>{material.per_sheet}</span></p>
								<p>Waste: <span>{material.waste}</span></p>
							</div>
						</li>
					{/each}
				</ul>
			</li>
		{/each}
	</ul>
</div>
