<script setup lang="ts">
const { title, location, year, subtitle } = defineProps({
	title: String,
	location: String,
	year: String,
	subtitle: String,
})
</script>

<template>
	<h3 v-if="title" class="text-xl font-bold mb-3 dark:text-white">
		{{ title }}
	</h3>
	<div class="pl-3 pt-5 border-l-2 border-gray-700 dark:border-white relative">
		<h4 class="text-lg font-semibold text-gray-700 mb-2 tracking-wider dark:text-white">
			{{ location }}
		</h4>
		<h5
			class="inline-block bg-sky-500 dark:bg-sky-900 text-white font-semibold py-1 px-4 mb-2 rounded-lg"
		>
			{{ year }}
		</h5>
		<p class="dark:text-white">
			{{ subtitle }}
		</p>
		<div
			class="absolute left-0 top-[2.19rem] bg-sky-500 dark:bg-sky-900 border-2 border-gray-700 dark:border-white rounded-full w-4 h-4 transform -translate-x-1/2 -translate-y-1/2"
		/>
	</div>
</template>
