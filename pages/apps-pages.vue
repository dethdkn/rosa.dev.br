<script setup lang="ts">
const {t} = useI18n()
useHead({
	title: t('navbar.apps')
})
defineOgImage({
	title: `Gabriel Rosa | ${t('navbar.apps')}`,
	component: 'Og'
})
useSeoMeta({
	description:
		'Explore my app and web page showcase, and see the world of possibilities I have crafted.'
})

const apps = ref([
	{
		img: {
			href: 'https://karinebarbosa.com',
			img: '/images/karinebarbosa.png',
			alt: 'Karine Barbosa WebSite',
			title: 'Karine Barbosa'
		}
	},
	{
		img: {
			href: 'https://www.npmjs.com/package/ldap-sha512',
			img: '/images/ldap-sha512.png',
			alt: 'Ldap-Sha512',
			title: 'Ldap-Sha512'
		}
	},
	{
		img: {
			href: 'https://youtu.be/Zq7PwGxcsLg',
			img: '/images/idcbpf.jpg',
			alt: 'IDCBPF - 👥 Ldap account management',
			title: 'IDCBPF'
		}
	},
	{
		img: {
			href: 'https://auditorios.cbpf.br',
			img: '/images/auditorios.png',
			alt: 'Agenda de Auditórios - CBPF',
			title: 'Agenda de Auditórios'
		}
	}
])
</script>
<template>
	<Section>
		<Grid :contents="apps" />
	</Section>
</template>
