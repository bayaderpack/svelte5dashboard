// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import type { ApexOptions } from "apexcharts"
declare global {
	// fresh API just dropped, let's extend Document
	interface Document {
		startViewTransition?(callback: () => Promise<void>): void
	}
	interface CSSStyleDeclaration {
		viewTransitionName?: string
	}

	interface Window {
		toggleTheme?(): void,
		ApexCharts: ApexOptions,
	}
	namespace App {
		// interface Error {}
		interface Locals {
			userID: String
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {}