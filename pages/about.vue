<script setup lang="ts">
const { t } = useI18n()
useHead({
	title: t('navbar.about'),
})
defineOgImage({
	title: `Gabriel Rosa | ${t('navbar.about')}`,
	component: 'Og',
})
useSeoMeta({
	description: t('about.title'),
})
</script>

<template>
	<Section>
		<Card class="text-center">
			<img class="w-24 h-24 rounded-full mx-auto" src="/images/gsr.png" :alt="t('about.img-alt')">
			<p class="dark:text-white m-4">
				{{ t('about.title') }}
			</p>
			<p class="dark:text-white font-bold m-4">
				{{ t('about.experience-title') }}
			</p>
			<p
				v-for="experience in t('about.experience').split(/\. /)"
				:key="experience"
				class="dark:text-white m-4 text-start"
			>
				{{ experience }}
			</p>
			<p class="dark:text-white font-bold m-4">
				{{ t('about.learner-title') }}
			</p>
			<p class="dark:text-white m-4 text-start">
				{{ t('about.learner') }}
			</p>
		</Card>
	</Section>
</template>
