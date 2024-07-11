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
							Bayader Aljazeera
						</td>
						<td>0</td>
						<th class="flex items-center gap-x-4">
                            <button class="btn btn-square btn-error text-white"><Icon icon="bi:trash-fill" class="text-3xl"></Icon></button>
                            
							<input type="checkbox" class="toggle" checked />
						</th>
					</tr>

				
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
