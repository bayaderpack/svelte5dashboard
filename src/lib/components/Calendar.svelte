<script lang="ts">
	import dayjs from 'dayjs'
	import DateInput from '$components/inputs/DateInput.svelte'


	var dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
	let monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	]

	// let headers = $state([])
	let now = $state(new Date())
	let year = $state(now.getFullYear()) //	this is the month & year displayed
	let month = $state(now.getMonth())
	let eventText = 'Click an item or date'

	interface DaysProps {
		name: string
		enabled: boolean
		date: Date
	}
	var days = $state<Array<DaysProps>>()

	interface ItemProps {
		title: string
		className: string
		date: Date
		len: number
		isBottom?: boolean
		detailHeader?: string
		detailContent?: string
		vlen?: number
		startCol?: number
		startRow?: number
	}
	let items = $state<Array<ItemProps>>()

	function initMonthItems() {
		let y = year
		let m = month
		let d1 = new Date(y, m, 3 + 7)

		items = [
			{
				title: '11:00 Task Early in month',
				className: 'badge-primary',
				date: new Date(y, m, 4),
				len: 2 + 1,
			},
			{ title: '7:30 Wk 2 tasks', className: 'badge-secondary', date: d1, len: 3 + 2 },
			{
				title: 'Overlapping Stuff (isBottom:true)',
				date: d1,
				className: 'badge-warning',
				len: 4,
				isBottom: true,
			},
			{
				title: '10:00 More Stuff to do',
				date: new Date(y, m, 6 + 14),
				className: 'badge-info',
				len: 2 + 1,
				detailHeader: 'Difficult',
				detailContent: 'But not especially so',
			},
			{
				title: 'All day task',
				date: new Date(y, m, 6 + 21),
				className: 'badge-error',
				len: 1,
				vlen: 2,
			},
		]

		//This is where you calc the row/col to put each dated item
		for (let i of items) {
			let rc = findRowCol(i.date)
			if (rc == null) {
				console.log('didn`t find date for ', i)
				console.log(i.date)
				console.log(days)
				i.startCol = i.startRow = 0
			} else {
				i.startCol = rc.col
				i.startRow = rc.row
			}
		}
	}

	const changeColumnPosition = () => {
		for (let i of items!) {
			let rc = findRowCol(i.date)
			if (rc == null) {
				console.log('didn`t find date for ', i)
				console.log(i.date)
				console.log(days)
				i.startCol = i.startRow = 0
			} else {
				i.startCol = rc.col
				i.startRow = rc.row
			}
		}
	}

	function initMonth() {
		days = []
		let monthAbbrev = monthNames[month].slice(0, 3)
		let nextMonthAbbrev = monthNames[(month + 1) % 12].slice(0, 3)
		//	find the last Monday of the previous month
		var firstDay = new Date(year, month, 1).getDay()
		//console.log('fd='+firstDay+' '+dayNames[firstDay]);
		var daysInThisMonth = new Date(year, month + 1, 0).getDate()
		var daysInLastMonth = new Date(year, month, 0).getDate()
		var prevMonth = month == 0 ? 11 : month - 1

		//	show the days before the start of this month (disabled) - always less than 7
		for (let i = daysInLastMonth - firstDay; i < daysInLastMonth; i++) {
			let d = new Date(prevMonth == 11 ? year - 1 : year, prevMonth, i + 1)
			days.push({ name: '' + (i + 1), enabled: false, date: d })
		}
		//	show the days in this month (enabled) - always 28 - 31
		for (let i = 0; i < daysInThisMonth; i++) {
			let d = new Date(year, month, i + 1)
			if (i == 0) days.push({ name: monthAbbrev + ' ' + (i + 1), enabled: true, date: d })
			else days.push({ name: '' + (i + 1), enabled: true, date: d })
		}
		//	show any days to fill up the last row (disabled) - always less than 7
		for (let i = 0; days.length % 7; i++) {
			let d = new Date(month == 11 ? year + 1 : year, (month + 1) % 12, i + 1)
			if (i == 0) days.push({ name: nextMonthAbbrev + ' ' + (i + 1), enabled: false, date: d })
			else days.push({ name: '' + (i + 1), enabled: false, date: d })
		}
	}

	function initContent() {
		initMonth()
		initMonthItems()
	}

	initContent()

	function findRowCol(dt: Date) {
		if (days != undefined) {
			for (let i = 0; i < days.length; i++) {
				let d = days[i].date
				if (
					d.getFullYear() === dt.getFullYear() &&
					d.getMonth() === dt.getMonth() &&
					d.getDate() === dt.getDate()
				)
					return { row: Math.floor(i / 7) + 2, col: (i % 7) + 1 }
			}
			return null
		}
	}

	function next() {
		month++
		if (month == 12) {
			year++
			month = 0
		}
	}
	function prev() {
		if (month == 0) {
			month = 11
			year--
		} else {
			month--
		}
	}
	let form = $state<HTMLDivElement>()

	let clickedItem = $state<ItemProps>()
	let div = $state<HTMLDivElement>()

	let checkedItemPosition = $state<number>()
	const contextMenu = (e: MouseEvent, item: ItemProps) => {
		e.preventDefault()
		div = document.createElement('div')
		clickedItem = item
		checkedItemPosition = items?.indexOf(item)

		form?.classList.remove('hidden')
		form?.classList.add('flex')
		div.appendChild(form!)

		div.style.top = e.pageY + 'px'
		div.style.left = e.pageX + 'px'

		div.classList.add(
			'bg-base-200',
			'rounded-box',
			'shadow-md',
			'border',
			'border-base-200',
			'absolute',
			'z-[100]',
			'p-4',
		)

		document.body.appendChild(div)
		//if click outside of div, remove it
		document.addEventListener('click', function (ev) {
			if (!div!.contains(ev.target as Node)) {
				div!.remove()
			}
		})
	}

	let clickedItemStartDayOfWeek = $derived(clickedItem?.date.getDay())

	let isItMoreThanWeek = $derived(6 - clickedItemStartDayOfWeek!)
	const ChangeSingePosition = (event: { target: { value: string | number | Date } }) => {
		let dateType = new Date(event.target.value)
		let newLen =
			(new Date(dateType.getFullYear(), dateType.getMonth(), dateType.getDate()).valueOf() -
				new Date(clickedItem!.date).valueOf()) /
			1000 /
			60 /
			60 /
			24

		if (clickedItem != undefined) {
			if (!(newLen > isItMoreThanWeek)) {
				clickedItem!.len = newLen + 1
			} else {
				clickedItem!.len = isItMoreThanWeek + 1
				let newItem = {
					title: clickedItem!.title,
					className: clickedItem!.className,
					date: new Date(
						clickedItem!.date.getFullYear(),
						clickedItem!.date.getMonth(),
						clickedItem!.date.getDate() + isItMoreThanWeek+1,
					),
					len: newLen - isItMoreThanWeek,
					isBottom: true
				}
				items?.push(newItem)
				changeColumnPosition()
			}
		}
	}

	// $effect(() => {
	// 	console.log(clickedItem?.len - 1 > isItMoreThanWeek)
	// })
</script>

<div class="hidden flex-col space-y-6 rounded-box" bind:this={form}>
	<div class="flex space-x-4">
		<button
			onclick={() => {items?.splice(checkedItemPosition as number, 1); div!.remove()}}
			class="btn btn-error">Delete</button
		>
	</div>

	{#if clickedItem}
		<select class="select select-bordered w-full max-w-xs" bind:value={clickedItem.className}>
			<option value="badge-primary">Primary</option>
			<option value="badge-secondary">Secondary</option>
			<option value="badge-warning">Warning</option>
			<option value="badge-error">Danger</option>
			<option value="badge-info">Info</option>
		</select>

		<select class="select select-bordered w-full max-w-xs">
			<option selected disabled>Assign to</option>
			<option value="badge-secondary">Worker 1</option>
			<option value="badge-warning">Worker 2</option>
			<option value="badge-error">Worker 3</option>
			<option value="badge-info">Worker 4</option>
		</select>
		<input
			type="text"
			placeholder="Title"
			bind:value={clickedItem.title}
			class="input input-bordered w-full max-w-xs"
		/>
		<!-- <input type="date" bind:value={clickedItem.date} class=" w-full max-w-xs" />
         -->
		<DateInput onchange={() => changeColumnPosition()} bind:value={clickedItem.date} />
		<DateInput
			min={clickedItem.date}
			onchange={(e) => ChangeSingePosition(e)}
			value={new Date(
				clickedItem.date.getFullYear(),
				clickedItem.date.getMonth(),
				clickedItem.date.getDate() + clickedItem.len - 1,
			)}
		/>
	{/if}
</div>

<div class="m-auto w-full overflow-hidden rounded-box bg-base-100 shadow-md">
	<div class="border-b border-base-200 bg-base-100 p-3 text-center">
		<div class="m-0 flex items-center justify-center space-x-5 text-xl font-semibold">
			<button
				class="btn btn-ghost"
				onclick={() => {
					year--
					initMonth()
				}}>&Lt;</button
			>
			<button
				class="btn btn-secondary"
				onclick={() => {
					prev()
					initMonth()
				}}>&lt;</button
			>
			<div class="flex w-64 items-center justify-center space-x-3">
				<h1>{monthNames[month]}</h1>
				<h1>{year}</h1>
			</div>

			<button
				class="btn btn-secondary"
				onclick={() => {
					next()
					initMonth()
				}}>&gt;</button
			>
			<button
				class="btn btn-ghost"
				onclick={() => {
					year++
					initMonth()
				}}>&Gt;</button
			>
		</div>
		{eventText}
	</div>

	<div class="grid w-full auto-rows-[120px] grid-cols-7 grid-rows-[50px] gap-1 overflow-auto p-3">
		{#each dayNames as header}
			<span
				class="text-center text-xl font-semibold uppercase text-error"
				role="button"
				tabindex="0"
				onkeydown={() => console.log(header)}
				onclick={() => console.log(header)}>{header}</span
			>
		{/each}

		{#if days}
			{#each days as day}
				{#if day.enabled}
					<span
						class="day"
						role="button"
						tabindex="0"
						onkeydown={() => console.log(day)}
						onclick={() => console.log(day)}>{day.name}</span
					>
				{:else}
					<span class="day day-disabled">{day.name}</span>
				{/if}
			{/each}
		{/if}
		{#if items}
			{#each items as item}
				<section
					oncontextmenu={(e) => contextMenu(e, item)}
					role="button"
					tabindex="0"
					onkeydown={() => console.log(item)}
					onclick={() => console.log(item)}
					class="task {item.className}"
					style="grid-column: {item.startCol} / span {item.len};      
      grid-row: {item.startRow};  
      align-self: {item.isBottom ? 'end' : 'center'};"
				>
					{item.title}
				</section>
			{/each}{/if}
	</div>
</div>

<style lang="postcss">
	.day {
		@apply relative z-[1] box-border border-r border-b border-base-200 dark:border-base-content py-3 px-5 rounded-box text-right;
	}
	.day:nth-of-type(7n + 7) {
		@apply border-r-0;
	}
	.day:nth-of-type(n + 1):nth-of-type(-n + 7) {
		@apply grid-rows-1;
	}
	.day:nth-of-type(n + 8):nth-of-type(-n + 14) {
		grid-row: 2;
	}
	.day:nth-of-type(n + 15):nth-of-type(-n + 21) {
		grid-row: 3;
	}
	.day:nth-of-type(n + 22):nth-of-type(-n + 28) {
		grid-row: 4;
	}
	.day:nth-of-type(n + 29):nth-of-type(-n + 35) {
		grid-row: 5;
	}
	.day:nth-of-type(n + 36):nth-of-type(-n + 42) {
		grid-row: 6;
	}
	.day:nth-of-type(7n + 1) {
		grid-column: 1/1;
	}
	.day:nth-of-type(7n + 2) {
		grid-column: 2/2;
	}
	.day:nth-of-type(7n + 3) {
		grid-column: 3/3;
	}
	.day:nth-of-type(7n + 4) {
		grid-column: 4/4;
	}
	.day:nth-of-type(7n + 5) {
		grid-column: 5/5;
	}
	.day:nth-of-type(7n + 6) {
		grid-column: 6/6;
	}
	.day:nth-of-type(7n + 7) {
		grid-column: 7/7;
	}

	.day-disabled {
		@apply cursor-not-allowed text-base-content;
		background: repeating-linear-gradient(45deg, #fff, #fff 10px, #eee 10px, #eee 20px);
	}
	:global([data-theme='dark'] .day-disabled) {
		background: repeating-linear-gradient(45deg, #151515, #151515 10px, #353535 10px, #353535 20px);
	}

	.task {
		@apply relative z-[2] m-1 border-l-2 border-l-base-200 border-r-2 border-r-base-200 border-b-2 border-b-base-200 border-solid rounded-box py-1 px-4 text-left;
	}
</style>
