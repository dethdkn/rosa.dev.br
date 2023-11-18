<script setup lang="ts">
const { href, icon } = defineProps({
	href: { type: String, required: true },
	icon: { type: String, required: true },
	text: { type: String, required: true },
})
const iconSize = ref('25')
</script>

<template>
	<a
		:href="href"
		target="_blank"
		class="flex justify-start items-center pb-4 pt-2 px-4 hover:bg-gradient-to-r hover:from-sky-600 hover:to-cyan-400 rounded-2xl transition-all hover:pb-5 hover:pt-3"
		@mouseenter="iconSize = '30'"
		@mouseleave="iconSize = '25'"
	>
		<Icon
			:name="icon"
			:size="iconSize"
			class="transform translate-y-[0.45rem] p-1 text-white bg-blue-400 dark:bg-sky-500 rounded-full transition-all"
		/>
		<span class="ms-2 mt-2 text-gray-900 dark:text-white"> {{ text }}</span>
	</a>
</template>
