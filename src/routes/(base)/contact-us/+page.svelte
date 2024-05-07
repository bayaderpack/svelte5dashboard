<script>
	import Icon from '@iconify/svelte'
	import countries from '$lib/components/country'

	let selected = countries[0]
	let open = false

	let selectedCountryCode = ''
	let phoneNumber = ''
	let searchText = ''
	let filteredCountries = countries

	function handleCountryCodeChange(event) {
		selectedCountryCode = event.target.value
		phoneNumber = ''
		searchText = ''
		filteredCountries = countries.filter(
			(country) =>
				country.code.startsWith(selectedCountryCode) ||
				country.name.toLowerCase().startsWith(searchText.toLowerCase()),
		)
	}

	function handleSearchChange(event) {
		searchText = event.target.value
		filteredCountries = countries.filter(
			(country) =>
				country.code.startsWith(selectedCountryCode) ||
				country.name.toLowerCase().startsWith(searchText.toLowerCase()),
		)
	}

	function handlePhoneNumberChange(event) {
		phoneNumber = event.target.value
	}
</script>

<div
	class="grid grid-cols-1 bg-gradient-to-l from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% md:grid-cols-3"
>
	<div>
		<Icon icon="" class="text-center text-6xl text-white" />
	</div>
</div>
<div class="container mx-auto px-8 py-2 md:py-8">
	<div class="flex min-w-full max-w-[90%] flex-col md:w-screen lg:max-w-[70%]">
		<div class="prose mx-auto py-8">
			<h1>Contact Us</h1>
		</div>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
			<form class="w-full" method="POST">
				<fieldset class="border-2 p-6 rounded-box">
					<legend class="font-black text-xl text-base-content">Contact form</legend>

					<div class="flex flex-col gap-3">
						<p class="prose text-sm">Your name</p>

						<input
							name="name"
							type="text"
							placeholder="Your name"
							class="input input-bordered my-1 w-full"
						/>
						<p class="prose text-sm">Your email</p>
						<input
							name="email"
							type="text"
							placeholder="Your email address"
							class="input input-bordered my-1 w-full"
						/>

						<p class="prose text-sm">Phone</p>
						<div class="relative flex">
							<div
								class=" relative flex w-full border border-gray-300 px-2 ring-offset-2 focus-within:rounded-sm focus-within:ring-2 focus-within:ring-gray-300 active:rounded-sm active:ring-2 active:ring-gray-300"
							>
								<button
									type="button"
									on:click={() => (open = !open)}
									class="flex h-full items-center border-r border-gray-300 p-3"
									><Icon icon={`flagpack:${selected.code.toLowerCase()}`} class="mr-3"></Icon>
									<!-- <img src={`flags/${selected.code.toLowerCase()}.png`} alt="" class="mr-3" /> -->
									{selected.dial_code}
									<Icon icon="bi:caret-down-fill" class="ml-3 text-2xl" /></button
								>
								{#if open}
									<div
										class="w-92 absolute top-full h-72 overflow-auto rounded-box bg-white px-6 py-4 shadow-lg"
									>
										{#each countries as country}
											<div
												tabindex="0"
												role="button"
												class="flex items-center space-x-3 space-y-4 py-2 hover:bg-gray-100"
												on:click={() => {
													selected = country
													open = false
												}}
												on:keydown={() => {
													selected = country
													open = false
												}}
											>
												<img
													src={country.flag ? `flags/${country.code.toLowerCase()}.png` : ''}
													alt=""
												/>
												<p>{country.name}</p>
												<p>+{country.dial_code}</p>
											</div>
										{/each}
									</div>
								{/if}
								<input
									name="email"
									type="text"
									placeholder="Phone number"
									class="  my-1 w-full appearance-none px-6 focus:outline-none"
								/>
							</div>
							<!-- <div class="flex items-center gap-4">
							<div class="input-group">
								<select
									bind:value={selectedCountryCode}
									on:change={handleCountryCodeChange}
									class="select select-sm w-full"
								>
									<option value="">Select Country</option>
									{#each filteredCountries as country, index}
										<option value={country.code}>{country.name} ({country.code})</option>
									{/each}
								</select>
								<span class="input-group-text">
									<img class="flag w-4 h-4" src={`/flags/${selected.code.toLowerCase()}.png`} />
								</span>
							</div>

							<input
								name="phone"
								type="text"
								placeholder="Your phone number"
								class="input input-bordered w-3/4"
								bind:value={phoneNumber}
								on:input={handlePhoneNumberChange}
							/>
						</div> -->

							<!-- {#each countries as country}
		
									
					
							{/each} -->

							<!-- <select name="country" >
							<option value="KSA">KSA</option>
							<option value="UAE">UAE</option>
						</select> -->
						</div>

						<select name="reason" class="select select-bordered w-full"
							><option value="Reason for Contact">Reason for Contact</option><option
								value="Open Source Collaboration">Open Source Collaboration</option
							><option value="Personal">Personal</option><option value="Other">Other</option
							></select
						>
						<textarea name="message" class="textarea textarea-bordered" placeholder="Your message"
						></textarea> <button type="submit" class="btn btn-neutral">Send Message</button>
					</div>
					<div class="divider"></div>
					<div class="mt-4 flex flex-col">
						<div class="flex items-center text-xl font-semibold text-neutral">
							<Icon icon="ion:location-sharp" class="mr-4 text-center text-4xl text-slate-700" /> Our
							address:
						</div>
						<div class=" flex px-3 text-lg">
							<p>Southern Ring Rd, Al-Manakh, Riyadh 14311</p>
							<p>KSA Riyadh</p>
						</div>
					</div>
				</fieldset>
			</form>

			<iframe
				title="sa"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.0552215842145!2d46.774134776137764!3d24.621781554765153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f089b33a44a2f%3A0x7aa4c73b11ee6e28!2z2KjZitin2K_YsSDYp9mE2KzYstmK2LHYqSDZhNmE2LfYqNin2LnYqSDZiNin2YTYqti62YTZitmBIEJheWFkZXIgQWxqYXppcmFoIHByaW50aW5nICYgcGFja2FnaW5n!5e0!3m2!1sen!2ssa!4v1701946974327!5m2!1sen!2ssa"
				width="100%"
				height="450"
				style="border:0;"
				allowfullscreen
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
                class="md:mt-4"
			></iframe>
		</div>

		<div class="divider"></div>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
			<div class="stats shadow">
				<a href="tel:050-946-1722">
					<div class="stat">
						<div class="stat-title flex items-center font-semibold text-neutral">
							<Icon icon="bx:bx-phone-call" class="mr-4 text-center text-2xl" /> Call us:
						</div>
						<div class="stat-value text-2xl text-slate-700 underline">050-946-1722</div>
					</div>
				</a>
			</div>
			<div class="stats shadow">
				<a href="mail:info@bayaderpack.com">
					<div class="stat">
						<div class="stat-title flex items-center font-semibold text-neutral">
							<Icon icon="bi:envelope" class="mr-4 text-center text-2xl" /> Email:
						</div>
						<div class="stat-value text-2xl text-slate-700 underline">info@bayaderpack.com</div>
					</div>
				</a>
			</div>

			<div class="stats shadow">
				<a href="tel:050-946-1722">
					<div class="stat">
						<div class="stat-title flex items-center font-semibold text-neutral">
							Social networks
						</div>
						<div class="stat-value flex text-2xl">
							<Icon icon="logos:facebook" class="mr-4 text-center text-2xl" />
							<Icon icon="logos:whatsapp-icon" class="mr-4 text-center text-2xl" />
							<Icon icon="logos:twitter" class="mr-4 text-center text-2xl" />
							<Icon icon="skill-icons:instagram" class="mr-4 text-center text-2xl" />
						</div>
					</div>
				</a>
			</div>
		</div>
	</div>
</div>
