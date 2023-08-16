<script setup lang="ts">
const {href, icon} = defineProps({
	href: String,
	icon: [String, Array],
	text: String
})
</script>

<template>
	<a
		:href="href"
		target="_blank"
		class="block text-gray-900 dark:text-white px-4 py-3 hover:bg-gradient-to-r hover:from-sky-600 hover:to-cyan-400 rounded-2xl"
	>
		<FaIcon
			:icon="icon"
			class="transform translate-y-[0.45rem] p-1 bg-blue-400 dark:bg-sky-500 rounded-full"
		/>
		<span> {{ text }}</span>
	</a>
</template>
