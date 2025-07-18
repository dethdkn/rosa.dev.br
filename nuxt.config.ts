import process from 'node:process'

export default defineNuxtConfig({
  modules: ['@nuxt/fonts', '@nuxt/image', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxtjs/seo', '@nuxtjs/i18n', '@vueuse/nuxt', '@nuxt/icon', 'nuxt-aos', 'reka-ui/nuxt'],
  imports: { imports: [
    { name: 'emojiBlasts', from: 'emoji-blast' },
    { name: 'codeToHtml', from: 'shiki' },
  ] },
  devtools: { enabled: true },
  app: { head: { templateParams: { separator: '•' } } },
  site: {
    url: 'https://rosa.dev.br/',
    name: 'Gabriel Rosa',
    description: 'Full Stack Developer',
    defaultLocale: 'en',
    twitter: '@DethDKN',
    identity: { type: 'Person' },
  },
  colorMode: { preference: 'dark', fallback: 'dark', classSuffix: '' },
  runtimeConfig: {
    blobToken: process.env.BLOB_READ_WRITE_TOKEN,
  },
  compatibilityDate: '2025-01-14',
  i18n: {
    baseUrl: 'https://rosa.dev.br/',
    defaultLocale: 'en',
    locales: [
      { code: 'en', language: 'en-US', name: 'English (US)', file: 'en-US.json', flag: 'flag:us-4x3' },
      { code: 'pt', language: 'pt-BR', name: 'Português (BR)', file: 'pt-BR.json', flag: 'flag:br-4x3' },
    ],
    skipSettingLocaleOnNavigate: true,
    bundle: { optimizeTranslationDirective: false },
  },
  icon: { customCollections: [{ prefix: 'cc', dir: 'app/assets/custom-icons' }] },
  linkChecker: { enabled: false },
})
