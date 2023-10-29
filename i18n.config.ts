import ptBR from '~/locales/pt-BR.json'
import en from '~/locales/en.json'

export default defineI18nConfig(() => ({
	legacy: false,
	warnHtmlMessage: false,
	locale: 'en',
	fallbackLocale: 'en',
	messages: {
		'pt-BR': ptBR,
		en: en
	}
}))
