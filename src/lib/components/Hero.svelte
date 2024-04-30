<script lang="ts">
	import * as m from '$m'
</script>

<div class="hero my-8 min-h-96 h-96 rounded-xl ">
	<img src="/hero.avif" alt="" class="hidden md:block object-fit rounded-box" >
	<div class="hero-overlay rounded-xl bg-opacity-60 hidden md:block"></div>
	<div class="hero-content text-center md:text-neutral-content text-base-content">
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
	max-width: 100%;
	width: 100%;
	max-height: 25rem;
	height: auto;
	/* max-w-full w-full max-h-96 h-auto */
}

</style>
