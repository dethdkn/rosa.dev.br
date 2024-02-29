<script setup lang='ts'>
const error = useError()
const localePath = useLocalePath()

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
	<main class="h-screen bg-[#EFF1F5] dark:bg-[#1E1E2E]">
		<div class="h-screen flex items-center justify-center">
			<div class="text-center space-y-10">
				<h1 class="text-[#4C4F69] dark:text-[#CDD5F4] text-8xl border-b-2 border-[#F28AA9] inline">
					{{ statusCode }}
				</h1>
				<h1 class="text-[#4C4F69] dark:text-[#CDD5F4] text-xl">
					{{ message }}
				</h1>
				<button class="font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm text-white bg-[#F28AA9] hover:bg-[#e7688e]" @click="clearError({ redirect: localePath('/') })">
					Home
				</button>
			</div>
		</div>
	</main>
</template>
