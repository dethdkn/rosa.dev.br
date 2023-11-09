<script setup lang="ts">
const { t } = useI18n()
useHead({
	title: t('navbar.downloads'),
})
defineOgImage({
	title: `Gabriel Rosa | ${t('navbar.downloads')}`,
	component: 'Og',
})
useSeoMeta({
	description:
		'Get ready to dive into a bunch of cool downloads. No spoilers here, so just start grabbing them now! 🚀📥',
})

const downloads = ref([
	{
		img: {
			href: '/downloads/lavenza.zip',
			img: '/images/lavenza.jpg',
			alt: 'Ventoy Lavenza Theme',
			title: 'Lavenza Theme - Ventoy',
		},
	},
])
</script>

<template>
	<Section>
		<Grid :contents="downloads" />
	</Section>
</template>
