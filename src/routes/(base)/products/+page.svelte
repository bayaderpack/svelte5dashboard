<!--
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.

  Plugins:
    - @tailwindcss/forms
-->
<script>
    import Icon from "@iconify/svelte"
    import Task from "$lib/components/Task.svelte"

</script>

<section>
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 flex justify-start flex-col min-h-screen">
      <header>
        <h2 class="text-xl font-bold text-gray-900 sm:text-3xl mb-6">Bags</h2>
  
      </header>
  
      <div class="mt-8 block lg:hidden">
        <button
          class="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
        >
          <span class="text-sm font-medium"> Filters & Sorting </span>
  
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-4 rtl:rotate-180"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
  
      <div class="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
        <div class="hidden space-y-4 lg:block">
  
          <div>
            <p class="block text-xs font-medium text-gray-700">Filters</p>
  
            <div class="mt-1 space-y-2">
              <details open
                class="overflow-hidden rounded-box border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary
                  class="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
                >
                  <span class="text-sm font-medium"> Print </span>
  
                  <span class="transition group-open:-rotate-180">
                    <Icon icon="bi:caret-down" ></Icon>
                  </span>
                </summary>
  
                <div class="border-t border-gray-200 bg-white">

  
                  <ul class="space-y-1  border-gray-200 p-4">
                    <li>
                      <label for="FilterInStock" class="inline-flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="FilterInStock"
                          class="size-5 rounded-box border-gray-300"
                        />
  
                        <span class="text-sm font-medium text-gray-700"> Plain (1) </span>
                      </label>
                    </li>
  
                    <li>
                      <label for="FilterPreOrder" class="inline-flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="FilterPreOrder"
                          class="size-5 rounded-box border-gray-300"
                        />
  
                        <span class="text-sm font-medium text-gray-700"> One Color (1) </span>
                      </label>
                    </li>
  
                    <li>
                      <label for="FilterOutOfStock" class="inline-flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="FilterOutOfStock"
                          class="size-5 rounded-box border-gray-300"
                        />
  
                        <span class="text-sm font-medium text-gray-700"> CYMK (2) </span>
                      </label>
                    </li>
                  </ul>
                </div>
              </details>

              <details open
              class="overflow-hidden rounded-box border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary
                class="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
              >
                <span class="text-sm font-medium"> Foil </span>

                <span class="transition group-open:-rotate-180">
                  <Icon icon="bi:caret-down" ></Icon>
                </span>
              </summary>

              <div class="border-t border-gray-200 bg-white">


                <ul class="space-y-1  border-gray-200 p-4">
                  <li>
                    <label for="FilterInStock" class="inline-flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="FilterInStock"
                        class="size-5 rounded-box border-gray-300"
                      />

                      <span class="text-sm font-medium text-gray-700"> Gold (1) </span>
                    </label>
                  </li>

                  <li>
                    <label for="FilterPreOrder" class="inline-flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="FilterPreOrder"
                        class="size-5 rounded-box border-gray-300"
                      />

                      <span class="text-sm font-medium text-gray-700"> Silver (1) </span>
                    </label>
                  </li>

                  <li>
                    <label for="FilterOutOfStock" class="inline-flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="FilterOutOfStock"
                        class="size-5 rounded-box border-gray-300"
                      />

                      <span class="text-sm font-medium text-gray-700"> Other (2) </span>
                    </label>
                  </li>
                </ul>
              </div>
            </details>


            <details open
            class="overflow-hidden rounded-box border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
          >
            <summary
              class="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
            >
              <span class="text-sm font-medium"> Carton type </span>

              <span class="transition group-open:-rotate-180">
                <Icon icon="bi:caret-down" ></Icon>
              </span>
            </summary>

            <div class="border-t border-gray-200 bg-white">


              <ul class="space-y-1  border-gray-200 p-4">
                <li>
                  <label for="FilterInStock" class="inline-flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="FilterInStock"
                      class="size-5 rounded-box border-gray-300"
                    />

                    <span class="text-sm font-medium text-gray-700"> Ivercote (1) </span>
                  </label>
                </li>

              </ul>
            </div>
          </details>

          <details open
          class="overflow-hidden rounded-box border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary
            class="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
          >
            <span class="text-sm font-medium"> Suitable for  </span>

            <span class="transition group-open:-rotate-180">
              <Icon icon="bi:caret-down" ></Icon>
            </span>
          </summary>

          <div class="border-t border-gray-200 bg-white">


            <ul class="space-y-1 border-gray-200 p-4">
              <li>
                <label for="FilterInStock" class="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="FilterInStock"
                    class="size-5 rounded-box border-gray-300"
                  />

                  <span class="text-sm font-medium text-gray-700"> Takeaways </span>
                </label>
              </li>

              <li>
                <label for="FilterPreOrder" class="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="FilterPreOrder"
                    class="size-5 rounded-box border-gray-300"
                  />

                  <span class="text-sm font-medium text-gray-700"> Light weight </span>
                </label>
              </li>

              <li>
                <label for="FilterOutOfStock" class="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="FilterOutOfStock"
                    class="size-5 rounded-box border-gray-300"
                  />

                  <span class="text-sm font-medium text-gray-700"> Heavy weights </span>
                </label>
              </li>
            </ul>
          </div>
        </details>
  
 
            </div>
          </div>
        </div>
  
        <div class="lg:col-span-3">
          <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <li>
              <a href="/" class="group block overflow-hidden">
                <img
                  src="https://bayaderpack.com/_next/image?url=https%3A%2F%2Fadmin.bayaderpack.com%2Fmedia%2Fproducts%2Fbags%2Finvercote-bag%2Fwrap_paper_large.jpg&w=384&q=75"
                  alt=""
                  class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />
  
                <div class="relative bg-white pt-3">
                  <h3
                    class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                  >
                    Basic Tee
                  </h3>
  
                  <p class="mt-2">
                    <span class="sr-only"> Regular Price </span>
  
                    <span class="tracking-wider text-gray-900"> £24.00 GBP </span>
                  </p>
                </div>
              </a>
            </li>
  
            <li>
              <a href="/" class="group block overflow-hidden">
                <img
                  src="https://bayaderpack.com/_next/image?url=https%3A%2F%2Fadmin.bayaderpack.com%2Fmedia%2Fproducts%2Fbags%2Finvercote-bag%2Fwrap_paper_large.jpg&w=384&q=75"
                  alt=""
                  class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />
  
                <div class="relative bg-white pt-3">
                  <h3
                    class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                  >
                    Basic Tee
                  </h3>
  
                  <p class="mt-2">
                    <span class="sr-only"> Regular Price </span>
  
                    <span class="tracking-wider text-gray-900"> £24.00 GBP </span>
                  </p>
                </div>
              </a>
            </li>
  
            <li>
              <a href="/" class="group block overflow-hidden">
                <img
                  src="https://bayaderpack.com/_next/image?url=https%3A%2F%2Fadmin.bayaderpack.com%2Fmedia%2Fproducts%2Fbags%2Finvercote-bag%2Fwrap_paper_large.jpg&w=384&q=75"
                  alt=""
                  class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />
  
                <div class="relative bg-white pt-3">
                  <h3
                    class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                  >
                    Basic Tee
                  </h3>
  
                  <p class="mt-2">
                    <span class="sr-only"> Regular Price </span>
  
                    <span class="tracking-wider text-gray-900"> £24.00 GBP </span>
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
