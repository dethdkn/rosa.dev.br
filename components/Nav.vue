<script setup lang="ts">
const { locale, setLocale, t } = useI18n()

function changeLanguage() {
  locale.value === 'en' ? setLocale('pt') : setLocale('en')
}

const isDark = computed({
  get() { return useColorMode().value === 'dark' },
  set() { useColorMode().preference = useColorMode().value === 'dark' ? 'light' : 'dark' },
})

const menuClosed = ref(true)
</script>

<template>
  <nav class="border-b border-gray-200 bg-[#EFF1F5] dark:border-gray-800 dark:bg-[#1E1E2E]">
    <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
      <NuxtLink to="/" class="group flex items-center">
        <NuxtImg src="/logo.webp" :alt="t('nav.logo')" class="mr-3 size-8 group-hover:animate-pulse" preload />
        <span class="self-center whitespace-nowrap font-['Delius_Unicase'] text-2xl font-semibold text-[#4C4F69] group-hover:text-[#F28AA9] dark:text-[#CDD5F4] dark:group-hover:text-[#F28AA9]">Gabriel Rosa</span>
      </NuxtLink>
      <div class="flex items-center space-x-4 sm:mt-0 lg:order-2">
        <button :aria-label="t('nav.language')" class="flex justify-center items-center" @click="changeLanguage">
          <Icon name="iconoir:chat-bubble-translate" :size="24" class="text-[#4C4F69] hover:text-[#F28AA9] dark:text-[#CDD5F4] dark:hover:text-[#F28AA9]" />
        </button>
        <ClientOnly>
          <button :aria-label="t('nav.theme')" class="flex justify-center items-center" @click="isDark = !isDark">
            <Icon :name="isDark ? 'iconoir:moon-sat' : 'iconoir:sun-light'" :size="24" class="text-[#4C4F69] hover:text-[#F28AA9] dark:text-[#CDD5F4] dark:hover:text-[#F28AA9]" />
          </button>
          <template #fallback>
            <div class="size-6 animate-pulse rounded-full bg-gray-200 dark:bg-gray-700" />
          </template>
        </ClientOnly>
        <button :aria-label="t('nav.menu')" class="lg:hidden flex justify-center items-center" @click="menuClosed = !menuClosed">
          <Icon name="iconoir:menu" :size="24" class="text-[#4C4F69] hover:text-[#F28AA9] dark:text-[#CDD5F4] dark:hover:text-[#F28AA9]" />
        </button>
      </div>
      <div class="w-full items-center justify-between lg:order-1 lg:flex lg:w-auto" :class="{ hidden: menuClosed }">
        <ul class="mt-4 flex flex-col rounded-lg border border-stone-300 bg-[#EFF1F5] p-4 font-medium dark:border-gray-700 dark:bg-[#1E1E2E] lg:mt-0 lg:flex-row lg:space-x-8 lg:border-0 lg:p-0">
          <li v-for="route in routes" :key="route.path">
            <NuxtLinkLocale :to="route.path" class="block rounded border-transparent py-2 pl-3 pr-4 text-[#4C4F69] hover:bg-gray-200 dark:text-[#CDD5F4] dark:hover:bg-gray-700 dark:hover:text-white lg:rounded-none lg:border-b-2 lg:border-[#F28AA9]/0 lg:p-0 hover:lg:border-[#F28AA9]/100 lg:hover:bg-transparent lg:hover:text-[#F28AA9] hover:lg:dark:border-[#F28AA9] lg:dark:hover:bg-transparent lg:dark:hover:text-[#F28AA9]" active-class="!text-white bg-[#F28AA9] hover:!bg-[#F28AA9] lg:bg-transparent hover:lg:!bg-transparent lg:!text-[#4C4F69] lg:dark:!text-[#CDD5F4] lg:border-[#4C4F69] lg:dark:border-[#4C4F69] lg:border-opacity-100 lg:hover:!text-[#F28AA9] lg:dark:hover:!text-[#F28AA9] hover:lg:border-[#F28AA9] hover:lg:dark:border-[#F28AA9]" @click="menuClosed = true">
              {{ t(route.text) }}
            </NuxtLinkLocale>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
