<script setup lang='ts'>
const { t } = useI18n()

useHead({ title: t('certificates.title') })

useSeoMeta({ description: t('certificates.description') })

defineOgImageComponent('Techs', { title: t('certificates.title') })
</script>

<template>
  <div class="mx-auto max-w-7xl space-y-10 px-20 py-5 text-center sm:text-start lg:space-y-20">
    <h1 class="inline border-b-2 border-[#F28AA9] text-4xl text-[#4C4F69] dark:text-[#CDD5F4]">
      {{ t('certificates.title') }}
    </h1>
    <List v-for="certificate in certificates" :key="certificate.href" :title="certificate.title" :badges="certificate.badges" :urls="[{ url: certificate.href, icon: 'iconoir:doc-star-in', external: false, aria: 'PDF' }]" :description="`${certificate.subtitle} • ${certificate.concluded}`" />
  </div>
</template>
