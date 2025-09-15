<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/nuxt'

const { finalizePendingLocaleChange } = useI18n()

async function onBeforeEnter(){
  await finalizePendingLocaleChange()
}
</script>

<template>
  <SpeedInsights />
  <NuxtRouteAnnouncer />
  <NuxtLoadingIndicator color="repeating-linear-gradient(to right,#AA3860 0%,#F28AA9 100%)" />
  <NuxtLayout>
    <NuxtPage :transition="{ name: 'page', mode: 'out-in', onBeforeEnter }" />
  </NuxtLayout>
</template>
