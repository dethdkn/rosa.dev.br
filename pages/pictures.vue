<script setup lang="ts">
const { t } = useI18n()
useHead({
	title: t('navbar.pictures'),
})
defineOgImage({
	title: `Gabriel Rosa | ${t('navbar.pictures')}`,
	component: 'Og',
})
useSeoMeta({
	description:
		'Explore my photo gallery 📷 and get to know me through these snapshots 🌟. From candid moments to special occasions, these pictures share my story 📖.',
})

const imgs = ref([
	{
		img: {
			img: '/images/santos_dumont.png',
			alt: 'Super Computador Santos Dumont',
		},
	},
	{
		img: {
			img: '/images/data_center.png',
			alt: 'Rio Science Data Center',
		},
	},
	{
		img: {
			img: '/images/cbpf_confraternizacao.png',
			alt: 'Confraternização do CBPF',
		},
	},
	{
		img: {
			img: '/images/cbpf_cotec.png',
			alt: 'COTEC - CBPF',
		},
	},
	{
		img: {
			img: '/images/reuniao.png',
			alt: 'Reunião - CBPF',
		},
	},
	{
		img: {
			img: '/images/almoco_sistemas.png',
			alt: 'Almoço Equipe de Sistemas',
		},
	},
	{
		img: {
			img: '/images/studio.png',
			alt: 'Estúdio',
		},
	},
	{
		img: {
			img: '/images/cleaning_server.png',
			alt: 'Limpando Servidor',
		},
	},
])
</script>

<template>
	<Section>
		<Grid :contents="imgs" />
	</Section>
</template>
