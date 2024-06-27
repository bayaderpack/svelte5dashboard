<script>
	import SettingsPage from '$components/SettingsPage.svelte'
	import TabItem from '$components/tab/TabItem.svelte'
	import Tabs from '$components/tab/Tabs.svelte'
	import Icon from '@iconify/svelte'
</script>

<Tabs class="justify-around" style="pill">
	<TabItem open={true} activeClasses="bg-base-300">
		
		{#snippet titleSlot()}
			<div class="flex flex-col items-center">
				<Icon icon="fluent:box-20-filled" class="text-9xl"></Icon>
				<h1>Samples</h1>
			</div>
		{/snippet}

		<SettingsPage title="" addButtonLink="/" addButtonText="Add new sample">test2414</SettingsPage>
	</TabItem>
	<TabItem activeClasses="bg-base-300">
		{#snippet titleSlot()}
			<div class="flex flex-col items-center">
				<Icon icon="emojione-monotone:page-facing-up" class="text-9xl"></Icon>
				<h1>Quotations</h1>
			</div>
		{/snippet}

		<SettingsPage title="" addButtonLink="/" addButtonText="Add new quotation">
			<Tabs class="justify-around" style="pill">
				<TabItem open={true} activeClasses="bg-primary" inactiveClasses="bg-base-200">
					{#snippet titleSlot()}
						<div class="flex flex-col items-center">
							<h1>Under Design</h1>
						</div>
					{/snippet}

					<SettingsPage title="" addButtonLink="/" addButtonText="Add new sample"
						>test2414</SettingsPage
					>
				</TabItem>
				<TabItem activeClasses="bg-primary" inactiveClasses="bg-base-200">
					{#snippet titleSlot()}
						<div class="flex flex-col items-center">
							<h1>Printing</h1>
						</div>
					{/snippet}

					<SettingsPage title="" addButtonLink="/" addButtonText="Add new quotation"
						>test2414</SettingsPage
					>
				</TabItem>
				<TabItem activeClasses="bg-primary" inactiveClasses="bg-base-200">
					{#snippet titleSlot()}
						<div class="flex flex-col items-center">
							<h1>Done</h1>
						</div>
					{/snippet}
					<SettingsPage title="" addButtonLink="/" addButtonText="Add new job"
						>test2414</SettingsPage
					>
				</TabItem>
			</Tabs>
		</SettingsPage>
	</TabItem>
	<TabItem activeClasses="bg-base-300">
		{#snippet titleSlot()}
			<div class="flex flex-col items-center">
				<Icon icon="fluent-mdl2:reservation-orders" class="text-9xl"></Icon>
				<h1>Job Orders</h1>
			</div>
		{/snippet}
		<SettingsPage title="" addButtonLink="/" addButtonText="Add new job">test2414</SettingsPage>
	</TabItem>
</Tabs>
