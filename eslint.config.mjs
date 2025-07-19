import dethdkn from '@dethdkn/eslint-config'

export default [
  ...(await dethdkn({ tailwind: true, vue: true, nuxt: true, vueI18n: true })),
  {
    name: 'dethdkn/vue-i18n/overwrite',
    rules: { 'vue-i18n/no-unused-keys': ['error', { extensions: ['.js', '.ts', '.vue'], ignores: ['/_description$/'] }] },
  },
]
