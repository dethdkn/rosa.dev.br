<script setup lang='ts'>
const error = useError()

const statusCode = ref(500)
const message = ref('Something went wrong...')

if (error.value && 'statusCode' in error.value && 'message' in error.value) {
	statusCode.value = error.value.statusCode
	message.value = error.value.message
}

useHead({
	title: `${statusCode.value}`,
})
</script>

<template>
	<NuxtLayout>
		<div class="min-h-[calc(100vh-305px)] flex items-center justify-center">
			<div class="text-center space-y-10">
				<h1 class="text-[#4C4F69] dark:text-[#CDD5F4] text-8xl border-b-2 border-[#F28AA9] inline">
					{{ statusCode }}
				</h1>
				<h1 class="text-[#4C4F69] dark:text-[#CDD5F4] text-xl">
					{{ message }}
				</h1>
			</div>
		</div>
	</NuxtLayout>
</template>
