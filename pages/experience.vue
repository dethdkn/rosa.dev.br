<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
useHead({
    title: `Gabriel Rosa - ${t('navbar.experience')}`
})
</script>
<template>
    <section class="min-h-[calc(100vh-2rem)] flex items-center justify-center relative">
        <div class="bg-gray-200/80 dark:bg-slate-800 rounded-xl m-5 lg:mx-60 p-4 md:flex">
            <div class="mr-6">
                <h3 class="text-xl font-bold mb-3 dark:text-white">{{ t('experience.academic') }}</h3>
                <div class="pl-3 pt-5 border-l-2 border-gray-700 dark:border-white relative">
                    <h4 class="text-lg font-semibold text-gray-700 mb-2 tracking-wider dark:text-white">{{ t('experience.unicarioca') }}</h4>
                    <h5 class="inline-block bg-sky-500 dark:bg-sky-900 text-white font-semibold py-1 px-4 mb-2 rounded-lg">{{ t('experience.2019') }}</h5>
                    <p class="dark:text-white">{{ t('experience.cs') }}</p>
                    <div class="absolute left-0 top-[2.19rem] bg-sky-500 dark:bg-sky-900 border-2 border-gray-700 dark:border-white rounded-full w-4 h-4 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
            </div>
            <div class="mt-8 md:mt-0">
                <h3 class="text-xl font-bold mb-3 dark:text-white">{{ t('experience.professional') }}</h3>
                <div class="pl-3 pt-5 border-l-2 border-gray-700 dark:border-white relative">
                    <h4 class="text-lg font-semibold text-gray-700 mb-2 tracking-wider dark:text-white">{{ t('experience.cbpf') }}</h4>
                    <h5 class="inline-block bg-sky-500 dark:bg-sky-900 text-white font-semibold py-1 px-4 mb-2 rounded-lg">{{ t('experience.2019-present') }}</h5>
                    <p class="dark:text-white">{{ t('experience.full-stack') }}</p>
                    <div class="absolute left-0 top-[2.19rem] bg-sky-500 dark:bg-sky-900 border-2 border-gray-700 dark:border-white rounded-full w-4 h-4 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
            </div>
        </div>
    </section>
</template>