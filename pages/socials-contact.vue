<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
useHead({
    title: `Gabriel Rosa - ${t('navbar.socials')}`
})
</script>
<template>
    <section class="min-h-[calc(100vh-2rem)] flex items-center justify-center relative">
        <div class="bg-gray-200/80 dark:bg-slate-800 rounded-xl m-5 lg:mx-60 p-4">
            <a href="mailto:gabriel@rosa.dev.br" target="_blank" class="block text-gray-900 dark:text-white px-4 py-3 hover:bg-gradient-to-r hover:from-sky-600 hover:to-cyan-400 rounded-2xl">
                <FaIcon icon="envelope" class="transform translate-y-[0.45rem] p-1 bg-blue-400 dark:bg-sky-500 rounded-full"/>
                <span> gabriel@rosa.dev.br</span>
            </a>
            <a href="https://www.linkedin.com/in/gabrielsdrosa" target="_blank" class="block text-gray-900 dark:text-white px-4 py-3 hover:bg-gradient-to-r hover:from-sky-600 hover:to-cyan-400 rounded-2xl">
                <FaIcon :icon="['fab','linkedin']" class="transform translate-y-[0.45rem] p-1 bg-blue-400 dark:bg-sky-500 rounded-full"/>
                <span> /in/gabrielsdrosa</span>
            </a>
            <a href="https://github.com/dethdkn" target="_blank" class="block text-gray-900 dark:text-white px-4 py-3 hover:bg-gradient-to-r hover:from-sky-600 hover:to-cyan-400 rounded-2xl">
                <FaIcon :icon="['fab','github']" class="transform translate-y-[0.45rem] p-1 bg-blue-400 dark:bg-sky-500 rounded-full"/>
                <span> dethdkn</span>
            </a>
            <a href="https://www.youtube.com/@gabrielsdrosa" target="_blank" class="block text-gray-900 dark:text-white px-4 py-3 hover:bg-gradient-to-r hover:from-sky-600 hover:to-cyan-400 rounded-2xl">
                <FaIcon :icon="['fab','youtube']" class="transform translate-y-[0.45rem] p-1 bg-blue-400 dark:bg-sky-500 rounded-full"/>
                <span> @gabrielsdrosa</span>
            </a>
            <a href="https://www.behance.net/dethdkn" target="_blank" class="block text-gray-900 dark:text-white px-4 py-3 hover:bg-gradient-to-r hover:from-sky-600 hover:to-cyan-400 rounded-2xl">
                <FaIcon :icon="['fab','behance']" class="transform translate-y-[0.45rem] p-1 bg-blue-400 dark:bg-sky-500 rounded-full"/>
                <span> dethdkn</span>
            </a>
            <a href="https://www.instagram.com/gabriel.sdrosa/" target="_blank" class="block text-gray-900 dark:text-white px-4 py-3 hover:bg-gradient-to-r hover:from-sky-600 hover:to-cyan-400 rounded-2xl">
                <FaIcon :icon="['fab','instagram']" class="transform translate-y-[0.45rem] p-1 bg-blue-400 dark:bg-sky-500 rounded-full"/>
                <span> gabriel.sdrosa</span>
            </a>
        </div>
    </section>
</template>