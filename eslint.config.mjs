import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default antfu(
  {
    rules: {
      'vue/component-api-style': ['error', ['script-setup']],
      'vue/block-lang': ['error', { script: { lang: 'ts' } }],
      'vue/block-order': ['error', { order: ['script', 'template'] }],
      'vue/no-restricted-block': ['error', 'style'],
      'vue/no-restricted-static-attribute': ['error', { key: 'style' }],
    },
  },
  ...compat.config({
    extends: ['plugin:tailwindcss/recommended'],
  }),
)
