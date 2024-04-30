<script>
    import * as m from '$m'
</script>
<ul class="menu min-h-full w-80 bg-base-100 p-0 text-base-content">
    <!-- Sidebar content here -->
    <li>
        <a href="/"  class=" flex rounded-none  font-semibold"
            ><img src="/images/logo.svg" alt="" width="78px" />
            <p class="text-xl text-success">{m.bayader_aljazirah()}</p></a
        >
    </li>
<li><a href="/dashboard" class="rounded-none px-8 py-4 font-semibold">Dashboard</a></li>
    <li>
        <details>
            <summary class="rounded-none px-8 py-4 font-semibold" >Media</summary>
            <ul >
                <li><a href="/media/library" class="rounded-none px-8 py-4 font-semibold">Library</a></li>
                <li><a href="/media/categories" class="rounded-none px-8 py-4 font-semibold">Categories</a></li>
                <li><a href="/media/tags" class="rounded-none px-8 py-4 font-semibold">Tags</a></li>
                <li><a href="/media/galleries" class="rounded-none px-8 py-4 font-semibold">Galleries</a></li>
            </ul>
        </details>
    </li>
<li>
        <details>
            <summary class="rounded-none px-8 py-4 font-semibold" >Store</summary>
            <ul >
                <li><a href="/store/categories" class="rounded-none px-8 py-4 font-semibold">Categories</a></li>
                <li><a href="/store/products" class="rounded-none px-8 py-4 font-semibold">Products</a></li>
                <li><a href="/store/options" class="rounded-none px-8 py-4 font-semibold">Options</a></li>
                <li><a href="/store/attributes" class="rounded-none px-8 py-4 font-semibold">Attributes</a></li>
                <li><a href="/store/filters" class="rounded-none px-8 py-4 font-semibold">Filters</a></li>
                <li><a href="/store/brands" class="rounded-none px-8 py-4 font-semibold">Brands</a></li>
                <li><a href="/store/suitabilities" class="rounded-none px-8 py-4 font-semibold">Suitabilities</a></li>
                <li><a href="/store/tags" class="rounded-none px-8 py-4 font-semibold">Tags</a></li>
                <li><a href="/store/coupons" class="rounded-none px-8 py-4 font-semibold">Coupons</a></li>
            </ul>
        </details>
    </li>
<li>
        <details>
            <summary class="rounded-none px-8 py-4 font-semibold" >Orders</summary>
            <ul >
                <li><a href="/orders/purchases" class="rounded-none px-8 py-4 font-semibold">Purchases</a></li>
                <li><a href="/orders/quotations" class="rounded-none px-8 py-4 font-semibold">Quotations</a></li>
            </ul>
        </details>
    </li>
<li>
        <details>
            <summary class="rounded-none px-8 py-4 font-semibold" >Customers</summary>
            <ul >
                <li><a href="/customers/list" class="rounded-none px-8 py-4 font-semibold">All Customers</a></li>
                <li><a href="/customers/groups" class="rounded-none px-8 py-4 font-semibold">Customer Groups</a></li>
            </ul>
        </details>
    </li>
<li>
        <details>
            <summary class="rounded-none px-8 py-4 font-semibold" >Suppliers</summary>
            <ul >
                <li><a href="/supliers/list" class="rounded-none px-8 py-4 font-semibold">Supplier List</a></li>
                <li><a href="/supliers/groups" class="rounded-none px-8 py-4 font-semibold">Supplier Groups</a></li>
            </ul>
        </details>
    </li>
<li>
        <details>
            <summary class="rounded-none px-8 py-4 font-semibold" >Purchases</summary>
            <ul >
                <li><a href="/purchases/invoices" class="rounded-none px-8 py-4 font-semibold">Purchases Invoices</a></li>
                <li><a href="/purchases/products" class="rounded-none px-8 py-4 font-semibold">Groups/Products</a></li>
                <li><a href="/purchases/properties" class="rounded-none px-8 py-4 font-semibold">Product Properties</a></li>
            </ul>
        </details>
    </li>
<li>
        <details>
            <summary class="rounded-none px-8 py-4 font-semibold" >Appointments/Tasks</summary>
            <ul >
                <li><a href="/appointments/appointments" class="rounded-none px-8 py-4 font-semibold">Appointments</a></li>
                <li><a href="/appointments/tasks" class="rounded-none px-8 py-4 font-semibold">Tasks</a></li>
            </ul>
        </details>
    </li>
<li>
        <details>
            <summary class="rounded-none px-8 py-4 font-semibold" >Communications</summary>
            <ul >
                <li><a href="/communications/forms" class="rounded-none px-8 py-4 font-semibold">Contact Forms</a></li>
                <li><a href="/communications/push" class="rounded-none px-8 py-4 font-semibold">Push notifications</a></li>
            </ul>
        </details>
    </li>
<li>
        <details>
            <summary class="rounded-none px-8 py-4 font-semibold" >Settings</summary>
            <ul >
                <li><a href="/settings/general" class="rounded-none px-8 py-4 font-semibold">General</a></li>
                <li><a href="/settings/shipping" class="rounded-none px-8 py-4 font-semibold">Shiping</a></li>
                <li><a href="/settings/peyment-method" class="rounded-none px-8 py-4 font-semibold">Peyment Method</a></li>
                <li><a href="/settings/tax" class="rounded-none px-8 py-4 font-semibold">Tax</a></li>
                <li><a href="/settings/units" class="rounded-none px-8 py-4 font-semibold">Units</a></li>
                <li><a href="/settings/languages" class="rounded-none px-8 py-4 font-semibold">Languages</a></li>
                <li><a href="/settings/admins" class="rounded-none px-8 py-4 font-semibold">Admins</a></li>
                <li><a href="/settings/quotations" class="rounded-none px-8 py-4 font-semibold">Quotations</a></li>
            </ul>
        </details>
    </li>
    <li><a href="/whatsapp" class="rounded-none px-8 py-4 font-semibold">Whatsapp BOT</a></li>
</ul>