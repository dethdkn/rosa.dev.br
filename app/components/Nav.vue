<script setup lang="ts">
const { locale, setLocale, t } = useI18n()
const colorMode = useColorMode()

const routes = computed(() => [
  { path: '/', text: t('nav.home') },
  { path: '/about', text: t('nav.about') },
  { path: '/certificates', text: t('nav.certificates') },
  { path: '/projects', text: t('nav.projects') },
  { path: '/blog', text: t('nav.blog') },
])

function changeLanguage(){
  locale.value === 'en' ? setLocale('pt') : setLocale('en')
}

const isDark = computed({
  get(){ return colorMode.value === 'dark' },
  set(){ colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark' },
})

const menuClosed = ref(true)
</script>

<template>
  <nav class="border-b border-gray-200 bg-pearl dark:border-gray-800 dark:bg-onyx">
    <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
      <NuxtLink to="/" class="group flex items-center">
        <NuxtImg src="/logo.webp" :alt="t('nav.logo')" class="mr-3 size-8 group-hover:animate-pulse" preload />
        <!-- eslint-disable-next-line vue/no-bare-strings-in-template -->
        <span class="self-center whitespace-nowrap font-delius text-2xl font-semibold text-obsidian group-hover:text-candy dark:text-snow dark:group-hover:text-candy">Gabriel Rosa</span>
      </NuxtLink>
      <div class="flex items-center space-x-4 sm:mt-0 lg:order-2">
        <button :aria-label="t('nav.language')" class="flex items-center justify-center" @click="changeLanguage">
          <Icon name="iconoir:chat-bubble-translate" :size="24" class="text-obsidian hover:text-candy dark:text-snow dark:hover:text-candy" />
        </button>
        <ClientOnly>
          <button :aria-label="t('nav.theme')" class="flex items-center justify-center" @click="isDark = !isDark">
            <Icon :name="isDark ? 'iconoir:moon-sat' : 'iconoir:sun-light'" :size="24" class="text-obsidian hover:text-candy dark:text-snow dark:hover:text-candy" />
          </button>
          <template #fallback>
            <div class="size-6 animate-pulse rounded-full bg-gray-200 dark:bg-gray-700" />
          </template>
        </ClientOnly>
        <button :aria-label="t('nav.menu')" class="flex items-center justify-center lg:hidden" @click="menuClosed = !menuClosed">
          <Icon name="iconoir:menu" :size="24" class="text-obsidian hover:text-candy dark:text-snow dark:hover:text-candy" />
        </button>
      </div>
      <div class="w-full items-center justify-between lg:order-1 lg:flex lg:w-auto" :class="{ hidden: menuClosed }">
        <ul class="mt-4 flex flex-col rounded-lg border border-stone-300 bg-pearl p-4 font-medium dark:border-gray-700 dark:bg-onyx lg:mt-0 lg:flex-row lg:space-x-8 lg:border-0 lg:p-0">
          <li v-for="route in routes" :key="route.path">
            <NuxtLinkLocale :to="route.path" class="block rounded border-transparent py-2 pl-3 pr-4 text-obsidian hover:bg-gray-200 dark:text-snow dark:hover:bg-gray-700 dark:hover:text-white lg:rounded-none lg:border-b-2 lg:border-candy/0 lg:p-0 hover:lg:border-candy/100 lg:hover:bg-transparent lg:hover:text-candy hover:lg:dark:border-candy lg:dark:hover:bg-transparent lg:dark:hover:text-candy" active-class="!text-white bg-candy hover:!bg-candy lg:bg-transparent hover:lg:!bg-transparent lg:!text-obsidian lg:dark:!text-snow lg:border-obsidian lg:dark:border-obsidian lg:border-opacity-100 lg:hover:!text-candy lg:dark:hover:!text-candy hover:lg:border-candy hover:lg:dark:border-candy" @click="menuClosed = true">
              {{ route.text }}
            </NuxtLinkLocale>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
