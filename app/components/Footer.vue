<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

const socials = ref([
  { url: 'mailto:gabriel@rosa.dev.br', icon: 'iconoir:at-sign', name: 'Email' },
  { url: 'https://github.com/dethdkn', icon: 'iconoir:github', name: 'Github' },
  { url: 'https://www.linkedin.com/in/gabrielsdrosa', icon: 'iconoir:linkedin', name: 'Linkedin' },
  { url: 'https://www.youtube.com/@gabrielsdrosa', icon: 'iconoir:youtube', name: 'Youtube' },
  { url: 'https://www.behance.net/dethdkn', icon: 'iconoir:behance', name: 'Behance' },
  { url: 'https://www.instagram.com/gabriel.sdrosa', icon: 'iconoir:instagram', name: 'Instagram' },
])
</script>

<template>
  <!-- eslint-disable vue/no-bare-strings-in-template -->
  <footer class="space-y-4 bg-pearl pb-10 pt-20 dark:bg-onyx">
    <div class="grid grid-cols-3 place-items-center gap-4 sm:grid-cols-6 lg:flex lg:items-center lg:justify-center lg:space-x-8">
      <NuxtLink v-for="social in socials" :key="social.url" :to="social.url" target="_blank" :aria-label="social.name" class="transition-all duration-300 hover:drop-shadow-candy">
        <Icon :name="social.icon" size="3rem" class="text-obsidian transition-all duration-300 hover:text-candy dark:text-snow dark:hover:text-candy" />
      </NuxtLink>
    </div>
    <div class="flex flex-col items-center justify-center space-y-2 text-obsidian dark:text-snow">
      <p class="flex items-center justify-center">
        <Icon name="iconoir:copyright" :size="18" />&nbsp;
        {{ new Date().getFullYear() }}
        <span class="mx-2">—</span>
        Gabriel 'DethDKN' Rosa
      </p>
      <p>
        Powered by&nbsp;
        <NuxtLink to="https://nuxt.com" external target="_blank" class="text-nuxt transition-all duration-300 hover:drop-shadow-nuxt dark:hover:drop-shadow-nuxtWhite">
          <Icon name="logos:nuxt-icon" :size="12" />
          <span>&nbsp;Nuxt</span>
        </NuxtLink>
        <span class="mx-2">—</span>
        Hosted on&nbsp;
        <NuxtLink to="https://vercel.com/home" external target="_blank" class="text-vercel transition-all duration-300 hover:drop-shadow-vercel dark:text-vercelWhite dark:hover:drop-shadow-vercelWhite">
          <Icon v-if="isDark" name="simple-icons:vercel" :size="12" />
          <Icon v-else name="logos:vercel-icon" :size="12" />
          <span>&nbsp;Vercel</span>
        </NuxtLink>
      </p>
    </div>
  </footer>
</template>
