<script>
	import Dropdown from './Dropdown.svelte'
	import Icon from '@iconify/svelte'
	import { languageTag, sourceLanguageTag } from '$paraglide/runtime'
	import { i18n } from '$lib/i18n'
	import { page } from '$app/stores'
	import * as m from '$paraglide/messages'
	import { cn } from '$lib/utils'
	import ThemeToggleIcon from '$components/ThemeToggleIcon.svelte'

	let { logo = false } = $props()

	/**
	 * @param {string} token
	 */
	function parseJwt(token) {
		// Split the token into parts
		const parts = token.split('.')

		if (parts.length !== 3) {
			throw new Error('Invalid JWT structure')
		}

		// Manual base64url decoding (less secure, use with caution)
		const base64Payload = parts[1]
		const decodedChars = atob(base64Payload.replace(/-/g, '+').replace(/_/g, '/')) // Replace URL-safe characters

		// Convert decoded bytes to a string (potential issues with non-UTF-8 encoded tokens)
		let payloadString = ''
		for (let i = 0; i < decodedChars.length; i++) {
			payloadString += String.fromCharCode(decodedChars.charCodeAt(i))
		}

		// Parse the decoded payload as JSON
		const payload = JSON.parse(payloadString)

		return payload
	}

	let email =
		$page.data?.accessJWT != '' &&
		$page.data?.accessJWT != undefined &&
		$page.data?.accessJWT != 'undefined'
			? parseJwt($page.data?.accessJWT)?.email
			: undefined

	let show = $state(false)
</script>

<header
	class={cn(
		logo && 'shadow-sm',
		!logo && 'shadow-sm',
		'easy-in-out relative z-[99] w-full rounded-lg  transition-all duration-300',
	)}
>
	<nav
		class={cn(
			logo && 'rounded-lg bg-base-100  shadow-sm',
			!logo && 'rounded-none bg-base-100  shadow-sm',
			'easy-in-out navbar  transition-all duration-300 xl:px-24',
		)}
	>
		<div class="navbar-start " class:md:hidden={!logo}>
			<div class="dropdown">
				<div tabIndex={0} role="button" class="btn btn-ghost lg:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h8m-8 6h16"
						/>
					</svg>
				</div>
				<ul
					tabIndex={0}
					class="menu dropdown-content menu-sm z-[9998] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
				>
					<li>
						<a href="/" class="transition-all duration-300 hover:bg-transparent hover:text-primary">
							{m.home()}
						</a>
					</li>
					<li>
						<details>
							<summary>Menu</summary>
							<ul class="w-28 p-2">
								<li>
									<a
										href="menu"
										class="transition-all duration-300 hover:bg-transparent hover:text-primary"
									>
										All Menu
									</a>
								</li>

								<li>
									<a
										href="pizza"
										class="transition-all duration-300 hover:bg-transparent hover:text-primary"
									>
										Pizza
									</a>
								</li>
							</ul>
						</details>
					</li>
					<li>
						<details>
							<summary>Services</summary>
							<ul class="w-40 p-2">
								<li>
									<a
										href="menu "
										class="transition-all duration-300 hover:bg-transparent hover:text-primary"
									>
										Online Order
									</a>
								</li>
								<li>
									<a
										href="menu"
										class="transition-all duration-300 hover:bg-transparent hover:text-primary"
									>
										Table Booking
									</a>
								</li>
								<li>
									<a
										href="menu"
										class="transition-all duration-300 hover:bg-transparent hover:text-primary"
									>
										Order Tracking
									</a>
								</li>
							</ul>
						</details>
					</li>
					<li>
						<a
							href="offers"
							class="t transition-all duration-300 hover:bg-transparent hover:text-primary"
						>
							{m.about()}
						</a>
					</li>
				</ul>
			</div>
			{#if logo}
				<a href="/" class="flex items-center">
					<div class="me-4 w-16">
						<img src="/images/logo.svg" alt="logo" class="object-fit h-auto w-full" />
					</div>
					<h2 class="text-lg font-bold text-emerald-800 rtl:text-2xl rtl:font-extrabold">
						{m.bayader_aljazirah()}
					</h2>
				</a>
			{/if}
		</div>
		<div
		class={cn(
			logo && 'navbar-center',
			!logo  && 'navbar-start',
			'hidden lg:flex',
		)}
		>
			<ul class="menu menu-horizontal px-1">
				<li>
					<a href="/" class="transition-all duration-300 hover:bg-transparent hover:text-primary">
						{m.home()}
					</a>
				</li>
				<li>
					<Dropdown title="Menu">
						<li>
							<a
								href="menu"
								class="transition-all duration-300 hover:bg-transparent hover:text-primary"
							>
								{m.home()}
							</a>
						</li>
						<li>
							<a
								href="/dashboard"
								class="transition-all duration-300 hover:bg-transparent hover:text-primary"
							>
								Dashboard
							</a>
						</li>
					</Dropdown>
				</li>
				<li>
					<a
						href="/dashboard"
						class=" transition-all duration-300 hover:bg-transparent hover:text-primary"
					>
						Dashboard
					</a>
				</li>
				<li>
					<a
						href="/about"
						class=" transition-all duration-300 hover:bg-transparent hover:text-primary"
					>
						{m.about()}
					</a>
				</li>
				<li>
					<a
						href="/products"
						class="transition-all duration-300 hover:bg-transparent hover:text-primary"
					>
						Products
					</a>
				</li>
				<li>
					<a
						href="/contact-us"
						class="transition-all duration-300 hover:bg-transparent hover:text-primary"
					>
						Contact us
					</a>
				</li>
			</ul>
		</div>
		<div class="navbar-end space-x-2">
			<button onclick={window.toggleTheme} class="btn btn-ghost btn-circle" title="Toggle Theme" aria-label="Toggle theme"><ThemeToggleIcon class="w-4"/></button>
			<button class="btn btn-circle btn-ghost hidden lg:flex" aria-label="Search" title="Search">
				<Icon icon="bi:search" class="text-2xl font-semibold"></Icon>
			</button>
			<div class="dropdown dropdown-end mr-3 hidden lg:flex">
				<button class="btn btn-circle btn-ghost" onclick={() => (show = !show)} aria-label="Shopping cart" title="Shopping cart">
					<div class="indicator">
						<Icon icon="bi:cart" class="text-2xl font-semibold"></Icon>
						<span class="badge indicator-item badge-sm"
							>{new Intl.NumberFormat(languageTag() == 'ar' ? 'ar-SA' : 'en-US').format(8)}</span
						>
					</div>
				</button>
			</div>
			<a
				class="btn flex"
				href={i18n.route($page.url.pathname)}
				hreflang={languageTag() == 'ar' ? 'en' : 'ar'}
				aria-current={'page'}
				data-sveltekit-noscroll
			>
				<Icon icon={languageTag() !== 'ar' ? 'cif:sa' : 'cif:us'} class="me-3"></Icon>
				{languageTag() !== 'ar' ? 'العربية' : 'English'}
			</a>
			{#if email == null || email == 'null' || email == undefined || email == 'undefined'}
				<a
					href="/login"
					class="btn btn-primary flex items-center gap-2 rounded-full px-6 transition-all duration-500"
				>
					{m.login()}
				</a>
				<a
					href="/register"
					class="btn btn-secondary flex items-center gap-2 rounded-full px-6 text-black transition-all duration-500"
				>
					{m.register()}
				</a>
			{:else}
				<div class="avatar placeholder online">
					<div class="w-16 rounded-full bg-neutral text-neutral-content">
						<span class="text-xl">{email[0]}</span>
					</div>
				</div>
			{/if}
		</div>
	</nav>
</header>

<div class="drawer drawer-end z-[9999]">
	<input id="my-drawer-4" type="checkbox" class="drawer-toggle" bind:checked={show} />
	<div class="drawer-content">
		<!-- Page content here -->
		<!-- <label for="my-drawer-4" class="drawer-button btn btn-primary">Open drawer</label> -->
	</div>
	<div class="drawer-side overflow-x-hidden">
		<label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="menu min-h-full w-80 bg-base-200 p-4 text-base-content">
			<!-- Sidebar content here -->
			<li>
				<a href="/">
					<div class="card bg-base-100 shadow-xl">
						<figure>
							<img
								src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
								alt="Shoes"
							/>
						</figure>
						<div class="card-body">
							<h2 class="card-title">Shoes!</h2>
							<p>If a dog chews shoes whose shoes does he choose?</p>
							<div class="card-actions justify-end">
								<p class="btn btn-primary">Buy Now</p>
							</div>
						</div>
					</div>
				</a>
			</li>
			<li><a href="/">Sidebar Item 2</a></li>
		</ul>
	</div>
</div>

<style lang="postcss">
	header {
		view-transition-name: header;
	}
</style>
