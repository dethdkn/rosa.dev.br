<script setup lang='ts'>
const { t } = useI18n()

useHead({
	title: t('blog.title'),
})

useSeoMeta({
	description: t('blog.description'),
})

defineOgImage({
	component: 'Techs',
	title: t('blog.title'),
})
</script>

<template>
	<div class="px-20 py-5 space-y-10 lg:space-y-20 text-center sm:text-start">
		<p class="text-[#4C4F69] dark:text-[#CDD5F4] text-4xl border-b-2 border-[#F28AA9] inline">
			{{ t('blog.title') }}
		</p>
		<List v-for="post in posts" :key="post.titleKey" :title-key="post.titleKey" :badges="post.badges" :urls="post.urls" :description-key="post.descriptionKey" :locale="post.locale" :self="post.self" />
	</div>
</template>
