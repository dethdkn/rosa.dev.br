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

const hidden = ref(true)
</script>

<template>
	<Section>
		<Card class="text-center">
			<img class="w-24 h-24 rounded-full mx-auto cursor-help" src="/images/gsr.png" :alt="t('about.img-alt')" @mouseover="hidden = false" @mouseleave="hidden = true">
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
		<img src="/dance.gif" alt="dance boy gif" class="absolute right-0 bottom-0" :class="{ hidden }">
	</Section>
</template>
