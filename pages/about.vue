<script setup lang="ts">
const {t} = useI18n()
useHead({
	title: `Gabriel Rosa - ${t('navbar.about')}`
})
</script>
<template>
	<Section>
		<Card class="text-center">
			<img class="w-24 h-24 rounded-full mx-auto" src="/gsr.png" :alt="t('about.img-alt')" />
			<p class="dark:text-white m-4" v-html="t('about.currently')"></p>
			<p class="dark:text-white m-4" v-html="t('about.work')"></p>
			<p class="dark:text-white m-4" v-html="t('about.hobby')"></p>
		</Card>
	</Section>
</template>
