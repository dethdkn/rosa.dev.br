<script setup lang='ts'>
import { emojiBlasts } from 'emoji-blast'

const { t } = useI18n()

useHead({ title: t('home.title') })

useSeoMeta({ description: t('home.subtitle') })

defineOgImageComponent('Home', {
  title: t('home.title'),
  im: t('home.simple_im'),
  aka: t('home.aka'),
  subtitle: t('home.subtitle'),
})

function pinkBlast() {
  const { cancel } = emojiBlasts({ interval: 40, emojis: ['🌹', '🌸', '💗', '💓', '💖', '💕', '💞', '💝', '👚', '👛', '🦩', '💘', '🩷', '🌷', '🌺', '🎀', '👙', '🩰', '🍧', '🛼'] })
  setTimeout(cancel, 3000)
}
</script>

<template>
  <div class="flex flex-wrap items-center justify-center space-x-6 pt-16">
    <NuxtImg src="/gsr.webp" alt="Gabriel Rosa" class="size-48 rounded-full border-4 border-[#F28AA9] cursor-pointer" placeholder @click="pinkBlast" />
    <div class="space-y-4 text-center">
      <i18n-t scope="global" keypath="home.im" tag="h1" class="text-4xl text-[#4C4F69] dark:text-[#CDD5F4]">
        <span class="border-b-2 border-[#F28AA9]">Gabriel Rosa</span>
        <span class="border-b-2 border-[#F28AA9]">Deth</span>
      </i18n-t>
      <h2 class="text-[#4C4F69] dark:text-[#CDD5F4]">
        {{ t('home.subtitle') }}
      </h2>
    </div>
  </div>
</template>
