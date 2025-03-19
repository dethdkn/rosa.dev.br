<script setup lang='ts'>
const { t } = useI18n()
const colorMode = useColorMode()

useHead({ title: t('about.title') })

useSeoMeta({ description: t('about.description') })

defineOgImageComponent('Simple', { title: t('about.title') })

const isDark = computed(() => colorMode.value === 'dark')

const imgs = ref([
  { url: '/images/santos_dumont.png', alt: 'Super Computador Santos Dumont' },
  { url: '/images/data_center.png', alt: 'Rio Science Data Center' },
  { url: '/images/cbpf_confraternizacao.png', alt: 'Confraternização do CBPF' },
  { url: '/images/cbpf_cotec.png', alt: 'COTEC - CBPF' },
  { url: '/images/reuniao.png', alt: 'Reunião - CBPF' },
  { url: '/images/almoco_sistemas.png', alt: 'Almoço Equipe de Sistemas' },
])

const dialog = ref(false)
const selected = ref({ url: '', alt: '' })

function openPopup({ url, alt }: { url: string, alt: string }){
  selected.value = { url, alt }
  dialog.value = true
}
</script>

<template>
  <div class="mx-auto max-w-7xl">
    <div class="space-y-10 px-20 py-5 lg:space-y-20" data-aos="fade-up">
      <div class="border-b border-gray-300 pb-10 text-center dark:border-gray-700 sm:text-start">
        <h1 class="inline border-b-2 border-candy text-4xl text-obsidian dark:text-snow">
          {{ t('about.title') }}
        </h1>
        <p class="mt-8 block text-center text-xl text-obsidian dark:text-snow lg:px-20">
          {{ t('about.learner') }}
        </p>
      </div>
      <div class="border-b border-gray-300 pb-10 text-center dark:border-gray-700 sm:text-start" data-aos="fade-up">
        <h2 class="inline border-b-2 border-candy text-4xl text-obsidian dark:text-snow">
          {{ t('about.experience') }}
        </h2>
        <div class="mt-8 flex items-center justify-center lg:px-20">
          <ol class="relative border-s border-gray-200 text-gray-500 dark:border-gray-700 dark:text-gray-400">
            <li class="mb-4 ms-6">
              <span class="absolute -start-4 flex size-8 items-center justify-center rounded-full bg-candy">
                <ClientOnly>
                  <Icon v-if="isDark" name="cc:cbpf-l" size="1.5rem" class="text-pearl dark:text-onyx" />
                  <Icon v-else name="cc:cbpf-d" size="1.5rem" class="text-pearl dark:text-onyx" />
                  <template #fallback>
                    <Icon name="iconoir:refresh" size="1.5rem" class="animate-spin text-pearl dark:text-onyx" />
                  </template>
                </ClientOnly>
              </span>
              <NuxtLink to="https://cbpf.br" external target="_blank" class="mb-2 block cursor-pointer text-lg font-medium leading-tight text-obsidian transition-all duration-300 hover:text-candy hover:drop-shadow-candy dark:border-snow dark:text-snow dark:hover:text-candy">
                {{ t('about.cbpf') }}
              </NuxtLink>
              <p class="m-0 inline whitespace-nowrap rounded border border-candy p-1 text-sm sm:m-1">
                {{ t('about.twnt') }}
              </p>
              <p class="mt-2">
                {{ t('about.full_stack') }}
              </p>
            </li>
          </ol>
        </div>
      </div>
      <div class="border-b border-gray-300 pb-10 text-center dark:border-gray-700 sm:text-start" data-aos="fade-up">
        <h2 class="inline border-b-2 border-candy text-4xl text-obsidian dark:text-snow">
          {{ t('about.pictures') }}
        </h2>
        <div class="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3">
          <!-- eslint-disable-next-line vue-a11y/click-events-have-key-events -->
          <div v-for="{url, alt} in imgs" :key="url" class="m-5 cursor-zoom-in" role="button" @click="openPopup({url, alt})">
            <div class="w-64 overflow-hidden rounded-2xl">
              <NuxtImg :src="url" :alt class="w-full object-cover transition-all duration-300 hover:scale-110" placeholder loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <Dialog v-model="dialog" :title="t('about.pictures')" :description="selected.alt">
      <img :src="selected.url || '/images/placeholder.png'" :alt="selected.alt">
    </Dialog>

    <!--
      <div class="fixed left-0 top-0 z-100 size-full bg-gray-950/30 transition-all" :class="{ hidden: selected.hidden }" role="button" @click="closePopup" @keypress.esc="closePopup">
      <Icon v-show="!selected.hidden" name="iconoir:xmark-circle" size="30" class="absolute right-3 top-3 z-101 cursor-pointer text-obsidian hover:text-candy dark:text-snow dark:hover:text-candy" />
      <img id="popup-img" :src="selected.img || '/images/placeholder.png'" :alt="selected.alt" class="absolute left-1/2 top-1/2 w-19/20 -translate-x-1/2 -translate-y-1/2 cursor-cell rounded-2xl border-3 border-solid border-candy object-cover md:w-950px">
      </div>
    -->
  </div>
</template>
