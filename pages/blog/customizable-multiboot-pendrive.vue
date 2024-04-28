<script setup lang='ts'>
const { t } = useI18n()

useHead({ title: t('posts.customizable_multiboot_pendrive.title') })

useSeoMeta({ description: t('posts.customizable_multiboot_pendrive.description') })

defineOgImageComponent('Simple', { title: t('posts.customizable_multiboot_pendrive.title') })
</script>

<template>
	<div class="max-w-7xl mx-auto">
		<div class="px-20 py-5 space-y-10 text-center lg:space-y-20 sm:text-start">
			<h1 class="text-[#4C4F69] dark:text-[#CDD5F4] text-4xl border-b-2 border-[#F28AA9] inline">
				{{ t('posts.customizable_multiboot_pendrive.title') }}
			</h1>
		</div>
		<div class="text-[#4C4F69] dark:text-[#CDD5F4] mt-10 px-10 space-y-5">
			<iframe class="m-auto w-full h-[15rem] sm:h-[20rem] md:h-[25rem] lg:h-[30rem] xl:h-[40rem] rounded-lg" src="https://www.youtube.com/embed/nunxSwZ2xfA" title="Pendrive Multiboot Personalizável (pra mostrar pros seus amiguinhos do TI e não ensinar a fazer)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
			<p>{{ t('posts.customizable_multiboot_pendrive.paragraph1') }}</p>
			<div>
				<NuxtLink to="https://www.ventoy.net/en/download.html" external target="_blank" class="text-[#4C4F69] hover:text-[#F28AA9] dark:text-[#CDD5F4] dark:hover:text-[#F28AA9] hover:border-[#F28AA9] hover:dark:border-[#F28AA9] border-b-2 inline-block">
					Download Ventoy
				</NuxtLink>
			</div>
			<div>
				<NuxtLink to="https://www.ventoy.net/en/plugin_theme.html" external target="_blank" class="text-[#4C4F69] hover:text-[#F28AA9] dark:text-[#CDD5F4] dark:hover:text-[#F28AA9] hover:border-[#F28AA9] hover:dark:border-[#F28AA9] border-b-2 inline-block">
					Ventoy Theme Plugin
				</NuxtLink>
			</div>
			<div>
				<NuxtLink to="https://rosa.dev.br/downloads/lavenza.zip" target="_blank" class="text-[#4C4F69] hover:text-[#F28AA9] dark:text-[#CDD5F4] dark:hover:text-[#F28AA9] hover:border-[#F28AA9] hover:dark:border-[#F28AA9] border-b-2 inline-block">
					Lavenza Theme
				</NuxtLink>
			</div>
			<p>{{ t('posts.final_paragraph') }}</p>
		</div>
	</div>
</template>
