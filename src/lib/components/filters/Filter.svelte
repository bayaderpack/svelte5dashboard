<script lang="ts">
	interface MyProps {
		name: string
	}

	const { name }: MyProps = $props()

	const idName = name.split(' ').join('')
</script>

<li>
	<div class="form-control">
		<label class="label cursor-pointer" for={idName}>
			<input type="checkbox" checked class="checkbox-primary checkbox" id={idName} />
			<span class="label-text">{name}</span>
		</label>
	</div>
</li>
