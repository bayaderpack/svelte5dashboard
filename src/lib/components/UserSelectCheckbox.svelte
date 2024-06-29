<script lang="ts">
// @ts-nocheck
	
 let { value, checked=$bindable()} = $props()
	// export let value
	// export let checked = false
    
</script>


<div class="form-control">
    <label class="cursor-pointer label">
      <span class="label-text">{value}</span>
      <input type="checkbox" bind:checked={checked} class="checkbox checkbox-primary" />
    </label>
  </div>

