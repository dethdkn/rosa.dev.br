<script setup lang='ts'>
defineProps({
  title: { type: String, default: '' },
  badges: { type: Array as PropType<{ title: string, icon: string, color: string }[]>, required: true },
  urls: { type: Array as PropType<{ url: string, external: boolean, icon: string, aria: string }[]>, required: true },
  description: { type: String, default: '' },
})
</script>

<template>
  <div class="mt-8 flex flex-col items-center justify-center space-y-4 border-b border-gray-300 pb-5 dark:border-gray-700 sm:items-start sm:justify-start">
    <div class="flex flex-col items-center justify-center space-x-3 sm:block">
      <NuxtLink v-if="urls?.[0]?.external" :to="urls?.[0]?.url" external target="_blank" :aria-label="urls?.[0]?.aria" class="inline cursor-pointer border-b-2 border-obsidian text-2xl text-obsidian transition-all duration-300 hover:text-candy hover:drop-shadow-candy dark:border-snow dark:text-snow dark:hover:text-candy">
        {{ title }}
      </NuxtLink>
      <NuxtLink v-else :to="urls?.[0]?.url" :aria-label="urls?.[0]?.aria" class="inline cursor-pointer border-b-2 border-obsidian text-2xl text-obsidian transition-all duration-300 hover:text-candy hover:drop-shadow-candy dark:border-snow dark:text-snow dark:hover:text-candy">
        {{ title }}
      </NuxtLink>
      <Badge v-for="badge in badges" :key="badge.title" :title="badge.title" :icon="badge.icon" :color="badge.color" />
    </div>
    <div class="flex items-center justify-start space-x-4">
      <template v-for="url in urls" :key="url.url">
        <NuxtLink v-if="url.external" :to="url.url" external target="_blank" :aria-label="url.aria" class="text-3xl text-obsidian transition-all duration-300 hover:text-candy hover:drop-shadow-candy dark:text-snow dark:hover:text-candy">
          <Icon :name="url.icon" />
        </NuxtLink>
        <NuxtLinkLocale v-else :to="url.url" :aria-label="url.aria" class="text-3xl text-obsidian transition-all duration-300 hover:text-candy hover:drop-shadow-candy dark:text-snow dark:hover:text-candy">
          <Icon :name="url.icon" />
        </NuxtLinkLocale>
      </template>
    </div>
    <p class="inline text-xl text-obsidian dark:text-snow">
      {{ description }}
    </p>
  </div>
</template>
