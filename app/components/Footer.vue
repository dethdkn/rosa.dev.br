<script setup lang="ts">
  const { proxy } = useScriptUmamiAnalytics()

  function clickSocial(name: string): void {
    proxy.track('social', { name })
  }

  const socials = ref([
    {
      url: 'mailto:gabriel@rosa.dev.br',
      icon: 'iconoir:at-sign',
      name: 'Email',
      click: (): void => clickSocial('Email'),
    },
    {
      url: 'https://github.com/dethdkn',
      icon: 'iconoir:github',
      name: 'Github',
      click: (): void => clickSocial('Github'),
    },
    {
      url: 'https://www.linkedin.com/in/gabrielsdrosa',
      icon: 'iconoir:linkedin',
      name: 'Linkedin',
      click: (): void => clickSocial('Linkedin'),
    },
    {
      url: 'https://www.youtube.com/@gabrielsdrosa',
      icon: 'iconoir:youtube',
      name: 'Youtube',
      click: (): void => clickSocial('Youtube'),
    },
    {
      url: 'https://www.behance.net/dethdkn',
      icon: 'iconoir:behance',
      name: 'Behance',
      click: (): void => clickSocial('Behance'),
    },
    {
      url: 'https://www.instagram.com/deth.gsr',
      icon: 'iconoir:instagram',
      name: 'Instagram',
      click: (): void => clickSocial('Instagram'),
    },
  ])
</script>

<template>
  <!-- eslint-disable vue/no-bare-strings-in-template -->
  <footer class="space-y-4 bg-pearl pt-20 pb-10 dark:bg-onyx">
    <div
      class="grid grid-cols-3 place-items-center gap-4 sm:grid-cols-6 lg:flex lg:items-center lg:justify-center lg:space-x-8">
      <NuxtLink
        v-for="social in socials"
        :key="social.url"
        :to="social.url"
        target="_blank"
        :aria-label="social.name"
        @click="social.click"
        class="transition-all duration-300 hover:drop-shadow-candy">
        <Icon
          :name="social.icon"
          size="3rem"
          class="text-obsidian transition-all duration-300 hover:text-candy dark:text-snow dark:hover:text-candy" />
      </NuxtLink>
    </div>
    <div class="flex flex-col items-center justify-center space-y-2 text-obsidian dark:text-snow">
      <p class="flex items-center justify-center">
        <Icon name="iconoir:copyright" :size="18" />&nbsp;
        {{ new Date().getFullYear() }}
        <span class="mx-2">—</span>
        Gabriel 'DethDKN' Rosa
      </p>
      <p class="flex flex-col items-center justify-center md:flex-row">
        <span>
          Powered by&nbsp;
          <NuxtLink
            to="https://nuxt.com"
            external
            target="_blank"
            @click="proxy.track('footer', { name: 'nuxt' })"
            class="text-nuxt transition-all duration-300 hover:drop-shadow-nuxt dark:hover:drop-shadow-nuxtWhite">
            <Icon name="logos:nuxt-icon" :size="12" />
            <span>&nbsp;Nuxt</span>
          </NuxtLink>
        </span>
        <span class="hidden md:mx-2 md:block">—</span>
        <span>
          Hosted on&nbsp;
          <NuxtLink
            to="https://www.cloudflare.com/"
            external
            target="_blank"
            @click="proxy.track('footer', { name: 'cloudflare' })"
            class="text-cloudflare transition-all duration-300 hover:drop-shadow-cloudflare">
            <Icon name="logos:cloudflare-icon" :size="12" />
            <span>&nbsp;Cloudflare</span>
          </NuxtLink>
        </span>
      </p>
    </div>
  </footer>
</template>
