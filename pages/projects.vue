<script setup lang='ts'>
const { t } = useI18n()

useHead({
	title: t('projects.title'),
})

useSeoMeta({
	description: t('projects.description'),
})

defineOgImageComponent('Techs', {
	title: t('projects.title'),
})
</script>

<template>
	<div class="max-w-7xl mx-auto px-20 py-5 space-y-10 lg:space-y-20 text-center sm:text-start">
		<h1 class="text-[#4C4F69] dark:text-[#CDD5F4] text-4xl border-b-2 border-[#F28AA9] inline">
			{{ t('projects.title') }}
		</h1>
		<List v-for="project in projects" :key="project.title" :title="project.title" :badges="project.badges" :urls="project.urls" :description-key="project.descriptionKey" :locale="project.locale" :self="project.self" />
	</div>
</template>
