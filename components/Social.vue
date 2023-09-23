<script setup lang="ts">
const {href, icon} = defineProps({
	href: {type: String, required: true},
	icon: {type: String, required: true},
	text: {type: String, required: true}
})
</script>

<template>
	<a
		:href="href"
		target="_blank"
		class="flex justify-start pb-4 pt-2 px-4 hover:bg-gradient-to-r hover:from-sky-600 hover:to-cyan-400 rounded-2xl"
	>
		<Icon
			:name="icon"
			size="25"
			class="transform translate-y-[0.45rem] p-1 text-white bg-blue-400 dark:bg-sky-500 rounded-full"
		/>
		<span class="ms-2 mt-2 text-gray-900 dark:text-white"> {{ text }}</span>
	</a>
</template>
