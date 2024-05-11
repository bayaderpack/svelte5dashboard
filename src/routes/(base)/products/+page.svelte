<!--
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.

  Plugins:
    - @tailwindcss/forms
-->
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
</section>
