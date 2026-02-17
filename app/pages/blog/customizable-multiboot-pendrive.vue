<script setup lang="ts">
  const { t } = useI18n()
  const { proxy } = useScriptUmamiAnalytics()

  useHead({ title: t('posts.customizable_multiboot_pendrive.title') })

  useSeoMeta({ description: t('posts.customizable_multiboot_pendrive.description') })

  defineOgImageComponent('Simple', { title: t('posts.customizable_multiboot_pendrive.title') })

  function youtubePlay(event: { data: number }): void {
    if (event.data === 1) {
      proxy.track('play video', { video: 'customizable_multiboot' })
    }
  }
</script>

<template>
  <div class="mx-auto max-w-7xl">
    <div class="space-y-10 px-20 py-5 text-center sm:text-start lg:space-y-20">
      <h1 class="inline border-b-2 border-candy text-4xl text-obsidian dark:text-snow">
        {{ t('posts.customizable_multiboot_pendrive.title') }}
      </h1>
    </div>
    <div class="mt-10 space-y-5 px-10 text-obsidian dark:text-snow">
      <ScriptYouTubePlayer video-id="nunxSwZ2xfA" @state-change="youtubePlay" />
      <p>{{ t('posts.customizable_multiboot_pendrive.paragraph1') }}</p>
      <div>
        <NuxtLink
          to="https://www.ventoy.net/en/download.html"
          external
          target="_blank"
          class="inline-block border-b-2 text-obsidian hover:border-candy hover:text-candy dark:text-snow hover:dark:border-candy dark:hover:text-candy">
          Download Ventoy
        </NuxtLink>
      </div>
      <div>
        <NuxtLink
          to="https://www.ventoy.net/en/plugin_theme.html"
          external
          target="_blank"
          class="inline-block border-b-2 text-obsidian hover:border-candy hover:text-candy dark:text-snow hover:dark:border-candy dark:hover:text-candy">
          Ventoy Theme Plugin
        </NuxtLink>
      </div>
      <div>
        <NuxtLink
          to="https://rosa.dev.br/downloads/lavenza.zip"
          target="_blank"
          class="inline-block border-b-2 text-obsidian hover:border-candy hover:text-candy dark:text-snow hover:dark:border-candy dark:hover:text-candy">
          Lavenza Theme
        </NuxtLink>
      </div>
      <p>{{ t('posts.final_paragraph') }}</p>
    </div>
  </div>
</template>
