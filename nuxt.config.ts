export default defineNuxtConfig({
  modules: ['@nuxt/fonts', '@nuxt/image', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxtjs/seo', '@nuxtjs/i18n', '@vueuse/nuxt', 'nuxt-icon'],
  app: { head: { templateParams: { separator: '•' } } },
  css: ['~/assets/global.css'],
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    classSuffix: '',
  },
  i18n: {
    baseUrl: 'https://rosa.dev.br/',
    defaultLocale: 'en',
    langDir: 'locales',
    locales: [
      { code: 'en', iso: 'en-US', name: 'English (US)', file: 'en.json' },
      { code: 'pt', iso: 'pt-BR', name: 'Português (BR)', file: 'pt.json' },
    ],
  },
  site: {
    url: 'https://rosa.dev.br/',
    name: 'Gabriel Rosa',
    description: 'Full Stack Developer',
    defaultLocale: 'en',
    twitter: '@DethDKN',
    identity: { type: 'Person' },
  },
  linkChecker: { enabled: false },
  devtools: { enabled: true },
})
