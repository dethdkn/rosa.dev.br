<script setup lang="ts">
const { t } = useI18n()
useHead({
	title: t('navbar.experience'),
})
defineOgImage({
	title: `Gabriel Rosa | ${t('navbar.experience')}`,
	component: 'Og',
})
useSeoMeta({
	description:
		'Explore my academic and professional journey, showcasing my accomplishments, research, and career milestones, demonstrating the value I bring to your endeavors.',
})

const hiddenStudy = ref(true)
const hiddenNotebook = ref(true)
</script>

<template>
	<Section>
		<Card class="md:flex">
			<div class="mr-6 cursor-help" @mouseover="hiddenStudy = false" @mouseleave="hiddenStudy = true">
				<Progress
					:title="t('experience.academic')"
					:location="t('experience.unicarioca')"
					:year="t('experience.2019')"
					:subtitle="t('experience.cs')"
				/>
			</div>
			<div class="mt-8 md:mt-0 cursor-help" @mouseover="hiddenNotebook = false" @mouseleave="hiddenNotebook = true">
				<Progress
					:title="t('experience.professional')"
					:location="t('experience.cbpf')"
					:year="t('experience.2019-present')"
					:subtitle="t('experience.full-stack')"
				/>
			</div>
		</Card>
		<img src="/study.gif" alt="studying gif" class="absolute w-64 right-0 bottom-0 transform -scale-x-100" :class="{ hidden: hiddenStudy }">
		<img src="/notebook.gif" alt="notebook tapping gif" class="absolute right-0 top-0" :class="{ hidden: hiddenNotebook }">
	</Section>
</template>
