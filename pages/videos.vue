<script setup lang="ts">
const {t} = useI18n()
useHead({
	title: `Gabriel Rosa - ${t('navbar.videos')}`
})

const videos = ref([
	{
		video: {
			url: 'https://www.youtube.com/embed/YGX3None2y8',
			title: 'Instalando o Arch Linux (o guia mais fácil do youtube)'
		}
	},
	{
		video: {
			url: 'https://www.youtube.com/embed/nunxSwZ2xfA',
			title:
				'Pendrive Multiboot Personalizável (pra mostrar pros seus amiguinhos do TI e não ensinar a fazer)'
		}
	}
])
</script>
<template>
	<Section>
		<Grid :contents="videos" />
	</Section>
</template>
