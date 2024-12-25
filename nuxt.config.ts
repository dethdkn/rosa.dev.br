export default defineNuxtConfig({
  modules: ['@nuxt/fonts', '@nuxt/image', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxtjs/seo', '@nuxtjs/i18n', '@vueuse/nuxt', '@nuxt/icon'],
  devtools: { enabled: true },
  app: { head: { templateParams: { separator: '•' } } },
  css: ['~/assets/global.css'],
  site: {
    url: 'https://rosa.dev.br/',
    name: 'Gabriel Rosa',
    description: 'Full Stack Developer',
    defaultLocale: 'en',
    twitter: '@DethDKN',
    identity: { type: 'Person' },
  },
  colorMode: { preference: 'dark', fallback: 'dark', classSuffix: '' },
  compatibilityDate: '2024-08-08',
  i18n: {
    baseUrl: 'https://rosa.dev.br/',
    defaultLocale: 'en',
    langDir: 'locales',
    locales: [
      { code: 'en', language: 'en-US', name: 'English (US)', file: 'en-US.json' },
      { code: 'pt', language: 'pt-BR', name: 'Português (BR)', file: 'pt-BR.json' },
    ],
    skipSettingLocaleOnNavigate: true,
  },
  icon: { customCollections: [{ prefix: 'cc', dir: './assets/custom-icons' }] },
  linkChecker: { enabled: false },
})
