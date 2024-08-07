<script lang="ts">
	import Icon from '@iconify/svelte'
	import UserSelect from './UserSelect.svelte'

	interface Props {
		id: string,
		customer: string, 
		since: string, 
		mobile: string,
		designers: Array<any>
			options: Array<any>
	}
	let { id, customer, since, mobile, designers,options}: Props = $props()
</script>

<div class="card flex w-full flex-col space-y-2 border-primary border-2 bg-base-100 p-6">
	<h2>{id}</h2>
	<div class="divider"></div>
	<div class="flex justify-between">
		<p class="text-sm"><span class="font-bold">Customer:</span>{customer}</p>
		<p class="text-sm"><span class="font-bold">Since:</span>{since}</p>
	</div>
	<p class="text-sm"><span class="font-bold">Mobile:</span>{mobile}</p>
	<div class="flex items-center space-x-2">
		<h3 class="font-bold">Desigers:</h3>
		{#each designers as designer}
		<div class="badge badge-lg p-6 text-sm" class:badge-primary={designer == "Boss(You)"}>{designer}</div>
		{/each}

        <UserSelect checked={designers} {options} fields={["firstname", "lastname"]}></UserSelect>
	</div>
    <div class="divider"></div>
	<ul class="timeline timeline-compact w-full">
		<li class="">
			<div class="timeline-middle ">
				<button class="btn btn-circle btn-outline">
					<Icon icon="solar:box-outline" class="text-3xl"></Icon>
				</button>
			</div>
			<div class="timeline-end timeline-box">0 Samples</div>
			<hr />
		</li>

		<li class="w-9/12">
			<hr />
			<div class="timeline-middle">
				<button class="btn btn-circle btn-outline btn-active">
					<Icon icon="emojione-v1:page" class="text-3xl"></Icon>
				</button>
			</div>
			<hr />
		</li>
		<li class="">
			<hr />
			<div class="timeline-middle">
				<button class="btn btn-circle btn-outline">
					<Icon icon="ph:suitcase-light" class="text-3xl"></Icon>
				</button>
			</div>
			<div class="timeline-end timeline-box">0 Jobs</div>
		</li>
	</ul>
</div>
