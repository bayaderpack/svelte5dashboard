<script lang="ts">
	import * as m from '$m'
	import { page } from '$app/stores'

</script>

<ul class="menu min-h-full w-80 bg-base-100 p-0 text-base-content">
	<!-- Sidebar content here -->
	<li>
		<a href="/" class=" flex rounded-none font-semibold"
			><img src="/images/logo.svg" alt="" width="78px" />
			<p class="text-xl text-success">{m.bayader_aljazirah()}</p></a
		>
	</li>
	<li class:bg-base-200={$page.url.pathname.includes("dashboard")}><a href="/dashboard" class="rounded-none px-8 py-4 font-semibold">Dashboard</a></li>
	<li class:bg-base-200={$page.url.pathname.includes("media")}>
		<details >
			<summary class="rounded-none px-8 py-4 font-semibold">Media</summary>
			<ul>
				<li class:bg-base-300={$page.url.pathname.includes("media/library")}><a href="/media/library" class="rounded-none px-8 py-4 font-semibold">Library</a></li>
				<li class:bg-base-300={$page.url.pathname.includes("media/categories")}>
					<a href="/media/categories" class="rounded-none px-8 py-4 font-semibold">Categories</a>
				</li>
				<li class:bg-base-300={$page.url.pathname.includes("media/tags")}><a href="/media/tags" class="rounded-none px-8 py-4 font-semibold">Tags</a></li>
				<li class:bg-base-300={$page.url.pathname.includes("media/galleries")}>
					<a href="/media/galleries" class="rounded-none px-8 py-4 font-semibold">Galleries</a>
				</li>
			</ul>
		</details>
	</li>
	<li class:bg-base-200={$page.url.pathname.includes("store")}>
		<details>
			<summary class="rounded-none px-8 py-4 font-semibold">Store</summary>
			<ul>
				<li class:bg-base-300={$page.url.pathname.includes("store/categories")}>
					<a href="/store/categories" class="rounded-none px-8 py-4 font-semibold">Categories</a>
				</li>
				<li class:bg-base-300={$page.url.pathname.includes("store/products")}><a href="/store/products" class="rounded-none px-8 py-4 font-semibold">Products</a></li>
				<li class:bg-base-300={$page.url.pathname.includes("store/options")}><a href="/store/options" class="rounded-none px-8 py-4 font-semibold">Options</a></li>
				<li class:bg-base-300={$page.url.pathname.includes("store/attributes")}>
					<a href="/store/attributes" class="rounded-none px-8 py-4 font-semibold">Attributes</a>
				</li>
				<li class:bg-base-300={$page.url.pathname.includes("store/filters")}><a href="/store/filters" class="rounded-none px-8 py-4 font-semibold">Filters</a></li>
				<li class:bg-base-300={$page.url.pathname.includes("store/brands")}><a href="/store/brands" class="rounded-none px-8 py-4 font-semibold">Brands</a></li>
				<li class:bg-base-300={$page.url.pathname.includes("store/suitabilities")}>
					<a href="/store/suitabilities" class="rounded-none px-8 py-4 font-semibold"
						>Suitabilities</a
					>
				</li>
				<li class:bg-base-300={$page.url.pathname.includes("store/tags")}><a href="/store/tags" class="rounded-none px-8 py-4 font-semibold">Tags</a></li>
				<li class:bg-base-300={$page.url.pathname.includes("store/coupons")}><a href="/store/coupons" class="rounded-none px-8 py-4 font-semibold">Coupons</a></li>
			</ul>
		</details>
	</li>
	<li class:bg-base-200={$page.url.pathname.includes("orders")}>
		<details>
			<summary class="rounded-none px-8 py-4 font-semibold">Orders</summary>
			<ul>
				<li class:bg-base-300={$page.url.pathname.includes("orders/purchases")}>
					<a href="/orders/purchases" class="rounded-none px-8 py-4 font-semibold">Purchases</a>
				</li>
				<li class:bg-base-300={$page.url.pathname.includes("orders/quotations")}>
					<a href="/orders/quotations" class="rounded-none px-8 py-4 font-semibold">Quotations</a>
				</li>
			</ul>
		</details>
	</li>
	<li class:bg-base-200={$page.url.pathname.includes("customers")}>
		<details>
			<summary class="rounded-none px-8 py-4 font-semibold">Customers</summary>
			<ul>
				<li class:bg-base-300={$page.url.pathname.includes("customers/list")}>
					<a href="/customers/list" class="rounded-none px-8 py-4 font-semibold">All Customers</a>
				</li>
				<li class:bg-base-300={$page.url.pathname.includes("customers/groups")}>
					<a href="/customers/groups" class="rounded-none px-8 py-4 font-semibold"
						>Customer Groups</a
					>
				</li>
			</ul>
		</details>
	</li>
	<li class:bg-base-200={$page.url.pathname.includes("supliers")}>
		<details>
			<summary class="rounded-none px-8 py-4 font-semibold">Suppliers</summary>
			<ul>
				<li class:bg-base-300={$page.url.pathname.includes("supliers/list")}>
					<a href="/supliers/list" class="rounded-none px-8 py-4 font-semibold">Supplier List</a>
				</li>
				<li class:bg-base-300={$page.url.pathname.includes("supliers/groups")}>
					<a href="/supliers/groups" class="rounded-none px-8 py-4 font-semibold">Supplier Groups</a
					>
				</li>
			</ul>
		</details>
	</li>
	<li class:bg-base-200={$page.url.pathname.includes("purchases") && !$page.url.pathname.includes("orders") }>
		<details>
			<summary class="rounded-none px-8 py-4 font-semibold">Purchases</summary>
			<ul>
				<li class:bg-base-300={$page.url.pathname.includes("purchases/invoices")}>
					<a href="/purchases/invoices" class="rounded-none px-8 py-4 font-semibold"
						>Purchases Invoices</a
					>
				</li>
				<li class:bg-base-300={$page.url.pathname.includes("purchases/products")}>
					<a href="/purchases/products" class="rounded-none px-8 py-4 font-semibold"
						>Groups/Products</a
					>
				</li>
				<li class:bg-base-300={$page.url.pathname.includes("purchases/properties")}>
					<a href="/purchases/properties" class="rounded-none px-8 py-4 font-semibold"
						>Product Properties</a
					>
				</li>
			</ul>
		</details>
	</li>
	<li class:bg-base-200={$page.url.pathname.includes("appointments")}>
		<details>
			<summary class="rounded-none px-8 py-4 font-semibold">Appointments/Tasks</summary>
			<ul>
				<li class:bg-base-300={$page.url.pathname.includes("appointments/appointments")}>
					<a href="/appointments/appointments" class="rounded-none px-8 py-4 font-semibold"
						>Appointments</a
					>
				</li>
				<li class:bg-base-300={$page.url.pathname.includes("appointments/tasks")}>
					<a href="/appointments/tasks" class="rounded-none px-8 py-4 font-semibold">Tasks</a>
				</li>
			</ul>
		</details>
	</li>
	<li class:bg-base-200={$page.url.pathname.includes("communications")}>
		<details>
			<summary class="rounded-none px-8 py-4 font-semibold">Communications</summary>
			<ul>
				<li class:bg-base-300={$page.url.pathname.includes("communications/forms")}>
					<a href="/communications/forms" class="rounded-none px-8 py-4 font-semibold"
						>Contact Forms</a
					>
				</li>
				<li class:bg-base-300={$page.url.pathname.includes("communications/push")}>
					<a href="/communications/push" class="rounded-none px-8 py-4 font-semibold"
						>Push notifications</a
					>
				</li>
			</ul>
		</details>
	</li>
	<li class:bg-base-200={$page.url.pathname.includes("settings")}>
		<details>
			<summary class="rounded-none px-8 py-4 font-semibold">Settings</summary>
			<ul>
				<li class:bg-base-300={$page.url.pathname.includes("settings/general")}>
					<a href="/settings/general" class="rounded-none px-8 py-4 font-semibold">General</a>
				</li>
				<li class:bg-base-300={$page.url.pathname.includes("settings/shipping")}>
					<a href="/settings/shipping" class="rounded-none px-8 py-4 font-semibold">Shiping</a>
				</li>
				<li class:bg-base-300={$page.url.pathname.includes("settings/payment-method")}>
					<a href="/settings/payment-method" class="rounded-none px-8 py-4 font-semibold"
						>Payment Method</a
					>
				</li>
				<li class:bg-base-300={$page.url.pathname.includes("settings/tax")}><a href="/settings/tax" class="rounded-none px-8 py-4 font-semibold">Tax</a></li>
				<li class:bg-base-300={$page.url.pathname.includes("settings/units")}><a href="/settings/units" class="rounded-none px-8 py-4 font-semibold">Units</a></li>
				<li class:bg-base-300={$page.url.pathname.includes("settings/languages")}>
					<a href="/settings/languages" class="rounded-none px-8 py-4 font-semibold">Languages</a>
				</li>
				<li class:bg-base-300={$page.url.pathname.includes("settings/admins")}><a href="/settings/admins" class="rounded-none px-8 py-4 font-semibold">Admins</a></li>
				<li class:bg-base-300={$page.url.pathname.includes("settings/quotations")}>
					<a href="/settings/quotations" class="rounded-none px-8 py-4 font-semibold">Quotations</a>
				</li>
			</ul>
		</details>
	</li>
	<li class:bg-base-300={$page.url.pathname.includes("whatsapp")}><a href="/whatsapp" class="rounded-none px-8 py-4 font-semibold">Whatsapp BOT</a></li>
</ul>
