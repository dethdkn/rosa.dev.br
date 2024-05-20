<script setup lang='ts'>
const { t } = useI18n()

useHead({ title: t('posts.customizable_multiboot_pendrive.title') })

useSeoMeta({ description: t('posts.customizable_multiboot_pendrive.description') })

defineOgImageComponent('Simple', { title: t('posts.customizable_multiboot_pendrive.title') })
</script>

<template>
  <div class="mx-auto max-w-7xl">
    <div class="space-y-10 px-20 py-5 text-center sm:text-start lg:space-y-20">
      <h1 class="inline border-b-2 border-[#F28AA9] text-4xl text-[#4C4F69] dark:text-[#CDD5F4]">
        {{ t('posts.customizable_multiboot_pendrive.title') }}
      </h1>
    </div>
    <div class="mt-10 space-y-5 px-10 text-[#4C4F69] dark:text-[#CDD5F4]">
      <iframe class="m-auto h-60 w-full rounded-lg sm:h-80 md:h-[25rem] lg:h-[30rem] xl:h-[40rem]" src="https://www.youtube.com/embed/nunxSwZ2xfA" title="Pendrive Multiboot Personalizável (pra mostrar pros seus amiguinhos do TI e não ensinar a fazer)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
      <p>{{ t('posts.customizable_multiboot_pendrive.paragraph1') }}</p>
      <div>
        <NuxtLink to="https://www.ventoy.net/en/download.html" external target="_blank" class="inline-block border-b-2 text-[#4C4F69] hover:border-[#F28AA9] hover:text-[#F28AA9] dark:text-[#CDD5F4] hover:dark:border-[#F28AA9] dark:hover:text-[#F28AA9]">
          Download Ventoy
        </NuxtLink>
      </div>
      <div>
        <NuxtLink to="https://www.ventoy.net/en/plugin_theme.html" external target="_blank" class="inline-block border-b-2 text-[#4C4F69] hover:border-[#F28AA9] hover:text-[#F28AA9] dark:text-[#CDD5F4] hover:dark:border-[#F28AA9] dark:hover:text-[#F28AA9]">
          Ventoy Theme Plugin
        </NuxtLink>
      </div>
      <div>
        <NuxtLink to="https://rosa.dev.br/downloads/lavenza.zip" target="_blank" class="inline-block border-b-2 text-[#4C4F69] hover:border-[#F28AA9] hover:text-[#F28AA9] dark:text-[#CDD5F4] hover:dark:border-[#F28AA9] dark:hover:text-[#F28AA9]">
          Lavenza Theme
        </NuxtLink>
      </div>
      <p>{{ t('posts.final_paragraph') }}</p>
    </div>
  </div>
</template>
