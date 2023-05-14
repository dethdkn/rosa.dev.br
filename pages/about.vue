<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
useHead({
    title: 'Gabriel Rosa - '+t('navbar.about')
})
</script>
<template>
    <section class="min-h-[calc(100vh-2rem)] flex items-center justify-center relative">
        <div class="bg-gray-200/80 dark:bg-slate-800 rounded-xl m-5 lg:mx-60 p-4 text-center">
            <img class="w-24 h-24 rounded-full mx-auto" src="../assets/gsr.png" :alt="t('about.img-alt')">
            <p class="dark:text-white m-4" v-html="t('about.currently')"></p>
            <p class="dark:text-white m-4" v-html="t('about.work')"></p>
            <p class="dark:text-white m-4" v-html="t('about.hobby')"></p>
        </div>
    </section>
</template>