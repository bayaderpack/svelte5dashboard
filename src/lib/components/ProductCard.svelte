<script lang="ts">
    interface MyProps {
        image?: string,
        title: string,
        link: string,
        price?: number,
        tags?: string[]
    }
    const { image, title, link, price, tags}: MyProps = $props()
    let placeholder = "https://bayaderpack.com/_next/image?url=https%3A%2F%2Fadmin.bayaderpack.com%2Fmedia%2Fproducts%2Fbags%2Finvercote-bag%2Fwrap_paper_large.jpg&w=384&q=75"
</script>

<div class="card h-full bg-base-100 border hover:[&>figure>img]:scale-110 transition-all duration-300">
    <figure class="border-b"><img class="transition-all duration-300" src={image || placeholder} alt="White pack" /></figure>
    <div class="card-body bg-base-200 rounded-b-box justify-between">
      <h2 class="card-title">{title}</h2>
      <div class="flex flex-wrap space-x-2">
        {#if tags}
        {#each tags as tag}
        <div class="badge badge-neutral">{tag}</div>
        {/each}
        {/if}

      </div>
      
      <div class="card-actions justify-between flex-nowrap items-center">
        {#if price}
        <p class="text-sm leading-tight font-black text-base-content">{price} SAR</p>
        {:else}
        <p class="text-sm leading-tight font-semibold text-base-content">Ask for quotation</p>
        {/if}
        <button class="btn btn-primary">{price ?  'Buy Now' : 'Ask'}</button>
      </div>
    </div>
  </div>
