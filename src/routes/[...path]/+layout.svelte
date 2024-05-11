<script>
	import { i18n } from "$lib/i18n"
    import "$styles/app.css"
	import { ParaglideJS } from "@inlang/paraglide-js-adapter-sveltekit"
    const { children} = $props()
</script>
<ParaglideJS {i18n}>
{@render children()}
</ParaglideJS>