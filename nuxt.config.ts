import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: ['@nuxt/fonts', '@nuxt/image', '@nuxtjs/color-mode', '@nuxtjs/seo', '@nuxtjs/i18n', '@vueuse/nuxt', '@nuxt/icon', 'nuxt-aos', 'reka-ui/nuxt'],
  imports: { imports: [
    { name: 'emojiBlasts', from: 'emoji-blast' },
    { name: 'codeToHtml', from: 'shiki' },
  ] },
  devtools: { enabled: true },
  app: { head: {
    templateParams: { separator: '•' },
    noscript: [{ innerHTML: '<style>.noscript{opacity:100!important;}</style>' }],
  } },
  css: ['~/assets/main.css'],
  site: {
    url: 'https://rosa.dev.br/',
    name: 'Gabriel Rosa',
    description: 'Software Engineer & DevOps',
    defaultLocale: 'en',
    twitter: '@deth_gr',
    identity: { type: 'Person' },
  },
  colorMode: { preference: 'dark', fallback: 'dark', classSuffix: '' },
  runtimeConfig: {
    blobReadWriteToken: '',
    mongodbUri: '',
  },
  compatibilityDate: '2025-07-15',
  nitro: {
    imports: { imports: [{ name: 'head', from: '@vercel/blob' }] },
  },
  vite: { plugins: [tailwindcss()] },
  i18n: {
    baseUrl: 'https://rosa.dev.br/',
    defaultLocale: 'en',
    locales: [
      { code: 'en', language: 'en-US', name: 'English (US)', file: 'en-US.json', flag: 'flag:us-4x3' },
      { code: 'pt', language: 'pt-BR', name: 'Português (BR)', file: 'pt-BR.json', flag: 'flag:br-4x3' },
    ],
    skipSettingLocaleOnNavigate: true,
    experimental: { localeDetector: 'localeDetector.ts' },
  },
  icon: { customCollections: [{ prefix: 'cc', dir: 'app/assets/custom-icons' }] },
  linkChecker: { enabled: false },
})
