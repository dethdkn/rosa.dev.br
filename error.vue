<script setup lang="ts">
const error = defineProps(['error'])
useHead({
    title: 'Gabriel Rosa - '+ error.error.statusCode
})
</script>
<template>
    <NuxtLayout>
        <section class="min-h-[calc(100vh-2rem)] flex items-center justify-center relative">
            <div class="bg-gray-200/80 dark:bg-slate-800 rounded-xl m-5 lg:mx-60 p-4 text-center">
                <h2 class="m-4 text-red-700 text-5xl">{{ error.error.statusCode }}</h2>
                <p class="dark:text-white m-4">{{ error.error.message }}</p>
            </div>
        </section>
    </NuxtLayout>
</template>