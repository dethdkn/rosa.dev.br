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

<!-- eslint-disable-next-line vue/no-restricted-block vue/enforce-style-attribute -->
<style>
* {
    font-family: 'Montserrat Alternates', sans-serif;
    transition-property: background-color, border-color;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 500ms;
}

*::selection {
    background: #F28AA9;
    color: #CDD5F4;
}

html, body {
    height: 100%;
    margin: 0;
    padding: 0;
}

body {
    background-color: #EFF1F5;
}

.dark body {
    background-color: #1E1E2E;
}

html.dark .shiki, html.dark .shiki span {
    color: var(--shiki-dark) !important;
    background-color: var(--shiki-dark-bg) !important;
    font-style: var(--shiki-dark-font-style) !important;
    font-weight: var(--shiki-dark-font-weight) !important;
    text-decoration: var(--shiki-dark-text-decoration) !important;
}

*::-webkit-scrollbar-button, .dark *::-webkit-scrollbar-button {
    display: none;
}

*::-webkit-scrollbar, .dark *::-webkit-scrollbar {
    width: 16px;
}

*::-webkit-scrollbar-thumb, .dark *::-webkit-scrollbar-thumb {
    border-radius: 16px;
}

body::-webkit-scrollbar {
    background-color: #EFF1F5;
}

body::-webkit-scrollbar-thumb {
    background-color: #babac0;
    border: 4px solid #EFF1F5;
}

body::-webkit-scrollbar-track {
    background-color: #EFF1F5;
}

.dark body::-webkit-scrollbar {
    background-color: #1E1E2E;
}

.dark body::-webkit-scrollbar-thumb {
    background-color: #718096;
    border-color: #1E1E2E;
}

.dark body::-webkit-scrollbar-track {
    background-color: #1E1E2E;
}

div::-webkit-scrollbar {
    background-color: #FAFAFA;
}

div::-webkit-scrollbar-thumb {
    background-color: #babac0;
    border: 4px solid #FAFAFA;
}

div::-webkit-scrollbar-track {
    background-color: #FAFAFA;
}

.dark div::-webkit-scrollbar {
    background-color: #1A1B26;
}

.dark div::-webkit-scrollbar-thumb {
    background-color: #718096;
    border-color: #1A1B26;
}

.dark div::-webkit-scrollbar-track {
    background-color: #1A1B26;
}

.page-enter-active, .page-leave-active {
  transition: all 0.4s;
}

.page-enter-from, .page-leave-to {
  opacity: 0;
  filter: blur(0.1rem);
}
</style>
