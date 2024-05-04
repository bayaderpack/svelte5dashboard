<script lang="ts">
	import { flip } from 'svelte/animate'

	let baskets = $state([
		{
			name: 'Need to be done',
			items: ['Orange', 'Pineapple'],
		},
		{
			name: 'Doing',
			items: ['Banana', 'Apple'],
		},
		{
			name: 'Done',
			items: ['GrapeFruit'],
		},
	])

	let hoveringOverBasket = $state()

	function dragStart(event: DragEvent, basketIndex: number, itemIndex: number) {
		// The data we want to make available when the element is dropped
		// is the index of the item being dragged and
		// the index of the basket from which it is leaving.
		const data = { basketIndex, itemIndex }
		// console.log(data)
		event.dataTransfer?.setData('text/plain', JSON.stringify(data))
	}

	function drop(event: DragEvent, basketIndex: number) {
		event.preventDefault()

		const json = event.dataTransfer?.getData('text/plain')
		const data = JSON.parse(json!)

		// Remove the item from one basket.
		// Splice returns an array of the deleted elements, just one in this case.
		const [item] = baskets[data.basketIndex].items.splice(data.itemIndex, 1)

		// Add the item to the drop target basket.
		baskets[basketIndex].items.push(item)
		baskets = baskets

		hoveringOverBasket = null
	}
</script>

<p>Drag a fruit from one basket to another.</p>

<div class="grid grid-cols-3 gap-16">
	{#each baskets as basket, basketIndex (basket)}
		<div animate:flip>
			<h3
				class="rounded-t-xl bg-primary px-12 py-4 font-black text-primary-content"
				contenteditable
			>
				{basket.name}
			</h3>
			<ul
				class="min-h-36 border border-slate-700"
				class:border={hoveringOverBasket === basket.name}
				ondragenter={() => (hoveringOverBasket = basket.name)}
				ondragleave={() => (hoveringOverBasket = null)}
				ondrop={(event) => drop(event, basketIndex)}
				ondragover={(ev) => {
					ev.preventDefault()
				}}
			>
				{#each basket.items as item, itemIndex (item)}
					<div class="item" animate:flip>
						<li
							draggable={true}
							ondragstart={(event) => dragStart(event, basketIndex, itemIndex)}
							class="bg-base-200 px-8 py-3 hover:bg-base-300"
						>
							{item}
						</li>
					</div>
				{/each}
			</ul>
		</div>
	{/each}
</div>
