<script lang="ts">
	import { languageTag } from '$paraglide/runtime'
    import type { DataHandler, Row } from '@vincjo/datatables'

    type T = $$Generic<Row>

    export let handler: DataHandler<T>
    export let small = false
    const rowCount = handler.getRowCount()

    

</script>

<aside class={$$props.class ?? ''}>
    {#if small}
        {#if $rowCount.total > 0}
            <b>{new Intl.NumberFormat(languageTag() == "en" ?'en-US' : 'ar-SA').format($rowCount.start)}</b>-
            <b>{new Intl.NumberFormat(languageTag() == "en" ?'en-US' : 'ar-SA').format($rowCount.end)}</b>/
            <b>{new Intl.NumberFormat(languageTag() == "en" ?'en-US' : 'ar-SA').format($rowCount.total)}</b>
        {:else}
            {handler.i18n.noRows}
        {/if}
    {:else if $rowCount.total > 0}
        {@html handler.i18n.rowCount!
            .replace('{start}', `<b>${new Intl.NumberFormat(languageTag() == "en" ?'en-US' : 'ar-SA').format($rowCount.start)}</b>`)
            .replace('{end}', `<b>${new Intl.NumberFormat(languageTag() == "en" ?'en-US' : 'ar-SA').format($rowCount.end)}</b>`)
            .replace('{total}', `<b>${new Intl.NumberFormat(languageTag() == "en" ?'en-US' : 'ar-SA').format($rowCount.total)}</b>`)}
    {:else}
        {handler.i18n.noRows}
    {/if}
</aside>

<style lang="postcss">
    aside {
        @apple text-base-content;
    }
</style>