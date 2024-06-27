<script>
	import Icon from '@iconify/svelte'
	import PhoneInput from '$components/inputs/PhoneInput.svelte'
	import Content from '$components/Content.svelte'
</script>

<Content title="Contact us">
	<div class="flex min-w-full max-w-[90%] flex-col md:w-screen lg:max-w-[70%]">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
			<form class="w-full" method="POST">
				<fieldset class="rounded-box border-2 border-base-content p-6">
					<legend class="text-xl font-black text-base-content">Contact form</legend>

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

						<PhoneInput></PhoneInput>

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
						<div class="flex items-center text-xl font-semibold text-base-content">
							<Icon icon="ion:location-sharp" class="mr-4 text-center text-4xl text-base-content" />
							Our address:
						</div>
						<div class=" flex px-3 text-lg">
							<p>Southern Ring Rd, Al-Manakh, Riyadh 14311</p>
							<p>KSA Riyadh</p>
						</div>
					</div>
				</fieldset>
			</form>

			<div class="flex flex-col justify-between">
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

				<div class="stat rounded-box border">
					<div class="stat-title mb-6 flex items-center text-xl font-black text-base-content">
						Social networks
					</div>
					<div class="stat-value grid grid-cols-2 gap-7 text-2xl md:grid-cols-4">
						<a href="/" class="btn btn-ghost btn-lg flex h-32 items-center justify-center">
							<Icon icon="logos:facebook" class="text-center text-6xl" />
						</a>
						<a href="/" class="btn btn-ghost btn-lg flex h-32 items-center justify-center">
							<Icon icon="logos:whatsapp-icon" class="text-center text-6xl" />
						</a>

						<a href="/" class="btn btn-ghost btn-lg flex h-32 items-center justify-center">
							<Icon icon="logos:twitter" class="text-center text-6xl" />
						</a>

						<a href="/" class="btn btn-ghost btn-lg flex h-32 items-center justify-center">
							<Icon icon="skill-icons:instagram" class="text-center text-6xl" />
						</a>
					</div>
				</div>
			</div>
		</div>

		<div class="divider"></div>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
			<div class="stats border">
				<a href="tel:050-946-1722">
					<div class="stat">
						<div class="stat-title flex items-center font-semibold text-base-content">
							<Icon icon="bx:bx-phone-call" class="mr-4 text-center text-2xl text-base-content " /> Call
							us:
						</div>
						<div class="stat-value text-2xl text-base-content underline">050-946-1722</div>
					</div>
				</a>
			</div>
			<div class="stats border">
				<a href="mail:info@bayaderpack.com">
					<div class="stat">
						<div class="stat-title flex items-center font-semibold text-base-content">
							<Icon icon="bi:envelope" class="mr-4 text-center text-2xl" /> Email:
						</div>
						<div class="stat-value text-2xl underline">info@bayaderpack.com</div>
					</div>
				</a>
			</div>
		</div>
	</div>
</Content>
