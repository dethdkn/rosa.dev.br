<script setup lang='ts'>
const { t } = useI18n()

useHead({
	title: t('certificates.title'),
})

useSeoMeta({
	description: t('certificates.description'),
})

defineOgImageComponent('Techs', {
	title: t('certificates.title'),
})
</script>

<template>
	<div class="px-20 py-5 space-y-10 lg:space-y-20 text-center sm:text-start">
		<p class="text-[#4C4F69] dark:text-[#CDD5F4] text-4xl border-b-2 border-[#F28AA9] inline">
			{{ t('certificates.title') }}
		</p>
		<List v-for="certificate in certificates" :key="certificate.href" :title="certificate.title" :badges="certificate.badges" :urls="[{ url: certificate.href, icon: 'iconoir:doc-star-in', external: false, aria: 'PDF' }]" :description="`${certificate.subtitle} • ${certificate.concluded}`" />
	</div>
</template>
