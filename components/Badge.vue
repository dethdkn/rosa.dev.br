<script setup lang='ts'>
const { title, icon, color } = defineProps({
	title: { type: String, required: true },
	icon: { type: String, required: true },
	color: { type: String, required: true },
})
</script>

<template>
	<p class="inline border rounded p-1 text-[10px] mt-2 sm:mt-0" :style="{ color, 'border-color': color }">
		<Icon :name="icon" />
		{{ title }}
	</p>
</template>
