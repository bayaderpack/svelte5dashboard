<script lang="ts">
	let { class: className = '' } = $props()
</script>

<svg class={className} aria-hidden="true" viewBox="0 0 32 32">
	<mask class="moon" id="moon-mask">
		<rect x="0" y="0" width="100%" height="100%" fill="white" />
		<circle cx="32" cy="13.33" r="8" fill="black" />
	</mask>
	<circle class="sun" cx="16" cy="16" r="8" mask="url(#moon-mask)" fill="currentColor" />
	<g class="sun-beams" stroke="currentColor" stroke-width="2px">
		<line x1="16" y1="1" x2="16" y2="4" />
		<line x1="16" y1="28" x2="16" y2="30.77" />
		<line x1="5.63" y1="5.63" x2="10.03" y2="10.03" />
		<line x1="24.48" y1="24.48" x2="26.37" y2="26.37" />
		<line x1="1" y1="16" x2="4" y2="16" />
		<line x1="28" y1="16" x2="30.77" y2="16" />
		<line x1="5.63" y1="26.37" x2="10.03" y2="24.48" />
		<line x1="24.48" y1="10.03" x2="26.37" y2="5.63" />
	</g>
</svg>

<style>
	svg {
		--duration: 500ms;
	}

	svg .moon,
	svg .sun,
	svg .sun-beams {
		transform-origin: center center;
	}

	:global([data-theme='dark']) svg .sun {
		transform: scale(2);
	}

	:global([data-theme='dark']) svg .sun-beams {
		opacity: 0;
	}

	:global([data-theme='dark']) svg .moon > circle {
		transform: translateX(-9px);

		@supports (cx: 1) {
			transform: translateX(0);
			cx: 24;
		}
	}

	@media (prefers-reduced-motion: no-preference) {
		svg .sun {
			transition: transform var(--duration) var(--ease-elastic-out-3);
		}

		svg .sun-beams {
			transition:
				transform var(--duration) var(--ease-elastic-out-4),
				opacity var(--duration) var(--ease-3);
		}

		svg .moon > circle {
			transition: transform calc(var(--duration) / 2) var(--ease-out-5);
		}

		@supports (cx: 1) {
			svg .moon > circle {
				transition: cx calc(var(--duration) / 2) var(--ease-out-5);
			}
		}

		:global([data-theme='dark']) svg .sun {
			transform: scale(1.75);
			transition-duration: calc(var(--duration) / 2);
			transition-timing-function: var(--ease-3);
		}

		:global([data-theme='dark']) svg .sun-beams {
			transform: rotateZ(-25deg);
			transition-duration: calc(var(--duration) / 3);
		}

		:global([data-theme='dark']) svg .moon > circle {
			scale: 1.1;
			transition-delay: calc(var(--duration) / 2);
			transition-duration: var(--duration);
		}
	}
</style>
