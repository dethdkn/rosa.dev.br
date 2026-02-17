<script setup lang="ts">
  const { t } = useI18n()
  const colorMode = useColorMode()
  const { proxy } = useScriptUmamiAnalytics()

  useHead({ title: t('about.title') })

  useSeoMeta({ description: t('about.description') })

  defineOgImageComponent('Simple', { title: t('about.title') })

  const isDark = computed(() => colorMode.value === 'dark')
</script>

<template>
  <div class="mx-auto max-w-7xl">
    <div class="space-y-10 px-20 py-5 lg:space-y-20" data-aos="fade-up">
      <div class="border-b border-gray-300 pb-10 text-center sm:text-start dark:border-gray-700">
        <h1 class="inline border-b-2 border-candy text-4xl text-obsidian dark:text-snow">
          {{ t('about.title') }}
        </h1>
        <p class="mt-8 block text-center text-xl text-obsidian lg:px-20 dark:text-snow">
          {{ t('about.paragraph1') }}
        </p>
        <p class="mt-8 block text-center text-xl text-obsidian lg:px-20 dark:text-snow">
          {{ t('about.paragraph2') }}
        </p>
        <p class="mt-8 block text-center text-xl text-obsidian lg:px-20 dark:text-snow">
          {{ t('about.paragraph3') }}
        </p>
      </div>
      <div
        class="border-b border-gray-300 pb-10 text-center sm:text-start dark:border-gray-700"
        data-aos="fade-up">
        <h2 class="inline border-b-2 border-candy text-4xl text-obsidian dark:text-snow">
          {{ t('about.experience') }}
        </h2>
        <div class="mt-8 flex items-center justify-center lg:px-20">
          <ol
            class="relative border-s border-gray-200 text-gray-500 dark:border-gray-700 dark:text-gray-400">
            <li class="ms-6 mb-4">
              <span
                class="absolute -start-4 flex size-8 items-center justify-center rounded-full bg-candy">
                <ClientOnly>
                  <Icon
                    v-if="isDark"
                    name="cc:cbpf-l"
                    size="1.5rem"
                    class="text-pearl dark:text-onyx" />
                  <Icon v-else name="cc:cbpf-d" size="1.5rem" class="text-pearl dark:text-onyx" />
                  <template #fallback>
                    <Icon
                      name="iconoir:refresh"
                      size="1.5rem"
                      class="animate-spin text-pearl dark:text-onyx" />
                  </template>
                </ClientOnly>
              </span>
              <NuxtLink
                to="https://cbpf.br"
                external
                target="_blank"
                @click="proxy.track('experience', { name: 'CBPF' })"
                class="mb-2 block cursor-pointer text-lg leading-tight font-medium text-obsidian transition-all duration-300 hover:text-candy hover:drop-shadow-candy dark:border-snow dark:text-snow dark:hover:text-candy">
                {{ t('about.cbpf') }}
              </NuxtLink>
              <p class="mb-2">
                {{ t('about.engineer_devops') }}
              </p>
              <p
                class="m-0 inline rounded border border-candy p-1 text-sm whitespace-nowrap sm:m-1">
                {{ t('about.twnt') }}
              </p>
              <p class="mt-2">
                {{ t('about.cbpf_description1') }}
              </p>
              <p>
                {{ t('about.cbpf_description2') }}
              </p>
              <p>
                {{ t('about.cbpf_description3') }}
              </p>
              <p>
                {{ t('about.cbpf_description4') }}
              </p>
              <p>
                {{ t('about.cbpf_description5') }}
              </p>
              <p>
                {{ t('about.cbpf_description6') }}
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>
