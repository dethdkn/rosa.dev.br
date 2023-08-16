import ptBR from '~/locales/pt-BR.json'
import enUS from '~/locales/en-US.json'
const defaultLang = 'en-US'

export default defineI18nConfig(() => ({
	legacy: false,
	warnHtmlMessage: false,
	locale: defaultLang,
	fallbackLocale: defaultLang,
	messages: {
		'pt-BR': ptBR,
		'en-US': enUS
	}
}))
