<script setup lang="ts">
const error = defineProps(['error'])
const { statusCode, message } = error.error
useHead({
	title: `${statusCode}`,
})
const { t } = useI18n()
</script>

<template>
	<NuxtLayout>
		<Section>
			<Card class="text-center">
				<h2 class="m-4 text-red-700 text-5xl">
					{{ statusCode }}
				</h2>
				<p class="dark:text-white m-4">
					{{ message }}
				</p>
				<button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" @click="navigateTo('/')">
					{{ t('error.back-start') }}
				</button>
			</Card>
		</Section>
	</NuxtLayout>
</template>
