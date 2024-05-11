<script lang="ts">
	import { DotLottieSvelte } from '@lottiefiles/dotlottie-svelte'

	// export let path = '94729-not-found';
	// export let playing = false;
	// export let loop = true;
	// export let replayFrameFrom = 0;
	// export let replayFrameTo = 0;
	// export let stopTo = 1;
	// export let currentFrame =  "0";

	interface Lottie {
		path: string
		moreClass?: string
	}

	let { path, moreClass }: Lottie = $props()
</script>

<div class={moreClass}>
	<DotLottieSvelte src={path} loop autoplay />
</div>
