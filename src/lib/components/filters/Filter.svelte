<script lang="ts">
    interface MyProps {
        name: string
    }

    const {name}: MyProps = $props()


    const idName = name.split(" ").join("")
</script>
<li>
    <label for={idName} class="inline-flex items-center gap-2">
      <input
        type="checkbox"
        id={idName}
        class="size-5 rounded-box border-base-300"
      />

      <span class="text-sm font-medium text-base-content"> {name} </span>
    </label>
  </li>