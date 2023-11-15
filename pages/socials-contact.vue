<script setup lang="ts">
const { t } = useI18n()
useHead({
	title: t('navbar.socials'),
})
defineOgImage({
	title: `Gabriel Rosa | ${t('navbar.socials')}`,
	component: 'Og',
})
useSeoMeta({
	description:
		'Discover my social media profiles - Github, Linkedin, YouTube, and more. Connect with me and explore my digital world.',
})

const medias = ref([
	{ href: 'mailto:gabriel@rosa.dev.br', icon: 'line-md:email-opened', text: 'gabriel@rosa.dev.br' },
	{ href: 'https://github.com/dethdkn', icon: 'line-md:github', text: 'dethdkn' },
	{
		href: 'https://www.linkedin.com/in/gabrielsdrosa',
		icon: 'line-md:linkedin',
		text: '/in/gabrielsdrosa',
	},

	{
		href: 'https://www.youtube.com/@gabrielsdrosa',
		icon: 'line-md:youtube-filled',
		text: '@gabrielsdrosa',
	},
	{ href: 'https://www.behance.net/dethdkn', icon: 'bxl:behance', text: 'dethdkn' },
	{
		href: 'https://www.instagram.com/gabriel.sdrosa',
		icon: 'line-md:instagram',
		text: 'gabriel.sdrosa',
	},
])
</script>

<template>
	<Section>
		<Card>
			<Social v-for="media in medias" :key="media.href" :href="media.href" :icon="media.icon" :text="media.text" />
		</Card>
	</Section>
</template>
