<script setup lang="ts">
const {t} = useI18n()
useHead({
	title: `Gabriel Rosa - ${t('navbar.pictures')}`
})
const imgs = ref([
	{
		img: {
			img: '/santos_dumont.png',
			alt: 'Super Computador Santos Dumont'
		}
	},
	{
		img: {
			img: '/data_center.png',
			alt: 'Rio Science Data Center'
		}
	},
	{
		img: {
			img: '/cbpf_confraternizacao.png',
			alt: 'Confraternização do CBPF'
		}
	},
	{
		img: {
			img: '/cbpf_cotec.png',
			alt: 'COTEC - CBPF'
		}
	},
	{
		img: {
			img: '/reuniao.png',
			alt: 'Reunião - CBPF'
		}
	}
])
</script>
<template>
	<Section>
		<Grid :contents="imgs" />
	</Section>
</template>
