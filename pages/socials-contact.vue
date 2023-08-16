<script setup lang="ts">
const {t} = useI18n()
useHead({
	title: `Gabriel Rosa - ${t('navbar.socials')}`
})

const medias = ref([
	{href: 'mailto:gabriel@rosa.dev.br', icon: 'envelope', text: 'gabriel@rosa.dev.br'},
	{
		href: 'https://www.linkedin.com/in/gabrielsdrosa',
		icon: ['fab', 'linkedin'],
		text: '/in/gabrielsdrosa'
	},
	{href: 'https://github.com/dethdkn', icon: ['fab', 'github'], text: 'dethdkn'},
	{
		href: 'https://www.youtube.com/@gabrielsdrosa',
		icon: ['fab', 'youtube'],
		text: '@gabrielsdrosa'
	},
	{href: 'https://www.behance.net/dethdkn', icon: ['fab', 'behance'], text: 'dethdkn'},
	{
		href: 'https://www.instagram.com/gabriel.sdrosa',
		icon: ['fab', 'instagram'],
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
