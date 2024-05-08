<script>
	import TabItem from "$lib/components/tab/TabItem.svelte"
    import Tabs from "$lib/components/tab/Tabs.svelte"
    import Icon from "@iconify/svelte"
</script>
<Tabs>
    <TabItem >
        {#snippet titleSlot()}
            <Icon icon="bi:person-badge" class="text-6xl"></Icon>
        {/snippet}

        test
    </TabItem>
    <TabItem >
        {#snippet titleSlot()}
            <Icon icon="bi:shield-check" class="text-6xl"></Icon>
        {/snippet}

        test2414
    </TabItem>
</Tabs>