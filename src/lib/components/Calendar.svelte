<script lang="ts">
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

	function randInt(max: number) {
		return Math.floor(Math.random() * max) + 1
	}

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
	interface ItemsProps {
		items: Array<ItemProps>
	}
	let items = $state<Array<ItemProps>>()

	function initMonthItems() {
		let y = year
		let m = month
		let d1 = new Date(y, m, randInt(7) + 7)
		items = [
			{
				title: '11:00 Task Early in month',
				className: 'task--primary',
				date: new Date(y, m, randInt(6)),
				len: randInt(4) + 1,
			},
			{ title: '7:30 Wk 2 tasks', className: 'task--warning', date: d1, len: randInt(4) + 2 },
			{
				title: 'Overlapping Stuff (isBottom:true)',
				date: d1,
				className: 'task--info',
				len: 4,
				isBottom: true,
			},
			{
				title: '10:00 More Stuff to do',
				date: new Date(y, m, randInt(7) + 14),
				className: 'task--info',
				len: randInt(4) + 1,
				detailHeader: 'Difficult',
				detailContent: 'But not especially so',
			},
			{
				title: 'All day task',
				date: new Date(y, m, randInt(7) + 21),
				className: 'task--danger',
				len: 1,
				vlen: 2,
			},
		]

		console.log(items)
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
			//console.log('i='+i+'  dt is '+d+' date() is '+d.getDate());
		}
		//	show any days to fill up the last row (disabled) - always less than 7
		for (let i = 0; days.length % 7; i++) {
			let d = new Date(month == 11 ? year + 1 : year, (month + 1) % 12, i + 1)
			if (i == 0) days.push({ name: nextMonthAbbrev + ' ' + (i + 1), enabled: false, date: d })
			else days.push({ name: '' + (i + 1), enabled: false, date: d })
		}
	}

	function initContent() {
		// headers = dayNames
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
</script>

<div class="calendar-container">
	<div class="calendar-header">
		<h1>
			<button onclick={() => year--}>&Lt;</button>
			<button onclick={() => prev()}>&lt;</button>
			{monthNames[month]}
			{year}
			<button onclick={() => next()}>&gt;</button>
			<button onclick={() => year++}>&Gt;</button>
		</h1>
		{eventText}
	</div>

	<div class="calendar">
		{#each dayNames as header}
			<span
				class="day-name"
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
					{#if item.detailHeader}
						<div class="task-detail">
							<h2>{item.detailHeader}</h2>
							<p>{item.detailContent}</p>
						</div>
					{/if}
				</section>
			{/each}{/if}
	</div>

	<!-- <Calendar
          {headers}
          {days}
          {items}
          on:dayClick={(e)=>dayClick(e.detail)}
          on:itemClick={(e)=>itemClick(e.detail)}
          on:headerClick={(e)=>headerClick(e.detail)}
          /> -->
</div>

<style>
	.calendar-container {
		margin: auto;
		box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
		border-radius: 10px;
		background: #fff;
		width: 90%;
		max-width: 1200px;
		overflow: hidden;
	}
	.calendar-header {
		border-bottom: 1px solid rgba(166, 168, 179, 0.12);
		background: #eef;
		padding: 20px 0;
		text-align: center;
	}
	.calendar-header h1 {
		margin: 0;
		font-size: 18px;
	}
	.calendar-header button {
		cursor: pointer;
		outline: 0;
		border: 1px;
		background: #eef;
		padding: 6;
		color: rgba(81, 86, 93, 0.7);
	}
	.calendar {
		display: grid;
		grid-template-rows: 50px;
		grid-template-columns: repeat(7, minmax(120px, 1fr));
		grid-auto-rows: 120px;
		width: 100%;
		overflow: auto;
	}
	.day {
		position: relative;
		z-index: 1;
		box-sizing: border-box;
		border-right: 1px solid rgba(166, 168, 179, 0.12);
		border-bottom: 1px solid rgba(166, 168, 179, 0.12);
		padding: 14px 20px;
		color: #98a0a6;
		font-size: 14px;
		letter-spacing: 1px;
		text-align: right;
	}
	.day:nth-of-type(7n + 7) {
		border-right: 0;
	}
	.day:nth-of-type(n + 1):nth-of-type(-n + 7) {
		grid-row: 1;
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
	.day-name {
		border-bottom: 1px solid rgba(166, 168, 179, 0.12);
		color: #e9a1a7;
		font-weight: 500;
		font-size: 12px;
		line-height: 50px;
		text-align: center;
		text-transform: uppercase;
	}
	.day-disabled {
		cursor: not-allowed;
		background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fdf9ff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E");
		background-color: #ffffff;
		color: rgba(152, 160, 166, 0.5);
	}

	.task {
		position: relative;
		align-self: center;
		z-index: 2;
		margin: 10px;
		border-left-width: 3px;
		border-left-style: solid;
		border-radius: 15px;
		padding: 8px 12px;
		font-size: 14px;
	}
	.task--warning {
		margin-top: -5px;
		border-left-color: #fdb44d;
		background: #fef0db;
		color: #fc9b10;
	}
	.task--danger {
		grid-row: 3;
		grid-column: 2 / span 3;
		margin-top: 15px;
		border-left-color: #fa607e;
		background: rgba(253, 197, 208, 0.7);
		color: #f8254e;
	}
	.task--info {
		margin-top: 15px;
		border-left-color: #4786ff;
		background: rgba(218, 231, 255, 0.7);
		color: #0a5eff;
	}
	.task--primary {
		box-shadow: 0 10px 14px rgba(71, 134, 255, 0.4);
		border: 0;
		border-radius: 14px;
		background: #4786ff;
		color: #f00;
	}
	.task-detail {
		position: absolute;
		top: calc(100% + 8px);
		left: 0;
		z-index: 2;
		box-sizing: border-box;
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
		border: 1px solid rgba(166, 168, 179, 0.2);
		border-radius: 14px;
		background: #efe;
		padding: 20px;
		color: #100;
	}
	.task-detail:after,
	.task-detail:before {
		position: absolute;
		bottom: 100%;
		left: 30%;
		border: solid transparent;
		width: 0;
		height: 0;
		pointer-events: none;
		content: ' ';
	}
	.task-detail:before {
		margin-left: -8px;
		border-width: 8px;
		border-bottom-color: rgba(166, 168, 179, 0.2);
	}
	.task-detail:after {
		margin-left: -6px;
		border-width: 6px;
		border-bottom-color: #fff;
	}
	.task-detail h2 {
		margin: 0;
		color: #91565d;
		font-size: 15px;
	}
	.task-detail p {
		margin-top: 4px;
		margin-bottom: 0;
		color: rgba(81, 86, 93, 0.7);
		font-weight: 500;
		font-size: 12px;
	}
</style>
