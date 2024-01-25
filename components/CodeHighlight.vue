<script setup lang='ts'>
const { fileName } = defineProps({
	fileName: { type: String, required: true },
})
</script>

<template>
	<div class="bg-[#FAFAFA] dark:bg-[#1A1B26] border border-[#DCE0E7] dark:border-[#1E1E2E] rounded-2xl p-5 relative">
		<div class="px-3 py-6 overflow-auto">
			<span class="absolute top-0 left-0 px-3 font-sans rounded bg-zinc-100 dark:bg-zinc-900">{{ fileName }}</span>
			<div class="mt-2">
				<slot />
			</div>
		</div>
	</div>
</template>
