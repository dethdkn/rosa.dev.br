<script setup lang="ts">
const { locale, locales, setLocale, setLocaleCookie, t } = useI18n()
const colorMode = useColorMode()

function setLocaleAndCookie(code: 'en' | 'pt'){
  setLocale(code)
  setLocaleCookie(code)
}

const routes = computed(() => [
  { path: '/', text: t('nav.home') },
  { path: '/about', text: t('nav.about') },
  { path: '/certificates', text: t('nav.certificates') },
  { path: '/projects', text: t('nav.projects') },
  { path: '/blog', text: t('nav.blog') },
])

const languages = computed(() => locales.value.map(l => ({ text: l.name || '', icon: l.flag as string, click: () => setLocaleAndCookie(l.code), active: l.code === locale.value })))

const themes = computed(() => [
  { text: t('nav.system'), icon: 'iconoir:computer', click: () => colorMode.preference = 'system', active: colorMode.preference === 'system' },
  { text: t('nav.light'), icon: 'iconoir:sun-light', click: () => colorMode.preference = 'light', active: colorMode.preference === 'light' },
  { text: t('nav.dark'), icon: 'iconoir:moon-sat', click: () => colorMode.preference = 'dark', active: colorMode.preference === 'dark' },
])

const activeIcon = computed(() => (colorMode.preference === 'system' ? themes.value[0]?.icon : colorMode.preference === 'dark' ? themes.value[2]?.icon : themes.value[1]?.icon) || 'iconoir:computer')

const menuClosed = ref(true)
</script>

<template>
  <nav class="bg-pearl dark:bg-onyx border-b border-gray-200 dark:border-gray-800">
    <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
      <NuxtLink to="/" class="group flex items-center">
        <NuxtImg src="/logo.webp" :alt="t('nav.logo')" class="mr-3 size-8 group-hover:animate-pulse" preload />
        <!-- eslint-disable-next-line vue/no-bare-strings-in-template -->
        <span class="font-delius text-obsidian group-hover:text-candy dark:text-snow dark:group-hover:text-candy self-center text-2xl font-semibold whitespace-nowrap">Gabriel Rosa</span>
      </NuxtLink>
      <div class="flex items-center space-x-4 sm:mt-0 lg:order-2">
        <Dropdown :options="languages" :aria-label="t('nav.language')">
          <Icon name="iconoir:chat-bubble-translate" :size="24" class="text-obsidian hover:text-candy dark:text-snow dark:hover:text-candy" />
        </Dropdown>
        <ClientOnly>
          <Dropdown :options="themes" :icon-size="14" :aria-label="t('nav.theme')">
            <Icon :name="activeIcon" :size="24" class="text-obsidian hover:text-candy dark:text-snow dark:hover:text-candy" />
          </Dropdown>
          <template #fallback>
            <div class="size-6 animate-pulse rounded-full bg-gray-200 dark:bg-gray-700" />
          </template>
        </ClientOnly>
        <button :aria-label="t('nav.menu')" class="flex items-center justify-center lg:hidden" @click="menuClosed = !menuClosed">
          <Icon name="iconoir:menu" :size="24" class="text-obsidian hover:text-candy dark:text-snow dark:hover:text-candy" />
        </button>
      </div>
      <div class="w-full items-center justify-between lg:order-1 lg:flex lg:w-auto" :class="{ hidden: menuClosed }">
        <ul class="bg-pearl dark:bg-onyx mt-4 flex flex-col rounded-lg border border-stone-300 p-4 font-medium lg:mt-0 lg:flex-row lg:space-x-8 lg:border-0 lg:p-0 dark:border-gray-700">
          <li v-for="route in routes" :key="route.path">
            <NuxtLinkLocale :to="route.path" class="text-obsidian dark:text-snow lg:border-candy/0 hover:lg:border-candy/100 lg:hover:text-candy hover:lg:dark:border-candy lg:dark:hover:text-candy block rounded border-transparent py-2 pr-4 pl-3 hover:bg-gray-200 lg:rounded-none lg:border-b-2 lg:p-0 lg:hover:bg-transparent dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent" active-class="!text-white bg-candy hover:!bg-candy lg:bg-transparent hover:lg:!bg-transparent lg:!text-obsidian lg:dark:!text-snow lg:border-obsidian lg:dark:border-obsidian lg:border-opacity-100 lg:hover:!text-candy lg:dark:hover:!text-candy hover:lg:border-candy hover:lg:dark:border-candy" @click="menuClosed = true">
              {{ route.text }}
            </NuxtLinkLocale>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
