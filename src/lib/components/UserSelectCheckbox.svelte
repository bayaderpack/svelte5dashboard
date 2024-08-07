<script lang="ts">
// @ts-nocheck
	interface Props {
    // value: any,
    checked: any, 
    onclick?: () => void,
    fields?: Array<any>
  }
 let { fields= [], checked=$bindable(), onclick }: Props = $props()
	// export let value
	// export let checked = false

  let value = $derived(fields.length == 1 ? fields[0] : fields[0] + " " + fields[1])
    
</script>


<div class="form-control">
    <label class="cursor-pointer label">
      <span class="label-text">{value}</span>
      <input type="checkbox" bind:checked={checked} class="checkbox checkbox-primary" {onclick} />
    </label>
  </div>

