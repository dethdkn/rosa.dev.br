<script setup lang='ts'>
const { t } = useI18n()

useHead({ title: t('posts.customizable_multiboot_pendrive.title') })

useSeoMeta({ description: t('posts.customizable_multiboot_pendrive.description') })

defineOgImageComponent('Simple', { title: t('posts.customizable_multiboot_pendrive.title') })
</script>

<template>
  <div class="mx-auto max-w-7xl">
    <div class="space-y-10 px-20 py-5 text-center sm:text-start lg:space-y-20">
      <h1 class="border-candy text-obsidian dark:text-snow inline border-b-2 text-4xl">
        {{ t('posts.customizable_multiboot_pendrive.title') }}
      </h1>
    </div>
    <div class="text-obsidian dark:text-snow mt-10 space-y-5 px-10">
      <!-- eslint-disable-next-line vue/no-bare-strings-in-template -->
      <iframe class="m-auto h-60 w-full rounded-lg sm:h-80 md:h-100 lg:h-120 xl:h-160" src="https://www.youtube.com/embed/nunxSwZ2xfA" title="Pendrive Multiboot Personalizável (pra mostrar pros seus amiguinhos do TI e não ensinar a fazer)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
      <p>{{ t('posts.customizable_multiboot_pendrive.paragraph1') }}</p>
      <div>
        <!-- eslint-disable-next-line vue/no-bare-strings-in-template -->
        <NuxtLink to="https://www.ventoy.net/en/download.html" external target="_blank" class="text-obsidian hover:border-candy hover:text-candy dark:text-snow hover:dark:border-candy dark:hover:text-candy inline-block border-b-2">
          Download Ventoy
        </NuxtLink>
      </div>
      <div>
        <!-- eslint-disable-next-line vue/no-bare-strings-in-template -->
        <NuxtLink to="https://www.ventoy.net/en/plugin_theme.html" external target="_blank" class="text-obsidian hover:border-candy hover:text-candy dark:text-snow hover:dark:border-candy dark:hover:text-candy inline-block border-b-2">
          Ventoy Theme Plugin
        </NuxtLink>
      </div>
      <div>
        <!-- eslint-disable-next-line vue/no-bare-strings-in-template -->
        <NuxtLink to="https://rosa.dev.br/downloads/lavenza.zip" target="_blank" class="text-obsidian hover:border-candy hover:text-candy dark:text-snow hover:dark:border-candy dark:hover:text-candy inline-block border-b-2">
          Lavenza Theme
        </NuxtLink>
      </div>
      <p>{{ t('posts.final_paragraph') }}</p>
    </div>
  </div>
</template>
