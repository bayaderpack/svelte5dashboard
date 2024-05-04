<script>
	import { browser } from '$app/environment'
	import {
		Grid,
		h,
		createRef as gCreateRef,
		useSelector,
		PluginPosition,
		useEffect,
		useState,
	} from 'gridjs'
	// import 'gridjs/dist/theme/mermaid.css'
	import Swal from 'sweetalert2'

	function TotalSalaryPlugin() {
		const data = useSelector((state) => state.data)
		let [total, setTotal] = useState(0)
		useEffect(() => {
			if (!data) return

			setTotal(
				data.toArray().reduce((/** @type {any} */ prev, /** @type {any[]} */ row) => {
					return prev + row[2]
				}, 0),
			)
		})

		return h('b', {}, `Total: $${total}`)
	}

	let grid = $state()
	let limitation = $state(3)
	let limitations = $state([1, 2, 3])
	const deleteRecord = (
		/** @type {string | number | bigint | boolean | object | import("preact").VNode<any> | null | undefined} */ index,
	) => {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#d33',
			cancelButtonColor: '#3085d6',
			confirmButtonText: 'Yes, delete it!',
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire({
					title: 'Deleted!',
					text: `${index} has been deleted`,
					icon: 'success',
				})
			}
		})
	}
	const useTable = (/** @type {Element} */ node, /** @type {number} */ limit) => {
		grid = new Grid({
			search: true,
			resizable: true,
			pagination: {
				limit: limit,
			},
			columns: [
				'Name',
				'Email',
				'Phone Number',
				{
					name: 'Actions',
					formatter: (cell, row) => {
						return [
							h(
								'button',
								{
									className: 'btn btn-warning',
									onClick: () => alert(`Editing "${row.cells[0].data}" "${row.cells[1].data}"`),
								},
								'Edit',
							),
							h(
								'button',
								{
									className: 'btn btn-error',
									onClick: () => {
										deleteRecord(row.cells[0].data)
									},
								},
								'Delete',
							),
						]
					},
				},
			],
			sort: true,
			data: () => {
				return new Promise((resolve) => {
					setTimeout(
						() =>
							resolve([
								['John', 'john@example.com', 24],
								['Mark', 'mark@gmail.com', 242],
								['Eoin', 'eo3n@yahoo.com', 321],
								['Nisen', 'nis900@gmail.com', 4124],
							]),
						1000,
					)
				})
			},
		})

		if (node) {
			grid.plugin.add({
				id: 'salaryplugin',
				component: TotalSalaryPlugin,
				position: PluginPosition.Footer,
			})
			grid.render(node)
		}

		return {
			/**
			 * @param {number} limit
			 */
			update(limit) {
				grid.updateConfig({
					pagination: {
						limit: limit,
					},
				})
				grid.forceRender()
			},
		}
	}
</script>

<!-- {#if !browser} -->
<div use:useTable={limitation}></div>

<select class="select select-primary w-full max-w-xs" bind:value={limitation}>
	{#each limitations as limit}
		<option value={limit}> {limit} Per Page</option>
	{/each}
</select>

<!-- {/if} -->

<style lang="postcss">
	:global(table) {
		@apply table p-4 mt-4 border border-base-content;
	}
	:global(.gridjs-input.gridjs-search-input) {
		@apply input input-bordered input-primary;
	}
	:global(.gridjs-tr) {
		@apply hover:bg-base-200;
	}
	:global(.gridjs-th) {
		@apply font-bold text-base-content border-r border-base-content;
	}
	:global(.gridjs-td) {
		@apply border border-base-content;
	}
	:global(.gridjs-resizable:hover) {
		@apply cursor-e-resize bg-primary;
	}
	:global(.gridjs-pages button:not(.gridjs-currentPage)) {
		@apply btn btn-ghost;
	}
	:global(.gridjs-pages button[aria-label='Previous'], .gridjs-pages button[aria-label='Next']) {
		@apply btn btn-primary;
	}
	:global(.gridjs-pagination) {
		@apply flex justify-between;
	}
	:global(.gridjs-currentPage) {
		@apply btn btn-secondary;
	}
	:global(button.gridjs-sort-asc) {
		background-image: url('data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIyOTIuMzYycHgiIGhlaWdodD0iMjkyLjM2MXB4IiB2aWV3Qm94PSIwIDAgMjkyLjM2MiAyOTIuMzYxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyOTIuMzYyIDI5Mi4zNjE7IgoJIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik0yODYuOTM1LDE5Ny4yODdMMTU5LjAyOCw2OS4zODFjLTMuNjEzLTMuNjE3LTcuODk1LTUuNDI0LTEyLjg0Ny01LjQyNHMtOS4yMzMsMS44MDctMTIuODUsNS40MjRMNS40MjQsMTk3LjI4NwoJCUMxLjgwNywyMDAuOTA0LDAsMjA1LjE4NiwwLDIxMC4xMzRzMS44MDcsOS4yMzMsNS40MjQsMTIuODQ3YzMuNjIxLDMuNjE3LDcuOTAyLDUuNDI1LDEyLjg1LDUuNDI1aDI1NS44MTMKCQljNC45NDksMCw5LjIzMy0xLjgwOCwxMi44NDgtNS40MjVjMy42MTMtMy42MTMsNS40MjctNy44OTgsNS40MjctMTIuODQ3UzI5MC41NDgsMjAwLjkwNCwyODYuOTM1LDE5Ny4yODd6Ii8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+');
		background-size: 10px;
		background-color: aliceblue;
		background-position-y: 35%;
	}
	:global(html[data-theme='dark'] button.gridjs-sort-asc) {
		filter: invert(1);
	}
	:global(html[data-theme='dark'] button.gridjs-sort-desc) {
		filter: invert(1);
	}
	:global(html[data-theme='dark'] button.gridjs-sort-neutral) {
		filter: invert(1);
	}

	:global(button.gridjs-sort-desc) {
		background-image: url('data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIyOTIuMzYycHgiIGhlaWdodD0iMjkyLjM2MnB4IiB2aWV3Qm94PSIwIDAgMjkyLjM2MiAyOTIuMzYyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyOTIuMzYyIDI5Mi4zNjI7IgoJIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik0yODYuOTM1LDY5LjM3N2MtMy42MTQtMy42MTctNy44OTgtNS40MjQtMTIuODQ4LTUuNDI0SDE4LjI3NGMtNC45NTIsMC05LjIzMywxLjgwNy0xMi44NSw1LjQyNAoJCUMxLjgwNyw3Mi45OTgsMCw3Ny4yNzksMCw4Mi4yMjhjMCw0Ljk0OCwxLjgwNyw5LjIyOSw1LjQyNCwxMi44NDdsMTI3LjkwNywxMjcuOTA3YzMuNjIxLDMuNjE3LDcuOTAyLDUuNDI4LDEyLjg1LDUuNDI4CgkJczkuMjMzLTEuODExLDEyLjg0Ny01LjQyOEwyODYuOTM1LDk1LjA3NGMzLjYxMy0zLjYxNyw1LjQyNy03Ljg5OCw1LjQyNy0xMi44NDdDMjkyLjM2Miw3Ny4yNzksMjkwLjU0OCw3Mi45OTgsMjg2LjkzNSw2OS4zNzd6Ii8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+');
		background-size: 10px !important;
		background-position-y: 65% !important;
	}
	:global(button.gridjs-sort-neutral) {
		background-image: url('data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSI0MDEuOTk4cHgiIGhlaWdodD0iNDAxLjk5OHB4IiB2aWV3Qm94PSIwIDAgNDAxLjk5OCA0MDEuOTk4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDEuOTk4IDQwMS45OTg7IgoJIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik03My4wOTIsMTY0LjQ1MmgyNTUuODEzYzQuOTQ5LDAsOS4yMzMtMS44MDcsMTIuODQ4LTUuNDI0YzMuNjEzLTMuNjE2LDUuNDI3LTcuODk4LDUuNDI3LTEyLjg0NwoJCQljMC00Ljk0OS0xLjgxMy05LjIyOS01LjQyNy0xMi44NUwyMTMuODQ2LDUuNDI0QzIxMC4yMzIsMS44MTIsMjA1Ljk1MSwwLDIwMC45OTksMHMtOS4yMzMsMS44MTItMTIuODUsNS40MjRMNjAuMjQyLDEzMy4zMzEKCQkJYy0zLjYxNywzLjYxNy01LjQyNCw3LjkwMS01LjQyNCwxMi44NWMwLDQuOTQ4LDEuODA3LDkuMjMxLDUuNDI0LDEyLjg0N0M2My44NjMsMTYyLjY0NSw2OC4xNDQsMTY0LjQ1Miw3My4wOTIsMTY0LjQ1MnoiLz4KCQk8cGF0aCBkPSJNMzI4LjkwNSwyMzcuNTQ5SDczLjA5MmMtNC45NTIsMC05LjIzMywxLjgwOC0xMi44NSw1LjQyMWMtMy42MTcsMy42MTctNS40MjQsNy44OTgtNS40MjQsMTIuODQ3CgkJCWMwLDQuOTQ5LDEuODA3LDkuMjMzLDUuNDI0LDEyLjg0OEwxODguMTQ5LDM5Ni41N2MzLjYyMSwzLjYxNyw3LjkwMiw1LjQyOCwxMi44NSw1LjQyOHM5LjIzMy0xLjgxMSwxMi44NDctNS40MjhsMTI3LjkwNy0xMjcuOTA2CgkJCWMzLjYxMy0zLjYxNCw1LjQyNy03Ljg5OCw1LjQyNy0xMi44NDhjMC00Ljk0OC0xLjgxMy05LjIyOS01LjQyNy0xMi44NDdDMzM4LjEzOSwyMzkuMzUzLDMzMy44NTQsMjM3LjU0OSwzMjguOTA1LDIzNy41NDl6Ii8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+');
		background-position-y: center !important;
	}
	:global(.gridjs-thead .gridjs-tr .gridjs-th-sort) {
		@apply cursor-pointer text-center;
	}

	:global(th.gridjs-th-sort .gridjs-th-content) {
		width: calc(100% - 25px);
	}
	:global(th.gridjs-th-sort:hover) {
		@appl bg-base-300;
	}
	:global(th.gridjs-th-sort:focus) {
		@appl bg-base-300;
	}
	:global(button.gridjs-sort) {
		float: right;
		cursor: pointer;
		margin: 0;
		outline: none;
		border: none;
		background-size: contain;
		background-repeat: no-repeat;
		background-color: transparent;
		background-position-x: center;
		padding: 0;
		width: 13px;
		height: 24px;
	}
	:global(.gridjs-td[data-column-id='actions']) {
		@apply space-x-4;
	}
</style>
