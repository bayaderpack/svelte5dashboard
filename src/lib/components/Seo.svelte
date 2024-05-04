<script lang="ts">
	import { page } from '$app/stores'
	import type { HTMLMetaAttributes } from 'svelte/elements'

	interface MyProps {
		title?: string
		description?: string
		keywords?: string
		canonical?: string
		siteName?: string
		index?: boolean
		twitter?: boolean
		openGraph?: boolean
		schemaOrg?: boolean
		imageURL?: string
		logo?: string
		author?: string
		socials?: Array<string>
		name?: string
		children?: any
	}
	interface $$Props extends HTMLMetaAttributes {
		rel: string
	}

	let {
		title = '',
		description = '',
		keywords = '',
		canonical = '',
		siteName = '',
		index = true,
		twitter = true,
		openGraph = true,
		schemaOrg = false,
		imageURL = '',
		logo = '',
		author = '',
		socials = [],
		name = '',
		children,
	}: MyProps = $props()

	let socialsString = $derived(socials.join(', '))

	let jsonLd = $state({})
	$effect(() => {
		jsonLd = {
			'@context': 'https://schema.org',
			'@type': ['Person', 'Organization'],
			name: `${name}`,
			url: `${$page.url.origin}`,
			image: `${imageURL}`,
			logo: {
				'@type': 'ImageObject',
				url: `${logo}`,
				width: 48,
				height: 48,
			},
			sameAs: [`${socialsString}`],
		}
	})

	let jsonLdStrung = $derived(JSON.stringify(jsonLd))
	let jsonLdScript = $derived(`<script type="application/ld+json">${jsonLdStrung}${'<'}/script>`)
</script>

<svelte:head>
	{#if title !== ''}
		<meta name="robots" content={index ? 'index, follow' : 'noindex'} />
		<title>{title}</title>
		<meta rel="canonical" content={canonical === '' ? $page.url.toString() : canonical} />
	{/if}
	{#if description !== ''}
		<meta name="description" content={description} />
	{/if}
	{#if keywords !== ''}
		<meta name="keywords" content={keywords} />
	{/if}
	{#if author !== ''}
		<meta name="author" content={author} />
	{/if}

	<!-- Open Graph Meta Tags -->
	{#if openGraph}
		{#if siteName !== ''}
			<meta property="og:site_name" content={siteName} />
		{/if}
		{#if title !== ''}
			<meta property="og:url" content={$page.url.toString()} />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={title} />
		{/if}
		{#if description !== ''}
			<meta property="og:description" content={description} />
		{/if}
		{#if imageURL !== ''}
			<meta property="og:image" content={imageURL} />
		{/if}
	{/if}

	<!-- Twitter Meta Tags -->
	{#if twitter}
		{#if title !== ''}
			<meta name="twitter:card" content="summary_large_image" />
			<meta property="twitter:domain" content={$page.url.host} />
			<meta property="twitter:url" content={$page.url.toString()} />
			<meta name="twitter:title" content={title} />
		{/if}
		{#if description !== ''}
			<meta name="twitter:description" content={description} />
		{/if}
		{#if imageURL !== ''}
			<meta name="twitter:image" content={imageURL} />
		{/if}
	{/if}
	<!-- {#if children} -->
	{@render children?.()}
	<!-- {/if} -->

	<!-- JSON-LD Schema -->
	{#if schemaOrg || socials[0] !== undefined || logo !== '' || name !== ''}
		{@html jsonLdScript}
	{/if}
</svelte:head>
