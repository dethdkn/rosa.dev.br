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
	<div class="w-full h-full bg-[#1E1E2E]">
		<h1 style="border-bottom: 2px solid #F28AA9; font-size: 60px; color: #CDD5F4; position: absolute; left: 50%; top: 10%; transform: translate(-50%, -50%);">
			{{ title }}
		</h1>
		<div class="w-full h-full flex items-center justify-center">
			<div class="ms-6">
				<h2 style="font-size: 40px; color: #CDD5F4; padding: 60px;">
					{{ description }}
				</h2>
			</div>
		</div>
	</div>
</template>
