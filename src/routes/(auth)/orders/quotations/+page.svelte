<script>
	import SettingsPage from '$components/SettingsPage.svelte'
	import TabItem from '$components/tab/TabItem.svelte'
	import Tabs from '$components/tab/Tabs.svelte'
	import Icon from '@iconify/svelte'
</script>

<Tabs class="justify-around" style="pill">
	<TabItem open={true}>
		{#snippet titleSlot()}
			<div class="flex flex-col items-center">
				<Icon icon="fluent:box-20-filled" class="text-[80px]"></Icon>
				<h1>Samples</h1>
			</div>
		{/snippet}

		<SettingsPage title="" addButtonLink="/" addButtonText="Add new sample">test2414</SettingsPage>
	</TabItem>
	<TabItem>
		{#snippet titleSlot()}
			<div class="flex flex-col items-center">
				<Icon icon="emojione-monotone:page-facing-up" class="text-[80px]"></Icon>
				<h1>Quotations</h1>
			</div>
		{/snippet}

		<SettingsPage title="" addButtonLink="/" addButtonText="Add new quotation"
			>test2414</SettingsPage
		>
	</TabItem>
	<TabItem>
		{#snippet titleSlot()}
			<div class="flex flex-col items-center">
				<Icon icon="fluent-mdl2:reservation-orders" class="text-[80px]"></Icon>
				<h1>Job Orders</h1>
			</div>
		{/snippet}
		<SettingsPage title="" addButtonLink="/" addButtonText="Add new job">test2414</SettingsPage>
	</TabItem>
</Tabs>
