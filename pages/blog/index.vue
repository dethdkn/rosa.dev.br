<script setup lang='ts'>
const { t } = useI18n()

useHead({ title: t('blog.title') })

useSeoMeta({ description: t('blog.description') })

defineOgImageComponent('Techs', { title: t('blog.title') })
</script>

<template>
  <div class="mx-auto max-w-7xl space-y-10 px-20 py-5 text-center sm:text-start lg:space-y-20">
    <h1 class="inline border-b-2 border-[#F28AA9] text-4xl text-[#4C4F69] dark:text-[#CDD5F4]">
      {{ t('blog.title') }}
    </h1>
    <List v-for="post in posts" :key="post.titleKey" :title-key="post.titleKey" :badges="post.badges" :urls="post.urls" :description-key="post.descriptionKey" :locale="post.locale" :self="post.self" />
  </div>
</template>
