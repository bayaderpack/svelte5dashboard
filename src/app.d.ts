import { HTMLAttributes } from './../node_modules/preact/src/jsx.d'
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import type { ApexCharts } from 'apexcharts'
declare global {
	// fresh API just dropped, let's extend Document
	interface Document {
		startViewTransition?(callback: () => Promise<void>): void
	}
	interface HTMLMetaAttributes {
		rel: String
	}

	interface CSSStyleDeclaration {
		viewTransitionName?: string
	}

	interface Array<T> {
		removeByValue(elem: T): Array<T>
	}

	interface Window {
		toggleTheme?(): void
		ApexCharts: ApexCharts
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
	declare namespace svelteHTML {
		interface HTMLAttributes<T> {
			rel?: string
		}
	}
}

export {}
