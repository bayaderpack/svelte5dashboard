<script >

	let {options , myChart = $bindable()} = $props();

	let ApexCharts = $state();
	let loaded = $state(false);


	const chart = (/** @type {HTMLDivElement} */ node, /** @type {unknown} */ options) => {

		if (!loaded)
			return

		myChart = new ApexCharts(node, options)
		// @ts-ignore
		myChart.render()

		return {
			/**
			 * @param {any} options
			 */
			update(options) {
				// @ts-ignore
				myChart.updateOptions(options)
			},
			destroy() {
				// @ts-ignore
				myChart.destroy()
			}
		}
	}

	const getApexCharts = async () => {
		ApexCharts = (await import('apexcharts')).default;


		loaded = true
	}
	$effect(() => {

		getApexCharts()
	})


</script> 

{#if loaded}
<div use:chart={options}></div>
{/if}