<script setup lang='ts'>
const { t } = useI18n()

useHead({
	title: t('home.title'),
})

useSeoMeta({
	description: `${t('home.im')} Gabriel Rosa ${t('home.aka')} Deth - ${t('home.subtitle')}`,
})

defineOgImageComponent('Home', {
	title: t('home.title'),
	im: t('home.simple_im'),
	aka: t('home.aka'),
	subtitle: t('home.subtitle'),
})
</script>

<template>
	<div class="flex flex-wrap justify-center items-center pt-16 space-x-6">
		<NuxtImg src="/gsr.webp" alt="Gabriel Rosa" class="rounded-full border-4 border-[#F28AA9] w-48 h-48" placeholder preload />
		<div class="space-y-2 text-center">
			<h1 class="text-[#4C4F69] dark:text-[#CDD5F4] text-4xl">
				{{ t('home.im') }} <span class="border-b-2 border-[#F28AA9]">Gabriel Rosa</span> {{ t('home.aka') }} <span class="border-b-2 border-[#F28AA9]">Deth</span>
			</h1>
			<h2 class="text-[#4C4F69] dark:text-[#CDD5F4]">
				{{ t('home.subtitle') }}
			</h2>
		</div>
	</div>
</template>
