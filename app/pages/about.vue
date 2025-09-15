<script setup lang='ts'>
const { t } = useI18n()
const colorMode = useColorMode()

useHead({ title: t('about.title') })

useSeoMeta({ description: t('about.description') })

defineOgImageComponent('Simple', { title: t('about.title') })

const isDark = computed(() => colorMode.value === 'dark')
</script>

<template>
  <div class="mx-auto max-w-7xl">
    <div class="space-y-10 px-20 py-5 lg:space-y-20" data-aos="fade-up">
      <div class="border-b border-gray-300 pb-10 text-center sm:text-start dark:border-gray-700">
        <h1 class="border-candy text-obsidian dark:text-snow inline border-b-2 text-4xl">
          {{ t('about.title') }}
        </h1>
        <p class="text-obsidian dark:text-snow mt-8 block text-center text-xl lg:px-20">
          {{ t('about.paragraph1') }}
        </p>
        <p class="text-obsidian dark:text-snow mt-8 block text-center text-xl lg:px-20">
          {{ t('about.paragraph2') }}
        </p>
        <p class="text-obsidian dark:text-snow mt-8 block text-center text-xl lg:px-20">
          {{ t('about.paragraph3') }}
        </p>
      </div>
      <div class="border-b border-gray-300 pb-10 text-center sm:text-start dark:border-gray-700" data-aos="fade-up">
        <h2 class="border-candy text-obsidian dark:text-snow inline border-b-2 text-4xl">
          {{ t('about.experience') }}
        </h2>
        <div class="mt-8 flex items-center justify-center lg:px-20">
          <ol class="relative border-s border-gray-200 text-gray-500 dark:border-gray-700 dark:text-gray-400">
            <li class="ms-6 mb-4">
              <span class="bg-candy absolute -start-4 flex size-8 items-center justify-center rounded-full">
                <ClientOnly>
                  <Icon v-if="isDark" name="cc:cbpf-l" size="1.5rem" class="text-pearl dark:text-onyx" />
                  <Icon v-else name="cc:cbpf-d" size="1.5rem" class="text-pearl dark:text-onyx" />
                  <template #fallback>
                    <Icon name="iconoir:refresh" size="1.5rem" class="text-pearl dark:text-onyx animate-spin" />
                  </template>
                </ClientOnly>
              </span>
              <NuxtLink to="https://cbpf.br" external target="_blank" class="text-obsidian hover:text-candy hover:drop-shadow-candy dark:border-snow dark:text-snow dark:hover:text-candy mb-2 block cursor-pointer text-lg leading-tight font-medium transition-all duration-300">
                {{ t('about.cbpf') }}
              </NuxtLink>
              <p class="border-candy m-0 inline rounded border p-1 text-sm whitespace-nowrap sm:m-1">
                {{ t('about.twnt') }}
              </p>
              <p class="mt-2">
                {{ t('about.engineer_devops') }}
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>
