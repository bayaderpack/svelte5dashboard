import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vitest/config'
import { enhancedImages } from '@sveltejs/enhanced-img';
import { paraglide } from '@inlang/paraglide-js-adapter-sveltekit/vite'

export default defineConfig({
	plugins: [
		paraglide({
			//recommended
			project: './project.inlang',
			outdir: './src/lib/paraglide',
		}),
		sveltekit(),
		enhancedImages(),
	],
	test: {
		include: ['src/**/*.test.ts'],
	},
})
