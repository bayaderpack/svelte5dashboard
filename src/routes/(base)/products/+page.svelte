<!--
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.

  Plugins:
    - @tailwindcss/forms
-->
<script>
	import Filters from '$lib/components/filters/Filters.svelte'
	import Filter from '$lib/components/filters/Filter.svelte'
	import Icon from '@iconify/svelte'
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
			<div class="hidden space-y-4 lg:block">
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
				<ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					<li>
						<a href="/" class="group block overflow-hidden">
							<img
								src="https://bayaderpack.com/_next/image?url=https%3A%2F%2Fadmin.bayaderpack.com%2Fmedia%2Fproducts%2Fbags%2Finvercote-bag%2Fwrap_paper_large.jpg&w=384&q=75"
								alt=""
								class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
							/>

							<div class="relative bg-base-100 pt-3">
								<h3
									class="text-xs text-base-content group-hover:underline group-hover:underline-offset-4"
								>
									Basic Tee
								</h3>

								<p class="mt-2">
									<span class="sr-only"> Regular Price </span>

									<span class="tracking-wider text-base-content"> £24.00 GBP </span>
								</p>
							</div>
						</a>
					</li>

					<li>
						<a href="/" class="group block overflow-hidden">
							<img
								src="https://bayaderpack.com/_next/image?url=https%3A%2F%2Fadmin.bayaderpack.com%2Fmedia%2Fproducts%2Fbags%2Finvercote-bag%2Fwrap_paper_large.jpg&w=384&q=75"
								alt=""
								class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
							/>

							<div class="relative bg-base-100 pt-3">
								<h3
									class="text-xs text-base-content group-hover:underline group-hover:underline-offset-4"
								>
									Basic Tee
								</h3>

								<p class="mt-2">
									<span class="sr-only"> Regular Price </span>

									<span class="tracking-wider text-base-content"> £24.00 GBP </span>
								</p>
							</div>
						</a>
					</li>

					<li>
						<a href="/" class="group block overflow-hidden">
							<img
								src="https://bayaderpack.com/_next/image?url=https%3A%2F%2Fadmin.bayaderpack.com%2Fmedia%2Fproducts%2Fbags%2Finvercote-bag%2Fwrap_paper_large.jpg&w=384&q=75"
								alt=""
								class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
							/>

							<div class="relative bg-base-100 pt-3">
								<h3
									class="text-xs text-base-content group-hover:underline group-hover:underline-offset-4"
								>
									Basic Tee
								</h3>

								<p class="mt-2">
									<span class="sr-only"> Regular Price </span>

									<span class="tracking-wider text-base-content"> £24.00 GBP </span>
								</p>
							</div>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>
