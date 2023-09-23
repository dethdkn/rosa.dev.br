<script setup lang="ts">
const {t} = useI18n()
useHead({
	title: `Gabriel Rosa - ${t('navbar.apps')}`
})

const apps = ref([
	{
		img: {
			href: 'https://karinebarbosa.com',
			img: '/karinebarbosa.png',
			alt: 'Karine Barbosa WebSite',
			title: 'Karine Barbosa'
		}
	},
	{
		img: {
			href: 'https://www.npmjs.com/package/ldap-sha512',
			img: '/ldap-sha512.png',
			alt: 'Ldap-Sha512',
			title: 'Ldap-Sha512'
		}
	},
	{
		img: {
			href: 'https://youtu.be/Zq7PwGxcsLg',
			img: '/idcbpf.jpg',
			alt: 'IDCBPF - 👥 Ldap account management',
			title: 'IDCBPF'
		}
	}
])
</script>
<template>
	<Section>
		<Grid :contents="apps" />
	</Section>
</template>
