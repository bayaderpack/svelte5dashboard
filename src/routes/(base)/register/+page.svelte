<script>
	import * as m from '$m'
	import Icon from '@iconify/svelte'

	let showName = $state(false)
	let showCompany = $state(false)
	let showAddress = $state(false)
	let selected = $state()

	$effect(() => {
		if (selected == 'company' || selected == 'agency') {
			showCompany = true
			showAddress = true
            showName = false
		} else if (selected == 'freelance') {
			showCompany = true
            showAddress = false
            showName = false
		} else if (selected == 'government') {
			showCompany = false
            showAddress = true
            showName = true
		}
	})
</script>

<section class="flex min-h-[87vh] items-stretch text-white">
	<div
		class="relative hidden w-1/2 items-center bg-gray-500 bg-cover bg-no-repeat lg:flex"
		style="background-image: url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80);"
	>
		<div class="absolute inset-0 z-0 bg-black opacity-60"></div>
		<div class="z-10 w-full px-24">
			<h1 class="text-left text-5xl font-bold tracking-wide">{m.bayader_aljazirah()}</h1>
			<p class="my-4 text-7xl">You THINK it... <br /> We PRINT it.</p>
		</div>
		<div class="absolute bottom-0 left-0 right-0 flex justify-center space-x-4 p-4 text-center">
			<a href="/">
				<Icon icon="mdi:twitter" class="text-5xl" ></Icon>
			</a>
			<a href="/">
				<Icon icon="mdi:facebook" class="text-5xl" ></Icon>
			</a>
			<a href="/">
				<Icon icon="mdi:instagram" class="text-5xl" ></Icon>
			</a>
		</div>
	</div>
	<div
		class="z-0 flex w-full items-start justify-center bg-base-100 px-0 text-center md:px-16 lg:w-1/2"
	>

		<div class="z-20 w-full py-8">
			<h2 class="text-5xl font-black text-base-content">Register</h2>
			<form action="" class="mx-auto w-full px-4 sm:w-2/3 lg:px-0">
				<div class="pb-2 pt-4">
					<label class="form-control w-full">
						<div class="label">
							<span class="label-text">First Name</span>
						</div>
						<label
							class="input input-bordered input-lg md:input-sm input-primary flex items-center gap-2 text-base-content"
						>
							<Icon icon="bxs:user" ></Icon>
							<input type="text" class="grow" placeholder="Name" />
						</label>
					</label>
				</div>
				<div class="flex flex-col md:flex-row gap-3">
					<div class="py-2 w-full">
						<label class="form-control w-full">
							<div class="label">
								<span class="label-text">Email</span>
							</div>
							<label
								class="input input-bordered input-lg md:input-sm input-primary flex items-center gap-2 text-base-content"
							>
								<Icon icon="bi:envelope" ></Icon>
								<input type="text" class="grow" placeholder="example@example.com" />
							</label>
						</label>
					</div>
					<div class="py-2 w-full">
						<label class="form-control w-full">
							<div class="label">
								<span class="label-text">Password</span>
							</div>
							<label
								class="input input-bordered input-lg md:input-sm input-primary flex items-center gap-2 text-base-content"
							>
								<Icon icon="material-symbols:lock" ></Icon>
								<input type="password" class="grow" placeholder="Password" />
							</label>
						</label>
					</div>
				</div>

				<div class="py-2">
					<label class="form-control w-full">
						<div class="label">
							<span class="label-text">Mobile number</span>
						</div>
						<label
							class="input input-bordered input-lg md:input-sm input-primary flex items-center gap-2 text-base-content"
						>
							<Icon icon="bi:phone" ></Icon>
							<input type="text" class="grow" placeholder="0501234567" />
						</label>
					</label>
				</div>

				<label class="form-control w-full">
					<div class="label">
						<span class="label-text">Who are you?</span>
					</div>
					<select
						class="select select-bordered select-primary w-full text-base-content"
						bind:value={selected}
					>
						<option disabled selected>Please select</option>
						<option value="representative">Representative</option>
						<option value="company">Company</option>
						<option value="agency">Advertising Agency</option>
						<option value="freelance">Freelancing</option>
						<option value="government">Governemnt</option>
					</select>
				</label>

				{#if showName}
					<div class="py-2">
						<label class="form-control w-full">
							<div class="label">
								<span class="label-text">Name</span>
							</div>
							<label
								class="input input-bordered input-lg md:input-sm input-primary flex items-center gap-2 text-base-content"
							>
								<Icon icon="bi:building" ></Icon>
								<input type="text" class="grow" placeholder="Name" />
							</label>
						</label>
					</div>
				{/if}

				{#if showCompany}
					<div class="py-2">
						<label class="form-control w-full">
							<div class="label">
								<span class="label-text">Comnpany</span>
							</div>
							<label
								class="input input-bordered input-lg md:input-sm input-primary flex items-center gap-2 text-base-content"
							>
								<Icon icon="bi:building" ></Icon>
								<input type="text" class="grow" placeholder="Company" />
							</label>
						</label>
					</div>
				{/if}
				{#if showAddress}
					<div class="py-2">
						<label class="form-control w-full">
							<div class="label">
								<span class="label-text">Location</span>
							</div>
							<label
								class="input input-bordered input-lg md:input-sm input-primary flex items-center gap-2 text-base-content"
							>
								<Icon icon="heroicons:map-pin-16-solid" ></Icon>
								<input type="text" class="grow" placeholder="Company" />
							</label>
						</label>
					</div>
				{/if}

				<div class="py-6">
					<button class="btn btn-primary w-full uppercase">Register</button>
				</div>

				<p class="pt-12 text-base-content">
					You already have an account? <a href="/register" class="btn btn-secondary">Login</a>
				</p>

				<div class="left-0 right-0 mt-16 flex justify-center space-x-4 p-4 text-center lg:hidden">
					<a href="/">
						<Icon icon="mdi:twitter" class="text-5xl" ></Icon>
					</a>
					<a href="/">
						<Icon icon="mdi:facebook" class="text-5xl" ></Icon>
					</a>
					<a href="/">
						<Icon icon="mdi:instagram" class="text-5xl" ></Icon>
					</a>
				</div>
			</form>
		</div>
	</div>
</section>
