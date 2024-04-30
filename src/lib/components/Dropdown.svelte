<script>
// @ts-nocheck

	import { onMount } from "svelte"

  /**
	 * @param {HTMLDetailsElement} node
	 * @param {{ (): void; (): void; }} callback
	 */
  function clickOutside(node, callback) {
    // @ts-ignore
    const handleClick = ( event) => {
      if (!node.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('click', handleClick);

    onMount(() => {
      return () => {
        document.removeEventListener('click', handleClick);
      };
    });
  }

let isOpen = $state(false);

function handleClickOutside() {
    if (isOpen) {
        isOpen = false;
    }
}
let { title, children } = $props();
</script>


<details use:clickOutside={handleClickOutside} bind:open={isOpen}>
    <summary>{title}</summary>
    <ul class="p-2 w-40">
{@render children()}
    </ul>
  </details>
