<script>
	import Map from '$components/Map.svelte'
	import SettingsPage from '$components/SettingsPage.svelte'
	import TabItem from '$components/tab/TabItem.svelte'

	import Tabs from '$components/tab/Tabs.svelte'
</script>

<SettingsPage title="General Settings">
	<Tabs>
		<TabItem open title="Generals">
			<div class="flex-cols md:flex-rows flex gap-8">
				<div class="font-b flex w-full flex-col">
					<h3>Store info</h3>
					<label class="form-control w-full">
						<div class="label">
							<span class="label-text">Store Name</span>
						</div>
						<input type="text" placeholder="Bayaderpack" class="input input-bordered w-full" />
					</label>
					<label class="form-control w-full">
						<div class="label">
							<span class="label-text">Stire Description</span>
						</div>
						<textarea rows="3" class="textarea textarea-bordered w-full"
							>We are printing and packaging company for small and medium businesses
						</textarea>
					</label>
					<label class="form-control w-full">
						<div class="label">
							<span class="label-text">Country</span>
						</div>
						<input type="text" placeholder="966501231231" class="input input-bordered w-full" />
					</label>
					<label class="form-control w-full">
						<div class="label">
							<span class="label-text">City</span>
						</div>
						<input type="text" placeholder="Bayaderpack" class="input input-bordered w-full" />
					</label>
					<label class="form-control w-full">
						<div class="label">
							<span class="label-text">Postal Code</span>
						</div>
						<input type="text" placeholder="Bayaderpack" class="input input-bordered w-full" />
					</label>
					<label class="form-control w-full">
						<div class="label">
							<span class="label-text">Address</span>
						</div>
						<input type="text" placeholder="Bayaderpack" class="input input-bordered w-full" />
					</label>
					<label class="form-control w-full">
						<div class="label">
							<span class="label-text">Telephone</span>
						</div>
						<input type="text" placeholder="Bayaderpack" class="input input-bordered w-full" />
					</label>
					<label class="form-control w-full">
						<div class="label">
							<span class="label-text">VAT. Number</span>
						</div>
						<input type="text" placeholder="Bayaderpack" class="input input-bordered w-full" />
					</label>
					<label class="form-control w-full">
						<div class="label">
							<span class="label-text">Opening hours</span>
						</div>
						<input
							type="text"
							placeholder="Sa 09:00-16:00, Su-Th 08:00-18:00"
							class="input input-bordered w-full"
						/>
					</label>
					<label class="form-control w-full">
						<div class="label">
							<span class="label-text">Website</span>
						</div>
						<input type="text" placeholder="bayaderpack.com" class="input input-bordered w-full" />
					</label>
					<div class="mt-8 h-96">
						<Map />
					</div>
				</div>
				<div class="flex w-full flex-col">
					<h3 class="font-bold">Social media</h3>
					<label class="form-control w-full">
						<div class="label">
							<span class="label-text">Facebook</span>
						</div>
						<input type="text" placeholder="bayaderpack" class="input input-bordered w-full" />
					</label>
					<label class="form-control w-full">
						<div class="label">
							<span class="label-text">Twitter</span>
						</div>
						<input type="text" placeholder="bayaderpack" class="input input-bordered w-full" />
					</label>
					<label class="form-control w-full">
						<div class="label">
							<span class="label-text">Instagram</span>
						</div>
						<input type="text" placeholder="bayaderpack" class="input input-bordered w-full" />
					</label>
					<label class="form-control w-full">
						<div class="label">
							<span class="label-text">Snapchat</span>
						</div>
						<input type="text" placeholder="bayaderpack" class="input input-bordered w-full" />
					</label>
					<label class="form-control w-full">
						<div class="label">
							<span class="label-text">Whatsapp</span>
						</div>
						<input type="text" placeholder="966501231231" class="input input-bordered w-full" />
					</label>
					<div class="divider"></div>
					<label class="form-control w-full">
						<div class="label">
							<span class="label-text">Google maps API key</span>
						</div>
						<input
							type="text"
							placeholder="AIzaSyCU1EAaBkMwU4Z11LE1SGYZMa_1DBNvzDo"
							class="input input-bordered w-full"
						/>
					</label>
					<div class="form-control w-full">
						<label class="label cursor-pointer">
							<span class="label-text">Maintainance mode</span>
							<input type="checkbox" class="toggle toggle-primary" />
						</label>
					</div>
				</div>
			</div>
		</TabItem>
		<TabItem title="Store">
			<div class="flex flex-col items-center">
				<div class="flex w-full flex-col gap-8 md:flex-row">
					<div class="form-control w-full">
						<label class="label cursor-pointer">
							<span class="label-text">Show product price with tax</span>
							<input type="checkbox" class="toggle toggle-primary" checked />
						</label>
					</div>
					<div class="form-control w-full">
						<label class="label cursor-pointer">
							<span class="label-text">Activate Points System</span>
							<input type="checkbox" class="toggle toggle-primary" checked />
						</label>
					</div>
				</div>
				<div class="flex w-full flex-col gap-8 md:flex-row">
					<label class="form-control w-full">
						<div class="label">
							<span class="label-text">Price decimal scale</span>
						</div>
						<input type="number" placeholder="2" class="input input-bordered w-full" />
					</label>
				</div>
			</div>
		</TabItem>
		<TabItem title="Emails">
			<div class="flex flex-col items-center">
				<h3 class="font-black">
					This is important to be able to send/recieve emails to/from customers, if you are not sure
					about it, contact the Admin
				</h3>
				<div class="divider"></div>
				<div class="flex w-full flex-col gap-8 md:flex-row">
					<label class="form-control w-full">
						<div class="label">
							<span class="label-text">Host</span>
						</div>
						<input type="text" placeholder="Type here" class="input input-bordered w-full" />
					</label>
					<label class="form-control w-full">
						<div class="label">
							<span class="label-text">Port</span>
						</div>
						<input type="text" placeholder="Type here" class="input input-bordered w-full" />
					</label>
				</div>
				<div class="flex w-full flex-col gap-8 md:flex-row">
					<label class="form-control w-full">
						<div class="label">
							<span class="label-text">Sender email</span>
						</div>
						<input type="text" placeholder="Type here" class="input input-bordered w-full" />
					</label>
					<label class="form-control w-full">
						<div class="label">
							<span class="label-text">Sender email password</span>
						</div>
						<input type="text" placeholder="Type here" class="input input-bordered w-full" />
					</label>
				</div>
				<div class="divider">Emails recieved for store request</div>
				<div class="flex w-full flex-col gap-8 md:flex-row">
					<label class="form-control w-full">
						<div class="label">
							<span class="label-text">Main email</span>
						</div>
						<input
							type="email"
							placeholder="example@example.com"
							class="input input-bordered w-full"
						/>
					</label>
					<label class="form-control w-full">
						<div class="label">
							<span class="label-text">CC</span>
						</div>
						<input
							type="email"
							placeholder="example@example.com"
							class="input input-bordered w-full"
						/>
					</label>
				</div>
				<div class="divider">Emails of contact form</div>
				<div class="flex w-full flex-col gap-8 md:flex-row">
					<label class="form-control w-full">
						<div class="label">
							<span class="label-text">Main Email</span>
						</div>
						<input
							type="email"
							placeholder="example@example.com"
							class="input input-bordered w-full"
						/>
					</label>
					<label class="form-control w-full">
						<div class="label">
							<span class="label-text">CC</span>
						</div>
						<input
							type="email"
							placeholder="example@example.com"
							class="input input-bordered w-full"
						/>
					</label>
				</div>
				<div class="divider">Email of quotation orders</div>
				<div class="flex w-full flex-col gap-8 md:flex-row">
					<label class="form-control w-full">
						<div class="label">
							<span class="label-text">Main Email</span>
						</div>
						<input
							type="email"
							placeholder="example@example.com"
							class="input input-bordered w-full"
						/>
					</label>
					<label class="form-control w-full">
						<div class="label">
							<span class="label-text">CC</span>
						</div>
						<input
							type="email"
							placeholder="example@example.com"
							class="input input-bordered w-full"
						/>
					</label>
				</div>
			</div>
		</TabItem>
	</Tabs>
</SettingsPage>
