<script>
	import { browser } from '$app/environment'
	import Chart from '$components/Chart.svelte'
	let chart = $state()
	const [, ...result] = Array(31).keys()

	var options = {
		series: [
			{
				name: 'Users',
				data: [3.2, 7.8, 4.5, 9.1, 2.6, 6.4, 1.9, 5.7, 8.3, 3.8, 7.2, 4.1],
			},
		],
		chart: {
			height: 350,
			type: 'bar',
			events: {
				click: function (
					/** @type {any} */ event,
					/** @type {any} */ chartContext,
					/** @type {{ config: { series: { [x: string]: { data: { [x: string]: any; }; }; }; xaxis: { categories: { [x: string]: any; }; }; }; seriesIndex: string | number; dataPointIndex: string | number; }} */ config,
				) {
					console.log(config.config.series[config.seriesIndex])
					console.log(config.config.xaxis.categories[config.dataPointIndex])
					console.log(config.config.series[config.seriesIndex].data[config.dataPointIndex])
					chart.updateOptions({
						xaxis: {
							categories: result,
						},
						series: [
							{
								data: generateRandomNumbers2(),
							},
						],
					})
				},
			},
		},
		plotOptions: {
			bar: {
				borderRadius: 10,
				dataLabels: {
					position: 'top', // top, center, bottom
				},
			},
		},
		dataLabels: {
			enabled: true,
			formatter: function (/** @type {string} */ val) {
				return val + '%'
			},
			offsetY: -20,
			style: {
				fontSize: '12px',
				colors: ['#304758'],
			},
		},

		xaxis: {
			categories: [
				'Jan',
				'Feb',
				'Mar',
				'Apr',
				'May',
				'Jun',
				'Jul',
				'Aug',
				'Sep',
				'Oct',
				'Nov',
				'Dec',
			],
			position: 'top',
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false,
			},
			crosshairs: {
				fill: {
					type: 'gradient',
					gradient: {
						colorFrom: '#D8E3F0',
						colorTo: '#BED1E6',
						stops: [0, 100],
						opacityFrom: 0.4,
						opacityTo: 0.5,
					},
				},
			},
			tooltip: {
				enabled: true,
			},
		},
		yaxis: {
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false,
			},
			labels: {
				show: false,
				formatter: function (/** @type {string} */ val) {
					return val + '%'
				},
			},
		},
		colors: ['#0000ff'],
		title: {
			text: 'Visits last month',
			floating: true,
			offsetY: 330,
			align: 'center',
		},
	}

	// var options = ;

	function generateRandomNumbers() {
		const randomNumbers = []

		for (let i = 0; i < 12; i++) {
			// Generate a random number between 1 and 10 (inclusive)
			const randomNumber = Math.floor(Math.random() * 10) + 1

			// Add a single decimal place (e.g., 5.3, 8.7, etc.)
			const roundedNumber = parseFloat((randomNumber + Math.random()).toFixed(1))

			randomNumbers.push(roundedNumber)
		}

		return randomNumbers
	}
	function generateRandomNumbers2() {
		const randomNumbers = []

		for (let i = 0; i < 31; i++) {
			// Generate a random number between 1 and 10 (inclusive)
			const randomNumber = Math.floor(Math.random() * 10) + 1

			// Add a single decimal place (e.g., 5.3, 8.7, etc.)
			const roundedNumber = parseFloat((randomNumber + Math.random()).toFixed(1))

			randomNumbers.push(roundedNumber)
		}

		return randomNumbers
	}

	function updateRandomNumbers() {
		const result = generateRandomNumbers()
		options.series[0].data = result
	}

	// Initial call to generate and log random numbers

	updateRandomNumbers()

	// Schedule updates every 5 seconds
	setInterval(updateRandomNumbers, 5000)
</script>

<svelte:head>
	<title>Dashboard page</title>
	<meta name="description" content="Product page with filters" />
</svelte:head>
<div class="grid grid-cols-1 gap-4 md:grid-cols-4">
	{#if browser}
		<div class="card rounded-box shadow-md">
			<Chart {options} bind:myChart={chart} />
		</div>
	{/if}
	<button onclick={() => chart.destroy()}>Kaboom</button>

	<div class="stats w-full shadow">
		<div class="stat">
			<div class="stat-title">Total Page Views</div>
			<div class="stat-value">89,400</div>
			<div class="stat-desc">21% more than last month</div>
		</div>
	</div>
	<div class="stats w-full shadow">
		<div class="stat">
			<div class="stat-title">Total Page Views</div>
			<div class="stat-value">89,400</div>
			<div class="stat-desc">21% more than last month</div>
		</div>
	</div>
	<div class="stats w-full shadow">
		<div class="stat">
			<div class="stat-title">Total Page Views</div>
			<div class="stat-value">89,400</div>
			<div class="stat-desc">21% more than last month</div>
		</div>
	</div>
	<div class="stats w-full shadow">
		<div class="stat">
			<div class="stat-title">Total Page Views</div>
			<div class="stat-value">89,400</div>
			<div class="stat-desc">21% more than last month</div>
		</div>
	</div>
	<div class="stats w-full shadow">
		<div class="stat">
			<div class="stat-title">Total Page Views</div>
			<div class="stat-value">89,400</div>
			<div class="stat-desc">21% more than last month</div>
		</div>
	</div>
	<div class="stats w-full shadow">
		<div class="stat">
			<div class="stat-title">Total Page Views</div>
			<div class="stat-value">89,400</div>
			<div class="stat-desc">21% more than last month</div>
		</div>
	</div>
</div>
