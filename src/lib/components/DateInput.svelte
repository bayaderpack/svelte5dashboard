<script lang="ts">
	import dayjs from 'dayjs'
	interface MyProps {
		value: Date
		onchange: (e?: any) => void,
        min?: Date
	}
	let { value = $bindable(), onchange = $bindable(), min }: MyProps = $props()

	let proxy = {
		get value() {
			return dayjs(value).format('YYYY-MM-DD')
		},
		set value(val) {
			value = dayjs(val, {
				format: 'ddd MMM DD YYYY HH:mm:ss [GMT]ZZ (Z)',
				locale: 'en-US', // Set the desired locale
			}).toDate()
		},
	}
</script>

<input
    min={min ? dayjs(min).format('YYYY-MM-DD') : undefined}
	type="date"
	bind:value={proxy.value}
	{onchange}
	class="input input-bordered w-full max-w-xs"
/>
