<script setup lang="ts">
const { t, locale } = useI18n()

useHead({ title: t('projects.title') })

useSeoMeta({ description: t('projects.description') })

defineOgImageComponent('Techs', { title: t('projects.title') })

const { data: projects } = await useFetch('/api/projects', { default: () => [] as Projects[], watch: [locale] })
</script>

<template>
  <div class="mx-auto max-w-7xl space-y-10 px-20 py-5 text-center sm:text-start lg:space-y-20">
    <h1 class="border-candy text-obsidian dark:text-snow inline border-b-2 text-4xl">
      {{ t('projects.title') }}
    </h1>
    <List v-for="{title, badges, urls, description} in projects" :key="title" :title :badges :urls :description="t(description)" data-aos="fade-right" />
  </div>
</template>
