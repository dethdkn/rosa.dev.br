<script setup lang='ts'>
const { t } = useI18n()

useHead({ title: t('home.title') })

useSeoMeta({ description: t('home.subtitle') })

defineOgImageComponent('Home', { title: t('home.title'), im: t('home.simple_im'), aka: t('home.aka'), subtitle: t('home.subtitle') })

function pinkBlast(){
  const { cancel } = emojiBlasts({ interval: 40, emojis: ['🌹', '🌸', '💗', '💓', '💖', '💕', '💞', '💝', '🦩', '💘', '🩷', '🌷', '🌺'] })
  setTimeout(cancel, 3000)
}

onKeyStroke(' ', () => pinkBlast())
</script>

<template>
  <div class="flex flex-wrap items-center justify-center space-x-6 pt-16">
    <div class="group relative size-48 cursor-pointer overflow-hidden rounded-full border-4 border-candy" role="button" @click="pinkBlast" @keydown.enter="pinkBlast">
      <NuxtImg src="/gsr.webp" alt="Gabriel Rosa" class="absolute left-0 top-0 size-full rounded-full object-cover" placeholder />
      <NuxtImg src="/deth.webp" alt="Deth" class="absolute left-0 top-10 size-full -rotate-12 rounded-full object-cover opacity-0 transition-all duration-500 group-hover:top-0 group-hover:rotate-0 group-hover:opacity-100" placeholder />
    </div>
    <div class="space-y-2 text-center">
      <i18n-t scope="global" keypath="home.im" tag="h1" class="mb-2 text-4xl text-obsidian dark:text-snow">
        <template #name>
          <!-- eslint-disable-next-line vue/no-bare-strings-in-template -->
          <span class="border-b-2 border-candy">Gabriel Rosa</span>
        </template>
        <template #nickname>
          <!-- eslint-disable-next-line vue/no-bare-strings-in-template -->
          <span class="border-b-2 border-candy">Deth</span>
        </template>
      </i18n-t>
      <h2 class="text-obsidian dark:text-snow">
        {{ t('home.subtitle') }}
      </h2>
    </div>
  </div>
</template>
