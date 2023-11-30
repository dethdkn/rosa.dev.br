<script setup lang='ts'>
const { t } = useI18n()

useHead({
	title: t('blog.title'),
})

useSeoMeta({
	description: t('blog.dev'),
})

defineOgImage({
	component: 'Simple',
	title: t('blog.title'),
})
</script>

<template>
	<div class="min-h-[calc(100vh-273px)] flex items-center justify-center">
		<p class="text-[#4C4F69] dark:text-[#CDD5F4] text-4xl border-b-2 border-[#F28AA9] inline">
			{{ t('blog.dev') }}
		</p>
	</div>
</template>
