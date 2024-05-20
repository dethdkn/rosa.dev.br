<script setup lang='ts'>
import { SpeedInsights } from '@vercel/speed-insights/nuxt'
</script>

<template>
  <SpeedInsights />
  <NuxtLoadingIndicator color="#F28AA9" />
  <Nav />
  <main class="min-h-[calc(100vh-312px)] bg-[#EFF1F5] dark:bg-[#1E1E2E]">
    <slot />
  </main>
  <Footer />
</template>
