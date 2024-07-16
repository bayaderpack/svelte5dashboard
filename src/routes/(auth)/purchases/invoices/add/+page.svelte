<script lang="ts">
	import { createDrauu, Drauu } from 'drauu'
	import { onMount } from 'svelte'
	import { qr } from '@svelte-put/qr/svg'
	let input: SVGElement | undefined = $state()

	let draw = $state<Drauu>()
	onMount(() => {
		const drauu = createDrauu({
			el: '#svg',
			brush: {
				mode: 'stylus', // 'line', 'rectangle', 'ellipse'
				color: 'skyblue',
				size: 3,
			},
		})
		draw = drauu

		// change brush color
		draw.options.brush!.color = 'navy'
	})

	const download = () => {
		input!.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
		const data = input!.outerHTML || ''
		const blob = new Blob([data], { type: 'image/svg+xml' })
		const elem = window.document.createElement('a')
		elem.href = window.URL.createObjectURL(blob)
		elem.download = 'input.svg'
		document.body.appendChild(elem)
		elem.click()
		document.body.removeChild(elem)
	}

	let products: Array<any> = $state([])

	products.push({ name: 'Product 1', quantity: 100, price: 100 })
    $effect(() => {
        products.map((e) => {
            e.total = e.price * e.quantity
        })
    })

    let subtotal = $derived.by(() => {
        let total = 0
        products.map((e) => {
            total += e.total
        })
        return total
    })
</script>

<div
	class="mx-auto flex min-h-[9.25in] w-[7in] flex-col justify-between rounded-lg bg-base-100 p-2 shadow-lg print:shadow-none [&>*]:text-xs"
	id="section-to-print"
>
	<div class="mb-2 flex items-center justify-between">
		<div class="flex items-center">
			<img class="mr-2 h-12" src="/images/logo.svg" alt="Logo" />
			<div class="text-lg font-semibold text-base-content">Bayader AlJazirah</div>
		</div>
		<div class="text-base-content">
			<div class="mb-2 text-xl font-bold print:mb-0">INVOICE</div>
			<div class="text-sm">Date: 01/07/2024</div>
			<div class="text-sm">Invoice #: INV12345</div>
		</div>
	</div>
	<div class="mb-2 border-b-2 border-gray-300 pb-8">
		<h2 class="mb-4 text-2xl font-bold print:mb-2">Bill To:</h2>
		<div class="mb-2 text-base-content print:mb-0" contenteditable>John Doe</div>
		<div class="mb-2 text-base-content print:mb-0" contenteditable>12 Riyadh</div>
		<div class="mb-2 text-base-content print:mb-0" contenteditable>Riyadh, Saudi Arabia 12345</div>
		<div class="text-base-content" contenteditable>johndoe@example.com</div>
	</div>
	<table class="mb-4 w-full text-left print:mb-4">
		<thead>
			<tr>
				<th class="py-2 font-bold uppercase text-base-content">Description</th>
				<th class="py-2 font-bold uppercase text-base-content">Quantity</th>
				<th class="py-2 font-bold uppercase text-base-content">Price</th>
				<th class="py-2 font-bold uppercase text-base-content">Total</th>
			</tr>
		</thead>
		<tbody>
			{#each products as product}
				<tr class="[&>*]:py-1">
					<td class=" text-base-content" contenteditable bind:textContent={product.name}>{product.name}</td>
					<td class=" text-base-content" contenteditable bind:textContent={product.quantity}>{product.quantity}</td>
					<td class=" text-base-content" contenteditable bind:textContent={product.price}>{product.price}</td>
					<td class=" text-base-content">{product.total}</td>
				</tr>
			{/each}
		</tbody>
	</table>
    <button class="btn btn-success sakrij" onclick={() => products.push({ name: 'Product '+ products.length, quantity: 100, price: 100 })}>Add item</button>
	<div class="mb-2 flex justify-end">
		<div class="mr-2 text-base-content">Subtotal:</div>
		<div class="text-base-content">${subtotal}</div>
	</div>
	<div class="mb-2 text-right">
		<div class="mr-2 text-base-content">Tax:</div>
		<div class="text-base-content">${subtotal* 0.15}</div>
	</div>
	<div class="mb-2 flex justify-end">
		<div class="mr-2 text-base-content">Total:</div>
		<div class="text-xl font-bold text-base-content">${Math.round((subtotal * 1.15) * 100) / 100}</div>
	</div>
	<div class="flex">
		<!-- <div class="mb-2 pt-20">
			<div class="mb-2 text-base-content">
				Payment is due within 30 days. Late payments are subject to fees.
			</div>
			<div class="mb-2 text-base-content">
				Please make checks payable to Your Company Name and mail to:
			</div>
			<div class="text-base-content">123 Main St., Anytown, USA 12345</div>
		</div> -->
		<div class="flex w-full flex-col gap-6">
			<div class="mt-4 flex items-center gap-8 sakrij" >
				<p class="text-xl font-black">Sign here</p>
				<button onclick={() => draw!.clear()} class="btn btn-primary">Clear</button>
				<!-- <button onclick={download} >Download</button> -->
				<button class="btn btn-primary" onclick={() => window.print()}>Print</button>
			</div>

			<div class="flex">
				<svg id="svg" class="w-full border border-dashed bg-white" bind:this={input}></svg>
				<svg
					class="h-44 bg-white print:h-44"
					use:qr={{
						data: 'https://svelte-put.vnphanquang.com/docs/qr',
						shape: 'circle',
						moduleFill: 'green',
						anchorInnerFill: 'green',
						anchorOuterFill: 'green',
					}}
				/>
			</div>
		</div>
	</div>
</div>

<style>
	@page {
		size: 7in 9.25in;
		margin: 6mm;
	}
	@media print {
		:global(body) {
			visibility: hidden;
		}
		.sakrij {
			display: none;
		}
		#section-to-print {
			position: absolute;
			top: 0;
			left: 0;
			visibility: visible;
		}
	}
</style>
