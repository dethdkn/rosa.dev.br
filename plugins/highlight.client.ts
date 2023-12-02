import highlightJS from '@highlightjs/vue-plugin'
import hljs from 'highlight.js/lib/core'
import typescript from 'highlight.js/lib/languages/typescript'
import json from 'highlight.js/lib/languages/json'
import xml from 'highlight.js/lib/languages/xml'

export default defineNuxtPlugin(({ vueApp }) => {
	hljs.registerLanguage('typescript', typescript)
	hljs.registerLanguage('json', json)
	hljs.registerLanguage('xml', xml)
	vueApp.use(highlightJS)
})
