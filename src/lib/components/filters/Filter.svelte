<script lang="ts">
	interface MyProps {
		name: string
		onclick?: () => void
	}

	const { name, onclick }: MyProps = $props()

	const idName = name.split(' ').join('')
</script>

<div class="form-control">
	<label class="label cursor-pointer" for={idName} >
		<input type="checkbox" id={idName} class="checkbox-primary checkbox" {onclick} />
		<span class="label-text capitalize">{name}</span>
	</label>
</div>

