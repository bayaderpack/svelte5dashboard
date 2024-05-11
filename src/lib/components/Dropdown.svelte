<script>
	/**
	 * @param {HTMLDetailsElement} node
	 * @param {{ (): void; (): void; }} callback
	 */
	function clickOutside(node, callback) {
		// @ts-ignore
		const handleClick = (event) => {
			if (!node.contains(event.target)) {
				callback()
			}
		}

		document.addEventListener('click', handleClick)

		$effect(() => {
			return () => {
				document.removeEventListener('click', handleClick)
			}
		})
	}

	let isOpen = $state(false)

	function handleClickOutside() {
		if (isOpen) {
			isOpen = false
		}
	}
	let { title, children } = $props()
</script>

<details use:clickOutside={handleClickOutside} bind:open={isOpen}>
	<summary>{title}</summary>
	<ul class="w-40 p-2">
		{@render children()}
	</ul>
</details>
