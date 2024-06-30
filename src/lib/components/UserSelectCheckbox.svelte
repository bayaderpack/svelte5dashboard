<script lang="ts">
// @ts-nocheck
	interface Props {
    value: any,
    checked: any, 
    onclick?: () => void
  }
 let { value, checked=$bindable(), onclick }: Props = $props()
	// export let value
	// export let checked = false
    
</script>


<div class="form-control">
    <label class="cursor-pointer label">
      <span class="label-text">{value}</span>
      <input type="checkbox" bind:checked={checked} class="checkbox checkbox-primary" {onclick} />
    </label>
  </div>

