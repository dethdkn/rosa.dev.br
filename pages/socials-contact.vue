<script setup lang="ts">
const {t} = useI18n()
useHead({
	title: `Gabriel Rosa - ${t('navbar.socials')}`
})

const medias = ref([
	{href: 'mailto:gabriel@rosa.dev.br', icon: 'i-heroicons-envelope', text: 'gabriel@rosa.dev.br'},
	{href: 'https://github.com/dethdkn', icon: 'bxl:github', text: 'dethdkn'},
	{
		href: 'https://www.linkedin.com/in/gabrielsdrosa',
		icon: 'bxl:linkedin-square',
		text: '/in/gabrielsdrosa'
	},

	{
		href: 'https://www.youtube.com/@gabrielsdrosa',
		icon: 'bxl:youtube',
		text: '@gabrielsdrosa'
	},
	{href: 'https://www.behance.net/dethdkn', icon: 'bxl:behance', text: 'dethdkn'},
	{
		href: 'https://www.instagram.com/gabriel.sdrosa',
		icon: 'bxl:instagram',
		text: 'gabriel.sdrosa'
	}
])
</script>
<template>
	<Section>
		<Card>
			<Social v-for="media in medias" :href="media.href" :icon="media.icon" :text="media.text" />
		</Card>
	</Section>
</template>
