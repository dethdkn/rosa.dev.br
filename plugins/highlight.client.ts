import highlightJS from '@highlightjs/vue-plugin'
import hljs from 'highlight.js/lib/core'
import typescript from 'highlight.js/lib/languages/typescript'
import json from 'highlight.js/lib/languages/json'
import xml from 'highlight.js/lib/languages/xml'
import shell from 'highlight.js/lib/languages/shell'

export default defineNuxtPlugin(({ vueApp }) => {
	hljs.registerLanguage('typescript', typescript)
	hljs.registerLanguage('json', json)
	hljs.registerLanguage('xml', xml)
	hljs.registerLanguage('shell', shell)
	vueApp.use(highlightJS)
})
