import { createI18n } from 'vue-i18n'
import ptBR from '../locales/pt-BR.json'
import enUS from '../locales/en-US.json'
let selectedLanguage = 'en-US'
if(process.client) selectedLanguage = localStorage.getItem('language') || navigator.language
if(selectedLanguage !== 'pt-BR' && selectedLanguage !== 'en-US') selectedLanguage = 'en-US'
const i18n = createI18n({
legacy: false,
warnHtmlMessage: false,
locale: selectedLanguage,
fallbackLocale: 'en-US',
messages: {
    'pt-BR': ptBR,
    'en-US': enUS
}
})

export default defineNuxtPlugin(({vueApp}) => {
    vueApp.use(i18n)
})