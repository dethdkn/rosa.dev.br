<script setup lang="ts">
const { finalizePendingLocaleChange } = useI18n()

async function onBeforeEnter(): Promise<void> {
  await finalizePendingLocaleChange()
}
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLoadingIndicator color="repeating-linear-gradient(to right,#AA3860 0%,#F28AA9 100%)" />
  <NuxtLayout>
    <NuxtPage :transition="{ name: 'page', mode: 'out-in', onBeforeEnter }" />
  </NuxtLayout>
</template>
