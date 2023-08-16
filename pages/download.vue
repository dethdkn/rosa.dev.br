<script setup lang="ts">
const {t} = useI18n()
useHead({
	title: `Gabriel Rosa - ${t('navbar.downloads')}`
})

const downloads = ref([
	{
		img: {
			href: '/downloads/lavenza.zip',
			img: '/lavenza.jpg',
			alt: 'Ventoy Lavenza Theme',
			title: 'Lavenza Theme - Ventoy'
		}
	}
])
</script>
<template>
	<Section>
		<Grid :contents="downloads" />
	</Section>
</template>
