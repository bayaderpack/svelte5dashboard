<script lang="ts">
	import type ApexCharts from 'apexcharts'
	import type { Action } from 'svelte/action'

	interface MyProps {
		options: any
		myChart: ApexCharts
	}
	let { options, myChart = $bindable() }: MyProps = $props()

	export const chart: Action<HTMLDivElement, MyProps> = (node, options) => {
		import('apexcharts')
			.then((module) => module.default)
			.then((ApexCharts) => {
				myChart = new ApexCharts(node, options)
				myChart.render()
			})
		return {
			update(options: any) {
				myChart.updateOptions(options)
			},
			destroy: () => {
				myChart.destroy()
			},
		}
	}
</script>

<div use:chart={options}></div>

<style lang="postcss">
	:global(html[data-theme='dark'] .apexcharts-canvas text) {
		fill: white;
	}
</style>
