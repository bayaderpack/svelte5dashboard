<script>
	import Icon from '@iconify/svelte'
	import UserSelect from './UserSelect.svelte'
</script>

<div class="card flex w-full flex-col space-y-2 border-primary border-2 bg-base-100 p-6">
	<h2>#Q2406241680</h2>
	<div class="divider"></div>
	<div class="flex justify-between">
		<p class="text-sm"><span class="font-bold">Customer:</span>ناصر علي السعد (بطاطس ابو علي)</p>
		<p class="text-sm"><span class="font-bold">Since:</span>24 June 2024 - 09:32 AM</p>
	</div>
	<p class="text-sm"><span class="font-bold">Mobile:</span>966-502933052</p>
	<div class="flex items-center space-x-2">
		<h3 class="font-bold">Desigers:</h3>
		<div class="badge badge-primary badge-lg p-4">Boss(You)</div>
		<div class="badge badge-lg p-4">ahmed</div>
		<div class="badge badge-lg p-4">umair</div>

        <UserSelect></UserSelect>
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
