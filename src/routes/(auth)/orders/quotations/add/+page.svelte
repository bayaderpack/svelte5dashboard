<script lang="ts">

    const material: Array<any> = $state([])
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

<div>
	<h2>Items</h2>
	<div class="flex flex-col md:flex-row">
		<label class="form-control w-full">
			<div class="label">
				<span class="label-text">Item name</span>
			</div>
			<input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
			<div class="label">
				<span class="label-text-alt">Error</span>
			</div>
		</label>
		<label class="form-control w-full">
			<div class="label">
				<span class="label-text">Quantity</span>
			</div>
			<input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
			<div class="label">
				<span class="label-text-alt">Error</span>
			</div>
		</label>
        <label class="form-control w-full">
			<div class="label">
				<span class="label-text">Length (L)</span>
			</div>
			<input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
			<div class="label">
				<span class="label-text-alt">Error</span>
			</div>
		</label>
        <label class="form-control w-full">
			<div class="label">
				<span class="label-text">Width (W)</span>
			</div>
			<input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
			<div class="label">
				<span class="label-text-alt">Error</span>
			</div>
		</label>
        <label class="form-control w-full">
			<div class="label">
				<span class="label-text">Height (H)</span>
			</div>
			<input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
			<div class="label">
				<span class="label-text-alt">Error</span>
			</div>
		</label>
	</div>
    <label class="form-control w-full">
        <div class="label">
            <span class="label-text">Material name</span>
        </div>
        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
        <div class="label">
            <span class="label-text-alt">Error</span>
        </div>
    </label>
    <div class="flex flex-col md:flex-row">
		<label class="form-control w-full">
			<div class="label">
				<span class="label-text">Box sheet</span>
			</div>
			<input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
			<div class="label">
				<span class="label-text-alt">Error</span>
			</div>
		</label>
		<label class="form-control w-full">
			<div class="label">
				<span class="label-text">Waste</span>
			</div>
			<input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
			<div class="label">
				<span class="label-text-alt">Error</span>
			</div>
		</label>
        <label class="form-control w-full">
			<div class="label">
				<span class="label-text">Sheet size</span>
			</div>
			<input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
			<div class="label">
				<span class="label-text-alt">Error</span>
			</div>
		</label>
        <label class="form-control w-full">
			<div class="label">
				<span class="label-text">Price</span>
			</div>
			<input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
			<div class="label">
				<span class="label-text-alt">Error</span>
			</div>
		</label>
	</div>
</div>
