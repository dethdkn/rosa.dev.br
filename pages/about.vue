<script setup lang='ts'>
const { t } = useI18n()

useHead({ title: t('about.title') })

useSeoMeta({ description: t('about.description') })

defineOgImageComponent('Simple', { title: t('about.title') })

const selected = ref({ img: '', alt: '', hidden: true })

function openPopup(img: { url: string, alt: string }){
  selected.value = { img: img.url, alt: img.alt, hidden: false }
}

function closePopup(e: Event){
  const target = e.target as HTMLImageElement
  if(target && target.id !== 'popup-img') selected.value = { img: '', alt: '', hidden: true }
}

watch(selected, nv => {
  if(import.meta.client){
    if(nv.hidden){
      document.body.style.overflow = 'visible'
      return document.body.style.paddingRight = '0px'
    }
    document.body.style.overflow = 'hidden'
    return document.body.style.paddingRight = '16px'
  }
})
</script>

<template>
  <div class="mx-auto max-w-7xl">
    <div class="space-y-10 px-20 py-5 lg:space-y-20">
      <div class="border-b border-gray-300 pb-10 text-center dark:border-gray-700 sm:text-start">
        <h1 class="inline border-b-2 border-[#F28AA9] text-4xl text-[#4C4F69] dark:text-[#CDD5F4]">
          {{ t('about.title') }}
        </h1>
        <p class="mt-8 block text-center text-xl text-[#4C4F69] dark:text-[#CDD5F4] lg:px-20">
          {{ t('about.learner') }}
        </p>
      </div>
      <div class="border-b border-gray-300 pb-10 text-center dark:border-gray-700 sm:text-start">
        <h2 class="inline border-b-2 border-[#F28AA9] text-4xl text-[#4C4F69] dark:text-[#CDD5F4]">
          {{ t('about.experience') }}
        </h2>
        <div class="mt-8 flex flex-col items-center justify-center md:flex-row md:space-x-20 lg:px-20">
          <ol class="relative border-s border-gray-200 text-gray-500 dark:border-gray-700 dark:text-gray-400">
            <li class="mb-4 ms-6">
              <span class="absolute -start-4 flex size-8 items-center justify-center rounded-full bg-[#F28AA9]">
                <Icon name="iconoir:graduation-cap" size="1.5rem" class="text-[#EFF1F5] dark:text-[#1E1E2E]" />
              </span>
              <h3 class=" mb-2 text-lg font-medium leading-tight">
                {{ t('about.unicarioca') }}
              </h3>
              <p class="m-0 inline whitespace-nowrap rounded border border-[#F28AA9] p-1 text-sm sm:m-1">
                {{ t('about.ongoing') }}
              </p>
              <p class="mt-2">
                {{ t('about.cs') }}
              </p>
            </li>
          </ol>
          <ol class="relative border-s border-gray-200 text-gray-500 dark:border-gray-700 dark:text-gray-400">
            <li class="mb-4 ms-6">
              <span class="absolute -start-4 flex size-8 items-center justify-center rounded-full bg-[#F28AA9]">
                <Icon name="iconoir:code" size="1.5rem" class="text-[#EFF1F5] dark:text-[#1E1E2E]" />
              </span>
              <h3 class=" mb-2 text-lg font-medium leading-tight">
                {{ t('about.cbpf') }}
              </h3>
              <p class="m-0 inline whitespace-nowrap rounded border border-[#F28AA9] p-1 text-sm sm:m-1">
                {{ t('about.twnt') }}
              </p>
              <p class="mt-2">
                {{ t('about.full_stack') }}
              </p>
            </li>
          </ol>
        </div>
      </div>
      <div class="border-b border-gray-300 pb-10 text-center dark:border-gray-700 sm:text-start">
        <h2 class="inline border-b-2 border-[#F28AA9] text-4xl text-[#4C4F69] dark:text-[#CDD5F4]">
          {{ t('about.pictures') }}
        </h2>
        <div class="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <!-- eslint-disable-next-line accessibility/click-events-have-key-events -->
          <div v-for="{url, alt} in imgs" :key="url" class="m-5 cursor-zoom-in" role="button" @click="openPopup({url, alt})">
            <div class="w-64 overflow-hidden rounded-2xl">
              <NuxtImg :src="url" :alt class="w-full object-cover transition-all hover:scale-110" placeholder loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="fixed left-0 top-0 z-[100] size-full bg-gray-950/30 transition-all" :class="{ hidden: selected.hidden }" role="button" @click="closePopup" @keypress.esc="closePopup">
      <Icon v-show="!selected.hidden" name="iconoir:xmark-circle" size="30" class="absolute right-3 top-3 z-[101] cursor-pointer text-[#4C4F69] hover:text-[#F28AA9] dark:text-[#CDD5F4] dark:hover:text-[#F28AA9]" />
      <img id="popup-img" :src="selected.img || '/images/placeholder.png'" :alt="selected.alt" class="absolute left-1/2 top-1/2 w-[95%] -translate-x-1/2 -translate-y-1/2 cursor-cell rounded-2xl border-[3px] border-solid border-[#F28AA9] object-cover md:w-[950px]">
    </div>
  </div>
</template>
