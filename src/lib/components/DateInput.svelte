<script lang="ts">
    import dayjs from 'dayjs'
    interface MyProps {
        value: Date
        onchange: () => void
    }
	let { value = $bindable(), onchange = $bindable() }: MyProps = $props();

	let proxy = { get value() { return dayjs(value).format('YYYY-MM-DD') }, set value(val) { value = dayjs(val, {
    format: 'ddd MMM DD YYYY HH:mm:ss [GMT]ZZ (Z)',
    locale: 'en-US', // Set the desired locale
  }).toDate() } }


</script>

<input type="date" bind:value={proxy.value} onchange={onchange} class=" w-full max-w-xs" />