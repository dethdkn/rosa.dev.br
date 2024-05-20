<script setup lang='ts'>
const { title, titleKey, badges, urls, description, descriptionKey, locale, self } = defineProps({
  title: String,
  titleKey: String,
  badges: { type: Array as PropType<{ title: string, icon: string, color: string }[]>, required: true },
  urls: { type: Array as PropType<{ url: string, external: boolean, icon: string, aria: string }[]>, required: true },
  description: String,
  descriptionKey: String,
  locale: Boolean,
  self: Boolean,
})

const { t } = useI18n()

const localePath = useLocalePath()
</script>

<template>
  <div class="mt-8 flex flex-col items-center justify-center space-y-4 border-b border-gray-300 pb-5 dark:border-gray-700 sm:items-start sm:justify-start">
    <div class="flex flex-col items-center justify-center space-x-3 sm:block">
      <h2 class="inline border-b-2 border-[#4C4F69] text-2xl text-[#4C4F69] dark:border-[#CDD5F4] dark:text-[#CDD5F4]">
        {{ titleKey ? t(titleKey) : title }}
      </h2>
      <Badge v-for="badge in badges" :key="badge.title" :title="badge.title" :icon="badge.icon" :color="badge.color" />
    </div>
    <div class="flex items-center justify-start space-x-4">
      <NuxtLink v-for="url in urls" :key="url.url" :to="locale ? localePath(url.url) : url.url" :external="url.external" :target="self ? '_self' : '_blank'" :aria-label="url.aria" class="text-3xl text-[#4C4F69] hover:text-[#F28AA9] dark:text-[#CDD5F4] dark:hover:text-[#F28AA9]">
        <Icon :name="url.icon" />
      </NuxtLink>
    </div>
    <p class="inline text-xl text-[#4C4F69] dark:text-[#CDD5F4]">
      {{ descriptionKey ? t(descriptionKey) : description }}
    </p>
  </div>
</template>
