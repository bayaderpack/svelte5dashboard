<script>
	import Icon from "@iconify/svelte"


    let isOn = $state(false)
</script>

<label
   class="flex items-center cursor-pointer select-none text-base-content"
   >
   <div class="relative">
      <input onclick={() => isOn = !isOn}
         type="checkbox"
         class="peer sr-only"
         />
      <div       class:bg-base-200={!isOn}
      class:bg-primary={isOn}
         class="block h-10 rounded-full w-16"
         ></div>
      <div

         class="absolute flex items-center justify-center w-9 h-8 p-1 transition bg-base-100 rounded-full dot left-1 top-1 peer-checked:translate-x-1/2 peer-checked:bg-primary"
         >
         {#if isOn}
         <span class="text-sm">
            ON
         </span>
         {:else}
         <span class="text-base-content text-sm">
            OFF
         </span>
         {/if}


      </div>
   </div>
</label>