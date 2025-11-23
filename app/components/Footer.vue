<script setup lang="ts">
const socials = ref([
  { url: 'mailto:gabriel@rosa.dev.br', icon: 'iconoir:at-sign', name: 'Email' },
  { url: 'https://github.com/dethdkn', icon: 'iconoir:github', name: 'Github' },
  { url: 'https://www.linkedin.com/in/gabrielsdrosa', icon: 'iconoir:linkedin', name: 'Linkedin' },
  { url: 'https://www.youtube.com/@gabrielsdrosa', icon: 'iconoir:youtube', name: 'Youtube' },
  { url: 'https://www.behance.net/dethdkn', icon: 'iconoir:behance', name: 'Behance' },
  { url: 'https://www.instagram.com/deth.gsr', icon: 'iconoir:instagram', name: 'Instagram' },
])
</script>

<template>
  <!-- eslint-disable vue/no-bare-strings-in-template -->
  <footer class="bg-pearl dark:bg-onyx space-y-4 pt-20 pb-10">
    <div class="grid grid-cols-3 place-items-center gap-4 sm:grid-cols-6 lg:flex lg:items-center lg:justify-center lg:space-x-8">
      <NuxtLink v-for="social in socials" :key="social.url" :to="social.url" target="_blank" :aria-label="social.name" class="hover:drop-shadow-candy transition-all duration-300">
        <Icon :name="social.icon" size="3rem" class="text-obsidian hover:text-candy dark:text-snow dark:hover:text-candy transition-all duration-300" />
      </NuxtLink>
    </div>
    <div class="text-obsidian dark:text-snow flex flex-col items-center justify-center space-y-2">
      <p class="flex items-center justify-center">
        <Icon name="iconoir:copyright" :size="18" />&nbsp;
        {{ new Date().getFullYear() }}
        <span class="mx-2">—</span>
        Gabriel 'DethDKN' Rosa
      </p>
      <p class="flex flex-col items-center justify-center md:flex-row">
        <span>
          Powered by&nbsp;
          <NuxtLink to="https://nuxt.com" external target="_blank" class="text-nuxt hover:drop-shadow-nuxt dark:hover:drop-shadow-nuxtWhite transition-all duration-300">
            <Icon name="logos:nuxt-icon" :size="12" />
            <span>&nbsp;Nuxt</span>
          </NuxtLink>
        </span>
        <span class="hidden md:mx-2 md:block">—</span>
        <span>
          Hosted on&nbsp;
          <NuxtLink to="https://www.cloudflare.com/" external target="_blank" class="text-cloudflare hover:drop-shadow-cloudflare transition-all duration-300">
            <Icon name="logos:cloudflare-icon" :size="12" />
            <span>&nbsp;Cloudflare</span>
          </NuxtLink>
        </span>
      </p>
    </div>
  </footer>
</template>
