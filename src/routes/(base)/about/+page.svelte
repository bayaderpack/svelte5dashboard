<script>
	import Content from '$components/Content.svelte'

	// $effect(() => {
	// 	console.log(yes)
	// })
</script>

<Content title="About us">
	<div class="mx-auto grid grid-cols-2 gap-24 py-16">
		<div class="prose flex flex-col">
			<h2>Bayader Aljazeera for Packaging & Printing</h2>
			<p class="prose">
				Established in 2002 with strong determination to provide high quality and affordable
				solutions of packaging and printing to the local market. By now Bayader Aljazeera has become
				a specialized manufacturer of packaging boxes and materials with state of the art production
				machines, we are proud to be able to provide the best possible solutions of packaging and
				printing to businesses with the most affordable prices. helping businesses and customers to
				achieve success. Bayader Aljazeera for Packaging & Printing was the first manufacturer in
				Saudi Arabia which is able to provide packaging and printing solutions to small & medium
				enterprises with low quantity and ready to use solutions, helping small businesses that
				cannot afford to plan a large quantity order, and now we've been able to establish an
				automated channel through our web platform to customize businesses selections by online
				orders.
			</p>
		</div>
		<div>
			<img
				src="https://bayaderpack.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-us1.785eb612.jpg&w=640&q=75"
				alt=""
			/>
		</div>
	</div>

	<div class="mx-auto grid grid-cols-2 gap-24">
		<div class="prose-img:mx-auto prose-img:w-full prose-img:max-w-full prose-img:h-full prose">
			<img
				src="https://bayaderpack.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-us1.785eb612.jpg&w=640&q=75"
				alt=""
			/>
		</div>
		<div class="prose flex flex-col">
			<h3>Why Bayader Aljazeera?</h3>
			<ol>
				<li>
					We can help you to design and manufacture your custom design/size product with the lowest
					minimum order quantity in the market. If you are a small business owner, you don't need to
					worry about having to afford large quantity order to be able to launch your business.
				</li>
				<li>
					We've a fully automated advanced manufacture machines that are capable of manufacturing
					all your packaging needs with the lowest possible cost, reducing the cost and time of
					having to import raw or end materials
				</li>
				<li>
					You can easily request an order online and provide your custom design/requests, we will
					help you to draw and design the material, and send you a detailed quotation within no
					time.
				</li>
				<li>
					We provide packaging and printing solutions for all businesses with no exceptions,
					resturants, coffee shops, cosmetics, food factories, bakeries, sweet shops, you name it.
				</li>
			</ol>
		</div>
	</div>
</Content>
