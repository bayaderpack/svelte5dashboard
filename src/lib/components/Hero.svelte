<script lang="ts">
	import * as m from '$m'
</script>

<div class="hero my-8 h-96 min-h-96 rounded-xl">
	<figure class="w-full">
		<img src="/hero.jpg" alt="" class="object-fit hidden rounded-box md:block" />
	</figure>
	<div class="hero-overlay hidden rounded-xl bg-opacity-60 md:block"></div>
	<div class="hero-content text-center text-base-content md:text-neutral-content">
		<div class="max-w-2xl">
			<h1 class="mb-5 text-5xl font-bold">Why {m.bayader_aljazirah()}</h1>
			<p class="mb-5">
				{m.valami()}, sit amet consectetur adipisicing elit. Voluptatibus odio magni explicabo
				aliquid, asperiores consequuntur cupiditate cum vel praesentium cumque illum sed quam,
				accusantium ad minima culpa iste. Aliquid, nam.
			</p>
			<button class="btn btn-primary">{m.btnDetails()}</button>
		</div>
	</div>
</div>

<style>
	img {
		width: 100%;
		max-width: 100%;
		height: auto;
		max-height: 25rem;
	}
</style>
