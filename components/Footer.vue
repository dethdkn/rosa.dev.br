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
  <footer class="space-y-4 bg-[#EFF1F5] pb-10 pt-20 dark:bg-[#1E1E2E]">
    <div class="grid grid-cols-3 place-items-center gap-4 sm:grid-cols-6 lg:flex lg:items-center lg:justify-center lg:space-x-8">
      <NuxtLink v-for="social in socials" :key="social.url" :to="social.url" target="_blank" :aria-label="social.name" class="transition-all duration-300 hover:drop-shadow-[0_0_5px_#F28AA9]">
        <Icon :name="social.icon" size="3rem" class="text-[#4C4F69] transition-all duration-300 hover:text-[#F28AA9] dark:text-[#CDD5F4] dark:hover:text-[#F28AA9]" />
      </NuxtLink>
    </div>
    <div class="flex flex-col items-center justify-center space-y-2 text-[#4C4F69] dark:text-[#CDD5F4]">
      <p class="flex items-center justify-center">
        <Icon name="iconoir:copyright" :size="18" />&nbsp;
        {{ new Date().getFullYear() }}
        <span class="mx-2">—</span>
        Gabriel 'DethDKN' Rosa
      </p>
      <p>
        Powered by&nbsp;
        <NuxtLink to="https://nuxt.com" external target="_blank" class="text-[#43DD7D] transition-all duration-300 hover:drop-shadow-[0_0_5px_#43DD7D] dark:hover:drop-shadow-[0_0_5px_#43DD7Daa]">
          <Icon name="logos:nuxt-icon" :size="12" />
          <span>&nbsp;Nuxt</span>
        </NuxtLink>
        <span class="mx-2">—</span>
        Hosted on&nbsp;
        <NuxtLink to="https://vercel.com/home" external target="_blank" class="text-[#000000] transition-all duration-300 hover:drop-shadow-[0_0_5px_#000000] dark:text-[#FDFDFD] dark:hover:drop-shadow-[0_0_5px_#FDFDFDaa]">
          <Icon v-if="isDark" name="simple-icons:vercel" :size="12" />
          <Icon v-else name="logos:vercel-icon" :size="12" />
          <span>&nbsp;Vercel</span>
        </NuxtLink>
      </p>
    </div>
  </footer>
</template>
