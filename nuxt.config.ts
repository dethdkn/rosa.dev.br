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
    twitter: '@deth_gr',
    identity: { type: 'Person' },
  },
  colorMode: { preference: 'dark', fallback: 'dark', classSuffix: '' },
  compatibilityDate: '2025-10-10',
  nitro: {
    preset: 'cloudflare_module',
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
      wrangler: {
        r2_buckets: [{ binding: 'R2', bucket_name: 'rosa-dev-br' }],
        kv_namespaces: [{ binding: 'KV', id: '39c4dd68c5dc4ca5b5ad77db972e07a3' }],
        observability: { logs: { enabled: true, head_sampling_rate: 1, invocation_logs: true } },
        workers_dev: false,
        route: 'rosa.dev.br/*',
      },
    },
    imports: { imports: [
      { name: 'destr', from: 'destr' },
      { name: 'default', as: 'mime', from: 'mime' },
    ] },
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
  },
  icon: { customCollections: [{ prefix: 'cc', dir: 'app/assets/custom-icons' }] },
  linkChecker: { enabled: false },
})
