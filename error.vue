<script setup lang='ts'>
const error = defineProps(['error'])
const { statusCode, message } = error.error
useHead({
	title: `${statusCode}`,
})
</script>

<template>
	<NuxtLayout>
		<div class="min-h-[calc(100vh-273px)] flex items-center justify-center">
			<div class="text-center space-y-10">
				<h1 class="text-[#4C4F69] dark:text-[#CDD5F4] text-8xl border-b-2 border-[#F28AA9] inline">
					{{ statusCode }}
				</h1>
				<h1 class="text-[#4C4F69] dark:text-[#CDD5F4] text-4xl">
					{{ message }}
				</h1>
			</div>
		</div>
	</NuxtLayout>
</template>
