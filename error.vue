<script setup lang="ts">
const error = defineProps(['error'])
const {statusCode, message} = error.error
useHead({
	title: `${statusCode}`
})
</script>
<template>
	<NuxtLayout>
		<Section>
			<Card class="text-center">
				<h2 class="m-4 text-red-700 text-5xl">{{ statusCode }}</h2>
				<p class="dark:text-white m-4">{{ message }}</p>
			</Card>
		</Section>
	</NuxtLayout>
</template>
