<script>
    import Icon from "@iconify/svelte"
</script>

<div class="flex flex-col">
	<div class="overflow-x-auto">
		<table class="table">
			<!-- head -->
			<thead>
				<tr>
					<th>Image</th>
					<th>Name</th>
					<th>Order</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				<!-- row 1 -->
				{#each Array(22).fill(0) as item}
					<tr>
						<td>
							<div class="flex items-center gap-3">
								<div class="avatar">
									<div class="mask mask-squircle h-12 w-12">
										<img
											src="https://admin.bayaderpack.com/media/suitabilities/hot_liquids.svg"
											alt="Avatar Tailwind CSS Component"
										/>
									</div>
								</div>
							</div>
						</td>
						<td>
							Zemlak, Daniel and Leannon
							<br />
							<span class="badge badge-ghost badge-sm">Desktop Support Technician</span>
						</td>
						<td>0</td>
						<th class="flex items-center gap-x-4">
                            <button class="btn btn-square btn-error text-white"><Icon icon="bi:trash-fill" class="text-3xl"></Icon></button>
                            
							<input type="checkbox" class="toggle" checked />
						</th>
					</tr>
					<!-- row 2 -->
					<tr>
						<td>
							<div class="flex items-center gap-3">
								<div class="avatar">
									<div class="mask mask-squircle h-12 w-12">
										<img
											src="https://admin.bayaderpack.com/media/suitabilities/microwave.svg"
											alt="Avatar Tailwind CSS Component"
										/>
									</div>
								</div>
							</div>
						</td>
						<td>
							Carroll Group
							<br />
							<span class="badge badge-ghost badge-sm">Tax Accountant</span>
						</td>
						<td>0</td>
						<th class="flex items-center gap-x-4">
                            <button class="btn btn-square btn-error text-white"><Icon icon="bi:trash-fill" class="text-3xl"></Icon></button>
                            
							<input type="checkbox" class="toggle" checked />
						</th>
					</tr>
					<!-- row 3 -->
					<tr>
						<td>
							<div class="flex items-center gap-3">
								<div class="avatar">
									<div class="mask mask-squircle h-12 w-12">
										<img
											src="https://admin.bayaderpack.com/media/suitabilities/cold_liquids.svg"
											alt="Avatar Tailwind CSS Component"
										/>
									</div>
								</div>
							</div>
						</td>
						<td>
							Rowe-Schoen
							<br />
							<span class="badge badge-ghost badge-sm">Office Assistant I</span>
						</td>
						<td>1</td>
						<th class="flex items-center gap-x-4">
                            <button class="btn btn-square btn-error text-white"><Icon icon="bi:trash-fill" class="text-3xl"></Icon></button>
                            
							<input type="checkbox" class="toggle" checked />
						</th>
					</tr>
					<!-- row 4 -->
					<tr>
						<td>
							<div class="flex items-center gap-3">
								<div class="avatar">
									<div class="mask mask-squircle h-12 w-12">
										<img
											src="https://admin.bayaderpack.com/media/suitabilities/freezee.svg"
											alt="Avatar Tailwind CSS Component"
										/>
									</div>
								</div>
							</div>
						</td>
						<td>
							Wyman-Ledner
							<br />
							<span class="badge badge-ghost badge-sm">Community Outreach Specialist</span>
						</td>
						<td>2</td>
						<th class="flex items-center gap-x-4">
                            <button class="btn btn-square btn-error text-white"><Icon icon="bi:trash-fill" class="text-3xl"></Icon></button>
                            
							<input type="checkbox" class="toggle" checked />
						</th>
					</tr>
				{/each}
			</tbody>
			<!-- foot -->
			<tfoot>
				<tr>
					<th></th>
					<th>Name</th>
					<th>Job</th>
					<th>Favorite Color</th>
					<th></th>
				</tr>
			</tfoot>
		</table>
	</div>
</div>
