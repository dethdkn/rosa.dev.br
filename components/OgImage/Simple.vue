<script setup lang="ts">
defineOptions({
	inheritAttrs: false,
})

const { title, description } = defineProps({
	title: String,
	description: String,
})
</script>

<template>
	<div style="width: 100%; height: 100%; background-color: #1E1E2E;">
		<h1 style="border-bottom: 2px solid #F28AA9; font-size: 60px; color: #CDD5F4; position: absolute; left: 50%; top: 10%; transform: translate(-50%, -50%);">
			{{ title }}
		</h1>
		<div style="width: 100%; height: 100%; display: flex; justify-content: center; align-items: center;">
			<div style="margin-inline-start: 1.5rem">
				<h2 style="font-size: 40px; color: #CDD5F4; padding: 60px;">
					{{ description }}
				</h2>
			</div>
		</div>
	</div>
</template>
