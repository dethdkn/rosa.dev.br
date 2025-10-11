import dethdkn from '@dethdkn/eslint-config'

export default dethdkn({ tailwind: true, vue: true, nuxt: true, vueI18n: true }, { i18nIgnores: ['/_description$/'] })
